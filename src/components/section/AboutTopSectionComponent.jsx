import React from "react";
import ButtonComponent from "../common/ButtonComponent";

const AboutSectionComponent = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1624749076747-79f933b8b671?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          filter: "blur(5px)",
        }}
      ></div>

      {/* Blur Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          backdropFilter: "blur(5px) brightness(0.5)",
        }}
      ></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="container mx-auto px-4 py-8 text-white text-center md:text-left">
          {/* Content */}
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 lg:w-[80%]">
            Bringing Your Ideas To Life Through UI Design
          </h1>
          <div className="flex justify-center my-20 lg:justify-start">
            <div className="mx-1">
              <ButtonComponent
                blank={false}
                href={"/contact"}
                normal={true}
                text={"Lets work together"}
              />
            </div>
            <div className="mx-1">
              <ButtonComponent
                blank={false}
                href={"/portfolio"}
                normal={false}
                text={"See my work"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionComponent;
