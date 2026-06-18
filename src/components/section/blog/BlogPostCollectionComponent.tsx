import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { BlogPost } from "@/types";
import { fetchArticles } from "@/services/blogService";
import BlogCardComponent from "./BlogCardComponent";
import TitleComponent from "@/components/common/TitleComponent";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getFirstWord } from "@/utils/utils";

const CardSkeleton = () => (
  <div className="flex flex-col rounded-xl overflow-hidden border border-white/10 bg-card animate-pulse">
    <Skeleton className="h-48 w-full rounded-none" />
    <div className="p-5 space-y-3">
      <Skeleton className="h-3 w-1/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-3/4" />
      <div className="flex items-center gap-2 pt-3 border-t border-white/10">
        <Skeleton className="w-6 h-6 rounded-full" />
        <Skeleton className="h-3 w-24" />
        <Skeleton className="ml-auto h-3 w-12" />
      </div>
      <Skeleton className="h-8 w-full rounded-full mt-2" />
    </div>
  </div>
);

const FeaturedSkeleton = () => (
  <div className="rounded-2xl overflow-hidden border border-white/10 animate-pulse mb-16">
    <Skeleton className="h-[45vh] md:h-[55vh] w-full rounded-none" />
  </div>
);

const getPaginationRange = (
  current: number,
  total: number,
): (number | "...")[] => {
  const delta = 2;
  const range: (number | "...")[] = [];
  for (
    let i = Math.max(2, current - delta);
    i <= Math.min(total - 1, current + delta);
    i++
  ) {
    range.push(i);
  }
  if (current - delta > 2) range.unshift("...");
  if (current + delta < total - 1) range.push("...");
  if (total > 1) {
    range.unshift(1);
    range.push(total);
  } else range.unshift(1);
  return [...new Set(range)];
};

const BlogPostCollectionComponent: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [blogData, setBlogData] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    fetchArticles({
      per_page: 30,
      tags: "javascript,react,webdev,programming,tutorial,nodejs,frontend,backend,seo",
    })
      .then(setBlogData)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const latestBlogPost = blogData[0];
  const otherBlogPosts = blogData.slice(1);

  const filteredPosts =
    selectedCategory === "all"
      ? otherBlogPosts
      : otherBlogPosts.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );
  const categories = Array.from(new Set(otherBlogPosts.map((p) => p.category)));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleReadMore = (article: BlogPost) => {
    navigate(`/blog/${article.id}/${article.slug}`);
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        role="status"
        aria-busy="true"
        aria-label="Loading blog posts"
      >
        <FeaturedSkeleton />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center items-center min-h-[400px] gap-4">
        <p className="text-red-400">Failed to load articles.</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );
  }

  if (!blogData.length) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center items-center min-h-[400px]">
        <p className="text-white/60">No articles found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {currentPage === 1 && selectedCategory === "all" && latestBlogPost && (
        <div className="mb-16">
          <div className="w-full mb-6">
            <TitleComponent text="Latest Post" />
          </div>
          <article
            className="relative rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-gold/40 transition-all duration-300"
            onClick={() => handleReadMore(latestBlogPost)}
            tabIndex={0}
            role="button"
            aria-label={`Read: ${latestBlogPost.title}`}
            onKeyDown={(e) =>
              e.key === "Enter" && handleReadMore(latestBlogPost)
            }
          >
            <div className="relative h-[42vh] md:h-[55vh] overflow-hidden">
              <img
                src={latestBlogPost.image}
                alt={latestBlogPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-gold text-white text-[10px] font-bold py-1 px-2.5 rounded">
                  {getFirstWord(latestBlogPost.category)} &bull; Featured
                </span>
                {latestBlogPost.isTranslated && (
                  <span className="bg-white text-gold text-[10px] font-bold py-1 px-2.5 rounded">
                    Translated
                  </span>
                )}
              </div>
              <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight max-w-3xl">
                {latestBlogPost.title}
              </h2>
              <p className="text-gray-300 text-sm mb-5 max-w-2xl line-clamp-2 hidden sm:block">
                {latestBlogPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <img
                  src={latestBlogPost.authorPicture}
                  alt={latestBlogPost.author}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-white text-sm font-medium">
                  {latestBlogPost.author}
                </span>
                <span className="text-gray-500 hidden sm:inline">&bull;</span>
                <span className="text-gray-400 text-xs hidden sm:inline">
                  {latestBlogPost.createdAt}
                </span>
                <span className="text-gray-500 hidden sm:inline">&bull;</span>
                <span className="text-gold text-xs hidden sm:inline">
                  {latestBlogPost.readTime}
                </span>
              </div>
            </div>
          </article>
        </div>
      )}

      <div className="mb-10">
        <div className="w-full mb-6">
          <TitleComponent text="All Posts" />
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {["all", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-gold text-white shadow-md shadow-gold/20"
                  : "border border-gold/40 text-gold hover:bg-gold hover:text-white"
              }`}
            >
              {cat === "all" ? "All Posts" : getFirstWord(cat)}
            </button>
          ))}
        </div>
      </div>

      {currentPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((blogPost) => (
            <BlogCardComponent
              key={blogPost.id}
              {...blogPost}
              onClick={() => handleReadMore(blogPost)}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[200px]">
          <p className="text-gray-500 text-sm">
            No posts in this category yet.
          </p>
        </div>
      )}

      {totalPages > 1 && (
        <nav
          className="flex justify-center items-center gap-1 mt-12 mb-4 flex-wrap"
          aria-label="Blog pagination"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &larr; Prev
          </Button>
          {getPaginationRange(currentPage, totalPages).map((item, i) =>
            item === "..." ? (
              <span key={`e-${i}`} className="px-2 text-gray-500 text-xs">
                &hellip;
              </span>
            ) : (
              <button
                key={item}
                onClick={() => handlePageChange(item as number)}
                aria-current={currentPage === item ? "page" : undefined}
                className={`w-8 h-8 rounded-lg text-xs font-semibold transition-colors ${
                  currentPage === item
                    ? "bg-gold text-white shadow-md shadow-gold/20"
                    : "text-white bg-white/10 hover:bg-gold hover:text-white"
                }`}
              >
                {item}
              </button>
            ),
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next &rarr;
          </Button>
        </nav>
      )}
    </div>
  );
};

export default BlogPostCollectionComponent;
