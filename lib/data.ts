import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";
import SharePrompts from "@/public/images/share-prompts.png";
import Note from "@/public/images/note.png";
import Prezophopia from "@/public/images/prezophopia.png";
import Thiqa from "@/public/images/thiqa.png";
import BestClinic from "@/public/images/best-clinic.png";
import Chatiko from "@/public/images/chatiko.png";
import Sheriax from "@/public/images/sheriax.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Development Intern",
    location: "NTI",
    description:
      "I finished after 30 days of studying the basics of web development and working on an e-commerce app with angular and node.js.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep-2022 - Oct-2022",
    teckStack: [
      "Angular",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Bootstrap",
    ],
  },
  {
    title: "Front-end Developer",
    location: "Sheriax",
    description:
      "I worked for two months in an agile work environment using scrum methodology and Trello task management, Developed the Sheraix website from scratch on a new design (Sheriax website is the main website of Sheriax company), Created a website for the Chatiko app (an AI assistant app available on the Google Play Store). I used Nextjs in the two projects",
    icon: React.createElement(CgWorkAlt),
    date: "Feb-2024 - Apr-2024",
    teckStack: ["Next.js", "TypeScript", "Sass", "Framer Motion"],
  },
  {
    title: "Front-end Developer",
    location: "Booking From A To Z",
    description:
      "In my role at Booking from A to Z, I worked for over four months in an agile environment, following Scrum methodology. I developed the Thiqa and Best Clinic websites using Next.js, gaining extensive hands-on experience with agile practices, team collaboration, and advanced web development techniques. This experience strengthened my skills in delivering high-quality, scalable applications in dynamic settings.",
    icon: React.createElement(FaReact),
    date: "Jul-2024 - Feb-2025",
    teckStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "Zustand",
      "ShadCN",
      "Axios",
      "Next-Intel",
      "Next Auth",
      "Framer Motion",
      "React Leaflet",
      "Zod",
      "React Query",
    ],
  },
  {
    title: "Front-end Developer",
    location: "Freelancing",
    description:
      "Performed system analysis to clarify business requirements across the software lifecycle. Met tight deadlines through effective time management and strategic planning.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb-2025 - Aug-2025",
    teckStack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
    ],
  },
  {
    title: "Front-end Developer",
    location: "ExpertEx",
    description:
      "Implemented new features and resolved UI responsiveness issues, improving overall user experience on Expertex.ai, a unified multimedia AI studio.",
    icon: React.createElement(FaReact),
    date: "Aug-2025 - Present",
    teckStack: [
      "React.js",
      "TypeScript",
      "Matrial UI",
      "Redux",
      "React Query",
      "Bootstrap",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Thiqa",
    description:
      "It is an advanced real estate platform for customers, agents, and companies, offering property listings, user-specific features, and industry insights. With options to buy or rent, Thiqa connects users with properties and professionals for a seamless experience. Feel free to visit the website.",
    tags: [
      "TypeScript",
      "Nextjs",
      "Tailwind CSS",
      "Next-auth",
      "React-forms",
      "Zod",
    ],
    imageUrl: Thiqa,
    github: "https://github.com/AhmedMahmoudAbdelfatah/thiqa",
    live: "https://thiqa1.com/",
  },
  {
    title: "Best Clinic",
    description:
      "It is a comprehensive and user-friendly website for medical clinics. It provides essential information about clinic services, booking options, blog articles, medical sheets, and contact details, delivering a seamless and accessible experience for users. Feel free to visit the website.",
    tags: [
      "TypeScript",
      "Nextjs",
      "Tailwind CSS",
      "React-forms",
      "Zod",
      "React-player",
    ],
    imageUrl: BestClinic,
    github: "https://github.com/AhmedMahmoudAbdelfatah/best-clinic",
    live: "https://www.bestclinic24.com/",
  },
  {
    title: "Sheriax",
    description:
      "This project is the main website for Sheriax, designed and developed during my internship to serve as the company's primary digital presence. The website showcases Sheriax’s services, values, and contact information, providing current and potential clients with a comprehensive overview of the company.",
    tags: ["TypeScript", "Next.js", "Sass", "CSS", "framer-motion"],
    imageUrl: Sheriax,
    github: "https://github.com/AhmedMahmoudAbdelfatah/Sheriax-website",
    live: "",
  },
  {
    title: "Chatiko",
    description:
      "It is a web-based extension of the existing Chatiko mobile app, designed to provide users with a seamless, AI-powered experience for various tasks. Built during my internship at Sheriax Company, this project allowed me to develop a dynamic, responsive platform that brings the Chatiko app’s capabilities to the web.",
    tags: ["TypeScript", "Next.js", "Sass", "CSS", "framer-motion"],
    imageUrl: Chatiko,
    github: "https://github.com/AhmedMahmoudAbdelfatah/chatiko",
    live: "",
  },
  {
    title: "Share Prompts",
    description:
      "It is a web application that allows users to share their creative prompts and browse other users' prompts. Users can log in, create a post, view all posts and search them by username, tag, or prompt, update their posts later, and copy the prompt of any post to their clipboard.",
    tags: ["TypeScript", "Next.js", "MongoDB", "Tailwind CSS", "Next-Auth"],
    imageUrl: SharePrompts,
    github: "https://github.com/AhmedMahmoudAbdelfatah/share-prompt",
    live: "https://share-prompt-sepia.vercel.app",
  },
  {
    title: "Prezophobia",
    description:
      "It is a social network website that helps its users to overcome glossophobia, which is the fear of public speaking. Users can do a lot of things on the website, such as posting, commenting, updating profile, and more.",
    tags: ["React", "React Query", "Axios", "Context API", "Font Awesome"],
    imageUrl: Prezophopia,
    github: "https://github.com/AhmedMahmoudAbdelfatah/prezophopia",
    live: "",
  },
  {
    title: "Note App",
    description:
      "It is a website that allows users to create notes with teckStack, title and markdown body. Users can delete or edit the notes after creating them. Users can also edit, delete or add new teckStack and it will automatically update all the teckStack in the notes.",
    tags: [
      "React",
      "TypeScript",
      "React Bootstrap",
      "React Markdown",
      "React Select",
    ],
    imageUrl: Note,
    github: "https://github.com/AhmedMahmoudAbdelfatah/note-app",
    live: "https://note-vite.vercel.app",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Reactjs",
  "Nextjs",
  "Next-Intel",
  "Tailwind CSS",
  "React Forms",
  "Zod",
  "Next Auth",
  "Redux",
  "Zustand",
  "Sass",
  "HTML5",
  "CSS3",
  "Algorithms & Data structure",
  "OOP",
  "Web Protocols",
  "SOLID Principles",
  "Bootstrap",
  "Styled-component",
  "Git & Github",
  "Design Patterns",
  "Node.js",
  "Matrial UI",
] as const;
