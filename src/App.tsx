import React, { useState } from 'react';
import { Zap, Code, Database, Server, Rocket, ChevronRight, Sparkles, Users, Globe, CheckCircle, ExternalLink, ArrowRight, MessageCircle, Send, Bot, User, X, Star, BookOpen, Award, Clock, Search, Filter, ChevronDown, Play, Download, Link2, Shield, Settings, FileText, Github, Youtube, Twitter, HelpCircle, Lightbulb } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface Tool {
  name: string;
  description: string;
  category: string;
  url: string;
  logo: string;
}

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  rating: number;
  views: number;
  tags: string[];
  url?: string;
}

interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  tech: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}
 const sections: Section[] = [
  {
    id: 'frontend',
    title: 'Frontend Setup',
    icon: <Code className="w-6 h-6" />,
    description: 'Build beautiful, responsive user interfaces with modern frameworks and tools'
  },
  {
    id: 'backend',
    title: 'Backend Setup',
    icon: <Server className="w-6 h-6" />,
    description: 'Create robust server-side applications and APIs for your projects'
  },
  {
    id: 'database',
    title: 'Database Setup',
    icon: <Database className="w-6 h-6" />,
    description: 'Design and implement efficient database solutions for data storage'
  },
  {
    id: 'schema',
    title: 'Schema Design',
    icon: <Sparkles className="w-6 h-6" />,
    description: 'Plan and structure your data models for optimal performance'
  },
  {
    id: 'deployment',
    title: 'Deployment',
    icon: <Rocket className="w-6 h-6" />,
    description: 'Deploy your applications to production with confidence'
  },
  {
    id: 'tutorials',
    title: 'Tutorials',
    icon: <BookOpen className="w-6 h-6" />,
    description: 'Watch curated tutorials across frontend, backend, database, and deployment'
  },
  {
    id: 'templates',
    title: 'Project Templates',
    icon: <Download className="w-6 h-6" />,
    description: 'Kickstart with production-ready templates and best practices'
  },
  {
    id: 'roadmap',
    title: 'Roadmaps',
    icon: <Globe className="w-6 h-6" />,
    description: 'Structured learning paths from beginner to expert'
  },
  {
    id: 'resources',
    title: 'Resources',
    icon: <Link2 className="w-6 h-6" />,
    description: 'Essential documentation, communities, and learning resources'
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    icon: <Shield className="w-6 h-6" />,
    description: 'Coding standards, architecture patterns, and industry best practices'
  },
  {
    id: 'tools',
    title: 'Tools & Extensions',
    icon: <Settings className="w-6 h-6" />,
    description: 'Development tools, VS Code extensions, and productivity boosters'
  }
];
const frontendTools: Tool[] = [
  { name: 'React', description: 'A JavaScript library for building user interfaces', category: 'Framework', url: 'https://react.dev', logo: '⚛️' },
  { name: 'Next.js', description: 'Full-stack React framework with SSR and SSG', category: 'Framework', url: 'https://nextjs.org', logo: '▲' },
  { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid styling', category: 'Styling', url: 'https://tailwindcss.com', logo: '🎨' },
  { name: 'Vite', description: 'Fast build tool and development server', category: 'Build Tool', url: 'https://vitejs.dev', logo: '⚡' },
  { name: 'Figma', description: 'Collaborative design and prototyping platform', category: 'Design', url: 'https://figma.com', logo: '🎯' },
  { name: 'TypeScript', description: 'Typed JavaScript for better development experience', category: 'Language', url: 'https://typescriptlang.org', logo: '📘' }
];

const backendTools: Tool[] = [
  { name: 'Node.js', description: 'JavaScript runtime for server-side development', category: 'Runtime', url: 'https://nodejs.org', logo: '🟢' },
  { name: 'Express.js', description: 'Fast, unopinionated web framework for Node.js', category: 'Framework', url: 'https://expressjs.com', logo: '🚂' },
  { name: 'Prisma', description: 'Next-generation ORM for Node.js and TypeScript', category: 'ORM', url: 'https://prisma.io', logo: '🔷' },
  { name: 'Supabase', description: 'Open source Firebase alternative with PostgreSQL', category: 'Backend Service', url: 'https://supabase.com', logo: '🗃️' },
  { name: 'GraphQL', description: 'Query language and runtime for APIs', category: 'API', url: 'https://graphql.org', logo: '🔗' },
  { name: 'tRPC', description: 'End-to-end typesafe APIs made easy', category: 'API', url: 'https://trpc.io', logo: '🔄' }
];

const databaseTools: Tool[] = [
  { name: 'PostgreSQL', description: 'Advanced open-source relational database', category: 'SQL Database', url: 'https://postgresql.org', logo: '🐘' },
  { name: 'MongoDB', description: 'Document-based NoSQL database', category: 'NoSQL Database', url: 'https://mongodb.com', logo: '🍃' },
  { name: 'Redis', description: 'In-memory data structure store for caching', category: 'Cache', url: 'https://redis.io', logo: '🔴' },
  { name: 'PlanetScale', description: 'Serverless MySQL platform with branching', category: 'Cloud Database', url: 'https://planetscale.com', logo: '🌍' }
];

const deploymentTools: Tool[] = [
  { name: 'Vercel', description: 'Platform for frontend frameworks and static sites', category: 'Frontend Hosting', url: 'https://vercel.com', logo: '▲' },
  { name: 'Netlify', description: 'Platform for automating modern web projects', category: 'Static Hosting', url: 'https://netlify.com', logo: '🌐' },
  { name: 'Railway', description: 'Infrastructure platform for full-stack applications', category: 'Full-stack Hosting', url: 'https://railway.app', logo: '🚄' },
  { name: 'Docker', description: 'Platform for developing and deploying applications', category: 'Containerization', url: 'https://docker.com', logo: '🐳' }
];

const tutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Complete React + TypeScript Setup',
    description: 'Learn how to set up a modern React application with TypeScript, Vite, and Tailwind CSS from scratch.',
    duration: '30 min',
    difficulty: 'Beginner',
    category: 'Frontend',
    rating: 4.9,
    views: 15420,
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    url: 'https://youtu.be/joTOrCiAPB4?si=SIX3uQWAEpp-zqba'
  },
  {
    id: '2',
    title: 'Building REST APIs with Node.js',
    description: 'Create scalable REST APIs using Node.js, Express, and Prisma with authentication and validation.',
    duration: '20 min',
    difficulty: 'Intermediate',
    category: 'Backend',
    rating: 4.8,
    views: 12350,
    tags: ['Node.js', 'Express', 'Prisma', 'API'],
    url: 'https://youtu.be/uNCrMvkPUAE?si=MQjJPNC3h22UcEyi'
  },
  {
    id: '3',
    title: 'Database Design Masterclass',
    description: 'Master database design principles, normalization, and relationship modeling for scalable applications.',
    duration: '8 hrs',
    difficulty: 'Advanced',
    category: 'Database',
    rating: 4.9,
    views: 8920,
    tags: ['PostgreSQL', 'Schema', 'Design', 'Optimization'],
    url: 'https://youtu.be/ztHopE5Wnpc?si=wuhmpRMf5DZbMXzX'
  },
  {
    id: '4',
    title: 'Deploy Full-Stack Apps to Production',
    description: 'Complete deployment guide covering Vercel, Railway, environment variables, and CI/CD pipelines.',
    duration: '16 min',
    difficulty: 'Intermediate',
    category: 'Deployment',
    rating: 4.7,
    views: 11200,
    tags: ['Vercel', 'Railway', 'CI/CD', 'Production'],
    url: 'https://youtu.be/cVEOhgPziO8?si=qZ4oBwgsICJVv0af'
  }
];
const projectTemplates: ProjectTemplate[] = [
  {
    id: '1',
    name: 'E-commerce Store',
    description: 'Full-featured e-commerce application with cart, payments, and admin dashboard',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Tailwind'],
    difficulty: 'Advanced',
    estimatedTime: '2-3 weeks',
    features: ['Product catalog', 'Shopping cart', 'Payment processing', 'User authentication', 'Admin panel'],
    demoUrl: 'https://demo-ecommerce.vercel.app',
    githubUrl: 'https://github.com/example/ecommerce-template'
  },
  {
    id: '2',
    name: 'Blog Platform',
    description: 'Modern blog platform with markdown support, comments, and SEO optimization',
    tech: ['Next.js', 'MDX', 'Tailwind', 'Supabase'],
    difficulty: 'Intermediate',
    estimatedTime: '1-2 weeks',
    features: ['Markdown posts', 'Comment system', 'SEO optimization', 'Dark mode', 'Search'],
    demoUrl: 'https://demo-blog.vercel.app',
    githubUrl: 'https://github.com/example/blog-template'
  },
  {
    id: '3',
    name: 'Task Management App',
    description: 'Collaborative task management with real-time updates and team features',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    difficulty: 'Intermediate',
    estimatedTime: '2 weeks',
    features: ['Real-time collaboration', 'Task boards', 'Team management', 'File uploads', 'Notifications'],
    demoUrl: 'https://demo-tasks.vercel.app',
    githubUrl: 'https://github.com/example/task-template'
  },
  {
    id: '4',
    name: 'Portfolio Website',
    description: 'Professional portfolio website with animations and contact forms',
    tech: ['React', 'Framer Motion', 'Tailwind', 'Netlify Forms'],
    difficulty: 'Beginner',
    estimatedTime: '3-5 days',
    features: ['Responsive design', 'Smooth animations', 'Contact form', 'Project showcase', 'Blog section'],
    demoUrl: 'https://demo-portfolio.vercel.app',
    githubUrl: 'https://github.com/example/portfolio-template'
  }
];

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Full Stack Developer',
    company: 'TechCorp',
    content: 'Project Guide AI helped me transition from frontend to full-stack development. The step-by-step guides and AI assistant made learning backend technologies so much easier!',
    rating: 5,
    avatar: '👩‍💻'
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    role: 'Startup Founder',
    company: 'InnovateLab',
    content: 'As a non-technical founder, this platform gave me the confidence to understand and communicate with my development team. The project templates saved us months of work!',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Computer Science Student',
    company: 'MIT',
    content: 'The learning roadmaps and video tutorials are incredible. I went from knowing basic HTML to building full-stack applications in just 3 months!',
    rating: 5,
    avatar: '👩‍🎓'
  }
];

