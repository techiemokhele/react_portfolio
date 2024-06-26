import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { blogData } from "../components/assets/blogData";

import NotFoundComponent from "../components/common/NotFoundComponent";
import LoadingComponent from "../components/common/LoadingComponent";
import BlogSingTopBannerComponent from "../components/section/blog/BlogSingTopBannerComponent";
import BlogCardComponent from "../components/section/blog/BlogCardComponent";
import TitleComponent from "../components/common/TitleComponent";

const SinglePostComponent = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = () => {
      const foundPost = blogData.find((post) => post.slug === slug);
      setPost(foundPost);
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingComponent />
      </div>
    );
  }

  if (!post) {
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
    category,
    readTime,
    authorPicture,
  } = post;

  const relatedPosts = blogData.filter(
    (relatedPost) =>
      relatedPost.category === category && relatedPost.id !== post.id
  );

  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <BlogSingTopBannerComponent
        author={author}
        excerpt={excerpt}
        title={title}
        category={category}
        createdAt={createdAt}
      />

      {/* Image and Description Section */}

      <div className="blog-container flex items-start mt-20">
        {/* Blog Image */}
        <div className="blog-image w-1/2 border rounded-md overflow-hidden border-gold lg:border-l-[20px] lg:border-r-0 lg:border-t-2 lg:border-b-[20px] border-t-[20px] border-b-0">
          <img
            src={image}
            alt={title}
            className="w-full h-[60vh] object-contain"
          />
        </div>

        {/* Blog Content */}
        <div className="blog-content w-1/2 ml-4 lg:border-r-[10px] border-r-0 lg:border-t-[10px] border-t-0 border-gold rounded-full">
          <div className="lg:mt-20 mt-0 flex items-center">
            <div className="pt-3">
              <img
                src={authorPicture}
                alt={author}
                className="w-12 h-12 rounded-full mr-2"
              />
            </div>

            <div>
              <span className="text-white font-bold text-[28px]">{author}</span>

              <div className="flex items-center">
                <span className="bg-gold text-white py-1 px-2 rounded-full text-xs">
                  {readTime}
                </span>
                <span className="mx-2 text-gold">-</span>
                <span className="bg-gold text-white py-1 px-2 rounded-full text-xs">
                  {createdAt}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center my-6 px-3">
            <div className="flex items-center"></div>
            <span className="bg-gold text-white py-1 px-2 rounded-full text-xs">
              {category}
            </span>
          </div>

          <p className="text-white text-xl lg:text-2xl font-semibold my-4">
            {excerpt}
          </p>

          <p className=" text-[12px] lg:text-sm text-white font-thin">
            {fullDescription}
          </p>
        </div>
      </div>

      {/* Related Posts Section */}
      <div className="mt-14">
        <TitleComponent text={"Related Posts"} />
        <div className="grid grid-cols-1 p-3 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedPosts.map((relatedPost) => (
            <BlogCardComponent
              key={relatedPost.id}
              {...relatedPost}
              onClick={() => handleReadMore(relatedPost.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePostComponent;
