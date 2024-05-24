//data
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

const PortfolioScreen = () => {
  const latestProjects = projects.slice(-3);
  const latestMobileProjects = mobileProjects.slice(-3);
  const latestGameProjects = gameProjects.slice(-3);
  const latestCMSProjects = cmsProjects.slice(-3);

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

      <div className="w-full mt-10">
        <MarqueeComponent />
      </div>

      {/* Mobile development */}
      <div className="mt-16">
        <h1 className="text-white font-bold sm:text-6xl text-5xl my-4 px-3">
          Mobile Projects
        </h1>

        <div>
          {latestMobileProjects.map((project, index) => (
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

      <div className="w-full mt-10">
        <MarqueeComponent />
      </div>

      {/* Game development */}
      <div className="mt-16">
        <h1 className="text-white font-bold sm:text-6xl text-5xl my-4 px-3">
          Gaming Projects
        </h1>

        <div>
          {latestGameProjects.map((project, index) => (
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

      <div className="w-full mt-10">
        <MarqueeComponent />
      </div>

      {/* CMS development */}
      <div className="mt-16">
        <h1 className="text-white font-bold sm:text-6xl text-5xl my-4 px-3">
          CMS Projects
        </h1>

        <div>
          {latestCMSProjects.map((project, index) => (
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

export default PortfolioScreen;
