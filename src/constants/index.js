import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nutnull,
  gfi,
  rar,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Angular Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IT Consultation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Nutnull IT Solutions",
    icon: nutnull,
    iconBg: "#383E56",
    date: "June 2023 - September 2023",
    points: [
      "Developing and maintaining web applications using Angular, .NET and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Production Team Head",
    company_name: "IT Department in GenSantos Foundation Inc.",
    icon: gfi,
    iconBg: "#E6DEDD",
    date: "June 2021 - Present",
    points: [
      "Efficiently managing and allocating resources within the production team.",
      "Maintain project requirements, timelines, and available resources to ensure that the team has the necessary tools and manpower to meet production goals.",
      "Implementing and monitoring quality control measures throughout the production process.",
      "Effective resource planning contributes to the smooth execution of projects and helps in preventing delays or bottlenecks in the production process.",
    ],
  },
  {
    title: "IT Assistant",
    company_name: "Guhay CALT Organization",
    icon: mobile,
    iconBg: "#383E56",
    date: "October 2017 - February 2019",
    points: [
      "Assist colleagues with computer problems, like fixing software issues, setting up new devices, or troubleshooting internet connectivity problems.",
      "Help educate colleagues about safe online practices",
      "Providing organization's needs and Technical solutions.",
      "Responsible for configuring and deploying new hardware and software,.",
    ],
  },
];

const testimonials = [
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Reservation System",
    description:
      "Reservation System aims to provide a efficient way for students interested in music and arts programs to reserve their spots and manage their enrollment details.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: rar,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Asp .NET",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
