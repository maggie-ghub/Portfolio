export const profile = {
  name: "Mearg Gebremedhn",
  role: "Full-Stack Developer",
  location: "Addis Ababa, Ethiopia",
  email: "meagmage@gmail.com",
  phone: "+251 934 982 039",
  github: "https://github.com/maggie-ghub",
  linkedin: "https://linkedin.com/in/mearggebremedhn",
  cvPath: "/CV_Mearg_Gebremedhn_2026.pdf",
  // tagline: "I build the access-control layer other apps assume already exists.",
  summary:
    `I'm currently working as a Full-Stack Developer at Gahdi Digital Investment PLC, where I develop and maintain web applications
     that support business operations and improve everyday workflows.

    I work across the frontend and backend, from designing user interfaces and implementing application features 
    to developing APIs, managing databases, and handling user roles and permissions. I enjoy turning business 
    requirements into practical software and finding ways to make applications easier to use, maintain, and 
    scale.`,
};

export const stats = [
  { value: "4-layer", label: "RBAC system shipped to production" },
  { value: "30%", label: "downtime cut across 3 branch networks" },
  { value: "3.88", label: "CGPA / 4.0, Software Engineering" },
];

export type Experience = {
  period: string;
  role: string;
  org: string;
  location: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    period: "Jun 2026 — Present",
    role: "Full Stack Developer",
    org: "Gahdi Digital Investment PLC",
    location: "Addis Ababa, Ethiopia",
    points: [
      "Built the Document Management System for Tora Holding Company on Vue 3 and Laravel, with a multi-tenant permission matrix supporting cross-subsidiary access.",
      "Delivered the Recruitment Management System and ID Verification System on Vue 3, Tailwind CSS, Node.js, and MySQL.",
    ],
    tags: ["Vue 3", "Laravel", "Node.js", "MySQL", "Tailwind CSS"],
  },
  {
    period: "May 2026 — Aug 2026",
    role: "System Administrator",
    org: "Semien Microfinance S.C",
    location: "Mekelle, Ethiopia",
    points: [
      "Administered the Core Banking System, including user accounts and security permissions across the organization's network.",
      "Procured, installed, and configured servers and network devices.",
    ],
    tags: ["Core Banking Systems", "Linux", "Security Administration"],
  },
  {
    period: "Feb 2026 — May 2026",
    role: "Frontend Developer (Freelance)",
    org: "Grand Technology Solutions",
    location: "Mekelle, Ethiopia",
    points: [
      "Built a web-based Business Linkage System on Vue.js and REST APIs to connect producers with buyers, with an admin control panel and analytics dashboards.",
      "Used Pinia for state management and integrated an AI-assisted recommendation module for matching business partners.",
    ],
    tags: ["Vue.js", "Pinia", "REST APIs"],
  },
  {
    period: "Sep 2025 — Apr 2026",
    role: "Infrastructure and Networking Officer",
    org: "Semien Microfinance",
    location: "Mekelle, Ethiopia",
    points: [
      "Configured and maintained network infrastructure across three branches, cutting downtime 30% through proactive monitoring.",
    ],
    tags: ["Networking", "Monitoring", "OPNsense"],
  },
  {
    period: "May 2024 — Aug 2025",
    role: "Junior Infrastructure and Networking Officer",
    org: "Semien Microfinance",
    location: "Mekelle, Ethiopia",
    points: [
      "Built a Django-based SMS service in Python to notify clients of financial transactions via an SMS gateway.",
      "Configured routers and switches; contributed to establishing a disaster recovery site and supported the HR system.",
    ],
    tags: ["Django", "Python", "Routers & Switches"],
  },
];

export type Project = {
  slug: string;
  name: string;
  period: string;
  status: "Live";
  summary: string;
  points: string[];
  tags: string[];
  /** Real hosted URL — replace the "#" placeholders with live links. */
  href: string;
  /** Accent pair used to render the placeholder thumbnail until a real screenshot is dropped in public/images/projects/. */
  thumb: { from: string; to: string; initials: string };
  image: string;
};

