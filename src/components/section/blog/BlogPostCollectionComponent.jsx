import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { blogData } from "../../assets/blogData";
import ButtonComponent from "../../common/ButtonComponent";
import BlogCardComponent from "./BlogCardComponent";
import TitleComponent from "../../common/TitleComponent";
import { getFirstWord } from "../../utils/utils";

const BlogPostCollectionComponent = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const latestBlogPost = blogData[0];
  const otherBlogPosts = blogData.slice(1);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(otherBlogPosts.length / postsPerPage);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Filter blog posts by category
  let filteredPosts = otherBlogPosts;
  if (selectedCategory !== "all") {
    filteredPosts = otherBlogPosts.filter(
      (post) => post.category === selectedCategory
    );
  }

  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // Handle category filter
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Latest Post */}
      {currentPage === 1 && selectedCategory === "all" && (
        <div>
          <div className="w-full mb-10">
            <TitleComponent text={"Latest Blog"} />
          </div>

          <div className="border-t-[10px] border-l-[10px] mb-10 flex flex-col md:flex-row items-center border border-gold p-4 space-y-4 md:space-y-0 md:space-x-4">
            {/* Text Section */}
            <div className="md:w-1/2 flex flex-col items-center md:items-start md:border-r md:border-gold pr-4 text-center md:text-left">
              <img
                src={latestBlogPost.authorPicture}
                alt={latestBlogPost.author}
                className="mb-5 w-20 h-20 rounded-full"
              />

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
                  onClick={() => handleReadMore(latestBlogPost.slug)}
                  text="Read More"
                  normal={true}
                />
              </div>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img
                src={latestBlogPost.image}
                alt="Latest Post"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Previous Blog Posts */}
      <div className="w-full mb-10">
        <TitleComponent text={"Previous Blogs"} />
        {/* Category Filters */}
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
          {Array.from(new Set(otherBlogPosts.map((post) => post.category))).map(
            (category) => (
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
            )
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 p-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentPosts.map((blogPost) => (
          <BlogCardComponent
            key={blogPost.id}
            {...blogPost}
            onClick={() => handleReadMore(blogPost.slug)}
          />
        ))}
      </div>

      {/* Pagination */}
      {currentPosts.length >= 6 || currentPage > 1 ? (
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            className="px-3 py-1 rounded bg-yellow-700 text-white hover:bg-gold"
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
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-yellow-700 text-white"
                    : "bg-gold"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}

          {totalPages > 8 && currentPage < totalPages - 4 && (
            <>
              <span className="mx-1 px-3 py-1 rounded bg-white text-black">
                ...
              </span>
              <button
                className={`mx-1 px-3 py-1 rounded ${
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
            className="px-3 py-1 rounded bg-yellow-700 text-white hover:bg-gold"
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
