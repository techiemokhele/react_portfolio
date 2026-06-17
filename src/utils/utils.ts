export const createSlug = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getFirstWord = (text?: string): string => {
  if (!text) return "";
  return text.split(" ")[0];
};

export const truncateText = (text?: string, lines = 2): string => {
  if (!text) return "";
  const textLines = text.split("\n");
  const truncated = textLines.slice(0, lines).join("\n");
  return textLines.length > lines ? truncated + "..." : truncated;
};

export const truncateTitle = (title?: string): string => {
  if (!title) return "";
  return title.split("\n")[0];
};

export const triggerResumeDownload = (): void => {
  const link = document.createElement("a");
  link.href = "/resume/Neo_Tsietsi_Mokhele-Resume.pdf";
  link.download = "Neo_Tsietsi_Mokhele-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
