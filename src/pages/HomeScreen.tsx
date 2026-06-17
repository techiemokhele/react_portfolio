import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HIGHLIGHTS = [
  { icon: Code2, label: "7+ Years Experience" },
  { icon: Globe, label: "Web Development" },
  { icon: Smartphone, label: "Mobile Apps" },
];

const TOP_SKILLS = [
  "React.js",
  "Next.js",
  "Angular",
  "TypeScript",
  "React Native",
  "TailwindCSS",
];

const HomeScreen: React.FC = () => (
  <div className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
    {/* Ambient glow */}
    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px] pointer-events-none" />

    <div
      className="absolute inset-0 bg-cover bg-center opacity-10"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1624749076747-79f933b8b671?q=80&w=1400&auto=format&fit=crop")',
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]/90" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-gold text-xs font-medium tracking-wide">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] mb-6">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400">
              Exceptional
            </span>{" "}
            Digital Experiences
          </h1>

          <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
            Intermediate Frontend Developer with{" "}
            <strong className="text-white">7+ years</strong> building
            high-performance, accessible web and mobile applications with React,
            Next.js, Angular &amp; TypeScript.
          </p>

          <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
            {TOP_SKILLS.map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <Button size="lg" asChild>
              <Link to="/about">
                Explore My Work <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-10">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center lg:items-start gap-1"
              >
                <Icon className="w-5 h-5 text-gold" />
                <span className="text-white/60 text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-transparent to-gold/10 rounded-3xl blur-xl" />
            <div className="relative bg-[#111]/80 backdrop-blur border border-white/10 rounded-2xl p-6 max-w-sm w-full">
              <div className="flex justify-center mb-5">
                <div className="relative">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-gold/50 ring-4 ring-gold/10">
                    <img
                      src="/images/neo.jpg"
                      alt="Neo Mokhele"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#111]" />
                </div>
              </div>

              <h2 className="text-white text-xl font-bold text-center mb-1">
                Neo Mokhele
              </h2>
              <p className="text-gold text-sm text-center mb-4">
                Intermediate Frontend Developer
              </p>

              <p className="text-gray-400 text-sm leading-relaxed mb-5 text-center">
                Passionate about translating Figma designs into pixel-perfect,
                WCAG-compliant interfaces and shipping clean, maintainable code
                in Agile teams.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                <div className="text-center">
                  <p className="text-white font-bold text-lg">7+</p>
                  <p className="text-gray-500 text-xs">Years Exp.</p>
                </div>
                <div className="text-center border-x border-white/10">
                  <p className="text-white font-bold text-lg">30+</p>
                  <p className="text-gray-500 text-xs">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-lg">4</p>
                  <p className="text-gray-500 text-xs">Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeScreen;
