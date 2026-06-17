import type { Experience, Qualification, Project } from "@/types";

const nextjs = "/images/nextjs.png";

export const experiences: Experience[] = [
  {
    id: 1,
    companyName: "Bitcube",
    companyLogo: nextjs,
    position: "Intermediate Frontend Developer",
    location: "Cape Town, ZA",
    employmentType: "Full-Time",
    startDate: "November 2024",
    endDate: "Present",
    duties: [
      "Architect and deliver scalable frontend features across Angular, Next.js, and React codebases within a Nest.js microservices architecture.",
      "Convert Figma specifications into pixel-perfect, WCAG-compliant interfaces using TailwindCSS, reducing QA revision cycles by 30%.",
      "Write and maintain comprehensive unit and component tests using Jest and React Testing Library, increasing code coverage and reducing production defects.",
      "Collaborate with cross-functional teams in Agile/Scrum sprints, contributing to on-time delivery of milestones tracked via Asana and Slack.",
      "Implement and consume RESTful APIs, manage MongoDB schemas, and optimise build pipelines with Vite, improving development speed.",
      "Champion clean-code standards through peer code reviews in Git/GitHub pull-request workflows integrated into CI/CD pipelines.",
      "Drive performance gains via code splitting, lazy loading, and bundle analysis, improving Core Web Vitals scores.",
    ],
    skills: ["Angular", "Next.js", "React.js", "TypeScript", "TailwindCSS", "Nest.js", "MongoDB", "Jest", "Vite", "CI/CD"],
    onsite: true,
  },
  {
    id: 2,
    companyName: "Chiropedic",
    companyLogo: "https://www.dreamhost.com/blog/wp-content/uploads/2022/09/WordPress-Child-Themes-Feature-730x485.jpg",
    position: "Fullstack WordPress Developer",
    location: "Australia (Remote)",
    employmentType: "Contract",
    startDate: "March 2024",
    endDate: "May 2024",
    duties: [
      "Designed and built custom WordPress themes and plugins using PHP, HTML5, CSS3, and JavaScript, delivering responsive user experiences for an Australian client.",
      "Integrated third-party REST APIs to add dynamic functionality, improving customer engagement and reducing manual content management overhead.",
      "Executed comprehensive SEO audits and on-page optimisation strategies, improving organic search visibility and reducing bounce rates.",
      "Hardened site security through authentication protocols, input validation, and vulnerability patching.",
      "Optimised page load performance through image compression, caching, and code minification, achieving significant Lighthouse score improvements.",
    ],
    skills: ["WordPress", "PHP", "JavaScript", "HTML5", "CSS3", "REST APIs", "SEO", "MySQL"],
    onsite: false,
  },
  {
    id: 3,
    companyName: "Reecheble (Pty) Ltd.",
    companyLogo: "https://www.archibuzz.com/sites/default/files/react-blog-2-2%20%281%29.jpg",
    position: "Frontend Mobile Developer",
    location: "Johannesburg, ZA",
    employmentType: "Full-Time",
    startDate: "February 2022",
    endDate: "March 2024",
    duties: [
      "Engineered cross-platform mobile applications with React Native from concept to production, improving user retention through performance-optimised UI flows.",
      "Built reusable, accessible React component libraries and TailwindCSS design systems in partnership with UI/UX designers, accelerating feature velocity.",
      "Managed complex application state with Redux Toolkit and Context API, eliminating unnecessary re-renders and improving responsiveness on low-bandwidth devices.",
      "Integrated Node.js backend services and RESTful APIs for efficient data handling.",
      "Operated within Agile sprint cycles, consistently meeting delivery commitments through clean, well-documented code.",
    ],
    skills: ["React Native", "React.js", "TypeScript", "TailwindCSS", "Redux", "Context API", "Node.js", "REST APIs"],
    onsite: false,
  },
  {
    id: 4,
    companyName: "Talk360 Africa (Pty) Ltd.",
    companyLogo: "https://kinsta.com/wp-content/uploads/2020/03/php-tutorials.png",
    position: "Junior Web Developer",
    location: "Johannesburg, ZA",
    employmentType: "Full-Time",
    startDate: "August 2018",
    endDate: "April 2021",
    duties: [
      "Developed and maintained multiple production websites using Laravel, Vue.js, WordPress, PHP, and MySQL across diverse client verticals.",
      "Applied mobile-first responsive design best practices to improve usability metrics and mobile engagement.",
      "Diagnosed and resolved frontend and backend performance bottlenecks, reducing page load times and bounce rates.",
      "Utilised Git for version control, supporting efficient team collaboration through clear commit histories and branching strategies.",
      "Maintained thorough project documentation to support knowledge transfer, onboarding, and long-term code maintainability.",
    ],
    skills: ["Laravel", "Vue.js", "WordPress", "JavaScript", "HTML5", "CSS3", "MySQL", "PHP", "Git"],
    onsite: true,
  },
];

