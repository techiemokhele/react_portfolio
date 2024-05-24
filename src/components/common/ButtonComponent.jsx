import React from "react";

const ButtonComponent = ({ text, normal, href, hidden, blank, type }) => {
  const buttonClass = !normal
    ? "border border-gold text-white capitalize px-6 py-3 rounded-full hover:bg-gold"
    : "bg-gold text-white capitalize px-6 py-3 mr-4 rounded-full hover:bg-gold";

  return (
    <div className={hidden ? "hidden md:block" : "md:block"}>
      <a
        href={href}
        className={buttonClass}
        target={blank ? "_blank" : "_self"}
        rel="noreferrer"
        type={type ? type : "button"}
      >
        {text}
      </a>
    </div>
  );
};

export default ButtonComponent;
