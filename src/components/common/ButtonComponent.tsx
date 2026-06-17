import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonComponentProps {
  text: string;
  normal?: boolean;
  href?: string;
  hidden?: boolean;
  blank?: boolean;
  type?: "button" | "submit" | "reset";
  active?: boolean;
  onClick?: () => void;
  download?: string;
}

/**
 * Legacy-compatible button wrapper, now powered by the ShadCN Button.
 * - `normal` => filled (default) variant, otherwise outline.
 * - `onClick` renders a real <button>, `href` renders an anchor.
 */
const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  normal,
  href,
  hidden,
  blank,
  type,
  active,
  onClick,
  download,
}) => {
  const variant = normal || active ? "default" : "outline";
  const wrapperClass = hidden ? "hidden md:block" : "md:block";

  if (onClick && !href) {
    return (
      <div className={wrapperClass}>
        <Button
          variant={variant}
          type={type || "button"}
          onClick={onClick}
          className="capitalize"
        >
          {text}
        </Button>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <Button variant={variant} asChild className="capitalize">
        <a
          href={href}
          download={download || undefined}
          target={blank ? "_blank" : "_self"}
          rel="noreferrer"
          onClick={(e) => {
            if (onClick) {
              e.preventDefault();
              onClick();
            }
          }}
          className={cn(href === "#" && onClick ? "cursor-pointer" : "")}
        >
          {text}
        </a>
      </Button>
    </div>
  );
};

export default ButtonComponent;
