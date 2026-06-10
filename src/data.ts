/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Certification, Award, Publication, Service, StatItem } from "./types";

export const PERSONAL_INFO = {
  name: "Tharindu Godage",
  title: "Site Reliability & Software/DevOps Engineer",
  tagline: "Building Resilient Infrastructure & Automating Cloud Scale Workloads",
  shortBio: "AWS & Docker Certified DevOps / SRE specialist and Full-Stack Developer. I architect highly secure pipelines, automate complex deployment workflows, and design robust web experiences that bridge the gap between engineering and ultimate system uptime.",
  longBio: "I am a high-impact Software & DevOps/SRE Engineer based in Sri Lanka, passionate about optimizing performance, ensuring high availability, and creating seamless developer workflows. Guided by a philosophy of 'automation first', I eliminate repetitive ops and manual pipeline overhead. With dual competencies in modern Web frameworks (Angular, React, Django, Node.js) and SRE practices (Docker, Azure, AWS, Jenkins, Bash), I design software that is predictable, self-healing, and ready for high-performance scale.",
  email: "tharindunirmala99@gmail.com",
  phone: "+94 71 548 2499",
  location: "Padukka, Western Province, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/tharindu-godage",
  github: "https://github.com/tharindug99",
  portfolio: "https://tharindug99.github.io/myPortfolio/"
};

export const CORE_STATS: StatItem[] = [
  {
    value: "AWS X2",
    label: "Certified Specialist",
    metricDetails: "Cloud Solutions Architect & SRE Foundations",
    impact: "Robust, secure, and cost-optimized serverless deployments."
  },
  {
    value: "Docker",
    label: "Certified Associate",
    metricDetails: "Containerization & Microservices Pipeline Architect",
    impact: "Reproducible developer setups and bulletproof deployments."
  },
  {
    value: "95%+",
    label: "Manual Effort Eliminated",
    metricDetails: "Through DevOps Automation Scripts (Bash & Node)",
    impact: "Faster CI/CD cycles and mistake-free release loops."
  },
  {
    value: "10+",
    label: "Projects Architected",
    metricDetails: "Across Warehouse, Fintech, Education, and Career SaaS",
    impact: "Full-stack development coupled with robust persistence structures."
  }
];

