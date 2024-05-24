import React from "react";

const ButtonComponent = ({ text, customStyle }) => {
  return (
    <div className="hidden md:block">
      <button
        className={`${customStyle} bg-black-500 border-gold text-white px-4 py-2 rounded hover:bg-gold`}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonComponent;