const highschool = "/images/highschool.jpg";
const campus = "/images/campus.jpg";
const unisa = "/images/unisa.jpg";

export const qualifications: Qualification[] = [
  {
    id: 1,
    schoolName: "Steynsrus Combined School",
    schoolLogo: highschool,
    qualification: "National Senior Certificate",
    course: "Matric",
    location: "Steynsrus, South Africa",
    startDate: "January 2012",
    endDate: "December 2015",
    duties: "Completed the National Senior Certificate at Steynsrus Combined School, building a strong foundation in mathematics, science, and computer literacy. Developed essential skills in communication, critical thinking, and problem-solving that laid the groundwork for a career in technology.",
    skills: ["Computer Literacy", "Mathematics", "Critical Thinking"],
  },
  {
    id: 2,
    schoolName: "Damelin College",
    schoolLogo: campus,
    qualification: "Diploma",
    course: "Information Technology",
    location: "Boksburg, South Africa",
    startDate: "February 2016",
    endDate: "2019",
    duties: "Pursued a Diploma in Information Technology at Damelin College, gaining hands-on expertise in computer science, programming, database management, and network administration. Completed practical projects applying software development and system analysis methodologies, preparing for real-world industry challenges.",
    skills: ["Software Development", "Database Management", "Network Administration", "IT Project Management"],
  },
  {
    id: 3,
    schoolName: "University of South Africa (UNISA)",
    schoolLogo: unisa,
    qualification: "Certificate",
    course: "Web Application Development (PHP)",
    location: "Roodepoort, South Africa",
    startDate: "June 2019",
    endDate: "December 2019",
    duties: "Completed a Certificate in Web Application Development at UNISA, gaining proficiency in PHP, HTML, CSS, JavaScript, and MySQL. The programme provided a solid foundation in both front-end and back-end development, enabling the creation of robust web applications using frameworks like Laravel.",
    skills: ["PHP", "MySQL", "HTML & CSS", "JavaScript", "Laravel", "Full Stack Web Development"],
  },
];

const videoImage = "/images/portfolio/video.png";
const disneyImage = "/images/portfolio/disney.png";
const googleImage = "/images/portfolio/google.png";
const trend = "/images/portfolio/crypto.png";
const news = "/images/portfolio/home.png";
const amazon = "/images/portfolio/amazon.png";
const fb = "/images/portfolio/facebook.png";
const net = "/images/portfolio/netflix.png";
const edwin = "/images/portfolio/edwin.png";
const link = "/images/portfolio/linkedIn.png";
const fitness = "/images/portfolio/fitness.png";
const loan = "/images/portfolio/loan.png";
const music = "/images/portfolio/music.png";
const traveller = "/images/portfolio/traveller.png";
const spendio = "/images/portfolio/spendio.png";
const auto = "/images/portfolio/auto.png";
const goDad = "/images/portfolio/goDad.png";
const weatherApi = "/images/portfolio/weatherApi.png";
const gymBuddies = "/images/portfolio/GymBuddies.png";
const highFiveVideos = "/images/portfolio/highFiveVideos.png";
const miniApp = "/images/portfolio/miniApp.png";
const mokheleMediaStorage = "/images/portfolio/mokhele-media-storage.png";
const lumiere = "/images/portfolio/lumiere.png";
const skyX = "/images/portfolio/sky-x.png";

