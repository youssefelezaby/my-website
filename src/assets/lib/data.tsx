import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import git from "../../assets/icons/git.svg";
import jira from "../../assets/icons/jira.svg";
import docker from "../../assets/icons/docker.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import react_native from "../../assets/icons/react_native.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import python from "../../assets/icons/python.svg";
import nestjs from "../../assets/icons/nestjs.svg";
import postgres from "../../assets/icons/postgres.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import { FaFileDownload } from "react-icons/fa";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    de: "Hi, ich bin Youssef Elezaby",
    en: "Hi, I'm Youssef Elezaby",
  },
  subtitle: "Fullstack Developer",
  description: {
    de: "Ich bin Youssef Elezaby, ein Fullstack-Entwickler mit dem Ziel, meine Karriere voranzutreiben und an inspirierenden Projekten teilzunehmen. Hier präsentiere ich meine Arbeiten und meine Leidenschaft für die Webentwicklung. Lassen Sie uns gemeinsam digitale Lösungen gestalten und die Zukunft formen!",
    en: "I'm Youssef Elezaby, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development.",
  },
  buttons: [
    {
      name: "CV",
      label: {
        de: "Mein Lebenslauf",
        en: "My CV",
      },
      icon: FaFileDownload,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },

    {
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact me",
      },
      icon: FiMail,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Tasty App",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN:
      "A recipe app that we built as a team with React and the MealDB API. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Canva", icon: canvaicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: tastyMockup,
    deploymenturl: "#",
    githuburl: "https://github.com/YoussefElezaby",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },

  {
    title: "Silentmoon",
    description:
      "Eine Yoga und Meditations App, die wir als Team mit React, MongoDB, Express und Node.js gebaut haben. Meine Aufgabe als Gitmaster und Backend Entwickler bestand darin, das Backend mit Anbindung anhand einer Restful API zu programmieren und die Datenbank in MongoDB zu modellieren.",
    description_EN:
      "A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Spotify Api", icon: spotifyicon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
    ],
    image: silentmoonMockup,
    deploymenturl: "#",
    githuburl: "https://github.com/YoussefElezaby/",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Furniture Organizer",
    description:
      "Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.",
    description_EN:
      "A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      { name: "Trello", icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: "#",
    githuburl: "https://github.com/YoussefElezaby",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Frontend",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },

      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "React Native",
        hash: "#ReactNative",
        icon: react_native,
        color: "#61DAFB",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Backend",
    skills: [
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "NestJS",
        hash: "#NestJS",
        icon: nestjs,
        color: "#E0234E",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: python,
        color: "#FFD846",
      },
      {
        title: "PostgreSQL",
        hash: "#PostgreSQL",
        icon: postgres,
        color: "#ffffff",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Tools",
    skills: [
      {
        title: "Docker",
        hash: "#Docker",
        icon: docker,
        color: "#2396ED",
      },
      {
        title: "Git",
        hash: "#Git",
        icon: git,
        color: "#EE513B",
      },
      {
        title: "Jira",
        hash: "#Jira",
        icon: jira,
        color: "#0255CF",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Kenntnisse", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  {
    de: "Berufserfahrung",
    en: "Experience",
    hash: "#experience",
    icon: GoPerson,
  },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:youssefel3zaby@gmail.com",
  text: "youssefel3zaby@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/youssefelezaby/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/YoussefElezaby",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:youssefel3zaby@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Das kleinste Unternehmen der Welt kann im Internet genauso groß wirken wie das größte."',
    en: `"The smallest company in the world can look as large as the largest company on the web."`,
    author: "Steve Jobs",
  },
  {
    de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Berufserfahrung",
  title_EN: "Experience",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Updropp",
      job_title: "Backend Entwickler",
      start_date: "Aug 2023",
      end_date: "Jan 2024",
      description:
        "• Entwicklung und Wartung von RESTful-APIs mit Node.js sowie Optimierung von Datenbankabfragen in Firebase und MongoDB." +
        "\n" +
        "• Entwicklung und Bereitstellung containerisierter Anwendungen mit Docker sowie Automatisierung von Pipelines mithilfe von CI/CD-Tools." +
        "\n" +
        "• Zusammenarbeit mit Frontend-Entwicklern, die mit React Native arbeiten, um nahtlose Full-Stack-Mobile-Anwendungsfunktionen bereitzustellen. " +
        "\n" +
        "• Arbeit in einem Agile Environment, Nutzung von Git für Versionskontrolle sowie Teilnahme an Sprint-Planungen und täglichen Stand-ups.",
      icon: hardwareicon,
    },
    {
      title: "Initium Solutions",
      job_title: "Full-Stack Entwickler & Technischer Produktberater",
      start_date: "Aug 2022",
      end_date: "Jul 2023",
      description:
        "• Beitrag zu groß angelegten Projekten in den Bereichen Banken, E-Commerce und Unternehmenslösungen durch Full-Stack-Entwicklung." +
        "\n" +
        "• Entwicklung skalierbarer, leistungsstarker Webanwendungen mit React, HTML5, CSS, Node.js, JavaScript, TypeScript und Python." +
        "\n" +
        "• Verwaltung von Daten mit MySQL-, MongoDB- und Oracle-Datenbanken." +
        "\n" +
        "• Anpassung von Bitrix24 Cloud mit JavaScript, jQuery und der Bitrix API." +
        "\n" +
        "• Bereitstellung technischer Einblicke und Umsetzung von Lösungen zur Steigerung von Effizienz und Marktreife.",
      icon: caricon,
    },
    {
      title: "ECS Distribution",
      job_title: "Produktmanager",
      start_date: "Aug 2019",
      end_date: "Jul 2022",
      description:
        "• Marktforschung betrieben, um Produktziele mit den Geschäftsanforderungen in Einklang zu bringen." +
        "\n" +
        "• Roadmaps, Features und Go-to-Market-Strategien mit klarer Dokumentation geplant." +
        "\n" +
        "• Zusammenarbeit mit Teams aus Entwicklung, Vertrieb und Marketing für eine reibungslose Umsetzung." +
        "\n" +
        "• Branchenkenntnisse genutzt, um Produktverbesserungen und Wettbewerbsfähigkeit voranzutreiben." +
        "\n" +
        "• Automatisierungstools wie Analyse-Apps, Online-Shops und Workflow-Skripte entwickelt.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "Updropp",
      job_title: "Backend Developer",
      start_date: "Aug 2023",
      end_date: "Jan 2024",
      description:
        "• Developed and maintained RESTful APIs with Node.js while optimizing database queries in Firebase and MongoDB." +
        "\n" +
        "• Built and deployed containerized applications using Docker and automated CI/CD pipelines." +
        "\n" +
        "• Collaborated with frontend teams using React Native to deliver seamless mobile application functionalities." +
        "\n" +
        "• Actively participated in Agile processes including sprint planning and daily stand-ups to ensure timely delivery and quality.",
      icon: hardwareicon,
    },
    {
      title: "Initium Solutions",
      job_title: "Full Stack Developer & Technical Product Consultant",
      start_date: "Aug 2022",
      end_date: "Jul 2023",
      description:
        "• Contributed to large-scale projects in banking, e-commerce, and corporate sectors, delivering full-stack solutions." +
        "\n" +
        "•  Engineered scalable, high-performance web applications using React, HTML5, CSS, Node.js, JavaScript, Typescript, and Python." +
        "\n" +
        "• Managed data using MySQL, MongoDB, and Oracle databases." +
        "\n" +
        "• Customized Bitrix24 Cloud via JavaScript, jQuery, and Bitrix API." +
        "\n" +
        "• Delivered technical insights and implemented solutions to boost efficiency and market readiness.",
      icon: caricon,
    },
    {
      title: "ECS Distribution",
      job_title: "Product Manager",
      start_date: "Aug 2019",
      end_date: "Jul 2022",
      description:
        "• Researched market needs to align product goals with business objectives." +
        "\n" +
        "• Planned roadmaps, features, and go-to-market strategies with clear documentation." +
        "\n" +
        "• Collaborated with teams across development, sales, and marketing for smooth delivery." +
        "\n" +
        "• Used industry insights to drive product improvements and competitiveness." +
        "\n" +
        "• Built automation tools like analytics apps, online Stores, and workflow scripts.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
