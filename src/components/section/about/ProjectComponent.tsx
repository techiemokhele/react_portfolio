import React, { useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useInView from "@/hooks/useInView";
import HighlightText from "@/components/common/HighlightText";
import type { ProjectComponentProps } from "@/types/props";

const ProjectComponent: React.FC<ProjectComponentProps> = ({
  domId,
  projectName,
  projectThumbnail,
  title,
  description,
  githubLink,
  liveLink,
  type,
  languages,
  index = 0,
  searchTerm = "",
}) => {
  const isOddIndex = index % 2 !== 0;
  const [ref, inView] = useInView<HTMLDivElement>();
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      ref={ref}
      id={domId}
      className={`my-6 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <Card className="overflow-hidden border-l-4 border-l-gold bg-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div
            className={`p-6 lg:p-8 flex flex-col justify-center text-white ${
              isOddIndex ? "md:order-2" : ""
            }`}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold mb-2">
              <HighlightText text={projectName} term={searchTerm} />
            </h2>
            <h5 className="lg:text-lg text-md font-semibold mb-3 text-white/90">
              {title} - {type}
            </h5>
            <p
              className={`text-sm font-light text-gray-300 mb-1 leading-relaxed ${
                !expanded ? "line-clamp-3" : ""
              }`}
            >
              <HighlightText text={description} term={searchTerm} />
            </p>

            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-1 text-xs text-gold hover:text-yellow-400 transition-colors mb-4 mt-1 font-medium"
              aria-expanded={expanded}
              aria-label={
                expanded ? "Show less description" : "Show full description"
              }
            >
              {expanded ? (
                <>
                  View Less <ChevronUp className="w-3 h-3" aria-hidden="true" />
                </>
              ) : (
                <>
                  View More{" "}
                  <ChevronDown className="w-3 h-3" aria-hidden="true" />
                </>
              )}
            </button>

            <div className="flex flex-wrap gap-3 my-4">
              {githubLink !== "#" && (
                <Button variant="outline" size="sm" asChild>
                  <a href={githubLink} target="_blank" rel="noreferrer">
                    <Github className="w-4 h-4 mr-1.5" />
                    GitHub
                  </a>
                </Button>
              )}
              {liveLink !== "#" && (
                <Button size="sm" asChild>
                  <a href={liveLink} target="_blank" rel="noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1.5" />
                    Online
                  </a>
                </Button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {languages.map((language, idx) => (
                <Badge key={idx} variant="outline">
                  {language}
                </Badge>
              ))}
            </div>
          </div>

          <div
            className={`p-4 flex items-center justify-center ${
              isOddIndex ? "md:order-1" : ""
            }`}
          >
            <img
              src={projectThumbnail}
              alt={projectName}
              className="w-full h-[280px] lg:h-[48vh] object-cover rounded-lg"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectComponent;
