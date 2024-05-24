import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import ButtonComponent from "../common/ButtonComponent";

const NavbarComponent = () => {
  const [activePage, setActivePage] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsOpen(false);
  };

  return (
    <nav className="bg-black shadow-md">
      {/* Desktop menu */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            onClick={() => handleNavClick("home")}
            className="flex items-center"
          >
            <h1 className="text-white font-bold text-2xl ml-2 flex items-center">
              <span className="me-3 h-6 w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#D4AF37"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
              </span>
              Neo Mokhele
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          {["about", "portfolio", "blog", "contact"].map((page) => (
            <Link
              key={page}
              to={`/${page === "home" ? "" : page}`}
              onClick={() => handleNavClick(page)}
              className={`px-3 py-2 rounded-lg ${
                activePage === page
                  ? " text-white w-[100px] text-center"
                  : "text-white hover:text-gold hover:bg-gold hover:text-white"
              }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
        </div>

        {/* Show the "Resume" button only in desktop view */}
        <ButtonComponent
          href={"/"}
          normal={false}
          text={"Resume"}
          hidden={true}
        />

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
      <div
        className={`md:hidden bg-black shadow-lg absolute top-0 right-0 mt-12 w-64 h-[92.4%] transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {["about", "portfolio", "blog", "contact"].map((page) => (
          <Link
            key={page}
            to={`/${page === "home" ? "" : page}`}
            onClick={() => handleNavClick(page)}
            className={`block px-4 py-5  ${
              activePage === page
                ? "text-white border-x-2 border-x-gold"
                : "text-white hover:bg-gold"
            }`}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </Link>
        ))}
        <div className="mt-4 absolute bottom-8 px-3 right-4">
          {/* Show the "Download My Resume" button only in mobile view */}
          <ButtonComponent
            href={"/"}
            normal={false}
            text={"Download My Resume"}
            hidden={false}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
