/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Priyank Arya",
  title: "Hi all, I'm Priyank",
  subTitle: emoji(
    "Software Engineer with 3+ years of Experience, " +
      "specializing in Building Full-stack Applications and Data Pipelines. " +
      "Committed to Crafting Innovative Solutions that Truly Make a Difference."
    // "Full Stack Developer with 2+ Years of Experience, " +
    //   "specializing in Building Web Applications. Committed to Crafting Innovative Solutions " +
    //   "that Truly Make a Difference."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_s35_3wcMY2ZcxreBdjFCxqldlSUT2kx/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aryapriyank1",
  linkedin: "https://www.linkedin.com/in/aryapriyank/",
  gmail: "aryapriyank@vt.edu",
  // gitlab: "link",
  // facebook: "link",
  // medium: "link",
  // stackoverflow: "link",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  // subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  subTitle: "",
  skills: [
    "I love tackling exciting projects that challenge me and allow me to learn new skills. " +
      "From building a React Application focusing on Drag and Drop, Grid Layout, and Flex Layout, " +
      // "to developing an online bookstore using Vue.js, Typescript, Java, and MySQL, I have always " +
      "to developing an Observability Pipeline using Elasticsearch and Kafka, I have always " +
      "been eager to apply my knowledge and creativity to solve real-world problems.",

    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git",
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Virginia Tech",
      logo: require("./assets/images/virginiaTechLogo.png"),
      subHeader: "Masters in Computer Science | GPA : 3.94",
      duration: "August 2021 - May 2023",
      desc: "Coursework: Data Analytics, Blockchain, Software Engineering, Urban Mobility and Computing",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ],
    },
    {
      schoolName: "Indian Institute of Technology (IIT) Jodhpur",
      logo: require("./assets/images/IITJodhpur_Logo.jpg"),
      subHeader: "Bachelors in Computer Science",
      duration: "July 2013 - May 2017",
      desc: "Coursework: Data Structures and Algorithms, Operating Systems, Object-Oriented Programming and Design",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Virginia Tech",
      companylogo: require("./assets/images/virginiaTechLogoWhiteBack.png"),
      date: "July 2023 – Present",
      desc: "",
      descBullets: [
        "Introduced an external sorting algorithm using Replacement Selection and Multi-way " +
          "Merge using modified MinHeap and the Java ByteBuffer, dividing the file into 512-byte " +
          "blocks for sorting 16-byte records.",
        "Created a React application with rapid prototyping, utilizing React DnD and hooks. " +
          "Optimized layout with essential React packages including react-rnd, react-grid-layout, " +
          "flexlayout-react, and react-split-pane.",
      ],
    },
    {
      role: "Software Engineer",
      company: "MediaKind",
      companylogo: require("./assets/images/mediakindLogo.png"),
      date: "September 2018 – June 2021",
      desc: "",
      descBullets: [
        "Backend: Developed a User Activity Analytics microservice with Java and Spring Boot " +
          "managing 10,000 requests per second with a p99 latency of 800ms using Cassandra database.",
        "Frontend: Created an Operator Portal using React.js with TypeScript and utilized react-charts" +
          " for visualizations, resulting in an 80% improvement in data monitoring and client engagement.",
        "Observability Pipeline: Implemented an observability pipeline to enable real-time visualizations " +
          "on the Operator Portal by storing user activity logs and events into Elasticsearch via Kafka.",
        "Code Containerization: Refactored monolithic application into 11 microservices with REST APIs " +
          "for CRUD operations and deployed them on Microsoft Azure using Docker reducing operational " +
          "costs by 40%.",
        "Testing: Implemented unit test cases for the application using Jest, increasing code " +
          "coverage from 40% to 95%.",
      ],
    },
    // {
    //   role: "Software Engineer",
    //   company: "Cognizant",
    //   companylogo: require("./assets/images/cognizantLogo.png"),
    //   date: "July 2017 – August 2018",
    //   desc: "",
    //   descBullets: [
    //     "Built a text classification tool by using Scala and Apache PDFBox to get text from PDFs with an accuracy of 88%.",
    //     "Designed a Naive Bayes model to classify section-wise segregated text into cause, remedies & features with the help\n" +
    //       "of an extensive training dataset.",
    //   ],
    // },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: emoji("Projects 🏆 "),
  // subtitle: "Some Cool Stuff that I have done !",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/reactApp.webp"),
      imageAlt: "React App",
      projectName: "React Application",
      projectDesc:
        "Developed a React application in a rapid prototyping format, emphasizing drag and drop, " +
        "grid layout, and flex layout, and featuring a toggle menu for smooth navigation.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://demoapp-react.netlify.app/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/ebookstore.webp"),
      imageAlt: "eBookstore",
      projectName: "Online Bookstore",
      projectDesc:
        "Designed welcome and multi-genre category pages for an online bookstore using Figma. " +
        "Implemented Vue framework for a Single-Page Application, utilizing Pinia, DAO pattern, REST APIs, " +
        "Jersey, and Jackson",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/jobConnect.webp"),
      imageAlt: "Job Connect",
      projectName: "Campus Job Connect",
      projectDesc:
        // "Designed and implemented a comprehensive job portal connecting 30,000 students with " +
        // "3,000 Virginia Tech staff members to reduce email clutter and " +
        // "provide recommendations to students and staff based on profiles and " +
        // "job description.",
        "Designed and developed a comprehensive portal using Vue.js with JavaScript " +
        "to provide job recommendations to 30,000 students. Implemented DAO pattern " +
        "to manage CRUD operations via REST APIs, utilizing JDBC to interact with the MySQL database",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/urbanMobility.webp"),
      imageAlt: "Urban Mobility",
      projectName: "Urban Mobility Behavior",
      projectDesc:
        // "Demonstrated urban mobility changes before and during COVID-19 pandemic in Washington DC " +
        // "using large datasets like SmartTrip data by WMATA, demographic data from City-Data.com, " +
        // "and user mobility data from GeoDS." +

        "Presented comprehensive insights on urban mobility changes in Washington DC before and during the " +
        "COVID-19 pandemic to WMATA, by analyzing user mobility data from GeoDS," +
        " SmartTrip data by WMATA, and demographic data from City-Data.com.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ],
    },
    {
      image: require("./assets/images/wifiPositioning.webp"),
      imageAlt: "Wi-Fi Positioning",
      projectName: "Indoor Wi-Fi Positioning",
      projectDesc:
        "Created an Android application to locate users with an accuracy within 5m using a " +
        "coordinate system with the Wi-Fi routers as reference points and implementing Trilateration " +
        "algorithm to pinpoint smartphone location on a 2D map.\n" +
        "\n",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Just want to say hi? My Inbox is open for all.",
  number: "+1 (703) 386-6818",
  email_address: "aryapriyank@vt.edu",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
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
};
