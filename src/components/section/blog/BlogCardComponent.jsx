import { useState } from "react";
import { Languages } from "lucide-react";
import { truncateText, truncateTitle } from "../../utils/utils";

const BlogCardComponent = ({
  id,
  category,
  image,
  authorPicture,
  author,
  createdAt,
  title,
  excerpt,
  originalTitle,
  originalExcerpt,
  isTranslated,
  onClick,
}) => {
  const [showOriginal, setShowOriginal] = useState(false);

  const displayTitle = showOriginal && originalTitle ? originalTitle : title;
  const displayExcerpt =
    showOriginal && originalExcerpt ? originalExcerpt : excerpt;

  const truncatedExcerpt = truncateText(displayExcerpt, 2);
  const truncatedTitle = truncateTitle(displayTitle);

  return (
    <div
      key={id}
      className="relative border-l-[10px] border-l-gold hover:border-l-yellow-700 bg-yellow-700 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-gold hover:scale-105"
    >
      <div className="absolute top-2 right-2 bg-gold hover:bg-yellow-700 hover:shadow-md hover:shadow-gray-700 text-white text-xs font-bold py-1 px-3 rounded">
        {category}
      </div>

      {isTranslated && originalTitle && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowOriginal(!showOriginal);
          }}
          className="absolute top-2 left-2 bg-white hover:bg-gray-200 text-gold p-2 rounded-full shadow-md transition-all duration-200 z-10"
          title={showOriginal ? "Show English" : "Show Original Language"}
        >
          <Languages size={16} />
        </button>
      )}

      <div className="pt-5 justify-center items-center flex">
        <img
          src={image}
          alt="Blog Post"
          className="w-full h-[200px] lg:h-[250px] object-contain lg:object-fill"
        />
      </div>

      <div className="flex justify-between items-center mb-2 mt-2 text-white">
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

      {isTranslated && (
        <div className="mb-2">
          <span className="text-xs bg-white text-gold px-2 py-1 rounded-full">
            {showOriginal ? "Original" : "Translated"}
          </span>
        </div>
      )}

      <h2 className="text-lg font-semibold mb-2 text-white">
        {truncatedTitle}
      </h2>
      <p className="text-white mb-4 font-thin">{truncatedExcerpt}</p>
      <div className="text-center mt-auto">
        <button
          onClick={onClick}
          className="rounded-full w-[100%] hover:bg-yellow-700 hover:shadow-md hover:shadow-gray-700 bg-gold text-white font-semibold py-2 px-4"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCardComponent;
