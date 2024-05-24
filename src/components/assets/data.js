export const experiences = [
  {
    id: 1,
    companyName: "Chiropedic",
    companyLogo:
      "https://www.dreamhost.com/blog/wp-content/uploads/2022/09/WordPress-Child-Themes-Feature-730x485.jpg",
    position: "Full Stack WordPress Developer",
    location: "Victoria, Australia",
    startDate: "March 2024",
    endDate: "May 2024",
    duties:
      "In Frontend Development, collaborate closely with clients, translating objectives into visually appealing interfaces using HTML5, CSS3, and JavaScript. Apply responsive design principles and UI/UX best practices to create user-friendly websites. In Backend Development, specialise in WordPress, crafting custom themes and plugins, optimising performance, and integrating APIs for enhanced functionality. For Site Optimisation and Maintenance, conduct audits, implement SEO strategies, and ensure security. Stay updated on industry trends, collaborate cross-functionally, and provide ongoing support for client satisfaction and success.",
    skills: ["WordPress", "PHP", "SEO"],
    onsite: false,
  },
  {
    id: 2,
    companyName: "Reecheble (Pty) Ltd.",
    companyLogo:
      "https://www.archibuzz.com/sites/default/files/react-blog-2-2%20%281%29.jpg",
    position: "Frontend Developer",
    location: "Johannesburg, South Africa",
    startDate: "February 2022",
    endDate: "February 2024",
    duties:
      "Specialising in React Native, I craft seamless mobile experiences for Android and iOS. With designers, I create CSS-driven interfaces, build reusable React components, manage state with Redux or Context API, and ensure clean TypeScript code. I integrate Node.js for backend services, handle data, optimise navigation, and conduct thorough testing, using Git and Agile methodologies for efficient development.",
    skills: ["WordPress", "PHP", "SEO"],
    onsite: false,
  },
  {
    id: 3,
    companyName: "Talk360 (Pty) Ltd.",
    companyLogo:
      "https://kinsta.com/wp-content/uploads/2020/03/php-tutorials.png",
    position: "Junior Web Developer",
    location: "Victoria, Australia",
    startDate: "August 2018",
    endDate: "April 2021",
    duties:
      "Specialising in website development, I worked with Laravel, Vue, WordPress, JavaScript, HTML, CSS, and PHP. I created user interfaces, handled server-side tasks with Laravel and PHP, and managed WordPress content. I ensured responsive design, troubleshot issues, optimised performance, used Git for version control, and collaborated closely with team members and clients. Also, I have thorough documentation.",
    skills: ["WordPress", "PHP", "SEO"],
    onsite: true,
  },
];

export const qualifications = [
  {
    id: 1,
    schoolName: "Damelin College",
    schoolLogo:
      "https://educor-course-engine.storage.googleapis.com/dam/Diploma-in-information-Technology-with-Elective-in-Artificial-intelligence.jpg",
    qualification: "Diploma",
    course: "Information Technology",
    location: "Boksburg, South Africa",
    startDate: "Feb 2016",
    endDate: "April 2019",
    duties:
      "I pursued Information Technology at Damelin, honing skills in computer science, programming, database management, and network administration. Through hands-on learning, I gained expertise in software development, system analysis, and IT project management, preparing for industry challenges. Emphasis was on emerging technologies, engaging in projects to apply theoretical knowledge practically, developing innovative solutions. Damelin provided a comprehensive IT education, equipping me with skills vital for navigating technical landscapes with confidence and proficiency.",
    skills: [
      "Software Development",
      "System Analysis",
      "IT Project Management",
    ],
  },
  {
    id: 2,
    schoolName: "University of South Africa",
    schoolLogo:
      "https://educor-course-engine.storage.googleapis.com/dam/Skills-Programme-in-Concept-of-Computer-Architecture.jpg",
    qualification: "Certificate",
    course: "Developing Web Application with PHP",
    location: "Roodepoort, South Africa",
    startDate: "Jun 2019",
    endDate: "December 2019",
    duties:
      "I studied Developing Web Applications with PHP at UNISA, gaining skills in HTML, CSS, JavaScript, MySQL, and PHP. The program provided a solid foundation in both front-end and back-end development, allowing me to create seamless user experiences and robust backend systems using frameworks like Laravel.",
    skills: ["Database Management", "UX Design", "Full Stack Web Development"],
  },
];

const videoImage = "/images/portfolio/video.png";
const disneyImage = "/images/portfolio/disney.png";
const googleImage = "/images/portfolio/google.png";