// Ordered most recent first.
export const projects: Project[] = [
  {
    slug: "recruitment-management-system",
    name: "Recruitment Management System",
    period: "Sep 2026",
    status: "Live",
    summary:
      "A centralized recruitment platform for a holding company and its subsidiaries — vacancies, applicant profiles, online applications, screening, and tracking.",
    points: [
      "Reusable applicant profile with role-based access for applicants, recruiters, HR managers, and administrators.",
      "Built on Vue 3, Tailwind CSS, Laravel, and MySQL.",
    ],
    tags: ["Vue 3", "Laravel", "MySQL", "RBAC"],
    href: "https://github.com/maggie-ghub/Recruitment-Management-System",
    thumb: { from: "#3a2e1f", to: "#c99a4a", initials: "RMS" },
    image: "/images/projects/rms.png",
  },
  {
    slug: "id-verification-system",
    name: "Employee ID Verification System",
    period: "Sep 2026",
    status: "Live",
    summary:
      "An employee id verification system for a holding company and its subsidiaries.",
    points: [
      "Scan an employee qr code and check the profile and verifies if it is an employee of Tora holding and its status.",
      "Built on Vue 3, Tailwind CSS, Laravel, and MySQL.",
    ],
    tags: ["Vue 3", "Laravel", "MySQL", "RBAC"],
    href: "https://id.toraaholding.com/",
    thumb: { from: "#3a2e1f", to: "#c99a4a", initials: "RMS" },
    image: "/images/projects/id-verification.png",
  },
  {
    slug: "document-management-system",
    name: "Document Management System",
    period: "Jun 2026",
    status: "Live",
    summary:
      "A centralized, web-accessible DMS for Tora Holding Company and its subsidiaries, organizing documents by configurable type per subsidiary.",
    points: [
      "Enforces a strict multi-tenant permission matrix supporting cross-subsidiary access.",
      "Vue 3 frontend with Tailwind CSS; includes a Three.js particle background on the login screen.",
      "Solved a Vue 3 reactivity issue inside a recursive nested resource picker used for permission assignment.",
    ],
    tags: ["Vue 3", "Laravel", "Tailwind CSS", "Three.js"],
    href: "https://document.toraaholding.com/",
    thumb: { from: "#1f2f3a", to: "#5fae86", initials: "DMS" },
    image: "/images/projects/dms.png",
  },
  {
    slug: "business-linkage-system",
    name: "Business Linkage System",
    period: "Mar 2026 — May 2026",
    status: "Live",
    summary:
      "A market-connectivity platform matching producers with buyers, with an admin control panel, business management tools, and performance analytics.",
    points: [
      "Built on Vue.js with Pinia for state management and a REST API backend.",
      "Added an AI-assisted recommendation module to match users with relevant business partners.",
      "Location-aware listings sorted with the Haversine formula.",
    ],
    tags: ["Vue 3", "Pinia", "REST APIs",],
    href: "#",
    thumb: { from: "#2f1f3a", to: "#8a713f", initials: "BLS" },
    image: "/images/projects/dms.png",
  },
  {
    slug: "sms-service",
    name: "SMS Service",
    period: "Semien Microfinance",
    status: "Live",
    summary:
      "A Django-based SMS service enabling real-time communication between a core banking system and clients via an SMS gateway.",
    points: [
      "Automated transaction notifications, cutting manual notification work.",
      "Recovered and re-migrated the service onto a new host after a hardware change.",
    ],
    tags: ["Django", "Python", "SMS Gateway"],
    href: "https://github.com/maggie-ghub/SMS-Service",
    thumb: { from: "#1f3a2e", to: "#4a9c6a", initials: "SMS" },
    image: "/images/projects/sms.jpg",
  },
  {
    slug: "pos-system",
    name: "POS System",
    period: "Personal project",
    status: "Live",
    summary:
      "A point-of-sale system for retail businesses built with React Native (Expo), optimized for both Android and iOS.",
    points: ["Streamlines sales transactions with a fast, focused mobile UI."],
    tags: ["React Native", "Expo"],
    href: "#",
    thumb: { from: "#3a1f24", to: "#c9704a", initials: "POS" },
    image: "/images/projects/dms.png",
  },
  {
    slug: "library-management-system",
    name: "Library Management System",
    period: "Personal project",
    status: "Live",
    summary:
      "A web app that manages book records electronically for students and administrators.",
    points: ["Built with HTML, CSS, PHP, and MySQL."],
    tags: ["PHP", "MySQL"],
    href: "#",
    thumb: { from: "#242f3a", to: "#5f8aae", initials: "LMS" },
    image: "/images/projects/dms.png",
  },
];

export const skills = {
  Languages: ["Python", "JavaScript", "PHP", "SQL"],
  "Frameworks & Tools": [
    "Vue 3",
    "React",
    "Django",
    "Laravel",
    "Flutter",
    "Spring Boot MVC",
    "Tailwind CSS",
    "Git",
  ],
  "Infrastructure & Other": [
    "Linux",
    "RESTful APIs",
    "CI/CD pipelines",
    "Agile Methodology",
    "Machine Learning",
  ],
};

export const education = {
  degree: "B.Sc. in Software Engineering",
  school: "Adigrat University",
  period: "Oct 2017 — Dec 2023",
  location: "Adigrat, Ethiopia",
  detail: "CGPA: 3.88 / 4.0 · Data Structures & Algorithms, Software Engineering Principles, Computer Systems, Databases",
};

export const languages = [
  { name: "Tigrigna", level: "Mother tongue" },
  { name: "English", level: "C1" },
  { name: "Amharic", level: "C2" },
];
