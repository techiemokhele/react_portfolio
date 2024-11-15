export const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export function getFirstWord(text) {
  if (!text) return "";
  return text.split(" ")[0];
}

export const truncateText = (text, lines = 2) => {
  if (!text) return "";
  const textLines = text.split("\n");
  const truncatedText = textLines.slice(0, lines).join("\n");
  return textLines.length > lines ? truncatedText + "..." : truncatedText;
};

export const truncateTitle = (title) => {
  if (!title) return "";
  return title.split("\n")[0];
};

export const triggerResumeDownload = () => {
  const link = document.createElement("a");
  link.href = "/resume/NeoMokhele_Resume_Latest.pdf";
  link.download = "NeoMokhele_Resume_Latest.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
