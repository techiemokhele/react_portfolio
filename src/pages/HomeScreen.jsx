import React from "react";
import ButtonComponent from "../components/common/ButtonComponent";

const HomeScreen = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          filter: "blur(5px)", // Apply blur effect to the background image
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center text-white absolute inset-0">
        <span className="text-sm font-semibold rounded-full p-3 mb-20 bg-gold inline-block">
          Frontend Developer
        </span>
        <h1 className="text-6xl font-bold mb-4 text-center">
          Hi! I Am <span className="block mt-4">Neo Mokhele</span>
        </h1>
        <p className="text-md text-center mt-3 px-10">
          As a frontend developer, I excel in HTML, CSS, and JavaScript, with
          proficiency in React and responsive design. With a passion for
          creating intuitive user interfaces, I leverage continuous learning to
          stay ahead in this dynamic field. Experienced in agile environments, I
          thrive on collaboration and problem-solving, delivering impactful
          solutions.
        </p>

        {/* Buttons */}
        <div className="flex justify-center mt-20 ">
          <ButtonComponent href={"/about"} normal={true} text={"Learn More"} />
          <ButtonComponent
            href={"/portfolio"}
            normal={false}
            text={"Portfolio"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
