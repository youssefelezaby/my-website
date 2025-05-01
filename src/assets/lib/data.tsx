import htmlicon from "../../assets/icons/htmlicon.svg";
import git from "../../assets/icons/git.svg";
import jira from "../../assets/icons/jira.svg";
import docker from "../../assets/icons/docker.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import gemini from "../../assets/icons/gemini.svg";
import zod from "../../assets/icons/zod.svg";
import shadcnui from "../../assets/icons/shadcn.svg";
import vapi from "../../assets/icons/vapi.webp";
import openai from "../../assets/icons/openai.svg";
import upstash from "../../assets/icons/upstash.svg";
import drizzle from "../../assets/icons/drizzle.svg";
import react_native from "../../assets/icons/react_native.svg";
import resend from "../../assets/icons/resend.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import vite from "../../assets/icons/vite.svg";
import neon from "../../assets/icons/neon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import python from "../../assets/icons/python.svg";
import nestjs from "../../assets/icons/nestjs.svg";
import postgres from "../../assets/icons/postgres.svg";
import firebase from "../../assets/icons/firebase.svg";
import ai_interview from "../../assets/img/ai-interview.png";
import ecs_calculations from "../../assets/img/ecs_calculations.png";
import uni_library from "../../assets/img/uni.png";
import profilepicture from "../img/me.webp";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import csharp from "../../assets/icons/csharp.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import { FaFileDownload } from "react-icons/fa";

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
    title: "AI Interviews",
    description:
      "AI Interviews ist eine Webplattform, die dir mithilfe von KI hilft, Vorstellungsgespräche erfolgreich zu meistern. Entwickelt mit Next.js, gestaltet mit TailwindCSS und unterstützt durch Firebase und Vapis Voice Agents – für realistische und interaktive Übung in modernem Design.",
    description_EN:
      "AI Interviews is a web platform that helps you succeed in job interviews using AI. Built with Next.js, styled with TailwindCSS, and powered by Firebase and Vapi’s voice agents, it offers realistic, interactive interview practice in a sleek, modern interface.",
    technologies: [
      { name: "NextJS", icon: nextjsiconwhite },
      { name: "Typescript", icon: typescripticon },
      { name: "TailwindCSS", icon: tailwindcssicon },
      { name: "Shadcn/ui", icon: shadcnui },
      { name: "Firebase", icon: firebase },
      { name: "Gemini", icon: gemini },
      { name: "Openai", icon: openai },
      { name: "Zod", icon: zod },
      { name: "Vapi", icon: vapi },
    ],
    image: ai_interview,
    deploymenturl: "https://ai-interviews-youssef.vercel.app",
    githuburl: "https://github.com/youssefelezaby/ai-interviews",
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
    title: "University Library",
    description:
      "Das University Library Management System ist eine skalierbare, produktionsreife Plattform auf Basis von Next.js, TypeScript und PostgreSQL. Es bietet eine öffentliche App und ein Admin-Panel mit Buchausleihe, Nutzerverwaltung und automatisierten Workflows.",
    description_EN:
      "The University Library Management System is a scalable, production-ready platform built with Next.js, TypeScript, and PostgreSQL. It features a public app and admin panel with book borrowing, user management, and automated workflows.",
    technologies: [
      { name: "NextJS", icon: nextjsiconwhite },
      { name: "PostgreSQL", icon: postgres },
      { name: "Typescript", icon: typescripticon },
      { name: "Shadcn/ui", icon: shadcnui },
      { name: "Upstash", icon: upstash },
      { name: "Neon", icon: neon },
      { name: "Resend", icon: resend },
      { name: "TailwindCSS", icon: tailwindcssicon },
      { name: "Drizzle ORM", icon: drizzle },
    ],
    image: uni_library,
    deploymenturl: "https://uni-library-youssef.vercel.app",
    githuburl: "https://github.com/youssefelezaby/uni-library",
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
    title: "ECS Calculations",
    description:
      "Eine Finanzanwendung in C#, entwickelt mit dem Frespire XLS-Paket zur präzisen Berechnung von DBR, DAR und Rabatten. Perfekt zur Automatisierung komplexer Finanzanalysen und Berichte.",
    description_EN:
      "A financial application built in C# using the Frespire XLS package, designed to calculate DBR, DAR, and rebates with accuracy and efficiency. Ideal for automating complex financial assessments and reporting.",
    technologies: [{ name: "C#", icon: csharp }],
    image: ecs_calculations,
    githuburl: "https://github.com/youssefelezaby/ecs-calculations",
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
        title: "Vite",
        hash: "#Vite",
        icon: vite,
        color: "#BB36FE",
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
      {
        title: "Firebase",
        hash: "#Firebase",
        icon: firebase,
        color: "#DD2C00",
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
export const skillscloud = [
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
