import React from "react";
import type { BlogSingTopBannerComponentProps } from "@/types/props";

const BlogSingTopBannerComponent: React.FC<BlogSingTopBannerComponentProps> = ({
  category,
  title,
  excerpt,
  author,
  createdAt,
}) => {
  return (
    <div className="relative min-h-[70vh] flex items-center overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1624749076747-79f933b8b671?q=80&w=1400&auto=format&fit=crop")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/95 via-[#0a0a0a]/85 to-[#0a0a0a]/70" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">
          {category}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-3xl">
          {title}
        </h1>
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-gold text-sm font-medium">
            {author} - {createdAt}
          </span>
        </div>
        <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-2xl">
          {excerpt}
        </p>
      </div>
    </div>
  );
};

export default BlogSingTopBannerComponent;
