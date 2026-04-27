export const profileData = {
  name: "Arjun M",
  role: "Software Development Engineer",
  tagline: "Building scalable web applications with clean code and modern technologies",
  email: "arjunmani369@gmail.com",
  phone: "+91 8075932676",
  location: "Alappuzha, Kerala, India",
  linkedin: "https://linkedin.com/in/arjun-m-b5832a303",
  github: "https://github.com",
  
  about: `Final-year MCA student and Software Development Engineer with hands-on experience building full-stack web applications using React, Node.js, Python, FastAPI, and MySQL. 

Demonstrated ability to design and deliver end-to-end systems — from interactive UIs and REST APIs to payment integrations and AI-powered features. Completed an AI Internship applying machine learning and automation concepts to real-world product development.

Passionate about clean code, scalable architecture, and shipping software that solves real problems.`,

  skills: {
    "Frontend": [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Material UI", level: 85 },
    ],
    "Backend": [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
      { name: "FastAPI", level: 85 },
      { name: "Python", level: 90 },
      { name: "Django", level: 75 },
    ],
    "Database": [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Firebase", level: 88 },
      { name: "Supabase", level: 80 },
    ],
    "Tools & Platforms": [
      { name: "Git/GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 78 },
      { name: "AWS", level: 75 },
    ],
  },

  projects: [
    {
      id: 1,
      title: "TrainEase AI",
      subtitle: "Smart Train Ticket Booking System",
      description: "A full-stack railway booking system with real-time seat availability and interactive seat selection. Implemented RAC and waiting list logic with dynamic seat allocation algorithms. Integrated Razorpay payments, automated refunds, and ticket generation with PNR tracking and PDF export.",
      tech: ["React", "Node.js", "Express", "MySQL", "Razorpay"],
      link: "",
      github: ""
    },
    {
      id: 2,
      title: "AI Resume Parser",
      subtitle: "Candidate Intelligence API",
      description: "FastAPI REST APIs for resume parsing and NLP-based skills and experience analysis. Integrated Hugging Face transformer models with MongoDB and Supabase for data persistence. Implemented natural-language Q&A for candidate insight queries.",
      tech: ["Python", "FastAPI", "MongoDB", "Supabase", "Hugging Face"],
      link: "",
      github: ""
    },
    {
      id: 3,
      title: "Vehicle Service Hub",
      subtitle: "Service & Spare Parts Management",
      description: "Full-stack application for service booking and parts inventory management with role-based dashboards, real-time data updates, Firebase authentication, and Razorpay payments.",
      tech: ["React", "Vite", "Tailwind CSS", "Firebase", "Razorpay"],
      link: "",
      github: ""
    },
    {
      id: 4,
      title: "Smart Anti-Theft System",
      subtitle: "IoT Two-Wheeler Security",
      description: "IoT-based security system to detect and alert on unauthorized access attempts. Integrated sensor modules and alert mechanisms for real-time notifications to the vehicle owner.",
      tech: ["IoT", "Embedded Systems", "Sensors"],
      link: "",
      github: ""
    },
    {
      id: 5,
      title: "Expense Tracker",
      subtitle: "Desktop Finance Application",
      description: "Java desktop application to track income, expenses, and generate financial reports. Implemented JDBC-MySQL connectivity for persistent data storage and reporting.",
      tech: ["Java", "JDBC", "MySQL"],
      link: "",
      github: ""
    },
    {
      id: 6,
      title: "Forest Management System",
      subtitle: "Resource & User Access Portal",
      description: "Web-based system for managing forest resource data and user access roles with PHP and MySQL backend.",
      tech: ["PHP", "MySQL"],
      link: "",
      github: ""
    },
    {
      id: 7,
      title: "Blood Bank Management",
      subtitle: "Donor-Recipient Coordination",
      description: "Management portal for blood inventory tracking and donor-recipient coordination.",
      tech: ["PHP", "MySQL"],
      link: "",
      github: ""
    },
  ],

  experience: [
    {
      id: 1,
      role: "AI Intern",
      company: "Picky Assist Pvt Ltd",
      location: "Trivandrum",
      period: "2025",
      description: [
        "Worked on AI-driven automation features for a product-based messaging platform",
        "Built and tested chatbot and messaging automation workflows for WhatsApp and Instagram",
        "Applied machine learning concepts to real-world product problem statements",
      ],
    },
    {
      id: 2,
      role: "UI/UX Design Intern",
      company: "Srishti Innovative Computer Systems Pvt. Ltd",
      location: "Trivandrum",
      period: "2024",
      description: [
        "Designed responsive UI screens and interactive prototypes using Figma",
        "Conducted usability reviews and improved design accessibility across application flows",
      ],
    },
    {
      id: 3,
      role: "Software Testing Intern",
      company: "Techmindz",
      location: "Kochi",
      period: "2024",
      description: [
        "Created and executed manual test cases for web applications",
        "Gained hands-on experience with STLC principles and agile testing practices",
      ],
    },
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Saintgits College of Engineering, Kottayam",
      period: "2024 – 2026",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Saintgits College of Applied Science, Kottayam",
      period: "2021 – 2024",
    },
  ],

  certifications: [
    "Ultimate AWS Certified Cloud Practitioner (CLF-C02)",
    "Selenium WebDriver with Python (Frameworks)",
    "Introduction to Industry 4.0 & Industrial IoT",
    "Data Analytics Job Simulation – Deloitte",
    "Introduction to Cybersecurity",
    "Prompt Engineering for ChatGPT",
    "Fundamentals of Digital Marketing",
  ],
};