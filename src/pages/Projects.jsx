import ProjectCard from '../components/ProjectCard';
import { FaArrowUp } from 'react-icons/fa';

const projectsData = [
  // Original projects
  {
    title: 'Solar P2P Network',
    description: 'A peer-to-peer energy trading system allowing local households to sell excess solar power.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format',
    techStack: ['Smart Contracts', 'IoT', 'Real-time Trading', 'React'],
    link: '/explore-grid',
  },
  {
    title: 'Smart Waste AI',
    description: 'AI route optimization for garbage collection based on fill levels and traffic.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format',
    techStack: ['AI', 'Node.js'],
  },
  {
    title: 'Crowd Predictor',
    description: 'Predicting bus occupancy rates using historical data for commuters.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format',
    techStack: ['Python', 'API'],
  },
  // First batch of new projects
  {
    title: 'AgriConnect Rwanda',
    description: 'A digital marketplace connecting Rwandan farmers directly with buyers, reducing post‑harvest losses.',
    image: 'https://images.unsplash.com/photo-1523741543316-84b89f67996e?w=800&auto=format',
    techStack: ['React', 'Node.js', 'MongoDB', 'Mobile'],
    location: 'Rwanda',
    github: 'https://github.com/your-repo/agriconnect',
  },
  {
    title: 'School Management System',
    description: 'Comprehensive platform for managing students, teachers, attendance, and grades.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format',
    techStack: ['React', 'Express', 'PostgreSQL', 'Tailwind'],
  },
  {
    title: 'Job Finder Website',
    description: 'Smart job board with AI‑powered recommendations and one‑click applications.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format',
    techStack: ['React', 'Elasticsearch', 'Node.js', 'Auth0'],
  },
  {
    title: 'Movie App',
    description: 'Browse trending movies, view details, and save favorites using The Movie Database (TMDB) API.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format',
    techStack: ['React', 'Redux', 'TMDB API', 'SCSS'],
  },
  {
    title: 'Weather App Advanced',
    description: 'Hyper‑local weather forecasts with interactive maps, hourly graphs, and severe weather alerts.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format',
    techStack: ['React', 'Chart.js', 'OpenWeatherMap', 'Leaflet'],
  },
  {
    title: 'Ecommerce Admin Dashboard',
    description: 'Full‑featured dashboard to manage products, orders, customers, and sales analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format',
    techStack: ['React', 'Material‑UI', 'Recharts', 'Redux Toolkit'],
  },
  // Second batch (IoT + learning + health)
  {
    title: 'Smart Irrigation System',
    description: 'IoT-based system that monitors soil moisture and weather forecasts to automate irrigation, saving water and increasing crop yield.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&auto=format',
    techStack: ['Arduino', 'React Native', 'Node.js', 'MQTT'],
    link: '/smart-irrigation',
  },
  {
    title: 'E-Learning Platform',
    description: 'Interactive online learning platform with live classes, quizzes, progress tracking, and certification for students and professionals.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'WebRTC'],
    github: 'https://github.com/your-repo/elearning-platform',
  },
  {
    title: 'Health Tracker App',
    description: 'Mobile-friendly health dashboard that tracks steps, calories, sleep, and heart rate, with personalized insights and weekly reports.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format',
    techStack: ['Flutter', 'Firebase', 'HealthKit API', 'TensorFlow Lite'],
    link: '/health-tracker',
  },
  // Third batch (blockchain + telemedicine + carbon)
  {
    title: 'Blockchain Land Registry',
    description: 'Decentralized land title registry using blockchain to prevent fraud and ensure transparent property transfers in emerging economies.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format',
    techStack: ['Solidity', 'Ethereum', 'IPFS', 'React'],
    github: 'https://github.com/your-repo/land-registry',
  },
  {
    title: 'Telemedicine Consult Hub',
    description: 'Secure video consultation platform with prescription management, appointment scheduling, and EHR integration for remote healthcare.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format',
    techStack: ['WebRTC', 'Node.js', 'PostgreSQL', 'Twilio'],
    link: '/telemedicine',
  },
  {
    title: 'Carbon Footprint Tracker',
    description: 'Web app that calculates daily carbon emissions based on travel, diet, and energy use, offering personalized reduction tips and offsets.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format',
    techStack: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
    github: 'https://github.com/your-repo/carbon-tracker',
  },
  // Fourth batch (disaster, freelance, drone)
  {
    title: 'AI-Powered Disaster Response',
    description: 'Real-time flood and earthquake prediction using satellite imagery and social media data, with automated emergency resource allocation.',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f3c5?w=800&auto=format',
    techStack: ['TensorFlow', 'Python', 'Satellite API', 'Twilio'],
    github: 'https://github.com/your-repo/disaster-response',
    link: '/disaster-response',
  },
  {
    title: 'Decentralized Freelance Marketplace',
    description: 'Blockchain-based platform for freelancers with smart contract escrow, reputation scoring, and instant multi-currency payments.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed2f1b8f6?w=800&auto=format',
    techStack: ['Solana', 'Next.js', 'IPFS', 'RainbowKit'],
    github: 'https://github.com/your-repo/deco-freelance',
  },
  {
    title: 'Autonomous Drone Delivery System',
    description: 'End-to-end simulation and control system for urban drone delivery, including path planning, obstacle avoidance, and fleet management.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format',
    techStack: ['ROS', 'Python', 'React', 'WebGL'],
    link: '/drone-delivery',
  },
  // Fifth batch (software development: microservices, logging, GraphQL)
  {
    title: 'Microservices Orchestrator',
    description: 'Production-grade service mesh with auto-scaling, circuit breaking, and distributed tracing for cloud-native applications.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format',
    techStack: ['Kubernetes', 'Istio', 'Go', 'gRPC'],
    github: 'https://github.com/your-repo/micro-orchestrator',
    link: '/microservices',
  },
  {
    title: 'Real-Time Log Aggregator',
    description: 'High-performance logging pipeline with search, alerting, and visualization for debugging distributed systems at scale.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format',
    techStack: ['Kafka', 'Elasticsearch', 'Logstash', 'Kibana'],
    github: 'https://github.com/your-repo/log-aggregator',
  },
  {
    title: 'GraphQL Federation Gateway',
    description: 'Unified API gateway that composes multiple GraphQL services, providing a single endpoint with automatic query planning and caching.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format',
    techStack: ['Apollo Federation', 'Node.js', 'Redis', 'Docker'],
    link: '/graphql-gateway',
  },
];

export default function Projects() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div style={{ backgroundColor: '#0F0F0F', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Subtle top glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(79,70,229,0.1) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-20 relative z-10 flex-1 w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight" style={{ color: '#FFFFFF' }}>
            Innovation{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #4F46E5, #94A3B8)' }}
            >
              Hub
            </span>
          </h1>
          <div className="w-16 h-1 mx-auto rounded-full mb-6" style={{ backgroundColor: '#4F46E5' }} />
          <p className="max-w-2xl mx-auto text-lg" style={{ color: '#94A3B8' }}>
            Showing{' '}
            <span style={{ color: '#4F46E5' }} className="font-semibold">
              {projectsData.length} projects
            </span>{' '}
            ranging from AI‑driven city solutions to decentralized energy networks and full‑stack web apps.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>

      {/* Scroll-to-top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors z-20"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}
