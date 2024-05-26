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
            <img
              src={authorPicture}
              alt={author}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-white font-bold text-[28px]">{author}</span>
          </div>
          <div className="mt-2 flex items-center">
            <span className="text-white font-semibold text-[12px] px-3 py-0 bg-gold rounded-full">
              {createdAt}
            </span>
            <span className="mx-2 text-gold">-</span>
            <span className="text-white font-semibold text-[12px] px-3 py-0 bg-gold rounded-full">
              {readTime}
            </span>
          </div>

          <p className="text-white font-semibold mt-5">{excerpt}</p>
          <div className="my-6">
            <span className="bg-gold text-white py-1 px-2 rounded-full text-xs">
              {category}
            </span>
          </div>

          <p className="text-sm text-white font-thin">{fullDescription}</p>
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
