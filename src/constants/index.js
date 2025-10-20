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
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "Cloud Computing",
    icon: mobile,
  },
  {
    title: "Data Science & AI",
    icon: backend,
  },
  {
    title: "Product Development",
    icon: creator,
  },
];

const technologies = {
  "Full-Stack Development": [
    {
      name: "TypeScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      icon: mongodb,
    },
    {
      name: "Astro",
      icon: mongodb,
    },
    {
      name: "Express JS",
      icon: mongodb,
    },
    {
      name: "Angular JS",
      icon: mongodb,
    },
  ],
  "Cloud Computing": [
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Git",
      icon: git,
    },
  ],
  "Data Science & AI": [
    {
      name: "Python",
      icon: javascript, // Using JavaScript icon as placeholder for Python
    },
    {
      name: "Machine Learning",
      icon: backend, // Using backend icon as placeholder
    },
  ],
  "Tools and Technologies": [
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ],
};

const experiences = [
  {
    title: "Product Development Intern",
    company_name: "yourEDUGATOR",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2025 - August 2025",
    points: [
      "Worked closely with the CEO to build an AI-powered IELTS Speaking module; integrated Azure Speech SDK, \
      ElevenLabs STT, OpenAI tts-1, elevating speaking practice throughput by 3×.",
      "Built ETL pipelines processing JSON-schema datasets for Reading, Listening, and Writing; used OpenAI API and \
DALL-E 3 to auto-generate Writing Task-1 diagrams, boosting question bank coverage by 120%",
      "Developed RAG-based internal assistant (LangChain + OpenAI) indexing 200+ design docs, reducing knowledge lookup \
time by 50%.",
      "Crafted investor pitch deck, used PowerBI and Tableau to visualize company’s performance, performed market \
research, brainstormed with the CEO in making strategic decisions.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "Techsture Technologies",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
      "Deployed real-time C-V2X-based Pedestrian Detection and Alert Dissemination ITS testbed; validated 10+ scenarios \
demonstrating the robustness; achieved <10ms latency with multi-threaded UDP + SNMP monitoring.",
      "Developed and automated TCP/DNS network pipeline for server–RSU and RSU-OBU alerts, streamlining data flow \
reliability across vehicular networks.",
      "Used OpenStreetMap and JavaFX to develop a dashboard to track the vehicle’s location and display alert messages.",
    ],
  },
  {
    title: "Research Scholar",
    company_name: "MICxN Lab",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - April 2025",
    points: [
      "Supported faculty and peers by reviewing research papers, summarizing findings, and maintaining organized notes.",
      "Assisted with event coordination for technical workshops, including preparing materials and guiding participants.",
      "Collaborated with colleagues across disciplines, demonstrating adaptability and strong interpersonal skills.",
      "Conducted 5+ technical workshops in other universities on advanced topics, showing my tutoring skills.",
      "Mentored more than 20 junior research scholars on how to approach research and face the challenges while solving \
research problems.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Ahmedabad University",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2024 - March 2025",
    points: [
      "Artificial Intelligence: Assisted professor and a class of 40, including BTech, BSc, MTech, and PhD students.",
      "Embedded System Designs: Managed and evaluated assignments and projects of a class of 130 students.",
      "Predictive Analytics for Business: Helped a class of 60, including BBA and BTech students, with their conceptual queries.",
      "Computer Networks: Currently managing a class of 130 students. Providing C tutorials on file management in lab sessions.",
    ],
  },
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
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
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
        name: "supabase",
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

export { services, technologies, experiences, projects };
