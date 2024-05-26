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
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          {/* Left Side */}
          <div className="flex flex-col lg:pl-4 items-center md:items-start text-center md:text-left">
            <div className="lg:w-40 lg:h-40 h-28 w-28 lg:mt-0 mt-5 border rounded-full overflow-hidden border-gold lg:border-l-[20px] lg:border-r-0 lg:border-t-2 lg:border-b-[20px] border-t-[8px] border-b-0 mb-6">
              <img
                src={"/images/neo.jpg"}
                alt="Neo Mokhele"
                className="w-full h-full object-cover"
                style={{ margin: "auto" }}
              />
            </div>

            <h1 className="lg:text-6xl text-2xl lg:px-0 px-2 font-bold lg:mb-4 mb-2">
              <span className="text-gold">Elevating</span> user interaction
              through innovative frontend development{" "}
              <span className="text-gold">solutions</span>.
            </h1>

            <div className="lg:ml-0 ml-4 mb-2 mt-4 lg-mt-0 lg:mb-6">
              <ButtonComponent
                href={"/about"}
                normal={true}
                text={"Let's Explore"}
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center md:justify-end items-center">
            <div className="bg-gold lg:rounded-bl-[40px] lg:rounded-tr-[0px] lg:rounded-tl-[40px] rounded-tr-[40px] bg-opacity-50 lgp-6 p-5 hover:bg-yellow-700 hover:bg-opacity-50 transition duration-300 ease-in-out">
              <h1 className="lg:text-4xl text-2xl font-bold mb-4">
                Hi! I Am Neo Mokhele
              </h1>
              <p className="lg:mt-4  mt-2 font-thin text-[12px] lg:text-[16px] ">
                As a frontend developer, I work with HTML, CSS, JavaScript,
                ReactJs, React Native, NodeJs, NextJs, PHP, Laravel, WordPress,
                MongoDB, TypeScript, GitHub, and MySQL. I am passionate about
                building user-friendly and visually appealing mobile and web
                applications.
              </p>
              <p className="lg:mt-4 mt-2 font-thin text-[12px] lg:text-[16px] ">
                My skill set includes modern frontend technologies and
                frameworks, allowing me to create responsive and dynamic mobile
                and web experiences that engage users and drive success for
                projects.
              </p>

              <p className="lg:mt-4 mt-2 font-thin text-[12px] lg:text-[16px] ">
                With a passion for creating intuitive user interfaces, I
                leverage continuous learning to stay ahead in this dynamic
                field. By staying abreast of the latest trends and technologies,
                I ensure that my designs are not only visually appealing but
                also highly functional and user-friendly.
              </p>
            </div>
          </div>

          <div className="hidden mb-6">
            <ButtonComponent
              href={"/about"}
              normal={true}
              text={"Learn More"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
