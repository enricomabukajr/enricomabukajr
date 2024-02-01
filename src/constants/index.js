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
      "Experienced in full-stack development, particularly skilled in C# .NET Zero (Angular & Asp .NET EntityCore), with a proven history of delivering high-quality and scalable solutions.",
      "Skilled in a variety of architectural paradigms, such as MVC, ORM, GraphQL API, Domain Driven Design, and others, and able to create software solutions with flexibility and adaptability.",
      "Integrated version control systems such as Git Repository into development workflows, facilitating efficient collaboration and tracking of code changes.",
      "Proficient in problem-solving and debugging techniques, with a strong aptitude for collaboration and effective communication, enabling seamless teamwork and successful project outcomes.",
    ],
  },
  {
    title: "Production Team Head",
    company_name: "IT Department in GenSantos Foundation Inc.",
    icon: gfi,
    iconBg: "#E6DEDD",
    date: "June 2021 - Present",
    points: [
      "Experienced in server-side development, including PHP Laravel, PHP Native, and other relevant frameworks, demonstrating proficiency in building robust backend solutions to meet diverse project requirements",
      "Proficient in utilizing Node.js, Express.js, and proficient in REST API documentation, ensuring clear and comprehensive communication of API functionalities and usage",
      "Adhered to Agile principles, actively participating in collaborative meetings within the department, fostering efficient communication and teamwork in project development",
      "Proficient in team leadership and development, adept at guiding and nurturing team members to achieve their full potential while fostering a collaborative and supportive work environment",
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
    name: "Customer Management System",
    description:
      "Independently developed a CIMS web application enabling coaches to efficiently manage their students while providing students with the ability to monitor their individual progress and status.",
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
