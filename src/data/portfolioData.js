/* ===== Portfolio Data ===== */

export const personalInfo = {
  name: "Raunaq",
  lastName: "Makkar",
  title: "AI Engineer",
  description:
    "I build intelligent AI systems and modern web applications that solve real-world problems through innovation, performance, and thoughtful design.",
  email: "raunaqmakkarpc@gmail.com",
  linkedin: "https://www.linkedin.com/in/raunaq-makkar",
  github: "https://github.com/RaunaqMakkar",
  fiverr: "https://www.fiverr.com/s/jj9BW0V",
  avatar: "/profile-photo.png",
};

export const aboutData = {
  paragraphs: [
    "I'm Raunaq Makkar, an AI & Web Developer passionate about building intelligent systems and modern digital experiences. My work combines Artificial Intelligence, Computer Vision, Machine Learning, and Web Development to create innovative solutions that address real-world challenges.",

    "Driven by curiosity and continuous learning, I constantly explore emerging technologies while developing products that blend powerful AI capabilities with seamless and intuitive user experiences.",

    "Alongside my technical projects, I have worked on freelance and organizational web development initiatives, helping businesses and nonprofits strengthen their digital presence through modern, user-focused solutions. I enjoy transforming complex ideas into practical applications, whether it's AI-powered platforms, intelligent automation systems, or scalable web applications.",

    "With every project, I strive to combine innovation, performance, and thoughtful design to build technology that is both technically robust and impactful for the people who use it.",
  ],
};

export const skillsCategories = [
  {
    title: "AI & Machine Learning",
    icon: "psychology",
    skills: ["OpenCV", "YOLOv8", "NLP", "Machine Learning", "Computer Vision"],
  },
  {
    title: "Frontend Development",
    icon: "monitor",
    skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend Development",
    icon: "dns",
    skills: ["Node.js", "FastAPI", "JWT Authentication"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["MongoDB", "SQL", "MySQL"],
  },
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["C++", "JavaScript", "Python"],
  },
  {
    title: "Developer Tools & Platforms",
    icon: "construction",
    skills: ["Git", "GitHub", "Vercel", "Postman", "Google Colab", "Wordpress", "XAMPP"],
  },
];

