import React, { useId } from "react";
import { Clock } from "lucide-react";
import { truncateText, truncateTitle } from "@/components/utils/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/types";

interface BlogCardComponentProps extends Partial<BlogPost> {
  onClick?: () => void;
}

const BlogCardComponent: React.FC<BlogCardComponentProps> = ({
  id,
  category,
  image,
  authorPicture,
  author,
  createdAt,
  title,
  excerpt,
  readTime,
  onClick,
}) => {
  const headingId = useId();
  const truncatedExcerpt = truncateText(excerpt, 2);
  const truncatedTitle = truncateTitle(title);

  return (
    <article
      aria-labelledby={headingId}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-card transition-all duration-300 hover:border-gold/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/10"
    >
      {/* Cover image */}
      <div className="relative">
        <div className="h-[200px] lg:h-[220px] overflow-hidden bg-secondary flex items-center justify-center">
          <img
            src={image}
            alt={title ? `Cover image for: ${title}` : "Blog post cover image"}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        {category && (
          <Badge className="absolute top-3 right-3" aria-label={`Category: ${category}`}>
            {category}
          </Badge>
        )}
      </div>

      <CardContent className="p-5 flex flex-col flex-1">
        {/* Author row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <img
              src={authorPicture}
              alt={`Profile picture of ${author}`}
              className="w-9 h-9 rounded-full border border-gold/30"
              loading="lazy"
            />
            <span className="text-white font-semibold text-sm">{author}</span>
          </div>
          {readTime && (
            <span
              className="flex items-center gap-1 text-gray-400 text-xs"
              aria-label={`Reading time: ${readTime}`}
            >
              <Clock className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
              {readTime}
            </span>
          )}
        </div>

        <h2 id={headingId} className="text-lg font-semibold mb-2 text-white leading-snug">
          {truncatedTitle}
        </h2>
        <p className="text-gray-400 text-sm font-light mb-2">
          {truncatedExcerpt}
        </p>
        <time className="text-gray-500 text-xs mt-auto" dateTime={createdAt}>
          {createdAt}
        </time>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button
          onClick={onClick}
          className="w-full"
          aria-label={`Read article: ${truncatedTitle}`}
        >
          Read More
        </Button>
      </CardFooter>
    </article>
  );
};

export default BlogCardComponent;
