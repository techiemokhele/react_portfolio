import React from "react";

//data
import {
  experiences,
  projects,
  qualifications,
} from "../components/assets/portfolioData";

//component4
import AboutTopSectionComponent from "../components/section/about/AboutTopSectionComponent";
import EducationComponent from "../components/section/about/EducationComponent";
import ExperienceComponent from "../components/section/about/ExperienceComponent";
import ProjectComponent from "../components/section/about/ProjectComponent";
import MarqueeComponent from "../components/common/MarqueeComponent";

const AboutScreen = () => {
  const latestProjects = projects.slice(-1).reverse();

  return (
    <div className="flex flex-col">
      {/* Top Section */}
      <div className="w-full">
        <AboutTopSectionComponent />
      </div>

      <div className="w-full mt-10">
        <MarqueeComponent />
      </div>

      {/* Experience Section */}
      <div className="mt-16">
        <h1 className="text-white font-bold sm:text-6xl text-5xl my-4 px-3">
          Work Experience
        </h1>

        <div>
          {experiences.map((experience, index) => (
            <ExperienceComponent
              key={index}
              index={index}
              companyName={experience.companyName}
              companyLogo={experience.companyLogo}
              position={experience.position}
              location={experience.location}
              startDate={experience.startDate}
              endDate={experience.endDate}
              duties={experience.duties}
              onsite={experience.onsite}
            />
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-16">
        <h1 className="text-white font-bold sm:text-6xl text-5xl my-4 px-3">
          My Qualification
        </h1>

        <div>
          {qualifications.map((experience, index) => (
            <EducationComponent
              key={index}
              index={index}
              schoolName={experience.schoolName}
              schoolLogo={experience.schoolLogo}
              qualification={experience.qualification}
              course={experience.course}
              location={experience.location}
              startDate={experience.startDate}
              endDate={experience.endDate}
              duties={experience.duties}
              skills={experience.skills}
            />
          ))}
        </div>
      </div>

      <div className="w-full mt-10">
        <MarqueeComponent />
      </div>

      {/* Latest Section */}
      <div className="mt-16">
        <h1 className="text-white font-bold sm:text-6xl text-5xl my-4 px-3">
          Latest Project
        </h1>

        <div>
          {latestProjects.map((project, index) => (
            <ProjectComponent
              key={index}
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
  );
};

export default AboutScreen;
