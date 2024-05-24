import React from "react";

const ButtonComponent = ({ text, normal, href, hidden }) => {
  const buttonClass = !normal
    ? "border border-gold text-white px-6 py-3 rounded-full hover:bg-gold"
    : "bg-gold text-white px-6 py-3 mr-4 rounded-full hover:bg-gold";

  return (
    <div className={hidden ? "hidden md:block" : "md:block"}>
      <a href={href} className={buttonClass}>
        {text}
      </a>
    </div>
  );
};

export default ButtonComponent;
