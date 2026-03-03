import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../common/ButtonComponent";
import BlogCardComponent from "./BlogCardComponent";
import TitleComponent from "../../common/TitleComponent";
import { getFirstWord } from "../../utils/utils";
import { fetchArticles } from "../../../services/blogService";

const BlogPostCollectionComponent = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [translating] = useState(false);

  const postsPerPage = 6;

  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const articles = await fetchArticles({
          per_page: 30,
          tags: "javascript,react,webdev,programming,tutorial,nodejs,frontend,backend,seo",
        });
        setBlogData(articles);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch articles:", err);
      } finally {
        setLoading(false);
      }
    };
    loadArticles();
  }, []);

  const latestBlogPost = blogData[0];
  const otherBlogPosts = blogData.slice(1);
  const totalPages = Math.ceil(otherBlogPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  let filteredPosts = otherBlogPosts;
  if (selectedCategory !== "all") {
    filteredPosts = otherBlogPosts.filter(
      (post) => post.category.toLowerCase() === selectedCategory.toLowerCase(),
    );
  }

  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleReadMore = (article) => {
    navigate(`/blog/${article.id}/${article.slug}`);
    window.scrollTo(0, 0);
  };

  const categories = Array.from(
    new Set(otherBlogPosts.map((post) => post.category)),
  );

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center min-h-[400px]">
          <div className="text-white text-xl mb-4">Loading articles...</div>
          {translating && (
            <div className="text-gold text-sm">Translating content...</div>
          )}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-red-500 text-xl">
            <p>Error loading articles: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-gold text-white rounded hover:bg-yellow-700"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!blogData.length) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-white text-xl">No articles found.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {currentPage === 1 && selectedCategory === "all" && latestBlogPost && (
        <div>
          <div className="w-full mb-10">
            <TitleComponent text={"Latest Blog"} />
          </div>
          <div className="border-t-[10px] border-l-[10px] mb-10 flex flex-col md:flex-row items-center border border-gold p-4 space-y-4 md:space-y-0 md:space-x-4">
            <div className="md:w-1/2 flex flex-col items-center md:items-start md:border-r md:border-gold pr-4 text-center md:text-left">
              <img
                src={latestBlogPost.authorPicture}
                alt={latestBlogPost.author}
                className="mb-5 w-20 h-20 rounded-full object-cover"
              />

              {latestBlogPost.isTranslated && (
                <span className="mb-2 text-xs bg-gold text-white px-3 py-1 rounded-full">
                  Translated to English
                </span>
              )}

              <h2 className="text-2xl font-extrabold text-gold mb-2">
                {latestBlogPost.title}
              </h2>
              <p className="mb-4 text-white">{latestBlogPost.excerpt}</p>
              <div className="flex flex-wrap items-center justify-between w-full text-white space-y-2 md:space-y-0 lg:my-8 md:my-6 sm:my-4 sm:mb-8">
                <div className="w-full md:w-auto md:flex-1 flex flex-col items-center md:items-start">
                  <span className="font-bold text-gold">Read Time:</span>
                  <span className="text-center">{latestBlogPost.readTime}</span>
                </div>
                <div className="w-full md:w-auto md:flex-1 flex flex-col items-center md:items-start">
                  <span className="font-bold text-gold">Published:</span>
                  <span className="text-center">
                    {latestBlogPost.createdAt}
                  </span>
                </div>
                <div className="w-full md:w-auto md:flex-1 flex flex-col items-center md:items-start">
                  <span className="font-bold text-gold">Author:</span>
                  <span className="text-center">{latestBlogPost.author}</span>
                </div>
                <div className="w-full md:w-auto md:flex-1 flex flex-col items-center md:items-start">
                  <span className="font-bold text-gold">Category:</span>
                  <span className="text-center">
                    {getFirstWord(latestBlogPost.category)}
                  </span>
                </div>
              </div>
              <div className="mt-12 lg:mt-4 ml-6 lg:ml-0">
                <ButtonComponent
                  onClick={() => handleReadMore(latestBlogPost)}
                  text="Read More"
                  normal={true}
                />
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img
                src={latestBlogPost.image}
                alt="Latest Post"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      )}

      <div className="w-full mb-10">
        <TitleComponent text={"Previous Blogs"} />
        <div className="flex flex-wrap justify-center items-center lg:mt-14 mt-12 space-x-4">
          <button
            className={`px-3 py-1 rounded-full font-semibold tracking-wide mb-3 ${
              selectedCategory === "all"
                ? "bg-yellow-700 text-white shadow-md shadow-gray-700"
                : "bg-gold text-white"
            }`}
            onClick={() => handleCategoryFilter("all")}
          >
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 py-1 rounded-full font-semibold tracking-wide mb-3 ${
                selectedCategory === category
                  ? "bg-yellow-700 text-white shadow-md shadow-gray-700"
                  : "bg-gold text-white"
              }`}
              onClick={() => handleCategoryFilter(category)}
            >
              {getFirstWord(category)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 p-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((blogPost) => (
          <BlogCardComponent
            key={blogPost.id}
            {...blogPost}
            onClick={() => handleReadMore(blogPost)}
          />
        ))}
      </div>

      {currentPosts.length >= 6 || currentPage > 1 ? (
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            className="px-3 py-1 rounded bg-yellow-700 text-white hover:bg-gold disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt; Previous
          </button>
          {totalPages > 8 && currentPage > 5 && (
            <>
              <button
                className={`mx-1 px-3 py-1 rounded text-white ${
                  currentPage === 1 ? "bg-yellow-700 text-white" : "bg-gold"
                }`}
                onClick={() => handlePageChange(1)}
              >
                1
              </button>
              <span className="mx-1 px-3 py-1 rounded bg-white text-black">
                ...
              </span>
            </>
          )}
          {Array.from(
            { length: totalPages > 8 ? 7 : totalPages },
            (_, index) => (
              <button
                key={index + 1}
                className={`mx-1 px-3 py-1 rounded text-white ${
                  currentPage === index + 1
                    ? "bg-yellow-700 text-white"
                    : "bg-gold"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ),
          )}
          {totalPages > 8 && currentPage < totalPages - 4 && (
            <>
              <span className="mx-1 px-3 py-1 rounded bg-white text-black">
                ...
              </span>
              <button
                className={`mx-1 px-3 py-1 rounded text-white ${
                  currentPage === totalPages
                    ? "bg-yellow-700 text-white"
                    : "bg-gold"
                }`}
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            </>
          )}
          <button
            className="px-3 py-1 rounded bg-yellow-700 text-white hover:bg-gold disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next &gt;
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default BlogPostCollectionComponent;
