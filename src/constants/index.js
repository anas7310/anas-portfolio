const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Achievements",
    link: "#achievements",
  },
];

const documents = [
{
title: "Resume",
description: "Professional resume",
file: "documents/Anas_Resume.pdf",
},
{
title: "Bharti Airtel Certification",
description: "Experience Letter from Bharti Airtel Ltd.",
file: "documents/airtel_internship.pdf",
},
{
title: "LTIMindtree Certification",
description: "Internship Certificate from LTIMindtree",
file: "documents/Mindtree_certificate.pdf",
},
{
title: "AWS Data Analytics",
description: "Internship certificate from AWS",
file: "documents/AWS_Data_Analytics.pdf",
},
{
title: "AWS Cloud Foundation",
description: "Internship certificate from AWS",
file: "documents/AWS_Cloud_Foundation.pdf",
},
{
title: "AWS Cloud Architect",
description: "Internship certificate from AWS",
file: "documents/AWS_Cloud_Architect.pdf",
},
{
title: "Cybersecurity Essentials",
description: "Cisco certified Cybersecurity Essentials certificate",
file: "documents/Cybersecurity.pdf",
},
];

const words = [
  { text: "Ideas", imgPath: "images/ideas.svg" },
  { text: "Concepts", imgPath: "images/concepts.svg" },
  { text: "Designs", imgPath: "images/designs.svg" },
  { text: "Code", imgPath: "images/code.svg" },
  { text: "Ideas", imgPath: "images/ideas.svg" },
  { text: "Concepts", imgPath: "images/concepts.svg" },
  { text: "Designs", imgPath: "images/designs.svg" },
  { text: "Code", imgPath: "images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 2, suffix: "+", label: "Companies" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "images/logos/company-logo-9.png",
  },
  {
    imgPath: "images/logos/logo3.png",
  },
  {
    imgPath: "images/logos/company-logo-4.png",
  },
  {
    imgPath: "images/logos/logo2.png",
  },
  {
    imgPath: "images/logos/logo5.png",
  },
  {
    imgPath: "images/logos/logo_44.png",
  },
  {
    imgPath: "images/logos/logo_8.png",
  },
  {
    imgPath: "images/logos/company-logo-5.png",
  },
];

const abilities = [
  {
    imgPath: "images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "images/logos/java.png",
  },
  {
    name: "Project Manager",
    imgPath: "images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
   {
    name: "Java Developer",
    modelPath: "models/java.glb",
    scale: 1.2,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Version Control",
    modelPath: "models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Anas brought creativity and technical expertise to the team, significantly improving our application performance. His work has been invaluable in delivering faster and efficient experiences.",
    imgPath: "images/exp1.png",
    logoPath: "images/logo_exp_3.png",
    title: "Full Stack Developer",
    date: "November 2023 - Present",
    tech: ['Python','Java','React-Native', 'NodeJs','WebRTC', 'Socket.IO','MongoDB'],
    responsibilities: [
      "Engineered and fine-tuned a multilingual translation model using Meta’s NLLB-200 and Google's Madlad-400 pre-tuned models.",
      "Achieved 92% accuracy across 12 languages and improving model performance by 18% BLEU score.",
      "Implemented Byte Pair Encoding (BPE) data compression technique for subword tokenization in NLP.",
      "Built cross-platform mobile apps using React Native, integrating with nodeJs, socketIO and webRTC backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
      "Used FastAPI and ReactJs for full end-to-end delivery to the client.",
      "Developed fully functional cross-platform calling and messaging app in React Native.",
      "Integrated WebRTC and SocketIO with Stun-Turn Server for smooth communication.",
      "Implemented P2P and Group calling upto 8 people",
    ],
  },
  {
    review:
      "Anas emerged as the 'Star Performer' with outstanding performance exhibited during IGNITE-2023 program with LTIMindtree.",
    imgPath: "images/exp_2.png",
    logoPath: "images/logo_exp_2.png",
    title: "Graduate Engineer Trainee",
    date: "Februray 2023 - November 2023",
    tech: ['Java','SpringBoot','MySQL', 'React Js'],
    responsibilities: [
      "Developed a full stack Document Vault web app using ReactJs and NodeJs.",
      "Implemented Authentication and Authorization using JWT and secure transmission of data through network using TLS and SSL","Implemented middlewares for verification of requests and User Based Authorization.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
    ],
  },
  {
    review:
      "Anas’ work in Bharti Airtel Ltd. brought a high level of quality and efficiency. We appreciate his efforts towards the working on creating a framework for assessing third parties & meet our product goals.",
    imgPath: "images/exp_3.png",
    logoPath: "images/logo_exp_1.png",
    title: "Associate Software Engineer",
    date: "August 2022 - February 2023",
    tech: ['Java8','Oracle Weblogic', 'MySQL','SpringBoot', 'React Js', 'Docker'],
    responsibilities: [
      "Developed and deployed RESTful APIs using Java, Spring Boot, and Hibernate, enhancing backend performance by 35%.",
      "Advanced and automated handling of 1M+ daily user requests with robust, scalable architecture.",
      "Implemented secure microservices solutions with Spring Security and optimized Hibernate configurations, reducing system downtime by 20% and improving query efficiency by 30%.",
      "Integrated Netflix Eureka Service Discovery for continous monitoring of services.",
      "Implemented Flyway for database migration."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/anasyar_khan",
    imgPath: "images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/anas.yarkhan.3/",
    imgPath: "images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/anas10051",
    imgPath: "images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/anas-khan-0594471b7",
    imgPath: "images/linkedin.png",
  },
  {
    name: "github",
    url: "https://www.github.com/anas7310",
    imgPath: "images/github.png",
  }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  documents
};