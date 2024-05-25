export const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace spaces and special characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
};
