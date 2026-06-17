import React from "react";
import type { HighlightTextProps } from "@/types/props";

const HighlightText: React.FC<HighlightTextProps> = ({
  text,
  term,
  className,
}) => {
  if (!term.trim()) return <span className={className}>{text}</span>;

  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));

  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.toLowerCase() === term.toLowerCase() ? (
          <mark
            key={i}
            className="bg-gold/25 text-gold not-italic rounded-sm px-0.5"
          >
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </span>
  );
};

export default HighlightText;
