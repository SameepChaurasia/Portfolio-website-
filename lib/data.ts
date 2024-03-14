import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import bharatestates from "@/public/bharatestates.png";
import carshow from "@/public/carshow.png";


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
    title: "Currently Building projects on my own and contributing to open source",
    location: "India",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "bharatestates",
    description:
      "It is a full stack web app that will help you find rent and buy properties and you can even list out your own property",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Javascript", "Firebase"],
    imageUrl: bharatestates,
  },
  {
    title: "carshow",
    description:
      "Its a car renting app which helps you select the car you like according to your choice",
    tags: ["React", "Vite", "RAPID API", "Tailwind", "TypeScript"],
    imageUrl: carshow,
  },
] as const;

export const skillsData = [
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