export const projects: Project[] = [
  { id: 1, projectName: "Mokhele Fitness Club", projectThumbnail: fitness, title: "Fitness", description: "Transform your workouts with my Fitness ultimate tool for tracking progress, staying motivated, and achieving goals! With this comprehensive fitness companion, I empower individuals to elevate their training regimes. Whether monitoring progress, finding motivation, or reaching milestones, my solution ensures seamless navigation through every fitness journey. It's not just an app; it's a trusted partner in the pursuit of wellness, tailored to deliver results and inspire continuous improvement.", githubLink: "#", liveLink: "https://mokhele-fitness-club.pages.dev/", type: "Website", languages: ["HTML", "CSS", "JavaScript"] },
  { id: 2, projectName: "Disney Plus", projectThumbnail: disneyImage, title: "Video", description: "In my latest project, the Disney Plus Demo, I've unleashed enchantment through a captivating web app. Using React.js and Tailwind CSS, I've crafted a seamless user experience. With sleek UI design and secure user management, plus immersive video/audio features, it's a gateway to magical adventures.", githubLink: "#", liveLink: "https://neomokhele-disney-demo.web.app/", type: "Website", languages: ["ReactJs", "Tailwind CSS"] },
  { id: 3, projectName: "Search Engine", projectThumbnail: googleImage, title: "API", description: "In my world, I unveil the Google-powered search engine I've meticulously crafted: a lightning-fast, intuitive platform meticulously designed for seamless browsing. With a user-centric approach, I've ensured every interaction is intuitive and efficient. From its sleek interface to its robust functionality, this search engine revolutionises the digital landscape. Experience unparalleled speed and precision as you navigate through the vast expanse of information at your fingertips.", githubLink: "#", liveLink: "https://neomokhele-googl-demo.web.app/", type: "Website", languages: ["ReactJs", "Tailwind CSS", "RESTful API"] },
  { id: 4, projectName: "Mokhele Crypto News", projectThumbnail: trend, title: "Stock Exchange", description: "Stay ahead with Mokhele Crypto News: your ultimate source for real-time updates, market trends, and expert insights in cryptocurrency. I bring you the latest news and in-depth analysis to keep you informed and make smarter investment decisions. With a focus on accuracy and timeliness, my platform ensures you never miss a beat in the fast-paced world of crypto. Explore the dynamic landscape of digital currencies with me and gain the edge you need to succeed.", githubLink: "#", liveLink: "https://mokhele-cryptocurrency-news.netlify.app/", type: "Website", languages: ["ReactJs", "Tailwind CSS", "RESTful API"] },
  { id: 5, projectName: "Mokhele AI Reader", projectThumbnail: news, title: "News Reader AI", description: "I am a dedicated Frontend Developer passionate about building interactive and engaging web applications. Explore my projects, including a Google-powered search engine designed for seamless browsing and a personalised, real-time news platform tailored to your interests. My skills in React.js, Tailwind CSS, and Next.js enable me to create intuitive, lightning-fast user experiences. Stay informed effortlessly with my curated news app, and dive into a world of innovative web solutions crafted to meet your needs and exceed your expectations.", githubLink: "#", liveLink: "https://neomokhele-ai-news-reader.netlify.app/", type: "Website", languages: ["ReactJs", "Tailwind CSS", "RESTful API"] },
  { id: 6, projectName: "Amazon E-commerce", projectThumbnail: amazon, title: "Online Store", description: "Transform your online shopping experience with my sleek, intuitive web app, designed to deliver speed, convenience, and unbeatable deals. With a user-friendly interface, you can effortlessly browse and purchase items, enjoying a seamless and efficient shopping journey. My web app leverages the latest in web development technologies to ensure a fast, secure, and enjoyable experience. Discover the perfect blend of style and functionality, making your online shopping not only easy but also highly rewarding. Shop smarter, faster, and better with my innovative solution!", githubLink: "#", liveLink: "https://neomokhele-amaecom-demo.web.app/", type: "Website", languages: ["ReactJs", "Tailwind CSS", "RESTful API"] },
  { id: 7, projectName: "Facebook Demo", projectThumbnail: fb, title: "Social Media", description: "Revolutionise your social experience with my Facebook Web App! I've meticulously designed this platform to offer a sleek and modern interface, ensuring lightning-fast performance and seamless connectivity. Whether you're sharing moments, connecting with friends, or exploring new content, this app provides a smooth and immersive experience. Built with cutting-edge technologies like React.js and Tailwind CSS, it's not just another social media app—it's your gateway to a more connected and enjoyable online world. Join now and experience the difference!", githubLink: "#", liveLink: "https://neomokhele-fb-demo.web.app/", type: "Website", languages: ["ReactJs", "Tailwind CSS", "RESTful API", "Google Auth", "Firebase"] },
  { id: 8, projectName: "Netflix Demo", projectThumbnail: net, title: "Video Streaming", description: "Stream seamlessly with my Netflix demo, delivering captivating content and personalised recommendations right to your fingertips. Utilising Next.js, React.js, TailwindCSS, and TypeScript, I have crafted an immersive and dynamic user experience. The sleek UI design is powered by Shadcn, ensuring a visually appealing interface, while Clerk.com provides secure user management. Additionally, Stream's video and audio features enhance the overall experience, making it a perfect solution for online entertainment. Explore the future of streaming with my innovative web application.", githubLink: "#", liveLink: "https://netflix-clone-demo-16a71.web.app/", type: "Website", languages: ["ReactJs", "Tailwind CSS", "RESTful API"] },
  { id: 9, projectName: "Edwin's Resume", projectThumbnail: edwin, title: "Resume", description: "I've crafted a dynamic web application for Edwin's resume, blending sleek design with seamless functionality to showcase his career journey. Utilising HTML, CSS, and JavaScript, I've created an intuitive interface that highlights Edwin's skills, experiences, and projects. This resume app not only looks professional but also ensures an engaging and user-friendly experience. Explore Edwin's career journey through this modern, responsive, and interactive web application, tailored to make a lasting impression.", githubLink: "#", liveLink: "https://techiemokhele.github.io/edwinngwenya_resume.github.io/", type: "Website", languages: ["HTML", "CSS", "JavaScript"] },
  { id: 10, projectName: "LinkedIn Demo", projectThumbnail: link, title: "Social Media", description: "Revolutionise your networking journey through LinkedIn connections, effortlessly enhancing engagement and propelling professional growth. With a strategic blend of communication finesse and networking prowess, I orchestrate seamless interactions, fostering valuable connections. Elevate your professional trajectory with my expertise in leveraging LinkedIn's platform, harnessing its full potential to cultivate meaningful relationships and unlock unprecedented opportunities for advancement and collaboration.", githubLink: "#", liveLink: "https://linkedin-demo-b84d4.web.app/", type: "Website", languages: ["ReactJs", "Tailwind CSS", "Google Auth", "Firebase"] },
  { id: 11, projectName: "Music Player", projectThumbnail: music, title: "Music Streaming", description: "Immerse yourself in Sound: Your ultimate music escape awaits. Experience pure harmony with our meticulously crafted web application. Dive into a world where every beat resonates, and every melody enchants. With seamless navigation and stunning visuals, our platform offers a journey into the heart of music. Discover, explore, and indulge in the symphony of sounds, tailored just for you. Welcome to your sanctuary of sonic bliss.", githubLink: "https://github.com/techiemokhele/loan-calculator", liveLink: "https://github.com/techiemokhele/lets-dance-music-app", type: "Website", languages: ["HTML", "CSS", "JavaScript"] },
  { id: 12, projectName: "Loan Calculator", projectThumbnail: loan, title: "Calculator", description: "Transform your workouts with my Fitness ultimate tool for tracking progress, staying motivated, and achieving goals! With this comprehensive fitness companion, I empower individuals to elevate their training regimes. Whether monitoring progress, finding motivation, or reaching milestones, my solution ensures seamless navigation through every fitness journey. It's not just an app; it's a trusted partner in the pursuit of wellness, tailored to deliver results and inspire continuous improvement.", githubLink: "https://github.com/techiemokhele/loan-calculator", liveLink: "https://techiemokhele.github.io/loan-calculator/", type: "Website", languages: ["HTML", "CSS", "JavaScript"] },
  { id: 13, projectName: "Video Conference", projectThumbnail: videoImage, title: "Video & Audio", description: "I am excited to announce the launch of my latest web application, Video Conference! Using Next.js, React.js, TailwindCSS, and TypeScript, I've crafted a seamless and dynamic user experience. With Shadcn's sleek UI design and Clerk.com's secure user management, plus Stream's video/audio features, it offers an immersive online experience.", githubLink: "https://github.com/techiemokhele/video_conference", liveLink: "https://neo-mokhele-video-conference.vercel.app/", type: "Website", languages: ["NextJs", "Tailwind CSS", "Clerk"] },
  { id: 14, projectName: "Traveller", projectThumbnail: traveller, title: "Landing Page", description: "I'm thrilled to introduce Mokhele Traveller, my new web application! Built with Next.js, TailwindCSS, and TypeScript, it features a visually striking hero section to capture attention, a dedicated camp exploration section for discovering various camps, and an engaging travel guide filled with informative content and captivating visuals. Additionally, it includes a feature-rich section with advanced functionalities, a call-to-action encouraging mobile app downloads, and a comprehensive footer with site and social media links for easy navigation. Experience seamless travel planning with Mokhele Traveller!", githubLink: "https://github.com/techiemokhele/traveller", liveLink: "https://neomokhele-traveller.vercel.app/", type: "Website", languages: ["Tailwind CSS", "TypeScript", "NextJs"] },
  { id: 15, projectName: "Spendio E-commerce", projectThumbnail: spendio, title: "E-commerce", description: "I am thrilled to share my e-commerce website, Spendio! Built with TypeScript, Tailwind CSS, and NextJS, Spendio offers a seamless and engaging shopping experience. I believe in the power of community-driven commerce and are dedicated to creating a platform that benefits consumers and fosters meaningful connections. Explore Spendio for a shopping experience that truly connects people and products!", githubLink: "https://github.com/techiemokhele/classnova", liveLink: "https://neomokhele-spendio.vercel.app", type: "Website", languages: ["Tailwind CSS", "TypeScript", "NextJs"] },
  { id: 16, projectName: "Neo M. Auto Repairs Notes App", projectThumbnail: auto, title: "Auto Repairs Notes App", description: "I am excited to announce the release of Neo M. Auto Repairs Notes App! This app is designed to streamline and simplify note management within auto repair shops. Admins and managers have full CRUD functions, while employees can view and create their notes. Managers and admins can manage users and notes efficiently. The app includes a functional contact section and is built with the MERN stack. Credentials of admin: Username - Jeffs, Password - 1234. Credentials of employee: Username - Spha, Password - 1234", githubLink: "https://github.com/techiemokhele/technotes-mern-stack-frontend", liveLink: "https://neomokhele-auto-repairs-notes.onrender.com/", type: "Website", languages: ["MongoDB", "Express.js", "React.js", "Node.js"] },
  { id: 17, projectName: "GoDaddy Clone", projectThumbnail: goDad, title: "GoDad", description: "GoDad Clone is a sophisticated platform designed to streamline and enhance your web development workflow, offering a modern and efficient approach to managing projects. Built using Next.js, React.js, and TailwindCSS, this platform leverages the latest technologies to deliver a seamless, responsive user experience. The integration of TailwindCSS ensures a clean and customisable design, while the use of Next.js boosts performance through server-side rendering and static site generation. React.js powers the dynamic and interactive components, allowing for smooth and fast navigation.", githubLink: "https://github.com/techiemokhele/godad_clone", liveLink: "https://neomokhele-godad-clone.vercel.app/", type: "Website", languages: ["Next.js", "React.js", "Tailwind CSS"] },
  { id: 18, projectName: "Weather Forecast App", projectThumbnail: weatherApi, title: "Weather Forecast", description: "This project involves building a weather application that fetches and displays location-based weather data, city selection, and other UI components such as dark/light mode toggles and a custom-tailored design using Tailwind CSS.", githubLink: "https://github.com/techiemokhele/weather_app", liveLink: "https://neomokhele-weather-app.vercel.app/", type: "Website", languages: ["Next.js", "TypeScript", "Tailwind CSS", "API"] },
  { id: 19, projectName: "High Five Videos", projectThumbnail: highFiveVideos, title: "High Five Videos", description: "The goal of this project was to accurately recreate the provided design using React along with Tailwind CSS for styling. Paid close attention to details like spacing, fonts, and colors, and aimed to deliver a pixel-perfect or near-perfect match of the Figma design across various screen sizes.", githubLink: "https://github.com/techiemokhele/high-five-videos", liveLink: "https://neomokhele-high-five-videos.vercel.app/", type: "Website", languages: ["Next.js", "TypeScript", "Tailwind CSS"] },
  { id: 20, projectName: "GymBuddies Web App", projectThumbnail: gymBuddies, title: "GymBuddies", description: "GymBuddies is a web-based application designed to provide personalised workout routines, easy customisation options, and a seamless experience for users looking to elevate their fitness journey.", githubLink: "https://github.com/techiemokhele/gymbuddies", liveLink: "https://neomokhele-gymbuddies.vercel.app/", type: "Website", languages: ["Next.js", "TypeScript", "Tailwind CSS"] },
  { id: 21, projectName: "Neoteric Mining App", projectThumbnail: miniApp, title: "Neoteric Mining", description: "A modern company landing page showcasing Neoteric's mining equipment and services. Features responsive design with equipment galleries, company information sections, contact forms with email integration, and newsletter subscription functionality. Built with server-side rendering for optimal performance and includes dark/light mode toggles with custom-tailored design using Tailwind CSS.", githubLink: "https://github.com/techiemokhele/neoteric_modern_website", liveLink: "https://neomokhele-neoteric.vercel.app/", type: "Website", languages: ["Next.js", "TypeScript", "Tailwind CSS"] },
  { id: 22, projectName: "Mokhele Media Storage", projectThumbnail: mokheleMediaStorage, title: "Mokhele Media Storage", description: "Effortlessly upload, organise, and share your files with Mokhele Media Storage. A secure, fast, and reliable cloud storage platform built with Next.js and Appwrite for seamless file management.", githubLink: "https://github.com/techiemokhele/mokhele-media-storage", liveLink: "https://mokhele-media-storage.vercel.app/", type: "Website", languages: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Appwrite", "ShadCn"] },
  { id: 23, projectName: "Lumiere Dining", projectThumbnail: lumiere, title: "Lumiere Dining", description: "A full-featured fine dining restaurant web application built with Next.js 14, featuring online ordering, user authentication, menu browsing, a newsletter/blog system, and more.", githubLink: "https://github.com/techiemokhele/lumiere_dining", liveLink: "https://lumiere-dining-phi.vercel.app/", type: "Website", languages: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Cloudinary", "ShadCn"] },
  { id: 24, projectName: "SkyX - Luxury Chauffer Services", projectThumbnail: skyX, title: "SkyX - Luxury Chauffer Services", description: "Full-stack luxury chauffeur booking platform with real-time chat, WebRTC calling, AI support, wallet system, and bidding engine - built with Next.js 16 & MongoDB.", githubLink: "https://github.com/techiemokhele/sky-x-chauffeur", liveLink: "https://neomokhele-sky-x-chauffeur.vercel.app/", type: "Website", languages: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Cloudinary", "ShadCn", "WebRTC", "Claude-AI", "Recharts"] },
];

const headsetImage = "/images/portfolio/headset.png";
const debugImage = "/images/portfolio/debug.png";
const linkedIn = "/images/portfolio/linkedinApp.png";
const f1 = "/images/portfolio/f1.png";

export const mobileProjects: Project[] = [
  { id: 1, projectName: "Headset Online Store", projectThumbnail: headsetImage, title: "E-commerce", description: "Dive into the realm of technological bliss with my immersive headset mobile store app. It serves as your gateway to accessing premium sound experiences on-the-go, offering a curated selection of top-quality headsets. Crafted with meticulous attention to detail, this app ensures seamless navigation and an engaging user interface. Elevate your audio journey with cutting-edge technology at your fingertips, revolutionising the way you experience sound in the digital age.", githubLink: "https://github.com/techiemokhele/NMHeadsets", liveLink: "#", type: "Mobile", languages: ["TypeScript", "CSS", "Expo Router"] },
  { id: 2, projectName: "Let's Debug Code", projectThumbnail: debugImage, title: "Code Debug", description: "Embark on a journey of coding mastery with my innovative mobile app - Let's Debug! This cutting-edge tool empowers you to streamline your code, conquer bugs, and elevate performance effortlessly. Utilising state-of-the-art technologies like React Native and Redux, Let's Debug offers a seamless debugging experience like no other. Whether you're a seasoned developer or just starting out, Let's Debug equips you with the tools you need to excel in the world of software development.", githubLink: "https://github.com/techiemokhele/MokheleStackFlow", liveLink: "#", type: "Mobile", languages: ["React Native", "Redux", "Core-js", "Expo Router"] },
  { id: 3, projectName: "LinkedIn Mobile App", projectThumbnail: linkedIn, title: "Social Media", description: "Embark on a transformative journey with the LinkedIn Mobile App, your ultimate gateway to boundless professional opportunities. Seamlessly navigate the dynamic landscape of networking, career advancement, and industry insights. Elevate your trajectory with personalised connections, curated content, and powerful tools tailored to your aspirations. Unleash your potential, expand your horizons, and seize every opportunity that awaits in the ever-evolving realm of professional growth.", githubLink: "https://github.com/techiemokhele/ChatMediaHub", liveLink: "#", type: "Mobile", languages: ["React Native", "TypeScript", "Expo Router"] },
  { id: 4, projectName: "F1 Mobile App", projectThumbnail: f1, title: "News Feed", description: "Embark on the exhilarating journey with Mokhele's F1 App: a blend of speed, strategy, and success! This ultimate mobile companion caters to Formula 1 aficionados, offering an immersive experience that keeps you ahead of the curve. With real-time updates, insightful analytics, and intuitive interface, it's your gateway to the thrilling world of Formula 1 racing. Stay on track, seize every opportunity, and embrace victory with Mokhele's F1 App.", githubLink: "https://github.com/techiemokhele/MokheleF1App/", liveLink: "#", type: "Mobile", languages: ["React Native", "TypeScript", "Expo Router"] },
];

const whack = "/images/portfolio/whack.png";
const hangman = "/images/portfolio/hangman.png";
const tetris = "/images/portfolio/tetris.png";
const rock = "/images/portfolio/rock.png";

export const gameProjects: Project[] = [
  { id: 1, projectName: "Whack-a-mole Game", projectThumbnail: whack, title: "Interactive", description: "Indulge in the timeless joy of whacking moles online, now revamped with a modern twist in this captivating web application. Seamlessly blending nostalgia with innovation, this addictive game promises endless entertainment. Engage your reflexes, strategise your moves, and immerse yourself in the thrill of the chase. Experience the classic fun reimagined for the digital age, where every click brings a new adventure. Get ready to embark on a mole-whacking journey like never before!", githubLink: "https://github.com/techiemokhele/whack-a-mole-web-app", liveLink: "https://techiemokhele.github.io/whack-a-mole-web-app/", type: "Game", languages: ["HTML", "CSS", "JavaScript"] },
  { id: 2, projectName: "Hangman Game", projectThumbnail: hangman, title: "Trivial", description: "Embark on a thrilling online adventure! Dive into our addictive Hangman Web App and unravel the mystery word before time runs out. Engage your mind, challenge your wit, and experience the excitement of guessing each letter. With sleek design and seamless gameplay, our app promises hours of entertainment. Test your vocabulary, sharpen your skills, and immerse yourself in the ultimate guessing game. Play now and let the fun begin!", githubLink: "https://github.com/techiemokhele/ajax-hangman-app", liveLink: "https://techiemokhele.github.io/ajax-hangman-app/", type: "Game", languages: ["HTML", "CSS", "JavaScript"] },
  { id: 3, projectName: "Tetris Game", projectThumbnail: tetris, title: "Building Blocks", description: "Immerse yourself in nostalgia, challenge, and joy with our Tetris Web App – offering timeless entertainment at your fingertips! Experience the thrill of the classic game revamped for the digital age. With sleek design and seamless functionality, our app delivers an unforgettable gaming experience. Dive into endless hours of fun as you sharpen your skills and compete for the highest score. Get ready to rediscover the magic of Tetris like never before!", githubLink: "https://github.com/techiemokhele/tetris-game-with-js", liveLink: "https://techiemokhele.github.io/tetris-game-with-js/", type: "Game", languages: ["HTML", "CSS", "JavaScript"] },
  { id: 4, projectName: "Rock Paper Scissors Game", projectThumbnail: rock, title: "Interactive", description: "Embark on a journey of fun with our Rock Paper Scissors web app. Challenge friends and indulge in the timeless gameplay of this classic. Whether you're on the go or relaxing at home, our app provides endless entertainment. With intuitive controls and vibrant visuals, it's an experience like no other. Unleash your competitive spirit and immerse yourself in the excitement of Rock Paper Scissors, anytime, anywhere!", githubLink: "https://github.com/techiemokhele/rock-paper-scissor", liveLink: "https://techiemokhele.github.io/rock-paper-scissor/", type: "Game", languages: ["HTML", "CSS", "JavaScript"] },
];

const smut = "/images/portfolio/smuts.png";
const university = "/images/portfolio/university.png";

export const cmsProjects: Project[] = [
  { id: 1, projectName: "Smuts Hall", projectThumbnail: smut, title: "Website", description: "I've developed a fully functional web application using Wix. This intuitive platform allowed me to craft a seamless user experience with ease. The web app boasts a built-in chatbot, enhancing interactivity and engagement. With Wix's versatile tools and features, I created a dynamic platform that meets the needs of users. From design to functionality, this project showcases my proficiency in web development and user-centric design.", githubLink: "#", liveLink: "https://neomokhele23.wixsite.com/smuts-hall", type: "CMS", languages: ["CMS", "Full Stack Development", "Wix"] },
  { id: 2, projectName: "University House", projectThumbnail: university, title: "Website", description: "I've created a fully functional web application using Wix, featuring a seamless user experience. With its intuitive interface and robust functionality, users can navigate effortlessly. One standout feature is the built-in chatbot, enhancing interaction and providing instant assistance. Whether it's for business or personal use, this web app offers convenience and reliability. Explore the possibilities with this innovative solution, designed to streamline your online experience.", githubLink: "#", liveLink: "https://neomokhele23.wixsite.com/university-house", type: "CMS", languages: ["CMS", "Full Stack Development", "Wix"] },
];
