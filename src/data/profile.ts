export type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image?: string;
  video?: string;
  features?: string[];
  targetUsers?: string[];
  impact?: string;
};

export const profileData = {
  name: "Arjun M",
  role: "Software Development Engineer",
  tagline: "Building scalable web applications with clean code and modern technologies",
  email: "arjunmani369@gmail.com",
  phone: "+91 8075932676",
  location: "Alappuzha, Kerala, India",
  linkedin: "https://linkedin.com/in/arjun-m-b5832a303",
  github: "https://github.com",
  
  about: `I build scalable digital products from the database to the browser. Currently an MCA student, I specialize in React, Node.js, and Kotlin. 

Recently:
> Shipped 8 production-ready products (Web, Mobile, IoT)
> Published 2 peer-reviewed research papers on AI/NLP
>Optimized payment pipelines and ticketing algorithms.`,

  skills: {
    "Languages": [
      { name: "Java", level: 90 },
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "Kotlin", level: 85 },
      { name: "PHP", level: 80 },
    ],
    "Frontend": [
      { name: "React", level: 95 },
      { name: "Vite", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "Jetpack Compose", level: 85 },
    ],
    "Backend": [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "FastAPI", level: 85 },
      { name: "JSP/Servlet", level: 80 },
    ],
    "Database": [
      { name: "MySQL", level: 90 },
      { name: "Firebase", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Supabase", level: 80 },
    ],
    "Mobile & IoT": [
      { name: "Android Dev", level: 85 },
      { name: "WorkManager", level: 82 },
      { name: "ESP32", level: 80 },
      { name: "FCM", level: 85 },
    ],
    "Tools & Cloud": [
      { name: "AWS", level: 75 },
      { name: "Git/GitHub", level: 92 },
      { name: "Figma", level: 78 },
      { name: "Razorpay", level: 85 },
    ],
  },

  projects: [
    {
      id: 1,
      slug: "trainease-ai",
      title: "TrainEase AI",
      subtitle: "Booking Engine processing seating distribution in real-time.",
      description: "Full-stack railway booking platform handling real-time seat mapping and dynamic allocation algorithms.",
      tech: ["React", "Node.js", "Express", "MySQL", "Razorpay"],
      link: "",
      github: "",
      image: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=2000&auto=format&fit=crop",
      features: [
        "Real-time interactive seat selection map",
        "RAC (Reservation Against Cancellation) and waiting list management",
        "Dynamic seat allocation algorithm",
        "Razorpay payment integration with refund automation",
        "PDF ticket generation with PNR tracking",
        "Separate User and Admin dashboards",
      ],
      targetUsers: ["Railway passengers", "Travel agencies", "Railway administrators"],
      impact: "Streamlined booking process, reduced manual work, automated ticket generation",
    },
    {
      id: 2,
      slug: "vehicle-service-management",
      title: "Vehicle Service Management",
      subtitle: "Full-stack Service Management System & Spare Parts E-Commerce.",
      description: "End-to-end service booking platform handling role-based access, automated workflows, and inventory metrics.",
      tech: ["React", "Vite", "Tailwind CSS", "Firebase", "Razorpay"],
      link: "",
      github: "",
      image: "https://images.unsplash.com/photo-1621252178229-4d6d37f1baca?q=80&w=2000&auto=format&fit=crop",
      features: [
        "Role-based access (User/Admin dashboards)",
        "Razorpay checkout integration",
        "Real-time service status tracking",
        "Spare parts inventory management",
        "Firebase Authentication",
        "Live data updates",
      ],
      targetUsers: ["Vehicle owners", "Service center admins", "Spare parts buyers"],
      impact: "Digitized service booking process, improved customer experience",
    },
    {
      id: 3,
      slug: "motoguard",
      title: "MotoGuard",
      subtitle: "IoT Anti-Theft System with real-time analytics.",
      description: "Developed hardware-to-cloud security pipeline achieving 1-2 sec alerting capabilities via FCM.",
      tech: ["ESP32", "MPU6050", "Kotlin", "Jetpack Compose", "Firebase", "FCM"],
      link: "",
      github: "",
      image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2000&auto=format&fit=crop",
      features: [
        "MPU6050 accelerometer-based theft detection",
        "Firebase Cloud Messaging push alerts (1-2 sec response)",
        "Android app with Jetpack Compose",
        "Alert Dashboard with real-time notifications",
        "Location View using OpenStreetMap",
        "Heatmap Visualization of incidents",
      ],
      targetUsers: ["Two-wheeler owners", "Vehicle security administrators"],
      impact: "Published in IJSET Vol.14, 2026 - Provides real-time security alerts",
    },
    {
      id: 4,
      slug: "ai-resume-parser",
      title: "AI Resume Parser",
      subtitle: "Candidate Intelligence API",
      description: "REST API extracting structured resume data from PDF/DOCX using Hugging Face NLP. LLM-powered Q&A endpoint for natural language candidate queries.",
      tech: ["FastAPI", "Python", "Hugging Face", "MongoDB", "Supabase"],
      link: "",
      github: "",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
      features: [
        "PDF/DOCX resume parsing",
        "NLP-based skills extraction",
        "Experience analysis",
        "Natural language Q&A for candidate queries",
        "MongoDB & Supabase persistence",
        "REST API endpoints",
      ],
      targetUsers: ["HR teams", "Recruitment agencies", "ATS systems"],
      impact: "Automated resume screening, reduced manual review time",
    },
    {
      id: 5,
      slug: "medicine-reminder-app",
      title: "Medicine Reminder App",
      subtitle: "Android Medication Management",
      description: "Android app for medication management with automated daily reminders, stock alerts, Firebase Firestore sync, and secure Firebase Authentication.",
      tech: ["Kotlin", "Jetpack Compose", "Firebase", "WorkManager", "Material 3"],
      link: "",
      github: "",
      image: "https://images.unsplash.com/photo-1584308666744-24d5e12e75dc?q=80&w=2000&auto=format&fit=crop",
      features: [
        "Automated daily reminders via WorkManager",
        "Medicine stock alerts",
        "Firebase Firestore sync",
        "Firebase Authentication",
        "Material 3 UI design",
        "Medication tracking history",
      ],
      targetUsers: ["Elderly patients", "Caregivers", "Patients with chronic conditions"],
      impact: "Improved medication adherence, timely alerts for stock depletion",
    },
    {
      id: 6,
      slug: "expense-tracker",
      title: "Expense Tracker",
      subtitle: "Desktop Finance Application",
      description: "Java desktop application for expense logging with budget tracking, financial summaries, and JDBC-MySQL connectivity.",
      tech: ["Java", "JDBC", "MySQL"],
      link: "",
      github: "",
      features: [
        "Income/expense tracking",
        "Budget management",
        "Financial reports and summaries",
        "JDBC-MySQL connectivity",
        "Category-based filtering",
        "Export capabilities",
      ],
      targetUsers: ["Individual users", "Small business owners"],
      impact: "Simplified personal finance management",
    },
    {
      id: 7,
      slug: "forest-management-system",
      title: "Forest Management System",
      subtitle: "Resource & Access Portal",
      description: "Web-based system for managing forest resource data, user access roles, and resource tracking.",
      tech: ["Python", "MySQL", "HTML", "CSS"],
      link: "",
      github: "https://github.com/arjunm369/Forest-Management-System-Using-Python-Django-And-MySQL",
      video: "/videos/forest.mp4",
      features: [
        "Resource data management",
        "User role-based access",
        "Resource allocation tracking",
        "Admin dashboard",
        "Reporting tools",
      ],
      targetUsers: ["Forest department staff", "Administrators"],
      impact: "Digitized forest resource management",
    },
    {
      id: 8,
      slug: "blood-bank-management",
      title: "Blood Bank Management",
      subtitle: "Donor-Recipient Coordination",
      description: "Management portal for blood inventory tracking, donor-recipient matching, and request management.",
      tech: ["PHP", "MySQL", "HTML", "CSS"],
      link: "",
      github: "",
      features: [
        "Blood inventory tracking",
        "Donor database management",
        "Request matching",
        "Donor-recipient coordination",
        "Blood availability search",
      ],
      targetUsers: ["Blood banks", "Hospitals", "Donors", "Recipients"],
      impact: "Faster blood availability checks, simplified coordination",
    },
  ],

  experience: [
    {
      id: 1,
      role: "AI Intern",
      company: "Picky Assist Inc",
      location: "Trivandrum, Kerala",
      period: "Jan 2026 – Mar 2026",
      description: [
        "Built and tested AI-powered chatbot automation workflows supporting client deployments across WhatsApp and web channels",
        "Participated in Agile sprint cycles, standups, and code reviews in a product-focused startup",
      ],
    },
    {
      id: 2,
      role: "UI/UX Intern",
      company: "Srishti Innovative Computer Systems",
      location: "Trivandrum, Kerala",
      period: "May 2025 – Jun 2025",
      description: [
        "Designed UI components and screen flows in Figma through 2 rounds of stakeholder feedback",
        "Independently designed complete mobile UI for Expense Tracker app with user research and wireframes",
      ],
    },
    {
      id: 3,
      role: "Manual Testing Intern",
      company: "Techmindz",
      location: "Kochi, Kerala",
      period: "May 2024 – Jul 2024",
      description: [
        "Designed and executed manual test cases (functional, regression, boundary-value)",
        "Tracked defects via JIRA; performed API testing with Postman",
        "Tested multiple live web applications identifying functional gaps and security weaknesses",
      ],
    },
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Saintgits College of Engineering (Autonomous), Kottayam",
      period: "Jul 2024 – May 2026",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Saintgits College of Applied Sciences, Kottayam",
      period: "Sep 2021 – Mar 2024",
    },
  ],

  publications: [
    {
      title: "MotoGuard: Smart IoT-Based Two-Wheeler Anti-Theft Detection System",
      journal: "IJSET",
      volume: "Vol. 14, Issue 1",
      date: "Jan 2026",
      link: "https://www.ijset.in/motoguard-smart-iot-based-two-wheeler-anti-theft-detection-system/",
    },
    {
      title: "Traffic Management Using Machine Learning",
      journal: "IRJMETS",
      volume: "",
      date: "March 2024",
      link: "https://www.irjmets.com/paperdetail.php?paperId=6cc9cc84666eb3599dec8c13451e540d",
    },
  ],

  certifications: [
    "Selenium WebDriver with Python from Scratch + Frameworks - Udemy, 2025",
    "Ultimate AWS Certified Cloud Practitioner (CLF-C02) - Udemy, 2025",
    "Introduction to Industry 4.0 & IIoT - NPTEL / IIT Kharagpur, 2025",
    "Data Analytics Job Simulation - Deloitte / Forage, 2025",
    "Introduction to Cybersecurity - Cisco Networking Academy, 2025",
    "Prompt Engineering for ChatGPT - Coursera, 2023",
    "Fundamentals of Digital Marketing - Google, 2022",
  ],
};