import React from "react";
import ButtonComponent from "../../common/ButtonComponent";

const PortfolioTopBannerComponent = () => {
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
      <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start">
        <div className="container mx-auto px-4 py-8 text-white text-center md:text-left">
          {/* Content */}
          <h1 className="text-2xl uppercase font-semibold mb-4">My Projects</h1>

          <h1 className="lg:text-6xl text-5xl my-6 font-bold lg:w-[55%]">
            Explore My <span className="text-gold">Creative Work</span> and
            Collaborations.
          </h1>

          <p className="text-sm mt-2 font-thin lg:w-[60%]">
            Dive into my portfolio to see the diverse range of projects I've
            worked on. From innovative solutions to creative designs, discover
            how we can collaborate to bring your vision to life. Feel free to
            reach out, and let's discuss how we can create something amazing
            together.
          </p>

          <div className="flex justify-center mt-10 lg:justify-start">
            <div className="mx-1">
              <ButtonComponent
                blank={false}
                hidden={true}
                href={"/blog"}
                normal={true}
                text={"Read Latest Blog"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTopBannerComponent;
