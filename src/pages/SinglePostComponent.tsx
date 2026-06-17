import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Book, Calendar, HandHeart, MessageCircle, Languages, ArrowLeft } from "lucide-react";
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
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showOriginal, setShowOriginal] = useState(false);

  useEffect(() => {
    if (!id) { setLoading(false); setError("No article ID provided"); return; }
    setLoading(true);
    setError(null);

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
      <div className="h-screen flex items-center justify-center">
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
    title, author, createdAt, image, excerpt, fullDescription,
    readTime, authorPicture, comments, reactions,
    originalTitle, originalExcerpt, originalDescription, isTranslated,
  } = post;

  const displayTitle = showOriginal && originalTitle ? originalTitle : title;
  const displayExcerpt = showOriginal && originalExcerpt ? originalExcerpt : excerpt;
  const displayDescription = showOriginal && originalDescription ? originalDescription : fullDescription;

  const handleReadMore = (article: BlogPost) => {
    navigate(`/blog/${article.id}/${article.slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      {/* Back button */}
      <div className="pt-8 mb-6">
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      {/* Hero image */}
      <div className="rounded-2xl overflow-hidden border border-white/10 mb-10">
        <img
          src={image}
          alt={displayTitle}
          className="w-full h-[50vh] object-cover"
          loading="lazy"
        />
      </div>

      {/* Meta bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div className="flex items-center gap-4">
          <img src={authorPicture} alt={author} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-gold/40" />
          <div>
            <p className="text-white font-bold text-lg md:text-2xl">{author}</p>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <Badge><Book className="w-3 h-3 mr-1" />{readTime}</Badge>
              <Badge variant="secondary"><Calendar className="w-3 h-3 mr-1" />{createdAt}</Badge>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {isTranslated && originalTitle && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowOriginal((v) => !v)}
            >
              <Languages className="w-4 h-4 mr-1.5" />
              {showOriginal ? "English" : "Original"}
            </Button>
          )}
          <div className="flex items-center gap-1 text-white/60">
            <HandHeart className="w-5 h-5" />
            <span className="text-sm">{reactions}</span>
          </div>
          <div className="flex items-center gap-1 text-white/60">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">{comments}</span>
          </div>
        </div>
      </div>

      {isTranslated && (
        <Badge className="mb-6" variant={showOriginal ? "secondary" : "default"}>
          {showOriginal ? "Original Language" : "Translated to English"}
        </Badge>
      )}

      {/* Article body */}
      <h1 className="text-white text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
        {displayTitle}
      </h1>
      <p className="text-gray-300 text-lg lg:text-xl font-medium mb-8 leading-relaxed">
        {displayExcerpt}
      </p>
      <div
        className="article-content text-white text-sm lg:text-base leading-relaxed"
        dangerouslySetInnerHTML={{ __html: displayDescription || "" }}
      />

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <TitleComponent text="Related Posts" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {relatedPosts.map((rp) => (
              <BlogCardComponent key={rp.id} {...rp} onClick={() => handleReadMore(rp)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePostComponent;
