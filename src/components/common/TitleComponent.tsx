import React from "react";

const TitleComponent: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-4 mb-2">
    <div className="w-1 h-10 bg-gradient-to-b from-gold to-yellow-600 rounded-full" />
    <h2 className="text-3xl lg:text-4xl font-extrabold text-white">{text}</h2>
  </div>
);

export default TitleComponent;
