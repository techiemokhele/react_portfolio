import React from "react";

const ButtonComponent = ({
  text,
  normal,
  href,
  hidden,
  blank,
  type,
  onClick,
}) => {
  const buttonClass = !normal
    ? "border cursor-pointer border-gold text-white capitalize px-6 py-3 rounded-full hover:bg-gold"
    : "bg-gold cursor-pointer text-white capitalize px-6 py-3 mr-4 rounded-full hover:bg-gold";

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className={hidden ? "hidden md:block" : "md:block"}>
      <a
        href={href}
        className={buttonClass}
        target={blank ? "_blank" : "_self"}
        rel="noreferrer"
        type={type ? type : "button"}
        onClick={handleClick}
      >
        {text}
      </a>
    </div>
  );
};

export default ButtonComponent;
