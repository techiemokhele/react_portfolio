import React from "react";
import ButtonComponent from "../common/ButtonComponent";

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
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 mt-10">
        {/* Text Section */}
        <div
          className={`bg-transparent p-5 flex flex-col justify-center text-white ${
            isOddIndex ? "md:order-2" : ""
          }`}
        >
          <h2 className="text-4xl font-bold text-gold mb-4">{projectName}</h2>
          <h5 className="text-xl font-semibold mb-4">
            {title} - {type}
          </h5>
          <p className="text-lg font-thin mb-2">{description}</p>

          {/* Buttons for GitHub and Live Links */}
          <div className="flex justify-between my-4">
            <ButtonComponent
              blank={true}
              href={githubLink}
              normal={true}
              text={"View Github Code"}
            />
            <ButtonComponent
              blank={true}
              href={liveLink}
              normal={false}
              text={"Live Project"}
            />
          </div>

          {/* Languages */}
          <div className="flex flex-wrap gap-2 mt-4">
            {languages.map((language, idx) => (
              <span
                key={idx}
                className="bg-gray-700 text-white py-1 px-3 rounded-full text-sm"
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`p-5 flex items-center justify-center ${
            isOddIndex ? "md:order-1" : ""
          }`}
        >
          <img
            src={projectThumbnail}
            alt={projectName}
            className="image-fluid object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
