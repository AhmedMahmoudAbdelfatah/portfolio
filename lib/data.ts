import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";
import SharePrompts from "@/public/images/share-prompts.png";
import Prezophopia from "@/public/images/prezophopia.png";
import Note from "@/public/images/note.png";

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
  },
  {
    title: "Front-end Developer",
    location: "Sheriax",
    description:
      "I worked for two months in an agile work environment using scrum methodology and Trello task management, Developed the Sheraix website from scratch on a new design (Sheriax website is the main website of Sheriax company), Created a website for the Chatiko app (an AI assistant app available on the Google Play Store). I used Nextjs in the two projects",
    icon: React.createElement(CgWorkAlt),
    date: "Feb-2024 - Apr-2024",
  },
  {
    title: "Front-end Developer",
    location: "Freelancing",
    description:
      "I am currently a front-end developer working as a freelancer. My skill set includes React, Next.js, TypeScript, Tailwind CSS, Bootstrap, and Styled Components. I am open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Apr-2024 - present",
  },
  {
    title: "Teaching Assistant",
    location: "Fayoum University",
    description:
      "I am working as a teaching assistant in the Computer and Systems Department.",
    icon: React.createElement(LiaUniversitySolid),
    date: "April-2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Share Prompts",
    description:
      "It is a web application that allows users to share their creative prompts and browse other users' prompts. Users can log in, create a post, view all posts and search them by username, tag, or prompt, update their posts later, and copy the prompt of any post to their clipboard.",
    tags: ["TypeScript", "Next.js", "MongoDB", "Tailwind", "Next-Auth"],
    imageUrl: SharePrompts,
    github: "https://github.com/AhmedMahmoudAbdelfatah/share-prompt",
    live: "https://share-prompt-sepia.vercel.app"
  },
  {
    title: "Prezophobia",
    description:
      "It is a social network website that helps its users to overcome glossophobia, which is the fear of public speaking. Users can do a lot of things on the website, such as posting, commenting, updating profile, and more.",
    tags: [ "React", "React Query", "Axios", "Context API", "Font Awesome"],
    imageUrl: Prezophopia,
    github: "https://github.com/AhmedMahmoudAbdelfatah/prezophopia",
    live: ""
  },
  {
    title: "Note App",
    description:
      "It is a website that allows users to create notes with tags, title and markdown body. Users can delete or edit the notes after creating them. Users can also edit, delete or add new tags and it will automatically update all the tags in the notes.",
    tags: ["React", "TypeScript", "React Bootstrap", "React Markdown", "React Select"],
    imageUrl: Note,
    github: "https://github.com/AhmedMahmoudAbdelfatah/note-app",
    live: "https://note-vite.vercel.app"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Web Protocols",
  "Algorithms & Data structure",
  "OOP",
  "SOLID Principles",
  "Tailwind",
  "Bootstrap",
  "Styled-component",
  "Git & Github",
  "Design Patterns",
  "Redux",
  "Sass",
  "Node.js",
  "PL/SQL",
] as const;