export const PHILOSOPHY = [
  {
    title: "Design for Resiliency",
    description: "Systems should grow seamlessly and handle failovers gracefully. Predictable infrastructure, observability via metrics, and automated alerts are mandatory."
  },
  {
    title: "Automate All the Things",
    description: "If an SRE operates a procedure manually twice, it must be scripted. Automation minimizes human error, improves compliance, and unlocks engineer focus."
  },
  {
    title: "Keep Solutions Simple",
    description: "Choose the least complex approach that yields results. Over-engineering microservices is a tax; value clean, high-performance modular units first."
  },
  {
    title: "Continuous Observability",
    description: "What cannot be measured cannot be optimized. Incorporate Amazon CloudWatch, log ingestion pipelines, and structured telemetry in every stage."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    company: "Freelancing Software & DevOps Engineer",
    role: "Lead Software & DevOps/SRE Builder",
    location: "Remote / Sri Lanka",
    period: "Jan 2024 - Present",
    duration: "2 years 6 months",
    bulletPoints: [
      "Architected, coded, and deployed a secure corporate enterprise warehouse management software for construction logistics.",
      "Delivered a comprehensive single-page dashboard utilizing Angular tied with Django REST Framework, running structured MySQL persistence.",
      "Engineered secure OAuth2 federated authentication, custom inventory triggers, stock accuracy trackers, and automatic project-level reporting.",
      "Crafted automated continuous integration workflows to build container images safely, reducing delivery overhead and verifying testing coverage."
    ],
    techStack: ["Angular", "Django REST Framework", "MySQL", "OAuth2", "Docker", "AWS Lambda", "GitHub Actions"],
    logoType: "freelance"
  },
  {
    id: "exp-2",
    company: "AZpire",
    role: "Co-Founder & Lead Engineer",
    location: "Sri Lanka",
    period: "Feb 2025 - Present",
    duration: "1 year 5 months",
    bulletPoints: [
      "Co-founded and engineered AZpire digital resources, focused on crafting professional, ATS-friendly resumes and optimizing professional profiles.",
      "Designed and delivered candidate profile layout engines used to structure modern, minimalist representations of technical background.",
      "Guided career seekers and professional candidates in aligning resume semantics with strict applicant tracking systems."
    ],
    techStack: ["React", "Typescript", "Tailwind CSS", "Node.js", "ATS Standards"],
    logoType: "startup"
  },
  {
    id: "exp-3",
    company: "IFS",
    role: "Undergraduate Trainee DevOps (SRE Team)",
    location: "Colombo, Sri Lanka",
    period: "Sep 2024 - Mar 2025",
    duration: "7 months",
    bulletPoints: [
      "Served on the core Site Reliability Engineering (SRE) and Build & Deployment Team for enterprise cloud releases.",
      "Managed development and testing environments using Azure cloud infrastructure, monitoring Jenkins pipelines, and compiling localization resource targets.",
      "Developed an automated configuration assistant scripting suite, turning tedious manual command checks into a one-key verification CLI tool.",
      "Assisted with APP10 release management operations, orchestrating system updates and logging pipeline verification steps."
    ],
    techStack: ["Azure", "Jenkins", "Node.js", "Bash scripting", "IFS Cloud", "Git"],
    trainings: [
      "24R2 – IFS Cloud Release Overview",
      "Introduction to DevOps",
      "Getting started with IFS Cloud User Experience",
      "IFS Cloud - Lifecycle Experience - Introduction to Cloud Build Place"
    ],
    logoType: "enterprise"
  },
  {
    id: "exp-4",
    company: "Third Space Global",
    role: "Online Maths Tutor",
    location: "Sri Lanka / UK Collaborative",
    period: "Sep 2023 - Jul 2025",
    duration: "1 year 11 months",
    bulletPoints: [
      "Provided synchronous digital interactive mathematics instruction of exceptional academic quality for students across regional UK centers.",
      "Translated complex mathematical paradigms and problem-solving paths into engaging visual software slides.",
      "Represented a commitment to global educational equity under the #TeachTheWorld global campaign."
    ],
    techStack: ["Digital Pedagogy", "Problem Modeling", "Virtual Whiteboarding"],
    logoType: "education"
  },
  {
    id: "exp-5",
    company: "Nations Trust Bank PLC",
    role: "Trainee Banking Assistant",
    location: "Western Province, Sri Lanka",
    period: "Dec 2019 - Feb 2021",
    duration: "1 year 3 months",
    bulletPoints: [
      "Assisted with daily customer banking transactions and financial inquiries with high analytical precision.",
      "Operated digital transactional systems, card services (Amex issuer operations), and retail deposit verification logs.",
      "Maintained thorough process compliance, balancing accounts and reducing audit errors."
    ],
    techStack: ["Banking Portals", "Financial Compliance", "Client Communications"],
    logoType: "banking"
  }
];

