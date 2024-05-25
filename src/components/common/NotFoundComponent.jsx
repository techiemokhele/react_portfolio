import React from "react";

const NotFoundComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="/images/404.webp" alt="Not Found" className="w-86 h-64" />
      <h2 className="text-white text-3xl font-bold my-4">No Results Found</h2>
      <p className="text-white text-lg font-thin">
        Sorry, we couldn't find any matching results.
      </p>
    </div>
  );
};

export default NotFoundComponent;
