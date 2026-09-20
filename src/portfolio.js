/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Jhangir",
  title: "Hi all, I'm Jhangir",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having experience of building Web applications with JavaScript / React.js / PHP Laravel / C# ASP.NET Core and some other cool libraries and frameworks."
  ),
  resumeLink: "Resume2.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jhangirjazz/",
  linkedin: "https://www.linkedin.com/in/muhammad-jhangir-46a5161b3/",
  gmail: "jhangirjazz5900@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/16464614/jhangir-khan",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having experience in building web applications using JavaScript, React.js, PHP (Laravel), and C# (ASP.NET Core), along with other useful libraries and frameworks."
  ),
  skills: [
    emoji(
      "Build responsive and dynamic front-end interfaces using React.js, HTML, CSS, and JavaScript"
    ),
    emoji(
      "Develop robust back-end systems with Laravel and ASP.NET Core, including RESTful API integration"
    ),
    emoji(
      "Design and optimize relational databases using MySQL, Oracle, and PL/SQL"
    ),
    emoji("Customize and extend open-source tools to fit client needs"),
    emoji(
      "Troubleshoot deployment issues and streamline workflows using Git, Vercel, and other dev tools"
    ),
    emoji(
      "Enhance UI/UX and ensure cross-browser compatibility for seamless user experiences"
    )
  ],
  // softwareSkills: [], // You can fill this with icons if needed later };

  // const skillsSection = {
  //   title: "What I do",
  //   subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  //   skills: [
  //     emoji(
  //       "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
  //     ),
  //     emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
  //     emoji(
  //       "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
  //     )
  //   ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  // softwareSkills: [
  //   {
  //     skillName: "html-5",
  //     fontAwesomeClassname: "fab fa-html5"
  //   },
  //   {
  //     skillName: "css3",
  //     fontAwesomeClassname: "fab fa-css3-alt"
  //   },
  //   {
  //     skillName: "sass",
  //     fontAwesomeClassname: "fab fa-sass"
  //   },
  //   {
  //     skillName: "JavaScript",
  //     fontAwesomeClassname: "fab fa-js"
  //   },
  //   {
  //     skillName: "reactjs",
  //     fontAwesomeClassname: "fab fa-react"
  //   },
  //   {
  //     skillName: "nodejs",
  //     fontAwesomeClassname: "fab fa-node"
  //   },
  //   {
  //     skillName: "swift",
  //     fontAwesomeClassname: "fab fa-swift"
  //   },
  //   {
  //     skillName: "npm",
  //     fontAwesomeClassname: "fab fa-npm"
  //   },
  //   {
  //     skillName: "sql-database",
  //     fontAwesomeClassname: "fas fa-database"
  //   },
  //   {
  //     skillName: "aws",
  //     fontAwesomeClassname: "fab fa-aws"
  //   },
  //   {
  //     skillName: "firebase",
  //     fontAwesomeClassname: "fas fa-fire"
  //   },
  //   {
  //     skillName: "python",
  //     fontAwesomeClassname: "fab fa-python"
  //   },
  //   {
  //     skillName: "docker",
  //     fontAwesomeClassname: "fab fa-docker"
  //   }
  // ],
  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "ASP.NET Core",
      fontAwesomeClassname: "fas fa-code" // No official icon, use generic
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Oracle",
      fontAwesomeClassname: "fas fa-database" // Same as MySQL
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Vercel",
      fontAwesomeClassname: "fas fa-cloud" // No official icon, use generic
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code" // No official icon
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sindh Institute of Management & Technology (SIMT)",
      logo: require("./assets/images/simt.png"),
      subHeader: "Bachelor of Science in Computer Science (BSCS)",
      duration: "January 2, 2024 – In Progress",
      desc: "Currently pursuing a BSCS degree with a focus on full-stack development, database systems, and deployment workflows. Applying academic concepts directly into real-world projects.",
      descBullets: [
        "Working with Laravel, ASP.NET Core, React.js, and RESTful APIs",
        "Building and deploying practical web applications with Git and Vercel"
      ]
    },
    {
      schoolName: "Aptech Computer Education",
      logo: require("./assets/images/aptech.jpg"), // Make sure this logo exists
      subHeader: "Advanced Diploma in Software Engineering (ADSE)",
      duration: "Completed",
      desc: "Completed a comprehensive diploma program covering programming fundamentals, database design, and web development. This laid the foundation for transitioning into full-stack development.",
      descBullets: [
        "Learned C, Java, HTML/CSS, and MySQL fundamentals",
        "Built early projects and gained confidence in debugging and deployment"
      ]
    }
  ]
};

