import React from "react";
import PageBanner from "@/components/common/PageBanner";

const PortfolioTopBannerComponent: React.FC = () => (
  <PageBanner
    label="My Projects"
    title={
      <>
        Explore My <span className="text-gold">Creative Work</span> and
        Collaborations.
      </>
    }
    description="Dive into my portfolio to see the diverse range of projects I've worked on. From innovative solutions to creative designs, discover how we can collaborate to bring your vision to life. Feel free to reach out, and let's discuss how we can create something amazing together."
    primaryCta={{ text: "Read Latest Blog", href: "/blog" }}
  />
);

export default PortfolioTopBannerComponent;
