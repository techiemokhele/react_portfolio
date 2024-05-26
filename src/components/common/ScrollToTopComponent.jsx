import React, { useEffect, useState } from "react";

const ScrollToTopComponent = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <div>
      {showScrollToTop && (
        <button
          className="fixed bottom-8 right-8 bg-yellow-700 text-white py-2 px-4 rounded-full shadow-md hover:bg-gold focus:outline-none"
          onClick={scrollToTop}
        >
          Up
        </button>
      )}
    </div>
  );
};

export default ScrollToTopComponent;
