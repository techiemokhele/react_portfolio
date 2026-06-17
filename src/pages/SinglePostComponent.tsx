import { useState, useEffect, useId } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Book,
  Calendar,
  Heart,
  MessageCircle,
  Languages,
  ArrowLeft,
} from "lucide-react";
import type { BlogPost } from "@/types";
import { fetchArticleById, fetchRelatedArticles } from "@/services/blogService";
import { translateArticle } from "@/services/translationService";
import NotFoundComponent from "@/components/common/NotFoundComponent";
import LoadingComponent from "@/components/common/LoadingComponent";
import BlogCardComponent from "@/components/section/blog/BlogCardComponent";
import TitleComponent from "@/components/common/TitleComponent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SinglePostComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const titleId = useId();

  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showOriginal, setShowOriginal] = useState(false);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      setError("No article ID provided");
      return;
    }
    setLoading(true);
    setError(null);
    window.scrollTo(0, 0);

    const load = async () => {
      try {
        const raw = await fetchArticleById(id);
        const translated = await translateArticle(raw);
        setPost(translated);
        const related = await fetchRelatedArticles(raw, 6);
        setRelatedPosts(related);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center" role="status" aria-label="Loading article">
        <LoadingComponent />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="h-screen flex items-center justify-center">
        <NotFoundComponent />
      </div>
    );
  }

  const {
    title,
    author,
    createdAt,
    image,
    excerpt,
    fullDescription,
    readTime,
    authorPicture,
    comments,
    reactions,
    originalTitle,
    originalExcerpt,
    originalDescription,
    isTranslated,
  } = post;

  const displayTitle = showOriginal && originalTitle ? originalTitle : title;
  const displayExcerpt = showOriginal && originalExcerpt ? originalExcerpt : excerpt;
  const displayDescription = showOriginal && originalDescription ? originalDescription : fullDescription;

  const handleReadMore = (article: BlogPost) => {
    navigate(`/blog/${article.id}/${article.slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {/* Skip to content */}
      <a
        href="#article-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gold text-white px-4 py-2 rounded z-50"
      >
        Skip to article
      </a>

      {/* Back navigation */}
      <nav aria-label="Breadcrumb" className="pt-8 mb-6">
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)} aria-label="Go back to previous page">
          <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
          Back
        </Button>
      </nav>

      <article aria-labelledby={titleId}>
        {/* Cover image */}
        <figure className="rounded-2xl overflow-hidden border border-white/10 mb-10">
          <img
            src={image}
            alt={`Cover image for: ${displayTitle}`}
            className="w-full h-[45vh] md:h-[55vh] object-cover"
            loading="eager"
          />
        </figure>

        {/* Author + meta row */}
        <header>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 mb-6">
            {/* Author */}
            <div className="flex items-center gap-3">
              <img
                src={authorPicture}
                alt={`Profile picture of ${author}`}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-gold/40"
              />
              <div>
                <p className="text-white font-bold text-lg">{author}</p>
                <div className="flex flex-wrap items-center gap-2 mt-1" aria-label="Article metadata">
                  {readTime && (
                    <Badge>
                      <Book className="w-3 h-3 mr-1" aria-hidden="true" />
                      <span>{readTime}</span>
                    </Badge>
                  )}
                  <Badge variant="secondary">
                    <Calendar className="w-3 h-3 mr-1" aria-hidden="true" />
                    <time dateTime={createdAt}>{createdAt}</time>
                  </Badge>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4" role="group" aria-label="Article actions">
              {isTranslated && originalTitle && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowOriginal((v) => !v)}
                  aria-pressed={showOriginal}
                  aria-label={showOriginal ? "Show English translation" : "Show original language"}
                >
                  <Languages className="w-4 h-4 mr-1.5" aria-hidden="true" />
                  {showOriginal ? "English" : "Original"}
                </Button>
              )}

              <div className="flex items-center gap-1.5 text-white/60" aria-label={`${reactions} reactions`}>
                <Heart className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm">{reactions}</span>
              </div>

              <div className="flex items-center gap-1.5 text-white/60" aria-label={`${comments} comments`}>
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm">{comments}</span>
              </div>
            </div>
          </div>

          {/* Translation status badge */}
          {isTranslated && (
            <div className="mb-5">
              <Badge variant={showOriginal ? "secondary" : "default"} aria-live="polite">
                {showOriginal ? "Showing original language" : "Translated to English"}
              </Badge>
            </div>
          )}

          {/* Title */}
          <h1
            id={titleId}
            className="text-white text-3xl lg:text-4xl font-extrabold mb-4 leading-tight"
          >
            {displayTitle}
          </h1>

          {/* Excerpt / description */}
          {displayExcerpt && (
            <p className="text-gray-300 text-lg font-medium mb-8 leading-relaxed border-l-4 border-gold/40 pl-4">
              {displayExcerpt}
            </p>
          )}
        </header>

        {/* Article body — rendered HTML from dev.to body_html */}
        <div
          id="article-content"
          className="article-content"
          dangerouslySetInnerHTML={{ __html: displayDescription || "" }}
          aria-live="polite"
        />
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <aside className="mt-20" aria-label="Related articles">
          <TitleComponent text="Related Posts" />
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            role="list"
            aria-label="Related articles list"
          >
            {relatedPosts.map((rp) => (
              <div key={rp.id} role="listitem">
                <BlogCardComponent {...rp} onClick={() => handleReadMore(rp)} />
              </div>
            ))}
          </div>
        </aside>
      )}
    </div>
  );
};

export default SinglePostComponent;