export const EDUCATION = [
  {
    institution: "Sabaragamuwa University of Sri Lanka",
    degree: "Bachelor's Degree in Information Systems (Hons)",
    specialization: "Computer Software Engineering & DevOps",
    duration: "Sept 2021 - Sept 2025",
    achievements: "First Class Standing potential, focused research in LLM test generation. Leader in regional hackathons."
  },
  {
    institution: "Ananda College",
    degree: "Physical Science",
    specialization: "Advanced Level Mathematics, Physics & Chemistry",
    duration: "May 2010 - Aug 2018",
    achievements: "A-Level accomplishments, Active member of technical clubs."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "prj-1",
    name: "Enterprise Warehouse Tracking & Management System",
    tagline: "Angular & Django REST logistics platform with structured MySQL storage.",
    description: "An enterprise-grade orchestration portal to monitor raw material requests, secure stock movements, track contractor procurement, and generate instant audit reports.",
    longDescription: "Built to digitize operations at a major construction operator. This client-server platform contains automated workflows for inventory thresholds, alert dispatches, custom procurement pipelines, and user roles controlled via OAuth2 authentication protocols.",
    category: "Site Reliability Engineering",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
    role: "Lead Software & Infrastructure Architect",
    impact: "Replaced slow paper tracking logs, boosting material logging accuracy and slashing supply delays by 40%.",
    stack: ["Angular", "Django REST Framework", "MySQL", "OAuth2", "Docker", "AWS VPC"],
    challenge: "The construction provider logged tens of thousands of items by hand, resulting in inventory mismatch, late requisitions, and zero progress metrics.",
    solution: "Created an optimized database schema with indexing and isolation levels. Wrapped with REST endpoints and deployed in isolated AWS containers.",
    github: "https://github.com/tharindug99",
    isFeatured: true
  },
  {
    id: "prj-2",
    name: "SRE Automation: DevOps Configuration Assistant",
    tagline: "Interactive terminal SRE automation cli resolving environment translation deploy delays.",
    description: "Developed during SRE term at IFS to speed up developer release checks. Transforms raw Bash statements into containerized checking, configuration parsing, and artifact assembly loops.",
    longDescription: "A custom scripting interface designed to operate locally and on SRE runner pools. It queries target environmental properties, validates structural layout setups in Azure, verifies Jenkins compilations, and logs localized translation package statuses.",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=600",
    role: "SRE Trainee / Tool Maker",
    impact: "Reduced operational verification checklists by 75%, completely wiping out CLI parameter typos during release updates.",
    stack: ["Node.js", "Bash", "Azure CLI", "Jenkins API", "YAML"],
    challenge: "Engineers had to run numerous separate queries manually across different terminals to affirm environmental target states before shipping translations.",
    solution: "Aggregated separate checks in an offline-capable, interactive CLI automation module reading configurations dynamically.",
    github: "https://github.com/tharindug99",
    isFeatured: true
  },
  {
    id: "prj-3",
    name: "AZpire Resume Design Engine",
    tagline: "Candidate-centric ATS optimization parser and typography tool.",
    description: "A fast, React-driven profile optimization site ensuring resumes strictly pass algorithmic screens.",
    longDescription: "Provides job-seekers with an interactive workspace to verify word counts, alignment, resume structural rules, and export layout-compliant ATS profiles matching tech specifications.",
    category: "Full-Stack Development",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600",
    role: "Co-Founder / Technical Lead",
    impact: "Assisted plenty of graduates in crafting high-conversion portfolios and CV structures.",
    stack: ["React", "Typescript", "Tailwind CSS", "Vite", "Node.js", "PDF Parser"],
    challenge: "Job candidates routinely get weeded out by automated scoring parsers because of rich-image designs or invalid column templates.",
    solution: "Coded a client-side layout creator with clean text formatting, structural rules, and strict CSS typography schemas.",
    github: "https://github.com/tharindug99",
    isFeatured: false
  },
  {
    id: "prj-4",
    name: "AWS Lambda Live Observability Dashboard",
    tagline: "Amazon CloudWatch logs ingestion to stream serverless metrics.",
    description: "A serverless logging setup piping live executions into metric visualizations for fast debugging.",
    longDescription: "Enables teams to easily trace serverless workflow durations, cold start spikes, and access-auth errors. Uses IAM roles, streaming Kinesis triggers, and Lambda integrations.",
    category: "DevOps & Cloud",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    role: "DevOps Architect",
    impact: "Cut average root-cause detection times of serverless functions down to seconds.",
    stack: ["AWS Lambda", "Amazon CloudWatch", "IAM", "Node.js", "Kinesis Streams"],
    challenge: "Tracking intermittent API gateway bottlenecks across dozens of stateless Lambdas was slow and fragmented.",
    solution: "Automated standard log forwarding rules using Infrastructure as Code (Terraform), feeding into a single dashboard.",
    github: "https://github.com/tharindug99",
    isFeatured: false
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-2",
    title: "AWS X2 Academy Certified",
    organization: "Amazon Web Services",
    year: "2024"
  },
  {
    id: "cert-1",
    title: "Docker Certified Associate Specialist",
    organization: "Docker Inc.",
    year: "2024"
  },
  {
    id: "cert-3",
    title: "Describe Azure Identity, Access, and Security",
    organization: "Microsoft",
    year: "2023"
  },
  {
    id: "cert-4",
    title: "Introduction to Docker",
    organization: "Docker, Inc",
    year: "2023"
  },
  {
    id: "cert-5",
    title: "Level 2: Building with Cloud Tools",
    organization: "Google Cloud / Qwiklabs",
    year: "2024"
  },
  {
    id: "cert-6",
    title: "Describe Azure Compute and Networking Services",
    organization: "Microsoft",
    year: "2023"
  },
  {
    id: "cert-7",
    title: "Build JavaScript Applications with Node.js",
    organization: "OpenSource / Node Core",
    year: "2023"
  }
];

