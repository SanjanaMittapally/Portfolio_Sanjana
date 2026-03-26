export type ResumeLink = {
  label: string;
  href: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  location?: string;
  startYear: number;
  endYear: number;
  grade?: string;
  details?: string[];
};

export type ExperienceBullet = {
  text: string;
  highlight?: boolean;
};

export type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  bullets: ExperienceBullet[];
  tags?: string[];
  /** If this role is a client placement, show the parent employer */
  parentCompany?: string;
};

export type ProjectItem = {
  title: string;
  period?: string;
  role?: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

export type SkillsCategory = {
  title: string;
  items: string[];
};

export type LanguageItem = {
  name: string;
  level: string;
};

export type JobPreference = {
  roles: string[];
  workTypes: string[];
  locations: string[];
};

export type ResumeData = {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  jobPreferences: JobPreference;
  links: {
    linkedin?: ResumeLink;
    github?: ResumeLink;
    cv?: ResumeLink;
  };
  summary: string[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillsCategory[];
  languages: LanguageItem[];
};

export const resume: ResumeData = {
  name: "Mittapally Sanjana",
  headline: "SDE at Quantlytix Pvt. Ltd · B.Tech Graduate from IIT Dharwad",
  location: "Remote / Hubli-Dharwad, India",
  email: "sanjanamittapally06@gmail.com",
  phone: "+91 9491824995",
  jobPreferences: {
    roles: ["Software Development Engineer (SDE)", "Software Engineer"],
    workTypes: ["Full-time", "Remote", "Hybrid", "On-site"],
    locations: ["Remote (Anywhere)", "Hyderabad", "Bengaluru"],
  },
  links: {
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mittapally-sanjana-a231b0292/",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/SanjanaMittapally/",
    },
    cv: {
      label: "Personal Website (CV)",
      href: "https://sanjanamittapally.cv/",
    },
  },
  summary: [
    "Hi, I'm a Software Development Engineer with 1.5 years of experience building scalable, production-grade full-stack applications. Currently working at Quantlytix Pvt. Ltd., contributing to enterprise platforms for global clients like Kraft Heinz and Maersk.",
    "Skilled in React, Next.js, Python, FastAPI, Java, Spring Boot, and microservices architecture, with hands-on experience in designing REST APIs, building admin-driven systems, and developing end-to-end features. Improved application performance by optimizing frontend and backend systems, and worked on real-time data pipelines using modern backend technologies.",
    "Strong foundation in data structures and algorithms, system design fundamentals, and database management (SQL & NoSQL). Actively seeking SDE opportunities to build scalable products and grow in a high-impact engineering environment.",
  ],
  education: [
    {
      school: "Indian Institute of Technology Dharwad",
      degree: "Bachelor of Technology (B.Tech)",
      location: "Dharwad, Karnataka, India",
      startYear: 2021,
      endYear: 2025,
      grade: "CPI: 8.15",
      details: ["Core CS coursework · Data Structures · System Design · DBMS · Programming"],
    },
    {
      school: "Sri Chaitanya Junior College",
      degree: "Intermediate (11th & 12th)",
      location: "India",
      startYear: 2019,
      endYear: 2021,
      grade: "98%",
    },
    {
      school: "Aryabhatta High School",
      degree: "Secondary Education (10th Grade)",
      location: "India",
      startYear: 2018,
      endYear: 2019,
      grade: "GPA: 10",
    },
  ],
  experience: [
    {
      company: "Quantlytix Pvt. Ltd",
      role: "Software Development Engineer",
      location: "Remote",
      start: "Jan 2025",
      end: "Present",
      bullets: [
        {
          text: "Contributed to scalable, production-grade enterprise platforms for global clients including Kraft Heinz and A.P. Moller – Maersk.",
          highlight: true,
        },
        {
          text: "Worked across full-stack systems using React, Next.js, Python (FastAPI), Java (Spring Boot), and MS SQL Server.",
        },
      ],
      tags: ["React", "Next.js", "FastAPI", "Python", "Java", "Spring Boot"],
    },
    {
      company: "Kraft Heinz",
      role: "Software Development Engineer",
      location: "Remote",
      start: "Aug 2025",
      end: "Apr 2026",
      parentCompany: "Quantlytix Pvt. Ltd",
      bullets: [
        {
          text: "Contributed to the Connected Worker Platform (CWP), a full-stack application used by frontline workers, by developing and enhancing admin modules.",
          highlight: true,
        },
        {
          text: "Designed and implemented end-to-end features across frontend (React, Next.js) and backend (Python, FastAPI), enabling configurable operational workflows for plants, areas, lines, and equipment.",
        },
        {
          text: "Built admin-driven configuration systems, allowing dynamic reuse of operational settings within the main CWP ecosystem.",
        },
        {
          text: "Developed role-based task assignment workflows, improving allocation and tracking efficiency for trainers, trainees, and managers.",
          highlight: true,
        },
        {
          text: "Improved performance by transitioning from a no-code tool to a custom stack (React, Next.js, FastAPI, MS SQL Server), reducing page load times by 80% (10s → 2s) and API response times to under 200ms.",
          highlight: true,
        },
        {
          text: "Collaborated with cross-functional teams to deliver production-ready features, ensuring reliability and seamless adoption by internal users.",
        },
      ],
      tags: ["React", "Next.js", "FastAPI", "Python", "MS SQL Server", "Performance"],
    },
    {
      company: "A.P. Moller – Maersk",
      role: "Software Development Engineer",
      location: "Remote",
      start: "Jan 2025",
      end: "Jul 2025",
      parentCompany: "Quantlytix Pvt. Ltd",
      bullets: [
        {
          text: "Contributed to the Vessel Master Data (VMD) portal by introducing a new vessel status feature — Prospect — and developing REST APIs using Java Spring Boot microservices.",
          highlight: true,
        },
        {
          text: "Implemented frontend enhancements using React, optimizing component performance and resolving state management issues.",
        },
        {
          text: "Collaborated with the team to fix backend issues, enhance data consistency, and streamline integration workflows across services.",
        },
        {
          text: "Improved system maintainability by addressing security vulnerabilities, performing code migration, and upgrading to the latest Java and Spring Boot versions.",
        },
        {
          text: "Worked on data transfer pipelines between modern and legacy systems using Kafka message queues, enabling reliable asynchronous communication.",
          highlight: true,
        },
      ],
      tags: ["Java", "Spring Boot", "Kafka", "React", "Microservices", "Security"],
    },
    {
      company: "Infosys",
      role: "Specialist Programmer Intern",
      location: "Hubli, Karnataka, India",
      start: "Nov 2024",
      end: "Jan 2025",
      bullets: [
        {
          text: "Contributed to full-stack development using Java Spring Boot (microservices) and React for building RESTful web applications.",
        },
        {
          text: "Processed MODIS L1B to L2 satellite data using Python, focusing on scientific data transformation and automation.",
          highlight: true,
        },
      ],
      tags: ["Java", "Spring Boot", "React", "Python", "Microservices"],
    },
    {
      company: "CodeUnity Technologies",
      role: "SDE Intern",
      location: "Remote",
      start: "Jul 2024",
      end: "Aug 2024",
      bullets: [
        {
          text: "Constructed a WebSocket server for message handling using Kafka and RabbitMQ as message brokers, with TypeScript enhancing code quality and maintainability.",
        },
        {
          text: "Optimized deployment processes using Node.js and Docker, reducing deployment time and ensuring seamless containerized operations.",
          highlight: true,
        },
        {
          text: "Worked on MongoDB change streams to monitor real-time database changes and integrated updates into Google BigQuery for advanced analytics.",
        },
      ],
      tags: ["TypeScript", "Node.js", "Docker", "Kafka", "RabbitMQ", "MongoDB", "BigQuery"],
    },
  ],
  projects: [
    {
      title: "Connected Worker Platform (CWP) – Admin Workflow Modules",
      period: "Professional · Quantlytix / Kraft Heinz · 2025",
      role: "Full-Stack Developer",
      summary:
        "Enhanced admin capabilities and configurable operational workflows for frontline workers across global plants.",
      bullets: [
        "Implemented end-to-end features across React/Next.js (frontend) and Python FastAPI (backend).",
        "Built admin-driven configuration systems to support reusable operational settings for plants, areas, and equipment.",
        "Delivered role-based task assignment workflows for trainers, trainees, and managers.",
        "Redesigned the stack from a no-code tool to React + FastAPI, cutting page load times by ~80% (10s → 2s) and API latency to under 200ms.",
        "Collaborated with cross-functional teams for production-ready delivery.",
      ],
      tags: ["React", "Next.js", "FastAPI", "Python", "MS SQL Server", "Performance"],
    },
    {
      title: "Vessel Master Data (VMD) – Prospect Status Feature",
      period: "Professional · Quantlytix / A.P. Moller – Maersk · 2025",
      role: "Software Development Engineer",
      summary:
        "Added a new vessel status feature (Prospect) and built supporting microservices, UI enhancements, and async pipelines.",
      bullets: [
        "Created REST APIs using Java Spring Boot microservices for the new Prospect vessel status.",
        "Optimized React components and resolved state management issues.",
        "Improved maintainability with security fixes, code migration, and Spring Boot version upgrades.",
        "Developed Kafka-based pipelines for reliable async communication between modern and legacy systems.",
      ],
      tags: ["Java", "Spring Boot", "React", "Kafka", "Microservices", "Security"],
    },
    {
      title: "R&D Project – Automated Incremental Forming (IIT Dharwad)",
      period: "Aug – Nov 2023",
      role: "R&D Project under Prof. Rakesh Lingham",
      summary:
        "Automated SolidWorks for incremental forming workflows using scripting and algorithms to reduce manual effort.",
      bullets: [
        "Automated SolidWorks tasks using VBScript and C++.",
        "Combined mechanical design concepts with computer science automation techniques.",
        "Reduced time and manual workload significantly for incremental forming workflows.",
      ],
      tags: ["VBScript", "C++", "Automation", "SolidWorks"],
    },
    {
      title: "Blood Bank System",
      period: "Apr – Jun 2023",
      role: "Full-Stack Developer",
      summary:
        "A comprehensive role-based Blood Bank Management System for secure access to donation records and blood inventories.",
      bullets: [
        "Implemented RBAC for administrators, organizations, donors, and hospitals.",
        "Built RESTful APIs using Express.js and Node.js.",
        "Developed the UI with React.js and implemented JWT-based authentication.",
        "Used MongoDB for data storage and ensured secure access control throughout.",
      ],
      tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "RBAC", "MERN"],
    },
    {
      title: "IIT Dharwad Unified HelpDesk (IUHD)",
      period: "Feb 2023",
      role: "Developer",
      summary:
        "A grievance redressal platform for hostel, electricity, food, water, and mess-related issues at IIT Dharwad.",
      bullets: [
        "Built centralized complaint registration with upvoting for priority and progress tracking.",
        "Added admin approval workflows and role-based access control.",
        "Implemented user authentication, authorization, and secure data handling.",
        "Stack: MongoDB, Express.js, React.js, Node.js, Tailwind CSS, RESTful APIs.",
      ],
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "REST APIs"],
    },
  ],
  skills: [
    {
      title: "Programming Languages",
      items: ["C", "C++", "HTML/CSS", "JavaScript", "TypeScript", "SQL", "Java", "Python"],
    },
    {
      title: "Frameworks / Libraries",
      items: ["Node.js", "Express.js", "React.js", "Bootstrap", "Spring", "Spring Boot", "FastAPI"],
    },
    {
      title: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Microsoft SQL Server"],
    },
    {
      title: "Tools / Platforms",
      items: ["VS Code", "Eclipse", "SSMS", "Git", "GitHub", "Postman", "Bruno", "Docker"],
    },
    {
      title: "Technologies",
      items: ["Microservices", "REST APIs"],
    },
    {
      title: "Core",
      items: ["DSA"],
    },
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Telugu", level: "Native" },
    { name: "Hindi", level: "Fluent" },
  ],
};