const learningPaths = [
  {
    title: 'Frontend Developer Path',
    duration: '3-4 months',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    projects: 4,
    icon: <Code className="w-6 h-6" />
  },
  {
    title: 'Backend Developer Path',
    duration: '4-5 months',
    skills: ['Node.js', 'Express', 'Databases', 'APIs', 'Authentication', 'Deployment'],
    projects: 5,
    icon: <Server className="w-6 h-6" />
  },
  {
    title: 'Full Stack Developer Path',
    duration: '6-8 months',
    skills: ['Frontend', 'Backend', 'Databases', 'DevOps', 'Testing', 'Architecture'],
    projects: 8,
    icon: <Globe className="w-6 h-6" />
  }
];

interface Resource {
  name: string;
  description: string;
  category: string;
  url: string;
  icon: React.ReactNode;
}

interface BestPractice {
  title: string;
  category: string;
  description: string;
  practices: string[];
}

interface DevTool {
  name: string;
  description: string;
  category: string;
  url?: string;
  icon: string;
}

const resources: Resource[] = [
  {
    name: 'MDN Web Docs',
    description: 'Comprehensive documentation for web technologies',
    category: 'Documentation',
    url: 'https://developer.mozilla.org',
    icon: <FileText className="w-5 h-5" />
  },
  {
    name: 'Stack Overflow',
    description: 'Q&A community for developers',
    category: 'Community',
    url: 'https://stackoverflow.com',
    icon: <HelpCircle className="w-5 h-5" />
  },
  {
    name: 'GitHub',
    description: 'Code hosting and collaboration platform',
    category: 'Platform',
    url: 'https://github.com',
    icon: <Github className="w-5 h-5" />
  },
  {
    name: 'Dev.to',
    description: 'Community of developers sharing knowledge',
    category: 'Community',
    url: 'https://dev.to',
    icon: <Users className="w-5 h-5" />
  },
  {
    name: 'Can I Use',
    description: 'Browser compatibility checker',
    category: 'Tool',
    url: 'https://caniuse.com',
    icon: <Globe className="w-5 h-5" />
  },
  {
    name: 'Web.dev',
    description: 'Google\'s web development resources',
    category: 'Documentation',
    url: 'https://web.dev',
    icon: <Lightbulb className="w-5 h-5" />
  }
];