// Fallback for current skills code just in case
export const skillsData = [
  { name: "React.js", icon: "⚛️" },
  { name: "Python", icon: "🐍" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Node.js", icon: "🟢" },
];

export const projectsData = [
  {
    id: 1,
    category: "COMPUTER VISION • AI",
    title: "RoadNetAI",
    description:
      "AI-powered road infrastructure monitoring system that detects potholes, cracks, manholes, and open manholes using YOLOv8 segmentation. Converts detections into actionable maintenance insights through computer vision and automated analysis.",
    tags: ["Python", "YOLOv8", "OpenCV", "FastAPI"],
    featured: true,
    link: null,
    github: "https://github.com/RaunaqMakkar/RoadNetAI",
    images: [
      "/images/Roadnet 1.png",
      "/images/Roadnet 2.png",
      "/images/Roadnet 3.png",
      "/images/Roadnet 4.png"
    ]
  },
  {
    id: 2,
    category: "AI PLATFORM • WEB DEVELOPMENT",
    title: "Career Edge",
    description:
      "AI-driven career guidance platform that connects students with mentors through intelligent matchmaking and AI-powered career assistance. Features mentorship discovery, secure networking, and conversational AI support.",
    tags: ["React.js", "Node.js", "MongoDB", "Flask", "Gemini AI"],
    featured: true,
    link: "https://career-edge-frontend.vercel.app/",
    github: "https://github.com/RaunaqMakkar/Career_Edge_Backend",
    images: [
      "/images/CareerEdge 1.png",
      "/images/CareerEdge 2.png",
      "/images/CareerEdge 3.png",
      "/images/CareerEdge 4.png",
      "/images/CareerEdge 5.png"
    ]
  },
  {
    id: 9,
    category: "FREELANCE • WEB DEVELOPMENT",
    title: "Youth Network Foundation Website",
    description:
      "Enhanced and optimized the official Youth Network Foundation website, improving responsiveness, content accessibility, user experience, and overall digital engagement.",
    tags: ["WordPress", "Gutenverse", "Yoast SEO", "Hostinger"],
    featured: true,
    link: "https://youthnetworkfoundation.org/",
    github: "null",
    images: [
      "/images/YNF 1.png",
      "/images/YNF 2.png",
      "/images/YNF 3.png",
      "/images/YNF 4.png",
      "/images/YNF 5.png"
    ]
  },
  {
    id: 3,
    category: "SECURITY AI • COMPUTER VISION",
    title: "AI Surveillance System",
    description:
      "Real-time AI surveillance platform that combines weapon detection and violence recognition using YOLO and ConvLSTM models to generate intelligent threat alerts and visual evidence.",
    tags: ["Python", "YOLO", "ConvLSTM", "OpenCV"],
    featured: true,
    link: null,
    github: "#",
    images: [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: 5,
    category: "DEEP LEARNING",
    title: "Image Classification using CNN",
    description:
      "CNN-based image classification model trained on the CIFAR-10 dataset using TensorFlow and Keras. Predicts object categories with confidence scoring and deep learning inference.",
    tags: ["Python", "TensorFlow", "CNN", "Keras"],
    featured: false,
    link: null,
    github: "https://github.com/RaunaqMakkar/CNN_Classifer",
    images: [
      "/images/IMG Class 1 .png",
      "/images/IMG Class 2.png",
      "/images/IMG Class 3.png"
    ]
  },
  {
    id: 7,
    category: "C++ DEVELOPMENT",
    title: "Tetris Game",
    description:
      "Modern C++ implementation of the classic Tetris game featuring collision detection, piece rotation, scoring mechanics, and optimized gameplay logic.",
    tags: ["C++", "OOP", "Game Development"],
    featured: false,
    link: null,
    github: "https://github.com/RaunaqMakkar/Tetris_Game",
    images: [
      "/images/Tetris 1.png",
      "/images/Tetris 2.png",
      "/images/Tetris 3.png"
    ]
  },
  {
    id: 8,
    category: "FRONTEND DEVELOPMENT",
    title: "Amazon Clone",
    description:
      "Responsive Amazon homepage clone built using HTML, CSS, and JavaScript, focused on recreating modern e-commerce layouts and responsive user interface design.",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    link: null,
    github: "https://github.com/RaunaqMakkar/Amazon_Clone",
    images: [
      "/images/Clone 1.png",
      "/images/Clone 2.png"
    ]
  }
];

export const journeyData = [
  {
    year: "March 2026 – June 2026",
    title: "Web Developer Intern",
    subtitle: "Youth Network Foundation (YNF)",
    description:
      "Developed and improved the official NGO website, enhancing user experience, content accessibility, and digital engagement to support the organization's outreach initiatives.",
    button: { label: "Visit Website", href: "https://youthnetworkfoundation.org/" },
    highlight: false,
    side: "right",
  },
  {
    year: "2022 – 2026",
    title: "Bachelor of Technology (B.Tech)",
    subtitle: "Manipal University Jaipur",
    description:
      "Pursued Computer and Communication Engineering while building AI, Machine Learning, Computer Vision, and Web Development projects focused on solving real-world challenges.",
    button: null,
    highlight: true,
    side: "right",
    milestones: [
      {
        title: "Deloitte USI Capstone Program Winner '25",
        description:
          "Developed an AI-powered surveillance system for real-time weapon and violence detection using YOLO and ConvLSTM models, improving threat monitoring through mentor-guided optimization and validation.",
        tags: ["YOLO", "ConvLSTM", "Computer Vision", "Deep Learning"],
      },
      {
        title: "Dean's List Award",
        description:
          "Recognized for academic excellence and high academic standing across three consecutive semesters.",
      },
      {
        title: "ACM MUJ – Event & Management Team",
        description:
          "Contributed to the planning and execution of technical and cultural events, enhancing member engagement and organizational outreach.",
      },
    ],
  },
  {
    year: "2020 – 2022",
    title: "Senior Secondary Education",
    subtitle: "Delhi Public School Ghaziabad International",
    description:
      "Completed secondary and senior secondary education under the CBSE curriculum, building a strong foundation in science, mathematics, and technology.",
    tags: ["CBSE", "PCM"],
    button: null,
    highlight: false,
    side: "left",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#portfolio" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];
