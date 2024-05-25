import React, { useState } from "react";
import { blogData } from "../../assets/blogData";
import ButtonComponent from "../../common/ButtonComponent";

const BlogPostCollectionComponent = () => {
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Latest Post */}
      {currentPage === 1 && selectedCategory === "all" && (
        <div>
          <div className="w-full mb-10">
            <h1 className="text-white font-bold sm:text-6xl text-5xl">
              Latest Blogs
            </h1>
          </div>

          <div className="mb-10 flex flex-col md:flex-row items-center border border-gold p-4 space-y-4 md:space-y-0 md:space-x-4">
            {/* Text Section */}
            <div className="md:w-1/2 flex flex-col items-center md:items-start md:border-r md:border-gold pr-4 text-center md:text-left">
              <h2 className="text-2xl font-extrabold text-gold mb-2">
                {latestBlogPost.title}
              </h2>
              <p className="mb-4 text-white">{latestBlogPost.excerpt}</p>
              <div className="flex flex-col md:flex-row items-center justify-between w-full text-white space-y-2 md:space-y-0 lg:my-8 md:my-6 sm:my-4 sm:mb-8">
                <div className="flex flex-col items-center md:items-start">
                  <span className="font-bold text-gold">Read Time:</span>
                  <span>{latestBlogPost.readTime}</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="font-bold text-gold">Published:</span>
                  <span>{latestBlogPost.createdAt}</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="font-bold text-gold">Author:</span>
                  <span>{latestBlogPost.author}</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="font-bold text-gold">Category:</span>
                  <span>{latestBlogPost.category}</span>
                </div>
              </div>
              <div className="mt-4">
                <ButtonComponent
                  href={latestBlogPost.id}
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
        <h1 className="text-white font-bold sm:text-6xl text-5xl">
          Previous Blogs
        </h1>
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center mt-10 space-x-4">
          <button
            className={`px-3 py-1 rounded mb-3 ${
              selectedCategory === "all"
                ? "bg-gold text-black"
                : "bg-white text-black"
            }`}
            onClick={() => handleCategoryFilter("all")}
          >
            All Posts
          </button>
          {Array.from(new Set(otherBlogPosts.map((post) => post.category))).map(
            (category) => (
              <button
                key={category}
                className={`px-3 py-1 rounded mb-3 ${
                  selectedCategory === category
                    ? "bg-gold text-black"
                    : "bg-white text-black"
                }`}
                onClick={() => handleCategoryFilter(category)}
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentPosts.map((blogPost) => (
          <div
            key={blogPost.id}
            className="relative bg-gold p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-yellow-700 hover:scale-105"
          >
            <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded">
              {blogPost.category}
            </div>

            <div className="mb-4 h-[220px] mt-5">
              <img
                src={blogPost.image}
                alt="Blog Post"
                className="w-full h-full object-fill"
              />
            </div>

            <div className="flex justify-between items-center mb-2 text-white">
              <div className="flex items-center">
                <img
                  src={blogPost.authorPicture}
                  alt={blogPost.author}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <span className="font-bold">
                  Author:
                  <br />
                  <span className="text-white font-semibold">
                    {blogPost.author}
                  </span>
                </span>
              </div>
              <div>
                <span className="text-white">
                  Posted:
                  <br />
                  <span className="text-white font-semibold">
                    {blogPost.createdAt}
                  </span>
                </span>
              </div>
            </div>

            <h2 className="text-lg font-extrabold mb-2 text-white">
              {blogPost.title}
            </h2>
            <p className="text-white mb-4 font-thin">{blogPost.excerpt}</p>
            <div className="text-center mt-auto">
              <button className="rounded-full w-[100%] bg-white hover:bg-gold text-black font-bold py-2 px-4">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {currentPosts.length >= 6 && (
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            className="px-3 py-1 rounded bg-white text-black"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt; Previous
          </button>

          {totalPages > 8 && currentPage > 5 && (
            <>
              <button
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === 1
                    ? "bg-gold text-black"
                    : "bg-white text-black"
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
                    ? "bg-gold text-black"
                    : "bg-white text-black"
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
                    ? "bg-gold text-black"
                    : "bg-white text-black"
                }`}
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            className="px-3 py-1 rounded bg-white text-black"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPostCollectionComponent;
