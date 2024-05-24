const tools = [
  {
    src: "https://www.pikpng.com/pngl/b/150-1506141_html-css-and-javascript-logo-html5-css3-js.png",
    alt: "html,css,js",
  },
  {
    src: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png",
    alt: "tailwind",
  },
  {
    src: "https://wp.mridul.tech/wp-content/uploads/2023/02/react-js.png",
    alt: "react",
  },
  {
    src: "https://www.pngitem.com/pimgs/b/514-5142665_react-native-transparent-react-native-logo-png-png.png",
    alt: "React Native",
  },
  {
    src: "https://lightningchart.com/wp-content/uploads/images/icons/node.js-logo.png",
    alt: "NodeJs",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
    alt: "TypeScript",
  },
  {
    src: "https://www.impekable.com/wp-content/uploads/2023/05/Next_JS-500x500.png",
    alt: "NextJS",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
    alt: "PHP",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2699/PNG/512/laravel_logo_icon_170314.png",
    alt: "Laravel",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2699/PNG/512/mongodb_logo_icon_170944.png",
    alt: "MongoDB",
  },
  { src: "https://pngimg.com/d/mysql_PNG32.png", alt: "MySQL" },
  {
    src: "https://static.vecteezy.com/system/resources/previews/020/975/579/original/wordpress-logo-wordpress-icon-transparent-free-png.png",
    alt: "WordPress",
  },
  {
    src: "https://companieslogo.com/img/orig/WIX.D-9b5f1d10.png?t=1660042223",
    alt: "Wix",
  },
  {
    src: "https://seeklogo.com/images/G/github-icon-logo-E5FF767098-seeklogo.com.png",
    alt: "Github",
  },
];

const MarqueeComponent = () => {
  return (
    <div className="marquee">
      <div className="marquee-inner">
        {tools.map((tool, index) => (
          <img
            key={index}
            src={tool.src}
            alt={tool.alt}
            className="marquee-item"
          />
        ))}
        {tools.map((tool, index) => (
          <img
            key={index + tools.length}
            src={tool.src}
            alt={tool.alt}
            className="marquee-item"
          />
        ))}
      </div>
    </div>
  );
};

export default MarqueeComponent;
