export const pages = [
  {
    id: 1,
    label: "Home",
    link: "/"
  },
  {
    id: 2,
    label: "About",
    link: "/about"
  },
  {
    id: 3,
    label: "Projects",
    link: "/projects"
  }
];

export const aboutMeData = {
  body: "Hello, I’m Sonja. After a 13-year career working at the Macedonian Parliament, I decided to pursue a more creative path and transition into software development. What started as a curiosity through an online JavaScript course quickly turned into a deep passion—JavaScript had me at hello, literally 🙂. Since then, I’ve been constantly learning and evolving. I’ve completed several formal training programs, including an intensive full-stack development bootcamp at the School of Applied Technology (</SALT>) in Stockholm and a 12-month frontend development academy at Brainster in Skopje.",
  body1:
    "Along the way, I’ve built real-world projects, collaborated in agile teams, and strengthened both my frontend and full-stack skills. Most recently, I worked as a frontend developer at Revam in Malmö, where I contributed to building a new AI-driven platform using Next.js, focusing on clean design and intuitive user experience. I’m actively looking for full-time or part-time opportunities and am available to begin work immediately. I believe the best way to grow is through hands-on experience, and I’m always eager to take on new challenges, build meaningful projects, and collaborate with others."
};

export const projects = [
  {
    id: 1,
    title: "[project Project]",
    body1:
      "[project Project] is a collaborative and interactive project management application. It was ideated in two hours, planned in a day, then developed within the span of 11 days by four full-stack Javascript students as part of the winter 2023 class from the School of Applied Learning and Technology (</salt>).",
    body2: "TypeScript, NextJS v.13, FireBase Auth, FireStore, Bing Image API ",
    image: "/images/projectProject.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/Sonja-Kitanoska/projectProject"
      },
      {
        text: "Live Site",
        url: "https://project-project-nine.vercel.app/"
      }
    ]
  },

  {
    id: 2,
    title: "TalentHub",
    body1:
      "A full-stack application designed to match our database of developers with available jobs in Stockohlm. Our job data is provided by the jobtechdev API. This matching is done by assessing the skill requirements of a given job and providing a list of relevant developers, ordered by the number of matching skills they have. The application also allows for the adding of developers and their skills to the database.",
    image: "/images/talentHub.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/Sonja-Kitanoska/jobMatches"
      },
      {
        text: "Live Site",
        url: "https://job-matches.vercel.app"
      }
    ]
  },

  {
    id: 3,
    title: "Street Artists",
    body1:
      "The goal of the StreetARTists project is to create a web platform that allows street artists to track their income, showcase their masterpieces, and engage with a global audience. This project helps street artists track income, expenses, and performance stats while providing professional profile pages to showcase their work and boost discoverability. ",
    image: "/images/street-artists.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/Sonja-Kitanoska/StreetArtists"
      },
      {
        text: "Live Site",
        url: "https://street-artists-brainster.netlify.app/"
      }
    ]
  },
  {
    id: 4,
    title: "Advent Calendar",
    body1:
      "This app is a special gift I created for my kids to make their December mornings more magical. It also served as a fun way for me to practice vanilla JavaScript while developing something meaningful. The app unlocks one surprise or activity every day in December, bringing joy and excitement to the countdown until Christmas. For times when it’s not December, I included a demo mode so you can explore and enjoy the app anytime! ",
    image: "/images/advent-calendar.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/Sonja-Kitanoska/AdventCalendarApp/"
      },
      {
        text: "Live Site",
        url: "https://advent-app.netlify.app/"
      }
    ]
  },
  {
    id: 5,
    title: "Fix Das",
    body1:
      "This is the client-side of a web application that connects (clients) users with trusted handymen for various home services. Built with a mobile-first approach, the app allows clients to post job requests, browse professionals, communicate via chat, and manage bookings. This project was developed as the final assignment for the Brainster's Academy for Frontend Development.",
    image: "/images/fix-das.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/Sonja-Kitanoska/FixDas/tree/main/Fix%20Das"
      },
      {
        text: "Live Site",
        url: "https://fix-das.netlify.app/"
      }
    ]
  },
  {
    id: 6,
    title: "Kotur Kafe i Film",
    body1:
      "This project was created during a 48-hour hackathon organized by Brainster, where I was part of the frontend team. Kotur Kafe i Film aims to be a multi-functional hub that blends hospitality, culture, and entertainment. The client wanted a digital platform that reflects this diversity, encourages engagement, and makes bookings easy.",
    image: "/images/kotur.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/Sonja-Kitanoska/Kotur"
      },
      {
        text: "Live Site",
        url: "https://kotur.netlify.app/"
      }
    ]
  },
  {
    id: 7,
    title: "React Gallery",
    body1:
      "This project was built as part of a mob-programming exercise at the School of AppliedTechnology (</salt>). It was built using React with the typescript template. Routing was done using both React Router and React Router Link.",
    body2: "Typescript, React, API Unsplash",
    image: "/images/react-gallery.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/Sonja-Kitanoska/react-gallery"
      }
    ]
  }
];
