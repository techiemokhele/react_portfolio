import React from "react";
import MarqueeComponent from "../components/MarqueeComponent";

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
        <div className="bg-gray-300 p-5 hidden md:block">Content 2</div>
      </div>

      {/* Marquee Section */}
      <div className="w-full mt-10">
        <MarqueeComponent />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 mt-10">
        <div className="bg-gray-400 p-5">Content 3</div>
        <div className="bg-gray-500 p-5">Content 4</div>
      </div>
    </div>
  );
};

export default AboutScreen;