export const AWARDS: Award[] = [
  {
    id: "award-1",
    title: "Champions Innova 2023 - IT Category",
    categoryName: "National Pitch & Solution Hackathon Winner"
  },
  {
    id: "award-2",
    title: "Finalist of Top 10 Teams iCS 2.0 | Most Popular Team",
    categoryName: "National Multi-sector Computing Championship"
  },
  {
    id: "award-3",
    title: "Finalist of Top 10 Teams RevolUX 2.0",
    categoryName: "Premier Front-end UI/UX & React Engineering Challenge"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-1",
    title: "Evaluating the Effectiveness of Large Language Models in Automated Test Generation",
    overview: "Formulated an academic benchmark scoring how generative foundation engines construct unit test packages, examining accuracy, syntactically correct coverage, and edge-case testing robustness.",
    year: "2025"
  }
];

export const SERVICES: Service[] = [
  {
    id: "srv-1",
    title: "DevOps & Cloud Orchestration",
    description: "Designing elastic, secure, and auto-scaling cloud architectures on AWS and Microsoft Azure.",
    bulletPoints: [
      "IaC management (Terraform & Azure Resource Managers)",
      "Serverless automation (AWS Lambda, API Gateway)",
      "VPC networking, isolation, IAM security policies"
    ],
    iconName: "Cloud"
  },
  {
    id: "srv-2",
    title: "Automation & CI/CD Pipelines",
    description: "Replacing friction and manual checklists with lightning-fast code validation and release steps.",
    bulletPoints: [
      "Custom SRE Bash & Node.js orchestration script utilities",
      "Jenkins workflows & automated pipeline integrations",
      "GitHub Actions & Docker automated build configurations"
    ],
    iconName: "Cpu"
  },
  {
    id: "srv-3",
    title: "Full-Stack Web Development",
    description: "Architecting modular client dashboards backed by highly reliable backend rest interfaces.",
    bulletPoints: [
      "Modern client layers (Angular, React, Tailwind CSS)",
      "Lightweight Restful Services (Django REST, Express/Node.js)",
      "Secure transactional databases (MySQL, PostgreSQL, MongoDB)"
    ],
    iconName: "Globe"
  },
  {
    id: "srv-4",
    title: "Site Reliability, Scaling & Monitoring",
    description: "Ensuring zero-downtime operations, high telemetry, and real-time logging alerts.",
    bulletPoints: [
      "Amazon CloudWatch alerts and diagnostic metrics setup",
      "Environment isolation, load balancing, health tracking",
      "Docker container clusters and server scaling parameters"
    ],
    iconName: "Activity"
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 95 },
      { name: "Azure Services", level: 85 },
      { name: "AWS Lambda", level: 90 },
      { name: "Jenkins Pipelines", level: 88 },
      { name: "Terraform", level: 80 },
      { name: "GitHub Actions", level: 92 },
      { name: "Bash / CLI Scripting", level: 95 }
    ]
  },
  {
    name: "Frontend",
    skills: [
      { name: "Angular", level: 88 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "Tailwind CSS", level: 95 }
    ]
  },
  {
    name: "Backend & DBs",
    skills: [
      { name: "Django REST", level: 86 },
      { name: "Node.js / Express", level: 88 },
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "OAuth2 / Security", level: 88 }
    ]
  },
  {
    name: "Tools & Methodologies",
    skills: [
      { name: "Git / Version Control", level: 95 },
      { name: "Postman API", level: 92 },
      { name: "Cloud Monitoring", level: 88 },
      { name: "ATS Optimization", level: 85 }
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "Senior Release Manager",
    company: "IFS SRE Team",
    comment: "Tharindu's DevOps trainee work was exceptional. He proactively constructed a brilliant configuration assistant script that eliminated tedious deployment validation routines, saving valuable team effort during intensive sprint deliveries."
  },
  {
    name: "Co-Founder",
    company: "AZpire Solutions",
    comment: "An exceptional analytical brain. Tharindu brought the necessary technical automation and structure to our candidate optimization platform, enabling us to support hundreds of candidates securely with outstanding layouts."
  },
  {
    name: "Director of Logistics",
    company: "Enterprise Construction Partner",
    comment: "He replaced our paper audits with an intuitive, beautifully responsive dashboard and Django backend. Our material mismatch issues went to zero within months of launching Tharindu's warehouse engine."
  }
];
