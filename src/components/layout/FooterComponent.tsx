import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import type { BlogPost } from "@/types";
import { fetchArticles } from "@/services/blogService";

const NAV_LINKS = ["about", "portfolio", "blog", "contact"] as const;

const SOCIALS = [
  {
    label: "Twitter / X",
    href: "https://twitter.com/tsietsineo",
    viewBox: "0 0 512 512",
    path: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
  },
  {
    label: "Email",
    href: "mailto:neomokhele23@gmail.com",
    viewBox: "0 0 488 512",
    path: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/neo-mokhele-458188188/",
    viewBox: "0 0 448 512",
    path: "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z",
  },
  {
    label: "GitHub",
    href: "https://github.com/techiemokhele",
    viewBox: "0 0 496 512",
    path: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z",
  },
];

const FooterComponent: React.FC = () => {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [postsLoading, setPostsLoading] = useState(true);

  useEffect(() => {
    fetchArticles({
      per_page: 6,
      tags: "javascript,react,webdev,programming,frontend",
    })
      .then((posts) => setLatestPosts(posts.slice(0, 4)))
      .catch(() => {})
      .finally(() => setPostsLoading(false));
  }, []);

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 mt-10">
      <div className="flex items-center justify-center bg-gradient-to-r from-yellow-700 to-gold p-5 lg:justify-between">
        <p className="me-12 hidden lg:block text-white text-sm font-medium">
          Connect with me on social networks:
        </p>
        <div className="flex justify-center gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-white/80 hover:text-white hover:scale-125 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox={s.viewBox}
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 text-center md:text-left">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#D4AF37"
                className="h-7 w-7 shrink-0"
                aria-hidden="true"
              >
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              <span className="text-white font-bold text-xl">Neo Mokhele</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed text-sm mb-4">
              Intermediate Frontend Developer with 7+ years of experience
              building high-performance, accessible web and mobile applications
              using React.js, Next.js, Angular, TypeScript, and TailwindCSS.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Proficient in Agile/Scrum environments — shipping pixel-perfect,
              WCAG-compliant UIs and reliable, maintainable code.
            </p>
          </div>

          <div>
            <h2 className="mb-5 flex justify-center md:justify-start font-bold text-xs uppercase tracking-widest text-gold">
              Latest Posts
            </h2>
            {postsLoading ? (
              <div className="space-y-3" aria-label="Loading latest posts">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-4 bg-white/5 rounded animate-pulse w-full"
                  />
                ))}
              </div>
            ) : latestPosts.length > 0 ? (
              <nav aria-label="Latest blog posts">
                {latestPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}/${post.slug}`}
                    className="block mb-3 text-gray-400 hover:text-gold transition-colors text-sm line-clamp-1 leading-snug"
                  >
                    {post.title}
                  </Link>
                ))}
              </nav>
            ) : (
              <p className="text-gray-600 text-sm">No posts available.</p>
            )}
          </div>

          <div>
            <h2 className="mb-5 flex justify-center md:justify-start font-bold text-xs uppercase tracking-widest text-gold">
              Quick Links
            </h2>
            <nav aria-label="Site navigation">
              {NAV_LINKS.map((page) => (
                <Link
                  key={page}
                  to={`/${page}`}
                  className="block mb-3 text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="mb-5 flex justify-center md:justify-start font-bold text-xs uppercase tracking-widest text-gold">
              Contact
            </h2>
            <address className="not-italic space-y-3">
              <a
                href="https://maps.google.com/?q=Springs,Gauteng,SouthAfrica"
                target="_blank"
                rel="noreferrer"
                className="flex items-start justify-center md:justify-start text-gray-400 hover:text-gold transition-colors text-sm gap-3"
                aria-label="Location: Springs, Gauteng, South Africa"
              >
                <MapPin
                  className="h-4 w-4 text-gold shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                Springs, Gauteng 1559, South Africa
              </a>
              <a
                href="mailto:neomokhele23@gmail.com"
                className="flex items-center justify-center md:justify-start text-gray-400 hover:text-gold transition-colors text-sm gap-3"
              >
                <Mail
                  className="h-4 w-4 text-gold shrink-0"
                  aria-hidden="true"
                />
                neomokhele23@gmail.com
              </a>
              <a
                href="tel:+27648473363"
                className="flex items-center justify-center md:justify-start text-gray-400 hover:text-gold transition-colors text-sm gap-3"
              >
                <Phone
                  className="h-4 w-4 text-gold shrink-0"
                  aria-hidden="true"
                />
                +27 64 847 3363
              </a>
            </address>
          </div>
        </div>
      </div>

      <div className="bg-black/40 border-t border-white/5 text-gray-500 py-5 text-center text-xs">
        <span>© {new Date().getFullYear()} </span>
        <Link
          className="font-semibold text-gold hover:text-yellow-400 transition-colors"
          to="/contact"
        >
          Neo Mokhele
        </Link>
        <span>. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default FooterComponent;
