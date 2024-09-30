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
  crawl_data
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
    title: "Back-end intern",
    company_name: "FPT Information System",
    icon: fpt,
    iconBg: "#E6DEDD",
    date: "August 2023 - December 2023",
    points: [
      "Learning basic Java and Java Spring Boot",
      "Read and understand the product guarantee system on Sendo",
      "Implementing mobile application named Light's.",
    ],
  },
  {
    title: "Devop intern",
    company_name: "Viettel High Tech",
    icon: viettel,
    iconBg: "#E6DEDD",
    date: "July 2024 - October 2024",
    points: [
      "Developing web applications using React.js and other related technologies such as Java Spring boot, Python, Flask, v.v.",
      "Practicing code skills with Leetcode",
      "Learning many other technologies including Docker, NginX, Message queue, v.v",
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
  // {
  //   name: "BRONX LUGGAGE",
  //   description:
  //     "A luggage and handbag e-commerce website with full functionality.",
  //   tags: [
  //     {
  //       name: "HTML",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "PHP",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "SQL",
  //       color: "white-text-gradient",
  //     },
  //   ],
  //   image: brox,
  //   source_code_link: "https://github.com/jeikai/eProject.git",
  // },
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
    name: "VEHICLE INSPECTION WEBSITE",
    description:
      "A web app that crawls and clusters news, helping readers easily follow trends.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: vehicle,
    source_code_link: "https://github.com/jeikai/dangkiem.git",
  },
  // {
  //   name: "Secure Data Processing in Cyberspace",
  //   description:
  //     "A web app that crawls and clusters news for easy trend tracking.",
  //   tags: [
  //     {
  //       name: "JavaScript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Python",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Java Spring Boot",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "React JS",
  //       color: "white-text-gradient",
  //     },
  //   ],
  //   image: crawl_data,
  //   source_code_link: "https://github.com/20215459-phuongvv/TextCrawling.git",
  // },
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
