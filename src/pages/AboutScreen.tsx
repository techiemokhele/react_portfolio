import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { experiences, projects, qualifications } from "@/data/portfolioData";

import AboutTopSectionComponent from "@/components/section/about/AboutTopSectionComponent";
import EducationComponent from "@/components/section/about/EducationComponent";
import ExperienceComponent from "@/components/section/about/ExperienceComponent";
import ProjectComponent from "@/components/section/about/ProjectComponent";
import MarqueeComponent from "@/components/common/MarqueeComponent";
import TitleComponent from "@/components/common/TitleComponent";

const AboutScreen: React.FC = () => {
  const [searchParams] = useSearchParams();
  const focusParam = searchParams.get("focus");
  const latestProjects = [...projects].slice(-3).reverse();

  useEffect(() => {
    if (!focusParam) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(focusParam);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("search-focus-highlight");
        setTimeout(() => el.classList.remove("search-focus-highlight"), 2100);
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [focusParam]);

  return (
    <div className="flex flex-col">
      <AboutTopSectionComponent />

      <MarqueeComponent />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <section className="mt-4 lg:mt-12">
          <TitleComponent text="Work Experience" />
          <div>
            {experiences.map(({ id, ...rest }, index) => (
              <ExperienceComponent key={id} id={id} index={index} {...rest} />
            ))}
          </div>
        </section>

        <section className="mt-4 lg:mt-12">
          <TitleComponent text="My Qualification" />
          <div>
            {qualifications.map(({ id, ...rest }, index) => (
              <EducationComponent key={id} id={id} index={index} {...rest} />
            ))}
          </div>
        </section>
      </div>

      <MarqueeComponent />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <section className="mt-4 lg:mt-12">
          <TitleComponent text="Latest Project" />
          <div>
            {latestProjects.map(({ id, ...rest }, index) => (
              <ProjectComponent
                key={id}
                id={id}
                domId={`project-${id}`}
                index={index}
                {...rest}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutScreen;
