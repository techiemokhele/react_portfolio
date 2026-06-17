import React, { useState } from "react";

import {
  projects,
  mobileProjects,
  gameProjects,
  cmsProjects,
} from "@/components/assets/portfolioData";
import type { Project } from "@/types";

import PortfolioTopBannerComponent from "@/components/section/portfolio/PortfolioTopBannerComponent";
import ProjectComponent from "@/components/section/about/ProjectComponent";
import MarqueeComponent from "@/components/common/MarqueeComponent";
import NotFoundComponent from "@/components/common/NotFoundComponent";
import TitleComponent from "@/components/common/TitleComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CATEGORIES = ["website", "mobile", "game", "cms"] as const;

const PortfolioScreen: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);

  const toggleShowAllProjects = (category: string) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setSearching(term !== "");
  };

  const filterProjects = (projectArray: Project[]) => {
    const term = searchTerm.toLowerCase();
    return projectArray.filter(
      (project) =>
        project.projectName.toLowerCase().includes(term) ||
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.type.toLowerCase().includes(term)
    );
  };

  return (
    <div>
      <div className="w-full mb-10">
        <PortfolioTopBannerComponent />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Search input */}
        <div className="flex justify-center items-center mb-8">
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full lg:w-[60%] h-12"
          />
        </div>

        {/* Category filters */}
        {!searching && (
          <div className="flex flex-wrap justify-center gap-3 my-6">
            <Button
              variant={!expandedCategory ? "default" : "outline"}
              onClick={() => setExpandedCategory(null)}
            >
              All
            </Button>
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                variant={expandedCategory === cat ? "default" : "outline"}
                onClick={() => setExpandedCategory(cat)}
                className="capitalize"
              >
                {cat}
              </Button>
            ))}
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
            {[
              { category: "Website", projectArray: projects },
              { category: "Mobile", projectArray: mobileProjects },
              { category: "Game", projectArray: gameProjects },
              { category: "CMS", projectArray: cmsProjects },
            ]
              .filter(
                ({ category }) =>
                  !expandedCategory ||
                  category.toLowerCase() === expandedCategory
              )
              .map(({ category, projectArray }) => (
                <div className="mt-16" key={category}>
                  <TitleComponent text={`${category} Projects`} />

                  <div>
                    {[...projectArray]
                      .filter(
                        (project) =>
                          !expandedCategory ||
                          project.type.toLowerCase() === expandedCategory
                      )
                      .reverse()
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
                      <Button
                        onClick={() =>
                          toggleShowAllProjects(category.toLowerCase())
                        }
                      >
                        {expandedCategory === category.toLowerCase()
                          ? "Show Less"
                          : "See More"}
                      </Button>
                    </div>
                  )}
                </div>
              ))}
          </>
        )}
      </div>

      <div className="w-full mt-10">
        <MarqueeComponent />
      </div>
    </div>
  );
};

export default PortfolioScreen;
