import React from "react";
import PageBanner from "@/components/common/PageBanner";

const BlogTopBannerSectionComponent: React.FC = () => (
  <PageBanner
    label="Blog Posts"
    title={
      <>
        Welcome to my blog where I share{" "}
        <span className="text-gold">Insights</span> and{" "}
        <span className="text-gold">Perspectives</span>.
      </>
    }
    description="Explore a variety of topics including technology trends, coding tips, industry insights, and personal reflections. Whether you're a seasoned developer or just starting your journey, there's something here for everyone. Join me in the discussion and let's learn and grow together."
    primaryCta={{ text: "Get in Touch", href: "/contact" }}
  />
);

export default BlogTopBannerSectionComponent;
