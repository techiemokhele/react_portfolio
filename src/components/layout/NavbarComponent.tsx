import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Download } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NAV_LINKS = ["about", "portfolio", "blog", "contact"] as const;

const NavbarComponent: React.FC = () => {
  const location = useLocation();
  const [emailSent, setEmailSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setEmailSent(localStorage.getItem("emailSent") === "true");
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#D4AF37"
              className="w-8 h-8 group-hover:scale-110 transition-transform"
            >
              <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
            </svg>
            <span className="text-white font-bold text-lg">Neo Mokhele</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((page) => {
              const isActive = location.pathname.startsWith(`/${page}`);
              return (
                <Link
                  key={page}
                  to={`/${page}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive ? "text-gold" : "text-white/70 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold rounded-full" />
                  )}
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {emailSent && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hidden md:flex"
              >
                <a
                  href="/resume/Neo_Tsietsi_Mokhele-Resume.pdf"
                  download="Neo_Tsietsi_Mokhele-Resume.pdf"
                >
                  <Download className="w-3.5 h-3.5 mr-1.5" />
                  Resume
                </a>
              </Button>
            )}

            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#0a0a0a] border-l border-white/10 w-72"
              >
                <div className="flex flex-col h-full pt-6">
                  <div className="flex items-center gap-2 mb-10 px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#D4AF37"
                      className="w-6 h-6"
                    >
                      <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                    </svg>
                    <span className="text-white font-bold">Neo Mokhele</span>
                  </div>
                  <nav className="flex flex-col gap-1 flex-1">
                    {NAV_LINKS.map((page) => {
                      const isActive = location.pathname.startsWith(`/${page}`);
                      return (
                        <SheetClose asChild key={page}>
                          <Link
                            to={`/${page}`}
                            className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                              isActive
                                ? "bg-gold/10 text-gold border-l-2 border-gold"
                                : "text-white/70 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {page.charAt(0).toUpperCase() + page.slice(1)}
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </nav>
                  {emailSent && (
                    <div className="px-2 pb-6">
                      <Button variant="outline" className="w-full" asChild>
                        <a
                          href="/resume/Neo_Tsietsi_Mokhele-Resume.pdf"
                          download
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Resume
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
