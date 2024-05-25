import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { blogData } from "../components/assets/blogData";

import NotFoundComponent from "../components/common/NotFoundComponent";
import LoadingComponent from "../components/common/LoadingComponent";
import BlogSingTopBannerComponent from "../components/section/blog/BlogSingTopBannerComponent";
import BlogCardComponent from "../components/section/blog/BlogCardComponent";

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
      <div className="flex items-start mt-20">
        <div className="w-1/2 border rounded-md overflow-hidden border-gold border-l-[20px] border-r-0">
          <img
            src={image}
            alt={title}
            className="w-full h-[60vh] object-contain"
          />
        </div>
        <div className="w-1/2 ml-4">
          <div className="mt-0 flex items-center">
            <img
              src={authorPicture}
              alt={author}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-white font-bold text-3xl">{author}</span>
          </div>
          <div className="mt-2 flex items-center">
            <span className="text-gold">{createdAt}</span>
            <span className="mx-2 text-gold">-</span>
            <span className="text-gold">{readTime} Read Time</span>{" "}
            {/* Display read time */}
          </div>
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
        <h2 className="text-6xl text-white font-bold mb-14">Related Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
