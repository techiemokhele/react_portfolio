import React from "react";

const ExperienceComponent = ({
  companyName,
  companyLogo,
  position,
  location,
  startDate,
  endDate,
  duties,
  onsite,
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
          <h2 className="text-4xl font-bold text-gold mb-4">{position}</h2>
          <h5 className="text-xl font-semibold mb-4">
            {companyName} - {location}
          </h5>
          <h5 className="text-xl font-semibold mb-4">
            {startDate} - {endDate}
          </h5>
          <p className="text-lg font-thin mb-2">{duties}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-gray-700 text-white py-1 px-3 rounded-full text-sm">
              Working {onsite ? "On-site" : "Remotely"}
            </span>
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`p-5 flex items-center justify-center ${
            isOddIndex ? "md:order-1" : ""
          }`}
        >
          <img
            src={companyLogo}
            alt={companyName}
            className="image-fluid object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;