// const educationInfo = {
//   display: true, // Set false to hide this section, defaults to true
//   schools: [
//     {
//       schoolName: "Sindh Institute of Management & Technology (SIMT)",
//       logo: require("./assets/images/simt.png"),
//       subHeader: "Bachelor in Computer Science",
//       duration: "January2 2024 -  In progress",
//       desc: "Participated in the research of XXX and published 3 papers.",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
//     },
//     {
//       schoolName: "Stanford University",
//       logo: require("./assets/images/stanfordLogo.png"),
//       subHeader: "Bachelor of Science in Computer Science",
//       duration: "September 2013 - April 2017",
//       desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
//       descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
//     }
//   ]
// };

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Full Stack Developer",
      company: "ReaCore Solutions", // Replace with actual company name
      companylogo: require("./assets/images/real.jpg"), // Add your logo to assets/images
      date: "Started as Intern – Present",
      desc: "Joined as an intern and transitioned into a junior full-stack developer role. Contributed to multiple client projects, handled both front-end and back-end tasks, and actively participated in deployment and troubleshooting.",
      descBullets: [
        "Built and maintained web applications using Laravel, ASP.NET Core, and React.js",
        "Integrated RESTful APIs and optimized database queries with MySQL and Oracle",
        "Customized open-source modules and improved UI/UX for client-facing platforms",
        "Resolved deployment issues and streamlined Git workflows for smoother releases"
      ]
    }
  ]
};

