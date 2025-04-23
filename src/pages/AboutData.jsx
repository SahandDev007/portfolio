import React from "react";
import {
  FaGithub,
  FaReact,
  FaJs,
  FaCss3Alt,
  FaNodeJs,
  FaSass,
  FaGitAlt,
  FaPython,
  FaPhp,
  FaVuejs,
  FaDocker,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";

import {
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiChartdotjs,
  SiPostman,
  SiJira,
  SiDjango,
  SiNestjs,
  SiExpress,
  SiRecoil,
  SiMui,
  SiLaravel,
  SiStyledcomponents,
  SiFastapi,
  SiFlask,
  SiExpo,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const aboutData = {
  description: (
    <React.Fragment>
      I'm a passionate <strong>Full Stack Engineer</strong> with <strong>8+ years</strong> of experience connecting front-end artistry and back-end logic, transforming ideas into high-performance web applications using React, Vue, Node.js and Python, while embracing cutting-edge technologies like AI chatbots and Web3 to build the future of the web.
    </React.Fragment>
  ),
  techStack: [
    {
      kind: "Language",
      skills: [
        <FaJs title="JavaScript" />,
        <FaNodeJs title="Node.js" />,
        <FaPython title="Python" />,
        <FaPhp title="PHP" />,
      ],
    },
    {
      kind: "Front End",
      skills: [
        <FaReact title="React.js" />,
        <SiNextdotjs title="Next.js" />,
        <FaVuejs title="Vue.js" />,
        <SiRedux title="Redux / Redux-saga" />,
        <SiRecoil title="Recoil" />,
        <SiTailwindcss title="Tailwind CSS" />,
        <SiMui title="Material UI" />,
        <FaSass title="SCSS" />,
        <FaCss3Alt title="Css" />,
        <SiStyledcomponents title="StyleComponent" />,
        <SiChartdotjs title="amCharts / Recharts" />,
      ],
    },
    {
      kind: "Mobile",
      skills: [
        <TbBrandReactNative title="React Native" />,
        <SiExpo title="Expo" />,
        <FaFlutter title="Flutter" />,
      ],
    },
    {
      kind: "Back End",
      skills: [
        <SiExpress title="Express.js" />,
        <SiNestjs title="NestJs" />,
        <SiDjango title="Django" />,
        <SiFlask title="Flask" />,
        <SiFastapi title="FastAPI" />,
        <SiLaravel title="Laravel" />,
      ],
    },
    {
      kind: "Project Management & Other",
      skills: [
        <FaGitAlt title="Git" />,
        <FaDocker title="Docker" />,
        <FaGithub title="Github" />,
        <SiPostman title="Postman" />,
        <SiJira title="Jira" />,
      ],
    },
  ],
  experienceList: [
    `Built performant UIs with React/Vue, Tailwind/MUI, and state management (Redux/Pinia), cutting load times by 40% via code-splitting and WASM integration.`,
    `Designed REST/GraphQL APIs in Node.js (Express/NestJS) and Python (Django/Flask), handling 10K+ RPS with Redis caching and async workers.`,
    `Architected a Web3 DApp for secure document verification (Solidity, Ethers.js), reducing fraud cases by 30% for a fintech client.`,
    `Trained LLM-powered chatbots (GPT-4, LangChain) to automate 70% of customer support queries with custom fine-tuning.`,
    `Enforced CI/CD pipelines (GitHub Actions, Docker) and accessibility (WCAG) across teams, slashing regression bugs by 25%.`,
  ],
  passionProjects: [
    `Over the past three years, I've embarked on over 35+ side project that serve as a testament to my commitment to frontend innovation. From developing an AI Resume Critic to crafting a snappy OTP component, each project reflects my dedication to enhancing user experience and interface design.`,
    `Notably, I've built full-fledged clones of popular applications like Gmail and Snapchat, utilizing technologies such as React.js, Redux, Firebase, and Material-UI. These projects not only mirror the functionalities of their originals but also incorporate unique features that improve performance and usability.`,
    `Beyond these, my portfolio includes a variety of projects ranging from animation-rich UI explorers to complex data visualization tools. Each endeavor underscores my passion for micro-interactions,performance optimization, and pixel-perfect design.`,
  ],
};
