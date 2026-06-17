import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTopComponent: React.FC = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showScrollToTop) return null;

  return (
    <Button
      variant="default"
      size="icon"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-4 z-50 shadow-lg shadow-black/40"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
};

export default ScrollToTopComponent;
