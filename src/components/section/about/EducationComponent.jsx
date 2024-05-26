import React from "react";

const EducationComponent = ({
  schoolName,
  schoolLogo,
  qualification,
  course,
  location,
  startDate,
  endDate,
  duties,
  skills,
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
            {qualification} <span className="text-white">in</span> {course}
          </h2>
          <h5 className="lg:text-xl text-md font-semibold lg:mb-4 mb-2">
            {schoolName} - {location}
          </h5>
          <h5 className="lg:text-md text-xs font-semibold mb-4">
            {startDate} - {endDate}
          </h5>
          <p className="text-sm font-thin mb-2">{duties}</p>

          {/* skills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-yellow-700 text-white py-1 px-3 rounded lg:text-sm text-[10px]"
              >
                {skill}
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
            src={schoolLogo}
            alt={schoolName}
            className="w-full h-[280px] lg:h-[55vh] lg:object-stretch object-fit rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
