import React from "react";
import ButtonComponent from "../components/common/ButtonComponent";

const HomeScreen = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1624749076747-79f933b8b671?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          filter: "blur(5px)",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center text-white absolute inset-0">
        <div className="h-5 w-10 mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#D4AF37"
          >
            <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
          </svg>
        </div>
        <span className="text-md font-semibold rounded-full p-3 mb-12 bg-gold inline-block tracking-widest">
          Frontend Developer
        </span>

        <h1 className="text-6xl font-bold mb-4 text-center">
          Hi! I Am <span className="block mt-4">Neo Mokhele</span>
        </h1>
        <p className="text-md text-center font-thin mt-3 px-10">
          As a frontend developer, I excel in HTML, CSS, and JavaScript, with
          proficiency in React and responsive design. With a passion for
          creating intuitive user interfaces, I leverage continuous learning to
          stay ahead in this dynamic field. Experienced in agile environments, I
          thrive on collaboration and problem-solving, delivering impactful
          solutions.
        </p>

        {/* Buttons */}
        <div className="flex justify-center mt-10 ">
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
