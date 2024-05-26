import React from "react";

const BlogCardComponent = ({
  id,
  category,
  image,
  authorPicture,
  author,
  createdAt,
  title,
  excerpt,
  onClick,
}) => {
  return (
    <div
      key={id}
      className="relative bg-yellow-700 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-gold hover:scale-105"
    >
      <div className="absolute top-2 right-2 bg-gold hover:bg-yellow-700 text-white text-xs font-bold py-1 px-3 rounded">
        {category}
      </div>

      <div className="mb-4 h-[220px] mt-5">
        <img
          src={image}
          alt="Blog Post"
          className="w-full h-full object-fill"
        />
      </div>

      <div className="flex justify-between items-center mb-2 text-white">
        <div className="flex items-center">
          <img
            src={authorPicture}
            alt={author}
            className="w-10 h-10 rounded-full mr-2"
          />
          <span className="text-white font-bold text-md">{author}</span>
        </div>
        <div>
          <span className="text-white font-semibold text-xs">{createdAt}</span>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-2 text-white">{title}</h2>
      <p className="text-white mb-4 font-thin">{excerpt}</p>
      <div className="text-center mt-auto">
        <button
          onClick={onClick}
          className="rounded-full w-[100%] hover:bg-yellow-700 bg-gold text-white font-bold py-2 px-4"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCardComponent;
