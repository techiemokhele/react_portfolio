import React from "react";
import BlogTopBannerSectionComponent from "@/components/section/blog/BlogTopBannerSectionComponent";
import BlogPostCollectionComponent from "@/components/section/blog/BlogPostCollectionComponent";

const BlogScreen: React.FC = () => {
  return (
    <div>
      <BlogTopBannerSectionComponent />

      <div className="flex my-10 px-5">
        <BlogPostCollectionComponent />
      </div>
    </div>
  );
};

export default BlogScreen;
