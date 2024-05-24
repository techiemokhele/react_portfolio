import React from "react";

//component
import MarqueeComponent from "../components/common/MarqueeComponent";
import EducationComponent from "../components/section/EducationComponent";
import ExperienceComponent from "../components/section/ExperienceComponent";

import { experiences } from "../components/assets/data";

const AboutScreen = () => {
  return (
    <div className="flex flex-col">
      {/* Top Section */}
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4">
        <div className="bg-transparent flex flex-col">
          {/* Text Section */}
          <div className="p-5 overflow-hidden">
            <p className="sm:text-6xl text-4xl text-white font-bold">
              Bringing Your Ideas To Life Through UI Design
            </p>
            <div className="my-10 py-3 px-5 items-center justify-center bg-gold rounded-md w-56">
              <p className="text-white font-bold text-md">
                Let's Work Together
              </p>
            </div>
          </div>
          {/* Number Section */}
          <div className="mt-4 px-5 flex flex-row justify-between flex-wrap">
            <div className="h-32 w-32 bg-gold flex justify-center text-center items-center rounded-md mb-4">
              <div className="py-4">
                <span className="text-white font-bold text-5xl">4+</span>
                <p className="text-white font-normal text-xs mt-2">
                  Years of Experience
                </p>
              </div>
            </div>
            <div className="h-32 w-32 bg-gold flex justify-center text-center items-center rounded-md mb-4">
              <div className="py-4">
                <span className="text-white font-bold text-5xl">99+</span>
                <p className="text-white font-normal text-xs mt-2">
                  Completed Projects
                </p>
              </div>
            </div>
            <div className="h-32 w-32 bg-gold flex justify-center text-center items-center rounded-md mb-4">
              <div className="py-4">
                <span className="text-white font-bold text-5xl">10+</span>
                <p className="text-white font-normal text-xs mt-2">
                  Mastered Languages
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-transparent p-5 mt-5">
          <div className="flex">
            {/* Left Image Section */}
            <div className="flex-shrink-0 w-1/2">
              <img
                src="/images/neo.jpg"
                alt="neo-img"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            {/* Right Content Section */}
            <div className="flex flex-col justify-between p-5 w-1/2 text-white font-normal">
              <div className="p-5 mb-4 rounded-full bg-gold">
                <span className="font-bold text-md">Name: </span>
                <br />
                Neo Mokhele
              </div>
              <div className="p-5 mb-4 rounded-full bg-gold">
                <span className="font-bold text-md">Location: </span> <br />
                South Africa
              </div>
              <div className="p-5 mb-4 rounded-full bg-gold">
                <span className="font-bold text-md">Specialisation: </span>
                <br />
                Frontend Development
              </div>
              <div className="p-5 mb-4 rounded-full bg-gold">
                <span className="font-bold text-md">Technologies: </span> <br />
                React, Tailwind CSS, JavaScript
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-10">
        <MarqueeComponent />
      </div>

      {/* Experience Section */}
      <div className="mt-16">
        <h1 className="text-white font-bold sm:text-6xl text-5xl my-4 px-3">
          Work Experience
        </h1>

        <div>
          {experiences.map((experience, index) => (
            <ExperienceComponent
              key={index}
              index={index}
              companyName={experience.companyName}
              companyLogo={experience.companyLogo}
              position={experience.position}
              location={experience.location}
              startDate={experience.startDate}
              endDate={experience.endDate}
              duties={experience.duties}
            />
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-16">
        <h1 className="text-white font-bold sm:text-6xl text-5xl my-4 px-3">
          My Qualification
        </h1>

        <EducationComponent />
      </div>

      {/* Latest Section */}
      <div className="mt-16">
        <h1 className="text-white font-bold sm:text-6xl text-5xl my-4 px-3">
          Latest Project
        </h1>
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 mt-10">
          {/* Content 3 - Image Section */}
          <div className="p-5 flex items-center justify-center">
            <img
              src="/images/portfolio/video.png"
              alt="Content 3"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>

          {/* Content 4 - Text Section */}
          <div className="bg-transparent p-5 flex flex-col justify-center text-white">
            <h2 className="text-4xl font-bold text-gold mb-4">
              Video Conference
            </h2>
            <h5 className="text-xl font-semibold mb-4">
              Web App Design Concept of a Zoom Web App
            </h5>
            <p className="text-lg font-normal mb-2">
              I am excited to announce the launch of my latest web application,
              Video Conference! Using Next.js, React.js, TailwindCSS, and
              TypeScript, I've crafted a seamless and dynamic user experience.
              With Shadcn's sleek UI design and Clerk.com's secure user
              management, plus Stream's video/audio features, it offers an
              immersive online experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
