import React from "react";

const TitleComponent = ({ text }) => {
  return (
    <div className="title-container">
      <h1 className="title-text">{text}</h1>
    </div>
  );
};

export default TitleComponent;
