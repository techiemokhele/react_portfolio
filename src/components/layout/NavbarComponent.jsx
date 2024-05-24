import React, { useState } from "react";
import ButtonComponent from "../common/ButtonComponent";

const NavbarComponent = () => {
  const [activePage, setActivePage] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="bg-black shadow-md">
      {/* Desktop menu */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/">
            <h1 className="text-white font-bold text-2xl ml-2">Neo Mokhele</h1>
          </a>
        </div>

        <div className="hidden md:flex space-x-4">
          {["home", "about", "portfolio", "contact"].map((page) => (
            <a
              key={page}
              href={`#${page}`}
              onClick={() => handleNavClick(page)}
              className={`px-3 py-2 rounded-lg ${
                activePage === page
                  ? "bg-gold text-white w-[100px] text-center"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </a>
          ))}
        </div>

        <ButtonComponent text={"Download Resume"} />

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-lg absolute top-0 right-0 mt-12 w-64">
          {["home", "about", "portfolio", "contact"].map((page) => (
            <a
              key={page}
              href={`#${page}`}
              onClick={() => handleNavClick(page)}
              className={`block px-4 py-2 ${
                activePage === page
                  ? " text-white border-x-2 border-x-gold"
                  : "text-gray-600 hover:bg-gold"
              }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </a>
          ))}
          <button className="w-full bg-black  text-white px-4 py-2 mt-2 hover:bg-gold">
            Download
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
