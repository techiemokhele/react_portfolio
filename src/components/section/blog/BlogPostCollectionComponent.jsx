import React from "react";
import { blogData } from "../../assets/blogData";
import ButtonComponent from "../../common/ButtonComponent";

const BlogPostCollectionComponent = () => {
  // Extracting the latest blog post from the dummy data
  const latestBlogPost = blogData[0];

  // Filter out the latest blog post from the other blog posts
  const otherBlogPosts = blogData.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Latest Post */}
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

      {/* Other Blog Posts */}
      <div className="w-full mb-10">
        <h1 className="text-white font-bold sm:text-6xl text-5xl">
          Other Blogs
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {otherBlogPosts.map((blogPost) => (
          <div
            key={blogPost.id}
            className="bg-gold p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-yellow-700 hover:scale-105"
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

            <div className="flex justify-between mb-2 text-white">
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
    </div>
  );
};

export default BlogPostCollectionComponent;
