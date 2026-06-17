import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { PageBannerProps } from "@/types/props";

const PageBanner: React.FC<PageBannerProps> = ({
  label,
  title,
  description,
  primaryCta,
  secondaryCta,
}) => (
  <div className="relative min-h-[70vh] flex items-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1624749076747-79f933b8b671?q=80&w=1400&auto=format&fit=crop")',
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/95 via-[#0a0a0a]/85 to-[#0a0a0a]/70" />
    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/8 rounded-full blur-[100px] pointer-events-none" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <p className="text-gold text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4">
        {label}
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 sm:mb-6 max-w-3xl">
        {title}
      </h1>
      <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-6 sm:mb-8">
        {description}
      </p>
      {(primaryCta || secondaryCta) && (
        <div className="flex flex-wrap gap-3">
          {primaryCta &&
            (primaryCta.external ? (
              <Button size="lg" asChild>
                <a href={primaryCta.href} target="_blank" rel="noreferrer">
                  {primaryCta.text}
                </a>
              </Button>
            ) : (
              <Button size="lg" asChild>
                <Link to={primaryCta.href}>{primaryCta.text}</Link>
              </Button>
            ))}
          {secondaryCta &&
            (secondaryCta.external ? (
              <Button variant="outline" size="lg" asChild>
                <a href={secondaryCta.href} target="_blank" rel="noreferrer">
                  {secondaryCta.text}
                </a>
              </Button>
            ) : (
              <Button variant="outline" size="lg" asChild>
                <Link to={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            ))}
        </div>
      )}
    </div>
  </div>
);

export default PageBanner;
