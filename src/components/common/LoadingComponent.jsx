import React from "react";

const LoadingComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-white text-3xl font-bold mb-8">Please wait...</h2>
      <img
        src="/images/loading.gif"
        alt="loading"
        className="w-86 h-64 rounded-md"
      />
      <p className="text-white text-lg font-normal mt-10">
        We are fetching all your results.
      </p>
    </div>
  );
};

export default LoadingComponent;
