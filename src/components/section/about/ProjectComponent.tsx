import React, { useState, useRef, useEffect } from "react";
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

  /* Detect whether the description actually overflows 3 lines.
     We check scrollHeight vs clientHeight while the clamp is active
     (on mount, before any expansion). */
  const descRef = useRef<HTMLParagraphElement>(null);
  const [isClamped, setIsClamped] = useState(false);

  useEffect(() => {
    const el = descRef.current;
    if (!el) return;
    // Brief delay ensures the browser has applied line-clamp before we measure
    const timer = requestAnimationFrame(() => {
      setIsClamped(el.scrollHeight > el.clientHeight);
    });
    return () => cancelAnimationFrame(timer);
  }, []); // only on mount — description is static per card instance

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
          {/* Text */}
          <div
            className={`p-5 sm:p-6 lg:p-8 flex flex-col justify-center text-white ${
              isOddIndex ? "md:order-2" : ""
            }`}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold mb-1.5">
              <HighlightText text={projectName} term={searchTerm} />
            </h2>
            <h5 className="text-sm sm:text-base lg:text-lg font-semibold mb-3 text-white/80">
              {title} &mdash; {type}
            </h5>

            {/* Description with View More / View Less */}
            <p
              ref={descRef}
              className={`text-xs sm:text-sm font-light text-gray-300 mb-1 leading-relaxed ${
                !expanded ? "line-clamp-3" : ""
              }`}
            >
              <HighlightText text={description} term={searchTerm} />
            </p>

            {isClamped && (
              <button
                onClick={() => setExpanded((v) => !v)}
                className="self-start flex items-center gap-1 text-xs text-gold hover:text-yellow-400 transition-colors mt-1 mb-3 font-medium"
                aria-expanded={expanded}
                aria-label={expanded ? "Show less description" : "Show full description"}
              >
                {expanded ? (
                  <>View Less <ChevronUp className="w-3 h-3" aria-hidden="true" /></>
                ) : (
                  <>View More <ChevronDown className="w-3 h-3" aria-hidden="true" /></>
                )}
              </button>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-3 mb-4">
              {githubLink !== "#" && (
                <Button variant="outline" size="sm" asChild>
                  <a href={githubLink} target="_blank" rel="noreferrer">
                    <Github className="w-4 h-4 mr-1.5" aria-hidden="true" />
                    GitHub
                  </a>
                </Button>
              )}
              {liveLink !== "#" && (
                <Button size="sm" asChild>
                  <a href={liveLink} target="_blank" rel="noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1.5" aria-hidden="true" />
                    Live
                  </a>
                </Button>
              )}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5">
              {languages.map((language, idx) => (
                <Badge key={idx} variant="outline" className="text-[10px] sm:text-xs">
                  {language}
                </Badge>
              ))}
            </div>
          </div>

          {/* Thumbnail */}
          <div
            className={`p-4 flex items-center justify-center ${
              isOddIndex ? "md:order-1" : ""
            }`}
          >
            <img
              src={projectThumbnail}
              alt={projectName}
              className="w-full h-[220px] sm:h-[260px] lg:h-[45vh] object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectComponent;
