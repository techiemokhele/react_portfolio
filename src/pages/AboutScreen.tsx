import React from "react";

import {
  experiences,
  projects,
  qualifications,
} from "@/components/assets/portfolioData";

import AboutTopSectionComponent from "@/components/section/about/AboutTopSectionComponent";
import EducationComponent from "@/components/section/about/EducationComponent";
import ExperienceComponent from "@/components/section/about/ExperienceComponent";
import ProjectComponent from "@/components/section/about/ProjectComponent";
import MarqueeComponent from "@/components/common/MarqueeComponent";
import TitleComponent from "@/components/common/TitleComponent";

const AboutScreen: React.FC = () => {
  const latestProjects = projects.slice(-3).reverse();

  return (
    <div className="flex flex-col">
      <AboutTopSectionComponent />

      <div className="w-full mt-10">
        <MarqueeComponent />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Experience Section */}
        <div className="mt-4 lg:mt-12">
          <TitleComponent text={"Work Experience"} />
          <div>
            {experiences.map((experience, index) => (
              <ExperienceComponent
                key={experience.id}
                index={index}
                companyName={experience.companyName}
                companyLogo={experience.companyLogo}
                position={experience.position}
                location={experience.location}
                startDate={experience.startDate}
                endDate={experience.endDate}
                duties={experience.duties}
                skills={experience.skills}
                onsite={experience.onsite}
              />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-4 lg:mt-12">
          <TitleComponent text={"My Qualification"} />
          <div>
            {qualifications.map((qualification, index) => (
              <EducationComponent
                key={qualification.id}
                index={index}
                schoolName={qualification.schoolName}
                schoolLogo={qualification.schoolLogo}
                qualification={qualification.qualification}
                course={qualification.course}
                location={qualification.location}
                startDate={qualification.startDate}
                endDate={qualification.endDate}
                duties={qualification.duties}
                skills={qualification.skills}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mt-10">
        <MarqueeComponent />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Latest Projects */}
        <div className="mt-4 lg:mt-12">
          <TitleComponent text={"Latest Project"} />
          <div>
            {latestProjects.map((project, index) => (
              <ProjectComponent
                key={project.id}
                index={index}
                projectName={project.projectName}
                projectThumbnail={project.projectThumbnail}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                type={project.type}
                languages={project.languages}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
