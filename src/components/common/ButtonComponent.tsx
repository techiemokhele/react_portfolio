import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ButtonComponentProps } from "@/types/props";

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
