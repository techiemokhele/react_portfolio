import React from "react";
import PageBanner from "@/components/common/PageBanner";

const AboutTopSectionComponent: React.FC = () => (
  <PageBanner
    label="About Me"
    title={
      <>
        Hi, I'm Neo Mokhele, a{" "}
        <span className="text-gold">Passionate</span> Frontend Developer.
      </>
    }
    description="With a deep love for creating beautiful and functional web applications, I specialize in building responsive and user-friendly interfaces. My journey in frontend development has equipped me with skills in HTML, CSS, JavaScript, and modern frameworks like React. Let's connect and create something exceptional together."
    primaryCta={{ text: "Get in Touch", href: "/contact" }}
    secondaryCta={{ text: "See My Projects", href: "/portfolio" }}
  />
);

export default AboutTopSectionComponent;
