import type { BlogPost } from "@/types";

const DEV_TO_API_BASE = "https://dev.to/api/articles";

interface FetchOptions {
  page?: number;
  per_page?: number;
  tag?: string;
  tags?: string;
  username?: string;
  state?: string;
  top?: boolean | number;
}

interface DevToArticle {
  id: number;
  title: string;
  slug: string;
  description?: string;
  body_html?: string;
  body_markdown?: string;
  cover_image?: string;
  social_image?: string;
  tag_list?: string[];
  tags?: string;
  reading_time_minutes?: number;
  published_at?: string;
  created_at?: string;
  comments_count?: number;
  public_reactions_count?: number;
  languages?: string[];
  user?: {
    name?: string;
    username?: string;
    profile_image_90?: string;
    profile_image?: string;
  };
}

const formatDate = (dateString?: string): string => {
  if (!dateString) return new Date().toISOString().split("T")[0];
  return new Date(dateString).toISOString().split("T")[0];
};

const transformArticle = (article: DevToArticle): BlogPost => ({
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
  comments: article.comments_count || 0,
  reactions: article.public_reactions_count || 0,
});

export const fetchArticles = async (options: FetchOptions = {}): Promise<BlogPost[]> => {
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

  const response = await fetch(`${DEV_TO_API_BASE}?${params.toString()}`);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const articles: DevToArticle[] = await response.json();
  return articles.map(transformArticle);
};

export const fetchArticleById = async (id: string | number): Promise<BlogPost> => {
  const response = await fetch(`${DEV_TO_API_BASE}/${id}`);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const article: DevToArticle = await response.json();
  return transformArticle(article);
};

export const fetchRelatedArticles = async (
  article: BlogPost,
  limit = 6
): Promise<BlogPost[]> => {
  try {
    const related = await fetchArticles({
      tag: article.category?.toLowerCase(),
      per_page: limit + 1,
    });
    return related.filter((a) => a.id !== article.id).slice(0, limit);
  } catch {
    return [];
  }
};