export const projects = [
  {
    id: 1,
    projectName: "Video Conference",
    projectThumbnail: videoImage,
    title: "Video & Audio",
    description:
      "I am excited to announce the launch of my latest web application, Video Conference! Using Next.js, React.js, TailwindCSS, and TypeScript, I've crafted a seamless and dynamic user experience. With Shadcn's sleek UI design and Clerk.com's secure user management, plus Stream's video/audio features, it offers an immersive online experience.",
    githubLink: "https://github.com/techiemokhele/video_conference",
    liveLink: "https://neo-mokhele-video-conference.vercel.app/",
    type: "Website",
    languages: ["NextJs", "Tailwind CSS", "Clerk"],
  },
  {
    id: 2,
    projectName: "Disney Plus",
    projectThumbnail: disneyImage,
    title: "Video",
    description:
      "In my latest project, the Disney Plus Demo, I've unleashed enchantment through a captivating web app. Using React.js and Tailwind CSS, I've crafted a seamless user experience. With sleek UI design and secure user management, plus immersive video/audio features, it's a gateway to magical adventures.",
    githubLink: "#",
    liveLink: "https://neomokhele-disney-demo.web.app/",
    type: "Website",
    languages: ["ReactJs", "Tailwind CSS"],
  },
  {
    id: 3,
    projectName: "Search Engine",
    projectThumbnail: googleImage,
    title: "API",
    description:
      "In my world, I unveil the Google-powered search engine I've meticulously crafted: a lightning-fast, intuitive platform meticulously designed for seamless browsing. With a user-centric approach, I've ensured every interaction is intuitive and efficient. From its sleek interface to its robust functionality, this search engine revolutionizes the digital landscape. Experience unparalleled speed and precision as you navigate through the vast expanse of information at your fingertips.",
    githubLink: "#",
    liveLink: "https://neomokhele-googl-demo.web.app/",
    type: "Website",
    languages: ["ReactJs", "Tailwind CSS", "RESTful API"],
  },
];

const headsetImage = "/images/portfolio/headset.png";
const debugImage = "/images/portfolio/debug.png";
const linkedIn = "/images/portfolio/linkedInApp.png";

export const mobileProjects = [
  {
    id: 1,
    projectName: "Headset Online Store",
    projectThumbnail: headsetImage,
    title: "E-commerce",
    description:
      "Dive into the realm of technological bliss with my immersive headset mobile store app. It serves as your gateway to accessing premium sound experiences on-the-go, offering a curated selection of top-quality headsets. Crafted with meticulous attention to detail, this app ensures seamless navigation and an engaging user interface. Elevate your audio journey with cutting-edge technology at your fingertips, revolutionizing the way you experience sound in the digital age.",
    githubLink: "https://github.com/techiemokhele/NMHeadsets",
    liveLink: "#",
    type: "Mobile",
    languages: ["TypeScript", "CSS", "Expo Router"],
  },
  {
    id: 2,
    projectName: "Let's Debug Code",
    projectThumbnail: debugImage,
    title: "Code Debug",
    description:
      "Embark on a journey of coding mastery with my innovative mobile app - Let's Debug! This cutting-edge tool empowers you to streamline your code, conquer bugs, and elevate performance effortlessly. Utilizing state-of-the-art technologies like React Native and Redux, Let's Debug offers a seamless debugging experience like no other. Whether you're a seasoned developer or just starting out, Let's Debug equips you with the tools you need to excel in the world of software development.",
    githubLink: "https://github.com/techiemokhele/MokheleStackFlow",
    liveLink: "#",
    type: "Mobile",
    languages: ["React Native", "Redux", "Core-js", "Expo Router"],
  },
  {
    id: 3,
    projectName: "LinkedIn Mobile App",
    projectThumbnail: linkedIn,
    title: "Social Media",
    description:
      "Embark on a transformative journey with the LinkedIn Mobile App, your ultimate gateway to boundless professional opportunities. Seamlessly navigate the dynamic landscape of networking, career advancement, and industry insights. Elevate your trajectory with personalized connections, curated content, and powerful tools tailored to your aspirations. Unleash your potential, expand your horizons, and seize every opportunity that awaits in the ever-evolving realm of professional growth.",
    githubLink: "https://github.com/techiemokhele/ChatMediaHub",
    liveLink: "#",
    type: "Mobile",
    languages: ["React Native", "TypeScript", "Expo Router"],
  },
];

