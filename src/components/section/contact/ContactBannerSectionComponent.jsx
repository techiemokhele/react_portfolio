import React from "react";
import ButtonComponent from "../../common/ButtonComponent";

const ContactBannerSectionComponent = () => {
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
          <h1 className="text-2xl uppercase font-semibold mb-4">Contact Me</h1>

          <h1 className="text-6xl my-6 font-bold lg:w-[55%]">
            <span className="text-gold">Let's</span> design the world we want to{" "}
            <span className="text-gold">live</span> in,{" "}
            <span className="text-gold">together</span>.
          </h1>

          <p className="text-sm mt-2 font-thin lg:w-[60%]">
            Whether you're eager to kickstart a potential project with me, delve
            into specific tasks tailored to your requirements, or simply extend
            a greeting, everything begins right here. Don't hesitate to contact
            me, and I'll strive to respond promptly, usually within one business
            day.
          </p>

          <div className="flex justify-center mt-10 lg:justify-start">
            <div className="mx-1">
              <ButtonComponent
                blank={true}
                href={"https://api.whatsapp.com/send?phone=27648473363"}
                normal={true}
                text={"Chat On Whatsapp"}
              />
            </div>
            <div className="mx-1">
              <ButtonComponent
                blank={true}
                href={"tel:27648473363"}
                normal={true}
                text={"Make Urgent Call"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBannerSectionComponent;
