import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useInView from "@/hooks/useInView";

interface ProjectComponentProps {
  projectName: string;
  projectThumbnail: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  type: string;
  languages: string[];
  index?: number;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({
  projectName,
  projectThumbnail,
  title,
  description,
  githubLink,
  liveLink,
  type,
  languages,
  index = 0,
}) => {
  const isOddIndex = index % 2 !== 0;
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`my-6 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <Card className="overflow-hidden border-l-4 border-l-gold bg-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Text */}
          <div
            className={`p-6 lg:p-8 flex flex-col justify-center text-white ${
              isOddIndex ? "md:order-2" : ""
            }`}
          >
            <h2 className="lg:text-3xl text-2xl font-bold text-gold mb-2">
              {projectName}
            </h2>
            <h5 className="lg:text-lg text-md font-semibold mb-3 text-white/90">
              {title} - {type}
            </h5>
            <p className="text-sm font-light text-gray-300 mb-4">
              {description}
            </p>

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

          {/* Image */}
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
