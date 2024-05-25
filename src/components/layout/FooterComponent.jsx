import React, { useState } from "react";
import { blogData } from "../assets/blogData.js";

const FooterComponent = () => {
  const [activePage, setActivePage] = useState("home");

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <footer class="bg-transparent text-center text-surface/75 lg:text-left mt-10">
      <div class="flex items-center justify-center border-b-2 border-neutral-200 p-6 bg-gold lg:justify-between">
        <div class="me-12 hidden lg:block text-white">
          <span>Get connected with us on social networks:</span>
        </div>

        {/* Social links section */}
        <div class="flex justify-center">
          <a
            href="https://twitter.com/tsietsineo"
            target="_blank"
            rel="noreferrer"
            class="me-6 [&>svg]:h-4 [&>svg]:w-4 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </a>
          <a
            href="mailto:neomokhele23@gmail.com"
            target="_blank"
            rel="noreferrer"
            class="me-6 [&>svg]:h-4 [&>svg]:w-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 488 512"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/neo-mokhele-458188188/"
            target="_blank"
            rel="noreferrer"
            class="me-6 [&>svg]:h-4 [&>svg]:w-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 448 512"
            >
              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
          </a>
          <a
            href="https://github.com/techiemokhele"
            target="_blank"
            rel="noreferrer"
            class="[&>svg]:h-4 [&>svg]:w-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 496 512"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* links and info section */}
      <div class="mx-6 py-10 text-center md:text-left text-white">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo section */}
          <div class="">
            <h6 class="mb-4 flex items-center justify-center font-semibold  md:justify-start text-white text-2xl">
              <span class="me-3 [&>svg]:h-14 [&>svg]:w-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#D4AF37"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
              </span>
              Neo Mokhele
            </h6>
            <p className="font-thin">
              With a passion for creating intuitive user interfaces, I leverage
              continuous learning to stay ahead in this dynamic field. By
              staying abreast of the latest trends and technologies, I ensure
              that my designs are not only visually appealing but also highly
              functional and user-friendly.
            </p>
          </div>

          {/* Latest projects section */}
          <div>
            <h6 class="mb-4 flex justify-center font-bold text-xl uppercase md:justify-start text-white">
              Latest Projects
            </h6>
            {blogData.slice(0, 4).map((post, i) => (
              <p class="mb-4 hover:text-gold" key={i}>
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </p>
            ))}
          </div>

          {/* Useful links section */}
          <div>
            <h6 class="mb-4 flex justify-center font-bold text-xl uppercase md:justify-start text-white">
              Useful links
            </h6>
            {["about", "portfolio", "blog", "contact"].map((page) => (
              <p key={page} className="mb-4 text-white hover:text-gold py-2">
                <a
                  href={`/${page === "home" ? "" : page}`}
                  onClick={() => handleNavClick(page)}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </a>
              </p>
            ))}
          </div>

          {/* Contact section */}
          <div>
            <h6 class="mb-4 flex justify-center font-bold text-xl uppercase md:justify-start text-white">
              Contact
            </h6>
            <p class="mb-4 flex items-center justify-center md:justify-start">
              <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </span>
              Springs, Gauteng 1559, South Africa
            </p>
            <p class="mb-4 flex items-center justify-center md:justify-start">
              <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </span>
              neomokhele23@gmail.com
            </p>
            <p class="flex items-center justify-center md:justify-start">
              <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              +27 64 847 3363
            </p>
          </div>
        </div>
      </div>

      {/* Copy right section */}
      <div class="bg-gold p-6 text-center">
        <span>© 2023 Copyright: </span>
        <a class="font-semibold" href="/contact">
          Neo Mokhele
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
