import { FaComputer } from "react-icons/fa6";
import { LiaNode } from "react-icons/lia";
import { IoLogoFirebase } from "react-icons/io5";

import { FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaSass } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import {
  SiTypescript,
  SiAxios,
  SiStyledcomponents,
  SiJest,
  SiReactquery,
  SiReactrouter,
  SiTailwindcss,
  SiNextdotjs,
  SiTestinglibrary,
  SiMongodb,
  SiPrisma,
} from "react-icons/si";
import { LuTestTube } from "react-icons/lu";

import { GiSkills } from "react-icons/gi";

export const datasSkill = [
  {
    title: "Next.JS",
    describe: "Framework of JavaScript",
    svg: <SiNextdotjs />,
    subTitle: "Tecnologias",
    type: "Front-End",
    color: "#94a3b8",
    subSkills: [
      {
        title: "SSR",
        subTitle: "Server-side Rendering",
        svg: <SiNextdotjs />,
        subColor: "#94a3b8",
      },
      {
        title: "CSR",
        subTitle: "Client Side Rendering",
        svg: <SiNextdotjs />,
        subColor: "#94a3b8",
      },
      {
        title: "Etc...",
        subTitle: "pages routes, dynamic router",
        svg: <SiNextdotjs />,
        subColor: "#94a3b8",
      },
    ],
  },
  {
    title: "React.JS",
    describe: "Library for web",
    svg: <FaReact />,
    subTitle: "Tecnologias",
    type: "Front-End",
    color: "#79D8F7",
    subSkills: [
      {
        title: "Axios",
        subTitle: "Client HTTP",
        svg: <SiAxios />,
        subColor: "#facc15",
      },
      {
        title: "React Routes",
        subTitle: "Sistem of Routes",
        svg: <SiReactrouter />,
        subColor: "#a16207",
      },
      {
        title: "Redux",
        subTitle: "Maintainable Global",
        svg: <TbBrandRedux />,
        subColor: "#593A88",
      },
      {
        title: "React Query",
        subTitle: "Client HTTP",
        svg: <SiReactquery />,
        subColor: "#F63F52",
      },
      {
        title: "React Hooks",
        subTitle: "Api Context, useRedux, useState etc...",
        svg: <GiSkills />,
        subColor: "#DCEEED",
      },
    ],
  },

  {
    title: "Cascading Styles Sheets",
    describe: "Library of CSS",
    svg: <FaCss3Alt />,
    subTitle: "Tecnologias",
    type: "Front-End",
    color: "#1CA5B6",
    subSkills: [
      {
        title: "Styled-Components",
        subTitle: "CSS in JS",
        svg: <SiStyledcomponents />,
        subColor: "#F2A3E0",
      },
      {
        title: "Sass",
        subTitle: "Sass is a stylesheet language that's compiled",
        svg: <FaSass />,
        subColor: "#C66394",
      },
      {
        title: "TailwindCss",
        subTitle: "Utility-first CSS framewor",
        svg: <SiTailwindcss />,
        subColor: "#1CA5B6",
      },
    ],
  },
  {
    title: "TypeScript",
    describe: "TypeScript extends JavaScript by adding types",
    svg: <SiTypescript />,
    subTitle: "Tecnologias",
    type: "Front-End",
    color: "#0076C7",
    subSkills: [
      {
        title: "Types",
        subTitle: "types numbers, boolean, string",
        svg: <GiSkills />,
        subColor: "#0076C7",
      },
      {
        title: "Interface",
        subTitle: "Type to Objects",
        svg: <GiSkills />,
        subColor: "#0076C7",
      },
      {
        title: "Etc...",
        subTitle: "Tuplas, Types etc...",
        svg: <GiSkills />,
        subColor: "#0076C7",
      },
    ],
  },

  {
    title: "Tests Library",
    describe: "Bibliotecas para testes unitários",
    svg: <LuTestTube />,

    subTitle: "Tecnologias",
    type: "Front-End",
    color: "#facc15",
    subSkills: [
      {
        title: "Jest",
        subTitle: "Framework de Testes em JavaScript",
        svg: <SiJest />,
        subColor: "#C03B13",
      },
      {
        title: "React Testing Library",
        subTitle: "Framework de Testes em React.JS",
        svg: <SiTestinglibrary />,
        subColor: "#C9433B",
      },
    ],
  },
  {
    title: "BackEnd",
    describe: "Estudando no momentos",
    svg: <FaComputer />,

    subTitle: "Tecnologias",
    type: "Front-End",
    color: "#FFD700	",
    subSkills: [
      {
        title: "Node.JS",
        subTitle: "Runtime  of Javascript",
        svg: <LiaNode />,
        subColor: "#6CA360",
      },
      {
        title: "MongoDB",
        subTitle: "NoSQL database",
        svg: <SiMongodb />,
        subColor: "#529334",
      },
      {
        title: "Prisma",
        subTitle: "ORM",
        svg: <SiPrisma />,
        subColor: "#f59e0b",
      },
      {
        title: "IoLogoFirebase ",
        subTitle: "Database of Google",
        svg: <IoLogoFirebase />,
        subColor: "yellow",
      },
    ],
  },
  {
    title: "Others Tools",
    describe: "Outras Tecnologias",
    svg: <LuTestTube />,

    subTitle: "Tecnologias",
    type: "Front-End",
    color: "#1E90FF	",
    subSkills: [
      {
        title: "Git",
        subTitle: "Gerenciador de Versionamento",
        svg: <FaGitAlt />,
        subColor: "#D74A34",
      },
      {
        title: "Github",
        subTitle: "Repositório de projetos",
        svg: <FaGithub />,
        subColor: "#000000",
      },
    ],
  },
];
