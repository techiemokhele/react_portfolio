import type { BlogPost } from "@/types";

const COMMON_ENGLISH = [
  "the",
  "is",
  "at",
  "which",
  "on",
  "a",
  "an",
  "as",
  "are",
  "was",
  "were",
  "been",
  "be",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "will",
  "would",
  "should",
  "could",
  "may",
  "might",
  "must",
  "can",
  "shall",
];

export const isEnglish = (text: string): boolean => {
  if (!text) return true;
  const words = text.toLowerCase().split(/\s+/).slice(0, 50);
  const matches = words.filter((w) =>
    COMMON_ENGLISH.includes(w.replace(/[.,!?;:()]/g, "")),
  ).length;
  return matches / words.length > 0.1;
};

const LANGUAGE_PATTERNS: Record<string, string[]> = {
  es: [
    "el",
    "la",
    "los",
    "las",
    "de",
    "que",
    "es",
    "en",
    "un",
    "una",
    "por",
    "para",
    "con",
    "del",
  ],
  fr: [
    "le",
    "la",
    "les",
    "de",
    "un",
    "une",
    "et",
    "est",
    "dans",
    "pour",
    "qui",
    "sur",
    "avec",
    "pas",
  ],
  de: [
    "der",
    "die",
    "das",
    "und",
    "ist",
    "in",
    "den",
    "von",
    "zu",
    "mit",
    "ein",
    "eine",
    "nicht",
  ],
  pt: [
    "de",
    "que",
    "o",
    "a",
    "os",
    "as",
    "um",
    "uma",
    "para",
    "com",
    "não",
    "em",
    "por",
    "do",
    "da",
  ],
  it: [
    "il",
    "la",
    "di",
    "che",
    "è",
    "un",
    "una",
    "per",
    "con",
    "non",
    "in",
    "da",
    "del",
    "della",
  ],
  ru: ["и", "в", "не", "на", "что", "с", "как", "это", "для", "по"],
  ja: ["の", "に", "は", "を", "た", "が", "で", "て", "と", "し"],
  zh: ["的", "是", "在", "了", "和", "有", "我", "你", "他", "这"],
  ar: ["في", "من", "على", "إلى", "أن", "هذا", "ما", "كان", "لا"],
  hi: ["के", "का", "की", "में", "है", "को", "से", "और", "एक", "पर"],
};

const detectLanguage = (text: string): string | null => {
  if (!text) return null;
  const sample = text.toLowerCase().substring(0, 200);
  let maxScore = 0;
  let detectedLang: string | null = null;
  for (const [lang, words] of Object.entries(LANGUAGE_PATTERNS)) {
    const score = words.filter((w) => sample.includes(w)).length;
    if (score > maxScore) {
      maxScore = score;
      detectedLang = lang;
    }
  }
  return maxScore >= 2 ? detectedLang : null;
};

export const translateToEnglish = async (
  text: string,
  sourceLang = "",
): Promise<string> => {
  if (!text || isEnglish(text)) return text;
  const chunk = text.length > 500 ? text.substring(0, 500) : text;
  const lang = sourceLang || detectLanguage(chunk) || "es";
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(chunk)}&langpair=${lang}|en`,
    );
    if (!res.ok) return text;
    const data = await res.json();
    if (data.responseStatus === 200 && data.responseData?.translatedText) {
      const translated: string = data.responseData.translatedText;
      return text.length > 500
        ? translated + " " + text.substring(500)
        : translated;
    }
    return text;
  } catch {
    return text;
  }
};

const translateFullDescription = async (
  html: string,
  sourceLang = "",
): Promise<string> => {
  if (!html) return html;
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  if (isEnglish(tmp.textContent || "")) return html;

  const segments = html.split(/(<[^>]+>)/g);
  const out: string[] = [];
  for (const seg of segments) {
    if (
      seg.startsWith("<") ||
      !seg.trim() ||
      seg.trim().length <= 3 ||
      isEnglish(seg.trim())
    ) {
      out.push(seg);
    } else {
      try {
        const translated = await translateToEnglish(seg.trim(), sourceLang);
        out.push(seg.replace(seg.trim(), translated));
        if (seg.trim().length > 20)
          await new Promise((r) => setTimeout(r, 400));
      } catch {
        out.push(seg);
      }
    }
  }
  return out.join("");
};

export const translateArticle = async (
  article: BlogPost,
): Promise<BlogPost> => {
  if (!article) return article;
  const needsTranslation =
    (article.title && !isEnglish(article.title)) ||
    (article.excerpt && !isEnglish(article.excerpt)) ||
    (article.fullDescription && !isEnglish(article.fullDescription));

  if (!needsTranslation) {
    return {
      ...article,
      originalTitle: article.title,
      originalExcerpt: article.excerpt,
      originalDescription: article.fullDescription,
      isTranslated: false,
    };
  }

  try {
    const detectedLang =
      detectLanguage(article.title || article.excerpt || "") || undefined;
    const [translatedTitle, translatedExcerpt, translatedDescription] =
      await Promise.all([
        article.title && !isEnglish(article.title)
          ? translateToEnglish(article.title, detectedLang)
          : Promise.resolve(article.title || ""),
        article.excerpt && !isEnglish(article.excerpt)
          ? translateToEnglish(article.excerpt, detectedLang)
          : Promise.resolve(article.excerpt || ""),
        article.fullDescription && !isEnglish(article.fullDescription)
          ? translateFullDescription(
              article.fullDescription,
              detectedLang || "",
            )
          : Promise.resolve(article.fullDescription || ""),
      ]);
    return {
      ...article,
      title: translatedTitle,
      excerpt: translatedExcerpt,
      fullDescription: translatedDescription,
      originalTitle: article.title,
      originalExcerpt: article.excerpt,
      originalDescription: article.fullDescription,
      isTranslated: true,
    };
  } catch {
    return {
      ...article,
      originalTitle: article.title,
      originalExcerpt: article.excerpt,
      originalDescription: article.fullDescription,
      isTranslated: false,
    };
  }
};
