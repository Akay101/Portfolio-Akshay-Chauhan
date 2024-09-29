import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a courage for crafting robust and scalable web applications. With hands on experience on frontend-end technologies like React, Next.js, back-end technologies like Node.js, database with MongoDB, as well as frameworks like tailwind CSS, Bootstrap and jQuery. My goal is to improve my development skills and leverage my expertise to create innovative solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Crypto Tracker With Fund Allocation System",
    image: project3,
    description:
      "A crypto tracking website which fetches data from Coin-Gekko API to demonstrate the trend in prices through graph and heatmap. A specialised fund Allocation system is integrated which uses metamask for user authentication and allocate funds to the address fetched from Ganache.",
    technologies: ["HTML", "CSS", "Coin-Gekko API", "Metamask", "Ganache"],
  },

  {
    title: "Personalised GPT",
    image: project1,
    description:
      "A fully functional personalised GPT which uses the Google's Gemini API to fetch the data, it dynamically responds to the prompts given by the user.",
    technologies: ["HTML", "CSS", "Java Script", "Node.js", "Gemini API"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, deletion and realtime database updation.",
    technologies: ["HTML", "CSS", "Node.js", "MongoDB"],
  },
  {
    title: "Food Ordering Website",
    image: project4,
    description:
      "A frontend website for healthy eaters, demonstrated frontend development skills through the project.",
    technologies: ["HTML", "CSS", "jQuery", "Responsive Grid System", "Animate.css"],
  },
];

export const CONTACT = {
  address: "177, F-1, Shalimar Garden EXT-1, Ghaziabad, 201005 ",
  phoneNo: "+91 9639191817 ",
  email: "akay101685@gmail.com ",
};
