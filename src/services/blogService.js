const DEV_TO_API_BASE = "https://dev.to/api/articles";

/**
 * Transforms an article object into a standardized format
 * suitable for use in the blog application.
 *
 * @param {object} article - Article object to be transformed.
 * @returns {object} - Transformed article object.
 */
const transformArticle = (article) => {
  return {
    id: article.id,
    image:
      article.cover_image ||
      article.social_image ||
      "https://via.placeholder.com/800x400?text=No+Image",
    title: article.title,
    slug: article.slug,
    excerpt: article.description || article.title,
    fullDescription:
      article.body_html || article.body_markdown || article.description,
    category:
      article.tag_list?.[0] ||
      article.tags?.split(",")[0]?.trim() ||
      "Technology",
    author: article.user?.name || article.user?.username || "Dev Community",
    authorPicture:
      article.user?.profile_image_90 ||
      article.user?.profile_image ||
      "https://via.placeholder.com/90",
    readTime: `${article.reading_time_minutes || 5} min`,
    createdAt: formatDate(article.published_at || article.created_at),
    username: article.user?.username || "dev",
    tags: article.tag_list || [],
    comments: article.comments_count || 0,
    reactions: article.public_reactions_count || 0,
    languages: article.languages || [],
  };
};

/**
 * Format a date string into a standardized format of "YYYY-MM-DD".
 * If no date string is provided, returns the current date in the same format.
 * @returns {string} - Formatted date string.
 */
const formatDate = (dateString) => {
  if (!dateString) return new Date().toISOString().split("T")[0];
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

/**
 * Fetch articles from the DEV API.
 *
 * @param {Object} [options] - Options to filter articles.
 * @param {number} [options.page=1] - Page number to fetch.
 * @param {number} [options.per_page=30] - Number of articles per page.
 * @param {string} [options.tag] - Tag to filter articles by.
 * @param {string} [options.tags] - Tags to filter articles by (comma-separated).
 * @param {string} [options.username] - Username to filter articles by.
 * @param {string} [options.state] - State to filter articles by.
 * @param {boolean} [options.top] - Whether to fetch top articles.
 *
 * @returns {Promise<Array<Object>>} - Promise resolving to an array of article objects.
 */
export const fetchArticles = async (options = {}) => {
  const { page = 1, per_page = 30, tag, tags, username, state, top } = options;
  const params = new URLSearchParams({
    page: page.toString(),
    per_page: per_page.toString(),
  });

  if (tag) params.append("tag", tag);
  if (tags) params.append("tags", tags);
  if (username) params.append("username", username);
  if (state) params.append("state", state);
  if (top) params.append("top", top.toString());

  try {
    const response = await fetch(`${DEV_TO_API_BASE}?${params.toString()}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const articles = await response.json();
    return articles.map(transformArticle);
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

/**
 * Fetches an article by its ID.
 * @param {string} id - The ID of the article to fetch.
 * @returns {Promise<Object>} A promise resolving to the fetched article.
 * @throws {Error} If the HTTP request fails or the response is not OK.
 */
export const fetchArticleById = async (id) => {
  try {
    const response = await fetch(`${DEV_TO_API_BASE}/${id}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const article = await response.json();
    return transformArticle(article);
  } catch (error) {
    console.error("Error fetching article by ID:", error);
    throw error;
  }
};

/**
 * Fetches a list of related articles for a given article.
 * The articles are considered related if they have the same category.
 * @param {Object} article - The article to fetch related articles for.
 * @param {Number} [limit=6] - The maximum number of related articles to fetch.
 * @returns {Promise<Array<Object>>} A promise resolving to an array of related articles.
 */
export const fetchRelatedArticles = async (article, limit = 6) => {
  try {
    const relatedArticles = await fetchArticles({
      tag: article.category.toLowerCase(),
      per_page: limit + 1,
    });
    return relatedArticles
      .filter((relatedArticle) => relatedArticle.id !== article.id)
      .slice(0, limit);
  } catch (error) {
    console.error("Error fetching related articles:", error);
    return [];
  }
};