// const workExperiences = {
//   display: true, //Set it to true to show workExperiences Section
//   experience: [
//     {
//       role: "Software Engineer",
//       company: "Facebook",
//       companylogo: require("./assets/images/facebookLogo.png"),
//       date: "June 2018 – Present",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
//     },
//     {
//       role: "Front-End Developer",
//       company: "Quora",
//       companylogo: require("./assets/images/quoraLogo.png"),
//       date: "May 2017 – May 2018",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//       role: "Software Engineer Intern",
//       company: "Airbnb",
//       companylogo: require("./assets/images/airbnbLogo.png"),
//       date: "Jan 2015 – Sep 2015",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     }
//   ]
// };

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubUsername: "Jhangirjazz", // Used for the token-free REST fallback in Projects.js
  // Set to true only when `node fetch.js` runs with a GitHub token, which
  // generates public/profile.json with your pinned repositories. When false,
  // the section uses the public REST API instead (no token, no 404s).
  useProfileJson: false,
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Technology logo icons used by the project cards. Icons are brand-coloured SVGs
// from https://simpleicons.org and live in src/assets/images/tech.
const techIcons = {
  laravel: require("./assets/images/tech/laravel.svg"),
  php: require("./assets/images/tech/php.svg"),
  mysql: require("./assets/images/tech/mysql.svg"),
  nestjs: require("./assets/images/tech/nestjs.svg"),
  typescript: require("./assets/images/tech/typescript.svg"),
  nodejs: require("./assets/images/tech/nodedotjs.svg"),
  react: require("./assets/images/tech/react.svg"),
  nextjs: require("./assets/images/tech/nextdotjs.svg"),
  javascript: require("./assets/images/tech/javascript.svg"),
  wordpress: require("./assets/images/tech/wordpress.svg"),
  dolibarr: require("./assets/images/tech/dolibarr.svg"),
  python: require("./assets/images/tech/python.svg"),
  opencv: require("./assets/images/tech/opencv.svg"),
  android: require("./assets/images/tech/android.svg")
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle:
    "Production systems, client customizations and personal builds — pulled straight from my GitHub",
  projects: [
    {
      projectName: "POS Backend — NestJS",
      projectDesc:
        "Backend service for a Point-of-Sale system written in TypeScript on top of NestJS. Built around modular modules/services with DTO validation, exposing the REST endpoints that power the POS client.",
      stack: [
        {name: "NestJS", icon: techIcons.nestjs},
        {name: "TypeScript", icon: techIcons.typescript},
        {name: "Node.js", icon: techIcons.nodejs}
      ],
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Jhangirjazz/POS-Backend-Nest.js"
        }
      ]
    },
    {
      projectName: "Stitch & Wash Admin Panel",
      projectDesc:
        "Laravel + Blade admin panel for a garment care business. Server-rendered management screens for orders, customers and services, with role-aware access and reporting views.",
      stack: [
        {name: "Laravel", icon: techIcons.laravel},
        {name: "PHP", icon: techIcons.php},
        {name: "MySQL", icon: techIcons.mysql}
      ],
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Jhangirjazz/Stitch-wash-admin-panel"
        }
      ]
    },
    {
      projectName: "Dolibarr ERP Customization",
      projectDesc:
        "Customized the frontend and backend of Dolibarr ERP for a client, including file upload modules and UI improvements tailored to business workflows.",
      stack: [
        {name: "Dolibarr", icon: techIcons.dolibarr},
        {name: "PHP", icon: techIcons.php},
        {name: "MySQL", icon: techIcons.mysql}
      ],
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Jhangirjazz/Dolibarr-" // Or client link if available
        }
      ]
    },
    {
      projectName: "E-Food Restaurant Management System",
      projectDesc:
        "Integrated SMS API into the backend to trigger real-time notifications for order events like placement, processing, and delivery. Enhanced reliability and customer engagement.",
      stack: [
        {name: "Laravel", icon: techIcons.laravel},
        {name: "PHP", icon: techIcons.php},
        {name: "MySQL", icon: techIcons.mysql}
      ],
      footerLink: [
        {
          name: "View E-Food",
          url: "https://codecanyon.net/item/efood-food-delivery-system-with-laravel-admin-panel-delivery-man-app-v10/30320338?srsltid=AfmBOoomr33a4JVoBk2wz3Yx4x5USGzXUEjmnpMs3iuYqWhulRj0EgZL" // Or client link
        }
      ]
    },
    {
      projectName: "Weather App",
      projectDesc:
        "Forecast checking app built with a modern React + TypeScript stack. Fetches live weather data, renders current conditions and upcoming forecast, with a clean responsive UI.",
      stack: [
        {name: "Next.js", icon: techIcons.nextjs},
        {name: "TypeScript", icon: techIcons.typescript},
        {name: "React", icon: techIcons.react}
      ],
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Jhangirjazz/WeatherApp"
        }
      ]
    },
    {
      projectName: "Easy!Appointments — Service Separation",
      projectDesc:
        "Extended the open-source Easy!Appointments booking system to separate categories and services, so each provider's offering is grouped and bookable independently.",
      stack: [
        {name: "PHP", icon: techIcons.php},
        {name: "JavaScript", icon: techIcons.javascript},
        {name: "MySQL", icon: techIcons.mysql}
      ],
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Jhangirjazz/EasyAppointments"
        }
      ]
    },
    {
      projectName: "Cross-Platform Mobile App",
      projectDesc:
        "React Native application targeting both iOS and Android from one JavaScript codebase, with native Android (Kotlin) and iOS (Swift) platform code where the shared layer wasn't enough.",
      stack: [
        {name: "React Native", icon: techIcons.react},
        {name: "JavaScript", icon: techIcons.javascript},
        {name: "Android", icon: techIcons.android}
      ],
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Jhangirjazz/Mobile-App-React-Native"
        }
      ]
    },
    {
      projectName: "Face & Eye Detection",
      projectDesc:
        "Python computer-vision script that detects faces and eyes in real time using OpenCV Haar cascade classifiers — my first hands-on project with AI/vision pipelines.",
      stack: [
        {name: "Python", icon: techIcons.python},
        {name: "OpenCV", icon: techIcons.opencv}
      ],
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Jhangirjazz/Face-and-Eye-Detection"
        }
      ]
    },
    {
      projectName: "WordPress Plugins & Themes",
      projectDesc:
        "A collection of WordPress plugin and theme work — custom hooks, shortcodes and admin options used to bend WordPress to specific client content requirements.",
      stack: [
        {name: "WordPress", icon: techIcons.wordpress},
        {name: "PHP", icon: techIcons.php},
        {name: "MySQL", icon: techIcons.mysql}
      ],
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Jhangirjazz/Wordpress-Plugins"
        }
      ]
    }
  ],
  display: true
};

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       projectName: "Saayahealth",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://saayahealth.com/"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       projectName: "Nextu",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://nextu.se/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Software Development Diploma",
      subtitle:
        "Completed a comprehensive diploma in Software Development from Aptech, covering programming, databases, and web technologies.",
      image: require("./assets/images/aptech.jpg"), // Add this logo to assets/images
      imageAlt: "Aptech Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/muhammad-jhangir-46a5161b3/" // Replace with actual link
        }
      ]
    },
    {
      title: "Data Science & Analytics",
      subtitle:
        "Earned certification from HP in Data Science & Analytics, focusing on data visualization, predictive modeling, and business insights.",
      image: require("./assets/images/hp.png"), // Add HP logo to assets/images
      imageAlt: "HP Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.life-global.org/certificate/964d6822-d072-4570-85ad-b84cc4a36bc3" // Replace with actual link
        }
      ]
    }
  ],
  display: true
};

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set "true" to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://github.com/Jhangirjazz",
      title: "Customizing Dolibarr ERP for real business workflows",
      description:
        "How I extended the frontend and backend of an open-source ERP — adding file-upload modules and tailoring the UI to a client's processes."
    },
    {
      url: "https://github.com/Jhangirjazz",
      title: "Wiring an SMS API into a Laravel food-ordering backend",
      description:
        "Notes on triggering real-time order notifications (placed, processing, delivered) and the reliability problems that came with it."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92 331 2242564",
  email_address: "jhangirjazz5900@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", // Replace "twitter" with your twitter username without @ (leave empty to hide the feed)
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
