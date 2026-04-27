export const cvData = {
  name: "UKOBUKEYE Mordekai",
  profile: "Innovative and motivated software developer with strong experience in web development, AI, IoT, and blockchain technologies. Skilled at creating interactive web applications and smart solutions for agriculture, energy, waste management, and marketplaces. Strong problem-solving, teamwork, and project management skills.",
  skills: {
    frontend: "React, Redux, TailwindCSS, Material-UI, SCSS, TypeScript, Next.js, Vue.js",
    backend: "Node.js, Express, Python, FastAPI, Django, Go",
    database: "MongoDB, PostgreSQL, Redis, SQLite",
    other: "Smart Contracts, IoT, AI, Chart.js, Recharts, Leaflet, Elasticsearch, Auth0, GraphQL, REST APIs, WebRTC, TensorFlow, ROS, Solidity, Solana, Kafka",
    tools: "Git, GitHub, VS Code, Postman, Jest, Cypress, Docker, Kubernetes, Istio, gRPC, Apollo Federation",
    cloud: "AWS (EC2, S3), Google Cloud Platform, Firebase",
    devops: "Docker, GitHub Actions, CI/CD Pipelines, Kubernetes (basics), Istio, ELK Stack",
    testing: "Unit Testing (Jest, PyTest), Integration Testing, React Testing Library",
    softSkills: "Leadership, Agile/Scrum, Critical Thinking, Time Management, Remote Collaboration"
  },
  education: "Upper Sixth (Senior 6) – Saint Laurent Gaseke TSS",
  projects: [
    "AgriConnect Rwanda - Digital marketplace connecting Rwandan farmers directly with buyers, reducing post‑harvest losses. Tech: React, Node.js, MongoDB, Mobile",
    "Solar P2P Network - Peer-to-peer energy trading system allowing local households to sell excess solar power. Tech: Smart Contracts, IoT, Real-time Trading, React",
    "Smart Waste AI – AI route optimization for garbage collection based on fill levels and traffic. Tech: AI, Node.js",
    "Crowd Predictor – Predicting bus occupancy rates using historical data for commuters. Tech: Python, API",
    "School Management System – Comprehensive platform for managing students, teachers, attendance, and grades. Tech: React, Express, PostgreSQL, Tailwind",
    "Job Finder Website – Smart job board with AI‑powered recommendations and one‑click applications. Tech: React, Elasticsearch, Node.js, Auth0",
    "Movie App – Browse trending movies, view details, and save favorites using The Movie Database (TMDB) API. Tech: React, Redux, TMDB API, SCSS",
    "Weather App Advanced – Hyper‑local weather forecasts with interactive maps, hourly graphs, and severe weather alerts. Tech: React, Chart.js, OpenWeatherMap, Leaflet",
    "Ecommerce Admin Dashboard – Full‑featured dashboard to manage products, orders, customers, and sales analytics. Tech: React, Material‑UI, Recharts, Redux Toolkit",
    "Smart Irrigation System – IoT-based system that monitors soil moisture and weather forecasts to automate irrigation, saving water and increasing crop yield. Tech: Arduino, React Native, Node.js, MQTT",
    "E-Learning Platform – Interactive online learning platform with live classes, quizzes, progress tracking, and certification for students and professionals. Tech: Next.js, TypeScript, Prisma, WebRTC",
    "Health Tracker App – Mobile-friendly health dashboard that tracks steps, calories, sleep, and heart rate, with personalized insights and weekly reports. Tech: Flutter, Firebase, HealthKit API, TensorFlow Lite",
    "Blockchain Land Registry – Decentralized land title registry using blockchain to prevent fraud and ensure transparent property transfers in emerging economies. Tech: Solidity, Ethereum, IPFS, React",
    "Telemedicine Consult Hub – Secure video consultation platform with prescription management, appointment scheduling, and EHR integration for remote healthcare. Tech: WebRTC, Node.js, PostgreSQL, Twilio",
    "Carbon Footprint Tracker – Web app that calculates daily carbon emissions based on travel, diet, and energy use, offering personalized reduction tips and offsets. Tech: Vue.js, D3.js, Express, MongoDB",
    "AI-Powered Disaster Response – Real-time flood and earthquake prediction using satellite imagery and social media data, with automated emergency resource allocation. Tech: TensorFlow, Python, Satellite API, Twilio",
    "Decentralized Freelance Marketplace – Blockchain-based platform for freelancers with smart contract escrow, reputation scoring, and instant multi-currency payments. Tech: Solana, Next.js, IPFS, RainbowKit",
    "Autonomous Drone Delivery System – End-to-end simulation and control system for urban drone delivery, including path planning, obstacle avoidance, and fleet management. Tech: ROS, Python, React, WebGL",
    "Microservices Orchestrator – Production-grade service mesh with auto-scaling, circuit breaking, and distributed tracing for cloud-native applications. Tech: Kubernetes, Istio, Go, gRPC",
    "Real-Time Log Aggregator – High-performance logging pipeline with search, alerting, and visualization for debugging distributed systems at scale. Tech: Kafka, Elasticsearch, Logstash, Kibana",
    "GraphQL Federation Gateway – Unified API gateway that composes multiple GraphQL services, providing a single endpoint with automatic query planning and caching. Tech: Apollo Federation, Node.js, Redis, Docker"
  ],
  languages: [
    "Kinyarwanda: Fluent",
    "English: Fluent"
  ],
  references: "Available upon request"
};

// Updated cvText to include all 21 projects and expanded skills
export const cvText = `UKOBUKEYE Mordekai

Profile
${cvData.profile}

Skills
Frontend: ${cvData.skills.frontend}
Backend: ${cvData.skills.backend}
Database: ${cvData.skills.database}
Other Technologies: ${cvData.skills.other}
Tools: ${cvData.skills.tools}
Cloud: ${cvData.skills.cloud}
DevOps: ${cvData.skills.devops}
Testing: ${cvData.skills.testing}
Soft Skills: ${cvData.skills.softSkills}

Education
${cvData.education}

Projects
${cvData.projects.map(p => `- ${p}`).join('\n')}

Languages
${cvData.languages.map(l => `- ${l}`).join('\n')}

References
${cvData.references}`;
