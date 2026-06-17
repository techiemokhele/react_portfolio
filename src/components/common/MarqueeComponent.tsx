import React from "react";

interface Tool {
  src: string;
  alt: string;
  invert?: boolean;
}

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const tools: Tool[] = [
  // ── Frontend ───────────────────────────────────────────────
  { src: `${CDN}/html5/html5-original.svg`, alt: "HTML5" },
  { src: `${CDN}/css3/css3-original.svg`, alt: "CSS3" },
  { src: `${CDN}/javascript/javascript-original.svg`, alt: "JavaScript" },
  { src: `${CDN}/typescript/typescript-original.svg`, alt: "TypeScript" },
  { src: `${CDN}/react/react-original.svg`, alt: "React.js" },
  { src: `${CDN}/nextjs/nextjs-original.svg`, alt: "Next.js", invert: true },
  { src: `${CDN}/angular/angular-original.svg`, alt: "Angular" },
  { src: `${CDN}/vuejs/vuejs-original.svg`, alt: "Vue.js" },
  { src: `${CDN}/react/react-original.svg`, alt: "React Native" },

  // ── Styling ────────────────────────────────────────────────
  { src: `${CDN}/tailwindcss/tailwindcss-original.svg`, alt: "Tailwind CSS" },
  { src: `${CDN}/sass/sass-original.svg`, alt: "SASS/SCSS" },
  { src: `${CDN}/materialui/materialui-original.svg`, alt: "Material UI" },
  {
    src: `${CDN}/styledcomponents/styledcomponents-original.svg`,
    alt: "Styled Components",
  },

  // ── State Management ───────────────────────────────────────
  { src: `${CDN}/redux/redux-original.svg`, alt: "Redux" },

  // ── Backend & APIs ─────────────────────────────────────────
  { src: `${CDN}/nodejs/nodejs-original.svg`, alt: "Node.js" },
  { src: `${CDN}/nestjs/nestjs-original.svg`, alt: "Nest.js" },
  { src: `${CDN}/laravel/laravel-original.svg`, alt: "Laravel" },
  { src: `${CDN}/php/php-original.svg`, alt: "PHP" },
  { src: `${CDN}/graphql/graphql-plain.svg`, alt: "GraphQL" },

  // ── Testing ────────────────────────────────────────────────
  { src: `${CDN}/jest/jest-plain.svg`, alt: "Jest" },

  // ── Databases ──────────────────────────────────────────────
  { src: `${CDN}/mongodb/mongodb-original.svg`, alt: "MongoDB" },
  { src: `${CDN}/mysql/mysql-original.svg`, alt: "MySQL" },

  // ── Tools & Platforms ──────────────────────────────────────
  { src: `${CDN}/git/git-original.svg`, alt: "Git" },
  { src: `${CDN}/github/github-original.svg`, alt: "GitHub", invert: true },
  { src: `${CDN}/vitejs/vitejs-original.svg`, alt: "Vite" },
  { src: `${CDN}/webpack/webpack-original.svg`, alt: "Webpack" },
  { src: `${CDN}/figma/figma-original.svg`, alt: "Figma" },
  { src: `${CDN}/wordpress/wordpress-plain.svg`, alt: "WordPress" },
  { src: `${CDN}/vercel/vercel-original.svg`, alt: "Vercel", invert: true },
  { src: `${CDN}/slack/slack-original.svg`, alt: "Slack" },
  { src: `${CDN}/docker/docker-original.svg`, alt: "Docker" },
];

const MarqueeComponent: React.FC = () => {
  return (
    <div
      className="w-full mt-12 py-4 border-y border-white/5"
      aria-label="Technologies and tools"
      role="region"
    >
      <div className="marquee">
        <div className="marquee-inner">
          {tools.map((tool, index) => (
            <img
              key={index}
              src={tool.src}
              alt={tool.alt}
              title={tool.alt}
              className={`marquee-item${tool.invert ? " marquee-item--invert" : ""}`}
              loading="lazy"
            />
          ))}
          <div aria-hidden="true" style={{ display: "contents" }}>
            {tools.map((tool, index) => (
              <img
                key={`dup-${index}`}
                src={tool.src}
                alt=""
                className={`marquee-item${tool.invert ? " marquee-item--invert" : ""}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
