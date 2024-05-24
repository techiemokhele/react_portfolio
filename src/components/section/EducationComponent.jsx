import React from "react";

const EducationComponent = () => {
  return (
    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 mt-10">
      {/* Image Section */}
      <div className="p-5 flex items-center justify-center">
        <img
          src="/images/portfolio/video.png"
          alt="Content 3"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="bg-transparent p-5 flex flex-col justify-center text-white">
        <h2 className="text-4xl font-bold text-gold mb-4">
          Diploma in Information Technology
        </h2>
        <h5 className="text-xl font-semibold mb-4">
          Damelin College - Boksburg, South Africa
        </h5>
        <h5 className="text-xl font-semibold mb-4">
          February 2016 - April 2019
        </h5>
        <p className="text-lg font-normal mb-2">
          I pursued Information Technology at Damelin, honing skills in computer
          science, programming, database management, and network administration.
          Through hands-on learning, I gained expertise in software development,
          system analysis, and IT project management, preparing for industry
          challenges. Emphasis was on emerging technologies, engaging in
          projects to apply theoretical knowledge practically, developing
          innovative solutions. Damelin provided a comprehensive IT education,
          equipping me with skills vital for navigating technical landscapes
          with confidence and proficiency.
        </p>
      </div>
    </div>
  );
};

export default EducationComponent;
