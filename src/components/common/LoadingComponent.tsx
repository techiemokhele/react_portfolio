import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      role="status"
      aria-label="Loading content"
    >
      <h2 className="text-white text-3xl font-bold mb-8">Please wait…</h2>
      <img
        src="/images/loading.gif"
        alt=""
        aria-hidden="true"
        className="w-86 h-64 rounded-md"
      />
      <p className="text-gray-400 text-lg font-normal mt-10">
        Fetching your results.
      </p>
    </div>
  );
};

export default LoadingComponent;
