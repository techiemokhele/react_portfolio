import React from "react";

import { experiences, projects, qualifications } from "@/data/portfolioData";

import AboutTopSectionComponent from "@/components/section/about/AboutTopSectionComponent";
import EducationComponent from "@/components/section/about/EducationComponent";
import ExperienceComponent from "@/components/section/about/ExperienceComponent";
import ProjectComponent from "@/components/section/about/ProjectComponent";
import MarqueeComponent from "@/components/common/MarqueeComponent";
import TitleComponent from "@/components/common/TitleComponent";

const AboutScreen: React.FC = () => {
  const latestProjects = [...projects].slice(-3).reverse();

  return (
    <div className="flex flex-col">
      <AboutTopSectionComponent />

      <div className="w-full mt-10">
        <MarqueeComponent />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <section className="mt-4 lg:mt-12">
          <TitleComponent text="Work Experience" />
          <div>
            {experiences.map(({ id, ...rest }, index) => (
              <ExperienceComponent key={id} index={index} {...rest} />
            ))}
          </div>
        </section>

        <section className="mt-4 lg:mt-12">
          <TitleComponent text="My Qualification" />
          <div>
            {qualifications.map(({ id, ...rest }, index) => (
              <EducationComponent key={id} index={index} {...rest} />
            ))}
          </div>
        </section>
      </div>

      <div className="w-full mt-10">
        <MarqueeComponent />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <section className="mt-4 lg:mt-12">
          <TitleComponent text="Latest Project" />
          <div>
            {latestProjects.map(({ id, ...rest }, index) => (
              <ProjectComponent key={id} index={index} {...rest} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutScreen;
