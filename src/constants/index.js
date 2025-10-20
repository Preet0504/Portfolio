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
  carrent,
  jobit,
  tripguide,
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
    id: "volunteering",
    title: "Volunteering",
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
  "Languages": [
    {
      name: "Python",
      icon: javascript,
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
      name: "Java",
      icon: reactjs,
    },
    {
      name: "Go",
      icon: nodejs,
    },
    {
      name: "C/C++",
      icon: html,
    },
    {
      name: "R",
      icon: redux,
    },
  ],
  "Frameworks & Libraries": [
    {
      name: "React.js",
      icon: reactjs,
    },
    {
      name: "Node.js",
      icon: nodejs,
    },
    {
      name: "Next.js",
      icon: reactjs,
    },
    {
      name: "Flask",
      icon: nodejs,
    },
    {
      name: "Django",
      icon: nodejs,
    },
    {
      name: "FastAPI",
      icon: nodejs,
    },
    {
      name: "TensorFlow",
      icon: tailwind,
    },
    {
      name: "PyTorch",
      icon: tailwind,
    },
  ],
  "Cloud & DevOps": [
    {
      name: "AWS",
      icon: backend,
    },
    {
      name: "GCP",
      icon: backend,
    },
    {
      name: "Azure",
      icon: backend,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Kubernetes",
      icon: docker,
    },
    {
      name: "Git",
      icon: git,
    },
  ],
  "Data & Analytics": [
    {
      name: "Hadoop",
      icon: mongodb,
    },
    {
      name: "Spark",
      icon: mongodb,
    },
    {
      name: "Kafka",
      icon: mongodb,
    },
    {
      name: "PowerBI",
      icon: figma,
    },
    {
      name: "Tableau",
      icon: figma,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "PostgreSQL",
      icon: mongodb,
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


const volunteering = [
  {
    title: "Secretary",
    organization: "Anime Community at Ahmedabad University",
    date: "2024",
    points: [
      "Organized and managed 20+ community events including workshops, screenings, and cultural activities.",
      "Handled registrations, financial reports, and budget planning with data-driven insights for decision-making.",
      "Collaborated with university clubs and student organizations to drive community growth and engagement.",
      "Increased community membership by 150% through strategic outreach and marketing initiatives.",
      "Provided administrative support and maintained detailed records for community activities and finances.",
    ],
  },
  {
    title: "Student Ambassador",
    organization: "Blockheads Cafe",
    date: "2024",
    points: [
      "Led awareness campaigns at Ahmedabad University to promote cafe products and services.",
      "Interacted with 100+ customers to gather feedback and provide actionable insights to management.",
      "Developed and executed marketing strategies to increase brand visibility on campus.",
      "Analyzed customer preferences and trends to help optimize product offerings.",
      "Built strong relationships between the organization and student community.",
    ],
  },
  {
    title: "Volunteer",
    organization: "Jivdaya Charitable Trust",
    date: "2022",
    points: [
      "Assisted workers with day-to-day operations including cleaning, food preparation, and medicine distribution.",
      "Led and coordinated volunteer teams to perform tasks efficiently and safely.",
      "Participated in animal care and feeding activities at the shelter.",
      "Demonstrated commitment to animal welfare and community service.",
      "Developed leadership and teamwork skills through hands-on volunteer coordination.",
    ],
  },
];

const projects = [
  {
    name: "Distributed Analytics Pipeline",
    description:
      "Built a distributed analytics pipeline over 600+ research papers using Hadoop and AWS EMR, reducing data retrieval latency by 2.5× and memory usage by 30%. Designed Spark-based clustering and anomaly detection modules to identify topic patterns and emerging trends.",
    tags: [
      {
        name: "hadoop",
        color: "blue-text-gradient",
      },
      {
        name: "aws-emr",
        color: "green-text-gradient",
      },
      {
        name: "spark",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Preet0504",
  },
  {
    name: "AI College Finder Platform",
    description:
      "Developed a data-backed recommendation system achieving 95% matching accuracy between student profiles and college outcomes using GPT-4 embeddings. Engineered data pipelines with Selenium and Beautiful Soup to extract datasets from 1,200+ college websites.",
    tags: [
      {
        name: "gpt-4",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "powerbi",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Preet0504",
  },
  {
    name: "RAND-SLA: Bayesian Structure Learning",
    description:
      "Designed a Bayesian causal inference framework using randomized conditioning to accelerate network structure learning, cutting computation time by 34% while maintaining accuracy. Applied results to predictive analytics pipelines for decision-support systems.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Preet0504",
  },
];

export { services, technologies, experiences, volunteering, projects };
