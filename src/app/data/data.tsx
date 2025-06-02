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
  body: "I studied law but in the pursuit of creativeness in my work life I stumbled upon an online course on JavaScript and decided to give it a shot. JavaScript had me at hello, literally 🙂. Since then I've been constantly learning and improving my skills. It was the School of Applied Technology (</SALT>) which helped me complete the journey to my new career.",
  body1:
    "I am constantly seeking new challenges and projects to work on as I believe that working on projects is the best way to learn and grow as a developer. I am always eager to take on new challenges and collaborate with others."
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
  },
  {
    id: 4,
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
    id: 5,
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
  }
];