const whack = "/images/portfolio/whack.png";
const hangman = "/images/portfolio/hangman.png";
const tetris = "/images/portfolio/tetris.png";
const rock = "/images/portfolio/rock.png";

export const gameProjects = [
  {
    id: 1,
    projectName: "Whack-a-mole Game",
    projectThumbnail: whack,
    title: "Interactive",
    description:
      "Indulge in the timeless joy of whacking moles online, now revamped with a modern twist in this captivating web application. Seamlessly blending nostalgia with innovation, this addictive game promises endless entertainment. Engage your reflexes, strategize your moves, and immerse yourself in the thrill of the chase. Experience the classic fun reimagined for the digital age, where every click brings a new adventure. Get ready to embark on a mole-whacking journey like never before!",
    githubLink: "https://github.com/techiemokhele/whack-a-mole-web-app",
    liveLink: "https://techiemokhele.github.io/whack-a-mole-web-app/",
    type: "Game",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    projectName: "Hangman Game",
    projectThumbnail: hangman,
    title: "Trivial",
    description:
      "Embark on a thrilling online adventure! Dive into our addictive Hangman Web App and unravel the mystery word before time runs out. Engage your mind, challenge your wit, and experience the excitement of guessing each letter. With sleek design and seamless gameplay, our app promises hours of entertainment. Test your vocabulary, sharpen your skills, and immerse yourself in the ultimate guessing game. Play now and let the fun begin!",
    githubLink: "https://github.com/techiemokhele/ajax-hangman-app",
    liveLink: "https://techiemokhele.github.io/ajax-hangman-app/",
    type: "Game",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    projectName: "Tetris Game",
    projectThumbnail: tetris,
    title: "Building Blocks",
    description:
      "Immerse yourself in nostalgia, challenge, and joy with our Tetris Web App – offering timeless entertainment at your fingertips! Experience the thrill of the classic game revamped for the digital age. With sleek design and seamless functionality, our app delivers an unforgettable gaming experience. Dive into endless hours of fun as you sharpen your skills and compete for the highest score. Get ready to rediscover the magic of Tetris like never before!",
    githubLink: "https://github.com/techiemokhele/tetris-game-with-js",
    liveLink: "https://techiemokhele.github.io/tetris-game-with-js/",
    type: "Game",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    projectName: "Rock Paper Scissors Game",
    projectThumbnail: rock,
    title: "Interactive",
    description:
      "Embark on a journey of fun with our Rock Paper Scissors web app. Challenge friends and indulge in the timeless gameplay of this classic. Whether you're on the go or relaxing at home, our app provides endless entertainment. With intuitive controls and vibrant visuals, it's an experience like no other. Unleash your competitive spirit and immerse yourself in the excitement of Rock Paper Scissors, anytime, anywhere!",
    githubLink: "https://github.com/techiemokhele/rock-paper-scissor",
    liveLink: "https://techiemokhele.github.io/rock-paper-scissor/",
    type: "Game",
    languages: ["HTML", "CSS", "JavaScript"],
  },
];

const smut = "/images/portfolio/smuts.png";
const university = "/images/portfolio/university.png";

export const cmsProjects = [
  {
    id: 1,
    projectName: "Smuts Hall",
    projectThumbnail: smut,
    title: "Website",
    description:
      "I've developed a fully functional web application using Wix. This intuitive platform allowed me to craft a seamless user experience with ease. The web app boasts a built-in chatbot, enhancing interactivity and engagement. With Wix's versatile tools and features, I created a dynamic platform that meets the needs of users. From design to functionality, this project showcases my proficiency in web development and user-centric design.",
    githubLink: "#",
    liveLink: "https://neomokhele23.wixsite.com/smuts-hall",
    type: "CMS",
    languages: ["CMS", "Full Stack Development", "Wix"],
  },
  {
    id: 2,
    projectName: "University House",
    projectThumbnail: university,
    title: "Website",
    description:
      "I've created a fully functional web application using Wix, featuring a seamless user experience. With its intuitive interface and robust functionality, users can navigate effortlessly. One standout feature is the built-in chatbot, enhancing interaction and providing instant assistance. Whether it's for business or personal use, this web app offers convenience and reliability. Explore the possibilities with this innovative solution, designed to streamline your online experience.",
    githubLink: "#",
    liveLink: "https://neomokhele23.wixsite.com/university-house",
    type: "CMS",
    languages: ["CMS", "Full Stack Development", "Wix"],
  },
];
