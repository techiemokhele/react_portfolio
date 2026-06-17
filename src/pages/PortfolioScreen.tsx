import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import {
  projects,
  mobileProjects,
  gameProjects,
  cmsProjects,
} from "@/data/portfolioData";
import type { Project } from "@/types";

import PortfolioTopBannerComponent from "@/components/section/portfolio/PortfolioTopBannerComponent";
import ProjectComponent from "@/components/section/about/ProjectComponent";
import MarqueeComponent from "@/components/common/MarqueeComponent";
import NotFoundComponent from "@/components/common/NotFoundComponent";
import TitleComponent from "@/components/common/TitleComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CATEGORIES = ["website", "mobile", "game", "cms"] as const;

const DOM_PREFIX_MAP = [
  { prefix: "project-m-", array: mobileProjects, cat: "mobile" },
  { prefix: "project-g-", array: gameProjects, cat: "game" },
  { prefix: "project-c-", array: cmsProjects, cat: "cms" },
  { prefix: "project-", array: projects, cat: "website" }, // most generic — keep last
] as const;

const PortfolioScreen: React.FC = () => {
  const [searchParams] = useSearchParams();
  const focusParam = searchParams.get("focus");

  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (!focusParam) return;

    const match = DOM_PREFIX_MAP.find(({ prefix }) =>
      focusParam.startsWith(prefix),
    );
    if (match) {
      setExpandedCategory(match.cat);
    }

    const timer = setTimeout(() => {
      const el = document.getElementById(focusParam);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add(
          "ring-2",
          "ring-gold",
          "ring-offset-2",
          "ring-offset-[#0a0a0a]",
        );
        setTimeout(
          () =>
            el.classList.remove(
              "ring-2",
              "ring-gold",
              "ring-offset-2",
              "ring-offset-[#0a0a0a]",
            ),
          2000,
        );
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [focusParam]);

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
        project.type.toLowerCase().includes(term),
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
            <TitleComponent text="Search Results" />
            <div>
              {filterProjects(projects).length > 0 ? (
                filterProjects(projects).map((project, index) => (
                  <ProjectComponent
                    key={project.id}
                    index={index}
                    domId={`project-${project.id}`}
                    projectName={project.projectName}
                    projectThumbnail={project.projectThumbnail}
                    title={project.title}
                    description={project.description}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                    type={project.type}
                    languages={project.languages}
                    searchTerm={searchTerm}
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
              {
                category: "Website",
                projectArray: projects,
                domPrefix: "project-",
              },
              {
                category: "Mobile",
                projectArray: mobileProjects,
                domPrefix: "project-m-",
              },
              {
                category: "Game",
                projectArray: gameProjects,
                domPrefix: "project-g-",
              },
              {
                category: "CMS",
                projectArray: cmsProjects,
                domPrefix: "project-c-",
              },
            ]
              .filter(
                ({ category }) =>
                  !expandedCategory ||
                  category.toLowerCase() === expandedCategory,
              )
              .map(({ category, projectArray, domPrefix }) => (
                <div className="mt-16" key={category}>
                  <TitleComponent text={`${category} Projects`} />
                  <div>
                    {[...projectArray]
                      .filter(
                        (project) =>
                          !expandedCategory ||
                          project.type.toLowerCase() === expandedCategory,
                      )
                      .reverse()
                      .slice(
                        0,
                        expandedCategory === category.toLowerCase()
                          ? projectArray.length
                          : 2,
                      )
                      .map((project, index) => (
                        <ProjectComponent
                          key={project.id}
                          index={index}
                          domId={`${domPrefix}${project.id}`}
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

      <MarqueeComponent />
    </div>
  );
};

export default PortfolioScreen;
