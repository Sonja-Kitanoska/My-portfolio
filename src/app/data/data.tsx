import image1 from "../../../public/images/photo-sonja.jpg";
import image2 from "../../../public/images/photo-ema.jpg";
import uuid4 from "uuid4";

export const pages = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "About",
    link: "/about",
  },
  {
    id: 3,
    label: "Projects",
    link: "/projects",
  },
];

export const aboutMeData = {
  name: "Sonja Kitanoska",
  title: "Hello! I'm Sonja Kitanoska",
  body: "A software engineer with a passion for solving problems with code. I started my journey into the world of software development a few years ago, and since then I've been constantly learning and improving my skills. My background is in computer science, but I'm always looking for opportunities to branch out and explore new technologies.",
  highlightedBody:
    "As a beginner, I'm constantly seeking new challenges and projects to work on. I'm particularly interested in web development, machine learning, and game development, and I've completed several personal projects in these areas. I'm always eager to take on new challenges and collaborate with others, and I believe that working on projects is the best way to learn and grow as a software engineer.",
  body2:
    "When I'm not coding, I enjoy spending time with my family and friends, watching movies, and playing video games. I'm a lifelong learner, and I'm always looking for new books, tutorials, and courses to help me improve my skills and knowledge. If you're interested in learning more about my skills and experience, feel free to take a look at my CV. I'd love to hear from you and discuss potential opportunities to collaborate on projects or learn from each other.",
};

export const contactMeText = {
  title: "Hello there! ",
  body: "I am a data scientist and machine learning engineer with a passion for solving complex problems with data.  I bring a unique blend of technical and interpersonal skills to the table. I'm always eager to take on new challenges and collaborate with like-minded individuals. If you'd like to get in touch, simply fill out the form below and I'll get back to you as soon as possible. Looking forward to hearing from you!",
};

export const projects = [
  {
    id: 1,
    title: "[project Project]",
    body1:
      "[project Project] is a collaborative and interactive project management application. It was ideated in two hours, planned in a day, then developed within the span of 11 days by four full-stack Javascript students as part of the winter 2023 class from the School of Applied Learning and Technology (</salt>).",
    body2: "TypeScript, NextJS v.13, FireBase Auth, FireStore, Bing Image API ",
    image: image1,
    links: [
      {
        text: "Source Code",
        url: "https://github.com/Sonja-Kitanoska/projectProject",
      },
      {
        text: "Live Site",
        url: "https://project-project-nine.vercel.app/",
      },
    ],
  },
  {
    id: 2,
    title: "React Gallery",
    body1:
      "This project was built as part of a mob-programming exercise at the School of AppliedTechnology (</salt>). It was built using React with the typescript template. Routing was done using both React Router and React Router Link.",
    body2: "Typescript, React, API Unsplash",
    image: image2,
    links: [
      {
        text: "Source Code",
        url: "https://github.com/Sonja-Kitanoska/react-gallery",
      },
      // {
      //   text: "Live Site",
      //   url: "https://weather-app.richardbrown.net",
      // },
    ],
  },
  {
    id: 3,
    title: "Weather App",
    body1:
      "A web application that allows users to search for the current weather conditions in any city in the world.",
    body2: "",
    image: image1,
    links: [
      {
        text: "Source Code",
        url: "https://github.com/richardbrown/weather-app",
      },
      {
        text: "Live Site",
        url: "https://weather-app.richardbrown.net",
      },
    ],
  },
];

export const contactMeLinks = [
  "time2code@gmail",
  "twiter",
  "linkedin",
  "medium",
];
