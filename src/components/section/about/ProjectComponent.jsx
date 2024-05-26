import React from "react";
import ButtonComponent from "../../common/ButtonComponent";

const ProjectComponent = ({
  projectName,
  projectThumbnail,
  title,
  description,
  githubLink,
  liveLink,
  type,
  languages,
  index,
}) => {
  const isOddIndex = index % 2 !== 0;

  return (
    <div className="flex-col">
      <div className="grid grid-rows-1 md:grid-rows-1 md:grid-cols-2 gap-4 lg:mt-5">
        {/* Text Section */}
        <div
          className={`bg-transparent p-5 flex flex-col justify-center text-white ${
            isOddIndex ? "md:order-2" : ""
          }`}
        >
          <h2 className="lg:text-4xl text-3xl font-bold text-gold mb-4">
            {projectName}
          </h2>
          <h5 className="lg:text-2xl text-md font-semibold lg:mb-4 mb-2">
            {title} - {type}
          </h5>
          <p className="text-sm font-thin mb-2">{description}</p>

          {/* Buttons for GitHub and Live Links */}
          <div className="flex justify-between my-6">
            {githubLink !== "#" && (
              <ButtonComponent
                blank={true}
                href={githubLink}
                normal={true}
                text={"Github"}
              />
            )}

            {liveLink !== "#" && (
              <ButtonComponent
                blank={true}
                href={liveLink}
                normal={githubLink !== "#" ? false : true}
                text={"Online"}
              />
            )}
          </div>

          {/* Languages */}
          <div className="flex flex-wrap gap-2 mt-4">
            {languages.map((language, idx) => (
              <span
                className="bg-yellow-700 text-white py-1 px-3 rounded lg:text-sm text-[10px]"
                key={idx}
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`lg:p-5 p-3 flex items-center justify-center hover:shadow-md hover:shadow-yellow-700 ${
            isOddIndex ? "md:order-1" : ""
          }`}
        >
          <img
            src={projectThumbnail}
            alt={projectName}
            className="w-full h-[280px] lg:h-[55vh] lg:object-stretch object-fit rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
