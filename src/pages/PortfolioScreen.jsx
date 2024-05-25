import React, { useState } from "react";
import {
  projects,
  mobileProjects,
  gameProjects,
  cmsProjects,
} from "../components/assets/data";

//components
import PortfolioTopBannerComponent from "../components/section/portfolio/PortfolioTopBannerComponent";
import ProjectComponent from "../components/section/about/ProjectComponent";
import MarqueeComponent from "../components/common/MarqueeComponent";
import ButtonComponent from "../components/common/ButtonComponent";

const PortfolioScreen = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleShowAllProjects = () => {
    setShowAllProjects((prevState) => !prevState);
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 2);
  const displayedMobileProjects = showAllProjects
    ? mobileProjects
    : mobileProjects.slice(0, 2);
  const displayedGameProjects = showAllProjects
    ? gameProjects
    : gameProjects.slice(0, 2);
  const displayedCMSProjects = showAllProjects
    ? cmsProjects
    : cmsProjects.slice(0, 2);

  return (
    <div>
      {/* Top Banner section */}
      <div className="w-full mb-10">
        <PortfolioTopBannerComponent />
      </div>

      {/* Website development */}
      <div className="mt-16">
        <h1 className="text-white font-bold sm:text-6xl text-5xl my-4 px-3">
          Website Projects
        </h1>

        <div>
          {displayedProjects.map((project, index) => (
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

        {projects.length > 2 && (
          <div className="flex justify-center mt-10">
            <ButtonComponent
              blank={false}
              href="#"
              normal={true}
              text={showAllProjects ? "Show Less" : "See More"}
              onClick={toggleShowAllProjects}
            />
          </div>
        )}
      </div>

      <div className="w-full mt-10">
        <MarqueeComponent />
      </div>

      {/* Mobile development */}
      <div className="mt-16">
        <h1 className="text-white font-bold sm:text-6xl text-5xl my-4 px-3">
          Mobile Projects
        </h1>

        <div>
          {displayedMobileProjects.map((project, index) => (
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

        {mobileProjects.length > 2 && (
          <div className="flex justify-center mt-10">
            <ButtonComponent
              blank={false}
              href="#"
              normal={true}
              text={showAllProjects ? "Show Less" : "See More"}
              onClick={toggleShowAllProjects}
            />
          </div>
        )}
      </div>

      <div className="w-full mt-10">
        <MarqueeComponent />
      </div>

      {/* Game development */}
      <div className="mt-16">
        <h1 className="text-white font-bold sm:text-6xl text-5xl my-4 px-3">
          Gaming Projects
        </h1>

        <div>
          {displayedGameProjects.map((project, index) => (
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

        {gameProjects.length > 2 && (
          <div className="flex justify-center mt-10">
            <ButtonComponent
              blank={false}
              href="#"
              normal={true}
              text={showAllProjects ? "Show Less" : "See More"}
              onClick={toggleShowAllProjects}
            />
          </div>
        )}
      </div>

      <div className="w-full mt-10">
        <MarqueeComponent />
      </div>

      {/* CMS development */}
      <div className="mt-16">
        <h1 className="text-white font-bold sm:text-6xl text-5xl my-4 px-3">
          CMS Projects
        </h1>

        <div>
          {displayedCMSProjects.map((project, index) => (
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

        {cmsProjects.length > 2 && (
          <div className="flex justify-center mt-10">
            <ButtonComponent
              blank={false}
              href="#"
              normal={true}
              text={showAllProjects ? "Show Less" : "See More"}
              onClick={toggleShowAllProjects}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioScreen;
