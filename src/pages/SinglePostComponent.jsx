import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchArticleById,
  fetchRelatedArticles,
} from "../services/blogService";
import { translateArticle } from "../services/translationService";
import NotFoundComponent from "../components/common/NotFoundComponent";
import LoadingComponent from "../components/common/LoadingComponent";
import BlogCardComponent from "../components/section/blog/BlogCardComponent";
import TitleComponent from "../components/common/TitleComponent";
import {
  Book,
  Calendar,
  HandHeart,
  MessageCircle,
  Languages,
} from "lucide-react";

const SinglePostComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showOriginal, setShowOriginal] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);

      try {
        const foundPost = await fetchArticleById(id);
        const translatedPost = await translateArticle(foundPost);
        setPost(translatedPost);

        const related = await fetchRelatedArticles(foundPost, 6);
        setRelatedPosts(related);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    } else {
      setLoading(false);
      setError("No article ID provided");
    }
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
  const displayExcerpt =
    showOriginal && originalExcerpt ? originalExcerpt : excerpt;
  const displayDescription =
    showOriginal && originalDescription ? originalDescription : fullDescription;

  const handleReadMore = (article) => {
    navigate(`/blog/${article.id}/${article.slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="blog-container flex flex-col items-start mt-20 gap-4">
        <div className="blog-image w-full border rounded-md overflow-hidden border-gold lg:border-l-[20px] lg:border-r-0 lg:border-t-2 lg:border-b-[20px] border-t-[20px] border-b-0">
          <img
            src={image}
            alt={displayTitle}
            className="w-full h-[60vh] object-contain"
          />
        </div>

        <div className="blog-content w-full rounded-full">
          <div className="flex md:flex-row flex-col justify-between items-center lg:mt-20 mt-0 md:gap-0 gap-6">
            <div className="flex items-center gap-4">
              <div className="pt-3">
                <img
                  src={authorPicture}
                  alt={author}
                  className="w-12 h-12 md:w-20 md:h-20 rounded-full mr-2 object-cover"
                />
              </div>
              <div>
                <span className="text-white font-bold md:text-[28px] text-md">
                  {author}
                </span>
                <div className="flex items-center md:pt-0 pt-4">
                  <span className="flex flex-row gap-2 items-center bg-gold text-white py-1 px-2 rounded-full text-xs">
                    <Book size={16} /> {readTime}
                  </span>
                  <span className="mx-2 text-gold">-</span>
                  <span className="flex flex-row gap-2 items-center bg-gold text-white py-1 px-2 rounded-full text-xs">
                    <Calendar size={16} />
                    {createdAt}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-6">
              {isTranslated && originalTitle && (
                <button
                  onClick={() => setShowOriginal(!showOriginal)}
                  className="flex flex-row gap-2 items-center bg-gold hover:bg-yellow-700 text-white py-2 px-4 rounded-full transition-all duration-200 shadow-md"
                  title={
                    showOriginal ? "Show English" : "Show Original Language"
                  }
                >
                  <Languages size={20} />
                  <span className="hidden sm:inline text-sm font-semibold">
                    {showOriginal ? "English" : "Original"}
                  </span>
                </button>
              )}

              <div className="flex flex-row gap-2 items-center">
                <HandHeart color="#fff" size={30} />
                <p className="text-white">{reactions}</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <MessageCircle color="#fff" size={30} />
                <p className="text-white">{comments}</p>
              </div>
            </div>
          </div>

          {isTranslated && (
            <div className="mt-4">
              <span className="text-sm bg-gold text-white px-3 py-1 rounded-full">
                {showOriginal ? "Original Language" : "Translated to English"}
              </span>
            </div>
          )}

          <h2 className="text-white text-3xl lg:text-4xl font-bold mt-12">
            {displayTitle}
          </h2>

          <p className="text-white text-xl lg:text-2xl font-semibold my-6">
            {displayExcerpt}
          </p>
          <div
            className="article-content text-white text-sm lg:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: displayDescription }}
          />
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <div className="mt-14 mb-10">
          <TitleComponent text={"Related Posts"} />
          <div className="grid grid-cols-1 p-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <BlogCardComponent
                key={relatedPost.id}
                {...relatedPost}
                onClick={() => handleReadMore(relatedPost)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePostComponent;
