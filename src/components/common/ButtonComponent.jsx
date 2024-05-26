import React from "react";

const ButtonComponent = ({
  text,
  normal,
  href,
  hidden,
  blank,
  type,
  onClick,
  download,
}) => {
  const buttonClass = !normal
    ? "border cursor-pointer border-yellow-700 text-white capitalize px-6 py-2 rounded-full hover:bg-yellow-700"
    : "bg-yellow-700 cursor-pointer text-white capitalize px-6 py-2 mr-4 rounded-full hover:bg-gold shadow-md shadow-gray-700";

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
        download={download ? download : undefined}
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
