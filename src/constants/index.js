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
  fpt,
  viettel,
  java,
  brox,
  fun_course,
  fun_tree,
  light,
  vehicle,
  rabiloo,
  website_manage_project,
  crawl_data,
  hus,
  gdsc,
  gameEdu
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About us",
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile App Creation",
    icon: mobile,
  },
  {
    title: "Business Analysis",
    icon: backend,
  },
  {
    title: "Game Development",
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
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    title: "Second Prize in WebContest 2022",
    company_name: "Hanoi University of Science (HUS)",
    icon: hus,
    iconBg: "#ffffff",
    date: "July 2022 - September 2022",
    points: [
      "Participated in WebContest 2022 organized by HUS",
      "Developed a website from design to deployment",
      "Won second prize in the competition"
    ],
  },
  {
    title: "Third Prize in Demo Day of GDSC 2024",
    company_name: "Google Developer Student Clubs (GDSC)",
    icon: gdsc,
    iconBg: "#ffffff",
    date: "January 2024 - March 2024",
    points: [
      "Participated in GDSC 2024 competition focused on innovative app development",
      "Demoed the project and won third prize in Demo Day",
      "Developed the project using modern technologies such as React.js and Firebase"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "BRONX LUGGAGE",
    description:
      "A luggage and handbag e-commerce website with full functionality.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "white-text-gradient",
      },
    ],
    image: brox,
    source_code_link: "https://github.com/jeikai/eProject.git",
  },
  {
    name: "FUN TREE",
    description:
      "An application mobile instructs users to plant tree based on provided images.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Flutter",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "white-text-gradient",
      },
    ],
    image: fun_tree,
    source_code_link: "https://github.com/nas03/funtree_server.git",
  },
  {
    name: "Website manage project",
    description:
      "Website for both students and teachers helps to manage and mark graduation projects.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Nuxt JS",
        color: "pink-text-gradient",
      },
    ],
    image: website_manage_project,
    source_code_link: "https://github.com/manlly07/manlly-graduration.git",
  },
  {
    name: "RABILOO",
    description:
      "A subject website with three sites dedicated to students, teachers, and admins. The most prominent feature is facial recognition login.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
      {
        name: "React JS",
        color: "white-text-gradient",
      },
    ],
    image: rabiloo,
    source_code_link: "https://github.com/jeikai/project_hus.git",
  },
  {
    name: "FUN COURSE",
    description:
      "A course marketplace like Udemy, with AI features like a Recommendation System.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "pink-text-gradient",
      },
    ],
    image: fun_course,
    source_code_link: "https://github.com/jeikai/courseHust.git",
  },
  {
    name: "MICROORGANISM EDUCATIONAL GAME",
    description:
      "An educational game that helps students better understand the world of microorganisms.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Game Development",
        color: "pink-text-gradient",
      },
    ],
    image: gameEdu,
    source_code_link: "https://github.com/Vuxz123/MCGame4Funbug.git",
  },
  {
    name: "Secure Data Processing in Cyberspace",
    description:
      "A web app that crawls and clusters news for easy trend tracking.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Java Spring Boot",
        color: "pink-text-gradient",
      },
      {
        name: "React JS",
        color: "white-text-gradient",
      },
    ],
    image: crawl_data,
    source_code_link: "https://github.com/20215459-phuongvv/TextCrawling.git",
  },
  {
    name: "LIGHT'S",
    description:
      "An app supporting depression, offering daily suggestions like games and playlists, with a blue whale mascot.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Flutter",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "white-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: light,
    source_code_link: "https://github.com/jeikai/lights.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
