import React, { useState } from "react";

// data
import {
  projects,
  mobileProjects,
  gameProjects,
  cmsProjects,
} from "../components/assets/portfolioData";

// components
import PortfolioTopBannerComponent from "../components/section/portfolio/PortfolioTopBannerComponent";
import ProjectComponent from "../components/section/about/ProjectComponent";
import MarqueeComponent from "../components/common/MarqueeComponent";
import ButtonComponent from "../components/common/ButtonComponent";
import NotFoundComponent from "../components/common/NotFoundComponent";
import TitleComponent from "../components/common/TitleComponent";

const PortfolioScreen = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const [focused, setFocused] = useState({});

  const toggleShowAllProjects = (category) => {
    setExpandedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSearching(term !== "");
  };

  const handleFocus = (e) => {
    setFocused({ ...focused, [e.target.name]: true });
  };

  const handleBlur = (e) => {
    setFocused({ ...focused, [e.target.name]: false });
  };

  const filterProjects = (projectArray) => {
    return projectArray.filter((project) => {
      return (
        project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  return (
    <div>
      {/* Top Banner section */}
      <div className="w-full mb-10">
        <PortfolioTopBannerComponent />
      </div>

      {/* Project search input */}
      <div className="flex justify-center items-center mb-6">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-[90%] lg:w-[60%]  text-white border bg-yellow-700 mb-4 ${
            focused.name ? "border-white" : "border-transparent"
          } rounded-lg py-2 px-4 focus:outline-none placeholder-white`}
        />
      </div>

      {/* Category filters */}
      {!searching && (
        <div className="flex flex-wrap justify-center my-6">
          <div className="mr-4 mb-8 lg:mb-0">
            <ButtonComponent
              text="All"
              onClick={() => setExpandedCategory(null)}
              active={
                !expandedCategory ||
                (expandedCategory !== "website" &&
                  expandedCategory !== "mobile" &&
                  expandedCategory !== "game" &&
                  expandedCategory !== "cms")
              }
            />
          </div>

          <div className="mr-4">
            <ButtonComponent
              text="Website"
              onClick={() => setExpandedCategory("website")}
              active={expandedCategory === "website"}
              normal={expandedCategory === "website"}
            />
          </div>

          <div className="mr-4">
            <ButtonComponent
              text="Mobile"
              onClick={() => setExpandedCategory("mobile")}
              active={expandedCategory === "mobile"}
              normal={expandedCategory === "mobile"}
            />
          </div>

          <div className="mr-4">
            <ButtonComponent
              text="Game"
              onClick={() => setExpandedCategory("game")}
              active={expandedCategory === "game"}
              normal={expandedCategory === "game"}
            />
          </div>

          <div className="mr-4">
            <ButtonComponent
              text="CMS"
              onClick={() => setExpandedCategory("cms")}
              active={expandedCategory === "cms"}
              normal={expandedCategory === "cms"}
            />
          </div>
        </div>
      )}

      {searching ? (
        <div className="mt-16">
          <TitleComponent text={"Search Results"} />
          <div>
            {filterProjects(projects).length > 0 ? (
              filterProjects(projects).map((project, index) => (
                <ProjectComponent
                  key={index}
                  projectName={project.projectName}
                  projectThumbnail={project.projectThumbnail}
                  title={project.title}
                  description={project.description}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                  type={project.type}
                  languages={project.languages}
                />
              ))
            ) : (
              <div className="mt-20 mb-10">
                <NotFoundComponent />
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* Render projects by category */}
          {[
            { category: "Website", projectArray: projects },
            { category: "Mobile", projectArray: mobileProjects },
            { category: "Game", projectArray: gameProjects },
            { category: "CMS", projectArray: cmsProjects },
          ]
            .filter(
              ({ category }) =>
                !expandedCategory || category.toLowerCase() === expandedCategory
            )
            .map(({ category, projectArray }) => (
              <div className="mt-16" key={category}>
                <TitleComponent text={`${category} Projects`} />

                <div>
                  {projectArray
                    .filter(
                      (project) =>
                        !expandedCategory ||
                        project.type.toLowerCase() === expandedCategory
                    )
                    .slice(
                      0,
                      expandedCategory === category.toLowerCase()
                        ? projectArray.length
                        : 2
                    )
                    .map((project, index) => (
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

                {projectArray.length > 2 && (
                  <div className="flex justify-center mt-10">
                    <ButtonComponent
                      blank={false}
                      href="#"
                      normal={true}
                      text={
                        expandedCategory === category.toLowerCase()
                          ? "Show Less"
                          : "See More"
                      }
                      onClick={() =>
                        toggleShowAllProjects(category.toLowerCase())
                      }
                    />
                  </div>
                )}
              </div>
            ))}
        </>
      )}

      <div className="w-full mt-10">
        <MarqueeComponent />
      </div>
    </div>
  );
};

export default PortfolioScreen;
