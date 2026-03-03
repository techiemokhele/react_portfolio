/**
 * Checks if the given text is in English language.
 * It does this by comparing the top 50 words in the text
 * with a list of common English words. If more than 50% of
 * the words match, it's considered English.
 * @param {string} text - The text to check.
 * @returns {boolean} True if the text is in English, false otherwise.
 */
export const isEnglish = (text) => {
  if (!text) return true;

  const englishWords = [
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

  const words = text.toLowerCase().split(/\s+/).slice(0, 50);
  const englishWordCount = words.filter((word) =>
    englishWords.includes(word.replace(/[.,!?;:()]/g, ""))
  ).length;

  return englishWordCount / words.length > 0.1;
};

/**
 * Detects the language of a given text.
 * It does this by looking for common words in different languages.
 * If the text is too short or does not contain enough common words, null is returned.
 * @param {string} text - The text to detect the language of.
 * @returns {string|null} The detected language, or null if it could not be detected.
 */
const detectLanguage = (text) => {
  if (!text) return null;

  const sample = text.toLowerCase().substring(0, 200);

  const languagePatterns = {
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

  let maxScore = 0;
  let detectedLang = null;

  for (const [lang, words] of Object.entries(languagePatterns)) {
    const score = words.filter((word) => sample.includes(word)).length;
    if (score > maxScore) {
      maxScore = score;
      detectedLang = lang;
    }
  }

  return maxScore >= 2 ? detectedLang : null;
};

/**
 * Translates text from a given source language to English.
 * If the source language is not provided, it will be automatically detected.
 * If the translation fails, the original text will be returned.
 * If the text is already in English, it will not be translated.
 * @param {string} text - The text to be translated.
 * @param {string} [sourceLang=""] - The source language of the text.
 * @returns {Promise<string>} A promise resolving to the translated text, or the original text if translation fails.
 */
export const translateToEnglish = async (text, sourceLang = "") => {
  if (!text || isEnglish(text)) return text;

  const maxLength = 500;
  const textToTranslate =
    text.length > maxLength ? text.substring(0, maxLength) : text;

  try {
    if (!sourceLang) {
      sourceLang = detectLanguage(textToTranslate);
    }

    if (!sourceLang) {
      sourceLang = "es";
    }

    const langPair = `${sourceLang}|en`;
    const encodedText = encodeURIComponent(textToTranslate);

    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${langPair}`
    );

    if (!response.ok) {
      console.warn("Translation failed, using original text");
      return text;
    }

    const data = await response.json();

    if (data.responseStatus === 200 && data.responseData?.translatedText) {
      let translatedText = data.responseData.translatedText;

      if (text.length > maxLength) {
        translatedText = translatedText + " " + text.substring(maxLength);
      }

      return translatedText;
    }

    if (data.responseStatus === 403 && sourceLang !== "es") {
      const fallbackLangs = ["es", "fr", "de", "pt"];
      for (const lang of fallbackLangs) {
        try {
          const fallbackResponse = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${lang}|en`
          );
          const fallbackData = await fallbackResponse.json();
          if (
            fallbackData.responseStatus === 200 &&
            fallbackData.responseData?.translatedText
          ) {
            return fallbackData.responseData.translatedText;
          }
        } catch (e) {
          continue;
        }
      }
    }

    console.warn("Translation returned no results, using original text");
    return text;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
};

/**
 * Translates an article object into its English equivalent.
 * The function will translate the title, excerpt, and full description
 * of the article if they are not already in English.
 * If any of the translations fail, the original text will be returned.
 * The function will also return the original text if it does not need translation.
 * @param {Object} article - The article object to be translated.
 * @returns {Promise<Object>} A promise resolving to the translated article object.
 */