const bestPractices: BestPractice[] = [
  {
    title: 'Code Organization',
    category: 'Architecture',
    description: 'Structure your codebase for maintainability and scalability',
    practices: [
      'Use consistent folder structure (components, utils, hooks, types)',
      'Separate concerns (business logic, UI, data access)',
      'Implement feature-based organization for large projects',
      'Keep components small and focused (single responsibility)',
      'Use index files for clean imports',
      'Document complex logic and architecture decisions'
    ]
  },
  {
    title: 'Security Best Practices',
    category: 'Security',
    description: 'Protect your applications from common vulnerabilities',
    practices: [
      'Never expose API keys or secrets in client-side code',
      'Use environment variables for sensitive configuration',
      'Implement input validation and sanitization',
      'Use HTTPS for all production deployments',
      'Implement rate limiting to prevent abuse',
      'Keep dependencies updated to patch security vulnerabilities',
      'Use parameterized queries to prevent SQL injection',
      'Implement proper authentication and authorization'
    ]
  },
  {
    title: 'Performance Optimization',
    category: 'Performance',
    description: 'Build fast and efficient applications',
    practices: [
      'Implement code splitting and lazy loading',
      'Optimize images (WebP format, proper sizing)',
      'Use caching strategies (browser cache, CDN, Redis)',
      'Minimize bundle size (tree shaking, dead code elimination)',
      'Implement database query optimization and indexing',
      'Use React.memo and useMemo for expensive computations',
      'Monitor and measure performance with Lighthouse',
      'Implement pagination for large data sets'
    ]
  },
  {
    title: 'Testing Strategies',
    category: 'Testing',
    description: 'Ensure code quality and reliability',
    practices: [
      'Write unit tests for business logic and utilities',
      'Implement integration tests for API endpoints',
      'Use end-to-end tests for critical user flows',
      'Maintain high test coverage (aim for 80%+)',
      'Test edge cases and error scenarios',
      'Use mocking for external dependencies',
      'Implement CI/CD with automated testing',
      'Write tests before fixing bugs (TDD approach)'
    ]
  },
  {
    title: 'Git & Version Control',
    category: 'Development',
    description: 'Best practices for version control and collaboration',
    practices: [
      'Write clear, descriptive commit messages',
      'Use meaningful branch names (feature/, fix/, refactor/)',
      'Keep commits small and focused',
      'Review code before merging (pull requests)',
      'Use .gitignore to exclude unnecessary files',
      'Protect main/master branch with branch protection',
      'Regularly sync with remote repository',
      'Use semantic versioning for releases'
    ]
  },
  {
    title: 'API Design',
    category: 'Backend',
    description: 'Design RESTful and GraphQL APIs effectively',
    practices: [
      'Use RESTful conventions for endpoint naming',
      'Implement proper HTTP status codes',
      'Version your APIs (/api/v1/, /api/v2/)',
      'Use pagination for list endpoints',
      'Implement filtering, sorting, and searching',
      'Return consistent response formats',
      'Document APIs with OpenAPI/Swagger',
      'Handle errors gracefully with proper error messages'
    ]
  }
];