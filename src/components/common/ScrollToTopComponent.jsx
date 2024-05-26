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
          className="fixed bottom-8 right-3 bg-yellow-700 text-white text-2xl p4 h-10 w-10 rounded-full shadow-md hover:bg-gold focus:outline-none shadow-md shadow-gray-700"
          onClick={scrollToTop}
        >
          ^
        </button>
      )}
    </div>
  );
};

export default ScrollToTopComponent;