export const translateArticle = async (article) => {
  if (!article) return article;

  const titleNeedsTranslation = article.title && !isEnglish(article.title);
  const excerptNeedsTranslation =
    article.excerpt && !isEnglish(article.excerpt);
  const descriptionNeedsTranslation =
    article.fullDescription && !isEnglish(article.fullDescription);

  const needsTranslation =
    titleNeedsTranslation ||
    excerptNeedsTranslation ||
    descriptionNeedsTranslation;

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
    const sampleText = article.title || article.excerpt || "";
    const detectedLang = detectLanguage(sampleText);

    const translations = await Promise.all([
      titleNeedsTranslation
        ? translateToEnglish(article.title, detectedLang)
        : Promise.resolve(article.title),
      excerptNeedsTranslation
        ? translateToEnglish(article.excerpt, detectedLang)
        : Promise.resolve(article.excerpt),
      descriptionNeedsTranslation
        ? translateFullDescription(article.fullDescription, detectedLang)
        : Promise.resolve(article.fullDescription),
    ]);

    const [translatedTitle, translatedExcerpt, translatedDescription] =
      translations;

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
  } catch (error) {
    console.error("Error translating article:", error);
    return {
      ...article,
      originalTitle: article.title,
      originalExcerpt: article.excerpt,
      originalDescription: article.fullDescription,
      isTranslated: false,
    };
  }
};

/**
 * Translates full HTML content of an article from a source language to English.
 * @param {string} htmlContent - The HTML content of the article to translate.
 * @param {string} [sourceLang=""] - The source language of the article.
 * @returns {Promise<string>} A promise resolving to the translated HTML content of the article.
 */
const translateFullDescription = async (htmlContent, sourceLang = "") => {
  if (!htmlContent) return htmlContent;

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlContent;
  const textContent = tempDiv.textContent || tempDiv.innerText || "";

  if (isEnglish(textContent)) {
    return htmlContent;
  }

  const paragraphs = htmlContent.split(/(<[^>]+>)/g);
  const translatedParagraphs = [];

  for (let i = 0; i < paragraphs.length; i++) {
    const segment = paragraphs[i];

    if (segment.startsWith("<")) {
      translatedParagraphs.push(segment);
    } else if (segment.trim().length > 0) {
      const trimmed = segment.trim();
      if (!isEnglish(trimmed) && trimmed.length > 3) {
        try {
          const translated = await translateToEnglish(trimmed, sourceLang);
          const leadingSpace = segment.match(/^\s*/)[0];
          const trailingSpace = segment.match(/\s*$/)[0];
          translatedParagraphs.push(leadingSpace + translated + trailingSpace);

          if (trimmed.length > 20) {
            await new Promise((resolve) => setTimeout(resolve, 400));
          }
        } catch (error) {
          console.error("Error translating segment:", error);
          translatedParagraphs.push(segment);
        }
      } else {
        translatedParagraphs.push(segment);
      }
    } else {
      translatedParagraphs.push(segment);
    }
  }

  return translatedParagraphs.join("");
};

/**
 * Translates an array of article objects into their English equivalents.
 * Each article will have its title, excerpt, and full description translated.
 * The function will pause for 500 milliseconds after each translation to avoid
 * hitting the translation API rate limit.
 *
 * @param {Array<Object>} articles - The articles to be translated.
 * @returns {Promise<Array<Object>>} A promise resolving to an array of translated articles.
 */
export const translateArticles = async (articles) => {
  if (!articles || articles.length === 0) return articles;

  const translatedArticles = [];

  for (const article of articles) {
    const translated = await translateArticle(article);
    translatedArticles.push(translated);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  return translatedArticles;
};

/**
 * Translates text using LibreTranslate API.
 *
 * @param {string} text - Text to translate.
 * @param {string} apiKey - LibreTranslate API key.
 * @returns {Promise<string>} - Translated text, or original text if translation fails.
 *
 * @throws If the translation request fails or the response is not OK.
 */
export const translateWithLibreTranslate = async (text, apiKey) => {
  if (!text || isEnglish(text)) return text;

  try {
    const response = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: text,
        source: "auto",
        target: "en",
        format: "text",
        api_key: apiKey,
      }),
    });

    if (!response.ok) {
      console.warn("Translation failed, using original text");
      return text;
    }

    const data = await response.json();
    return data.translatedText || text;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
};
