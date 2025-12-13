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
const devTools: DevTool[] = [
  {
    name: 'ES7+ React/Redux/React-Native snippets',
    description: 'VS Code extension for React snippets',
    category: 'VS Code Extension',
    icon: '⚛'
  },
  {
    name: 'Prettier - Code formatter',
    description: 'Opinionated code formatter',
    category: 'VS Code Extension',
    icon: '💅'
  },
  {
    name: 'ESLint',
    description: 'Find and fix problems in your JavaScript code',
    category: 'VS Code Extension',
    icon: '🔍'
  },
  {
    name: 'GitLens',
    description: 'Supercharge Git capabilities in VS Code',
    category: 'VS Code Extension',
    icon: '👁'
  },
  {
    name: 'Thunder Client',
    description: 'Lightweight REST API client for VS Code',
    category: 'VS Code Extension',
    icon: '⚡'
  },
  {
    name: 'Postman',
    description: 'API testing and development platform',
    category: 'Tool',
    url: 'https://postman.com',
    icon: '📮'
  },
  {
    name: 'Figma',
    description: 'Collaborative design and prototyping tool',
    category: 'Design Tool',
    url: 'https://figma.com',
    icon: '🎨'
  },
  {
    name: 'Notion',
    description: 'All-in-one workspace for notes and docs',
    category: 'Productivity',
    url: 'https://notion.so',
    icon: '📝'
  },
  {
    name: 'Raycast',
    description: 'Productivity tool for Mac',
    category: 'Productivity',
    url: 'https://raycast.com',
    icon: '🚀'
  },
  {
    name: 'Warp',
    description: 'Modern terminal with AI features',
    category: 'Terminal',
    url: 'https://warp.dev',
    icon: '💻'
  }
];
const aiResponses: { [key: string]: string } = {
  // Frontend Development
  'frontend': '🚀 For frontend development, I recommend:\n\n*Best Stack:\n• React + Vite + TypeScript + Tailwind CSS\n• Fast development with hot reloading\n• Type safety and modern tooling\n\nQuick Start:*\nbash\nnpm create vite@latest my-app -- --template react-ts\ncd my-app && npm install\nnpm install -D tailwindcss postcss autoprefixer\n\n\nWould you like detailed setup instructions?',
  
  'react': '⚛ React is perfect for modern web apps!\n\n*Why React?\n• Component-based architecture\n• Large ecosystem and community\n• Excellent performance with Virtual DOM\n• Great developer tools\n\nRecommended Setup:*\nbash\nnpx create-react-app my-app --template typescript\n# OR for faster builds:\nnpm create vite@latest my-app -- --template react-ts\n\n\n*Essential packages:*\n• React Router for navigation\n• Tailwind CSS for styling\n• React Query for data fetching\n\nNeed help with any specific React concepts?',
  
  'nextjs': '▲ Next.js is excellent for production apps!\n\n*Key Benefits:\n• Server-Side Rendering (SSR)\n• Static Site Generation (SSG)\n• Built-in API routes\n• Automatic code splitting\n• SEO optimization\n\nQuick Setup:*\nbash\nnpx create-next-app@latest my-app --typescript --tailwind --eslint\ncd my-app && npm run dev\n\n\n*Perfect for:*\n• E-commerce sites\n• Blogs and content sites\n• Marketing websites\n• Full-stack applications\n\nWhat type of project are you building?',
  
  'vue': '💚 Vue.js is beginner-friendly and powerful!\n\n*Why Vue?\n• Gentle learning curve\n• Excellent documentation\n• Progressive framework\n• Great performance\n\nSetup with Vite:*\nbash\nnpm create vue@latest my-project\ncd my-project && npm install\nnpm run dev\n\n\n*Ecosystem:*\n• Vue Router for routing\n• Pinia for state management\n• Nuxt.js for full-stack apps\n\nInterested in Vue 3 Composition API?',
  
  // Backend Development
  'backend': '🔧 For backend development, here are top recommendations:\n\n*Node.js Stack:\n• Express.js + TypeScript + Prisma\n• Fast development and great ecosystem\n\nSetup Commands:*\nbash\nmkdir my-api && cd my-api\nnpm init -y\nnpm install express cors helmet dotenv\nnpm install -D @types/node @types/express typescript ts-node\n\n\n*Alternative Options:\n• **Supabase: Backend-as-a-Service (fastest)\n• **Firebase: Google\'s BaaS solution\n• **Fastify*: High-performance Node.js framework\n\nWhat type of application are you building?',
  
  'nodejs': '🟢 Node.js is perfect for JavaScript developers!\n\n*Why Node.js?\n• Same language for frontend/backend\n• Huge npm ecosystem\n• Great performance for I/O operations\n• Active community support\n\nEssential Setup:*\nbash\n# Initialize project\nnpm init -y\nnpm install express cors helmet dotenv\nnpm install -D nodemon @types/node typescript\n\n\n*Recommended Architecture:\n• Express.js for web framework\n• Prisma for database ORM\n• JWT for authentication\n• Zod for validation\n\nProject Structure:*\n\nsrc/\n├── routes/\n├── controllers/\n├── middleware/\n├── models/\n└── utils/\n\n\nNeed help with Express setup?',
  
  'express': '🚂 Express.js is the most popular Node.js framework!\n\n*Quick Start:*\njavascript\nconst express = require(\'express\');\nconst app = express();\n\napp.get(\'/\', (req, res) => {\n  res.json({ message: \'Hello World!\' });\n});\n\napp.listen(3000, () => {\n  console.log(\'Server running on port 3000\');\n});\n\n\n*Essential Middleware:\n• CORS for cross-origin requests\n• Helmet for security headers\n• Morgan for logging\n• Express.json() for JSON parsing\n\nBest Practices:*\n• Use environment variables\n• Implement error handling\n• Add input validation\n• Structure routes properly\n\nWant to see a complete Express setup?',
  
  // Database & Schema
  'database': '🗄 Database recommendations based on your needs:\n\n*SQL Databases (Structured Data):\n• **PostgreSQL: Most feature-rich, great for complex apps\n• **MySQL: Popular, good performance\n• **SQLite: Simple, file-based, perfect for small apps\n\nNoSQL Databases (Flexible Data):\n• **MongoDB: Document-based, great for rapid development\n• **Redis: In-memory, perfect for caching\n\nCloud Solutions:\n• **Supabase: PostgreSQL with real-time features\n• **PlanetScale: Serverless MySQL with branching\n• **MongoDB Atlas: Managed MongoDB hosting\n\nQuick Setup with Supabase:*\nbash\nnpm install @supabase/supabase-js\n\n\nWhat type of data will you be storing?',
  
  'postgresql': '🐘 PostgreSQL is the world\'s most advanced open-source database!\n\n*Why PostgreSQL?\n• ACID compliance\n• Advanced data types (JSON, Arrays)\n• Powerful query capabilities\n• Excellent performance\n• Strong community support\n\nSetup with Docker:*\nbash\ndocker run --name postgres-db -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres\n\n\n*With Prisma ORM:*\nbash\nnpm install prisma @prisma/client\nnpx prisma init\n# Edit schema.prisma\nnpx prisma migrate dev\n\n\n*Best for:*\n• Complex applications\n• Data integrity requirements\n• Advanced queries and analytics\n• Multi-user applications\n\nNeed help with Prisma setup?',
  
  'mongodb': '🍃 MongoDB is perfect for flexible, document-based data!\n\n*Why MongoDB?\n• Schema flexibility\n• JSON-like documents\n• Horizontal scaling\n• Rich query language\n• Great for rapid prototyping\n\nSetup with Mongoose:*\nbash\nnpm install mongodb mongoose\nnpm install -D @types/mongoose\n\n\n*Basic Connection:*\njavascript\nconst mongoose = require(\'mongoose\');\nmongoose.connect(\'mongodb://localhost:27017/myapp\');\n\n\n*Perfect for:\n• Content management systems\n• Real-time applications\n• IoT data collection\n• Rapid prototyping\n\nCloud Option:* MongoDB Atlas for managed hosting\n\nWant to see schema examples?',
  
  'schema': '📊 Schema design is crucial for database success!\n\n*Step-by-Step Process:\n\n1. Identify Entities:\n• Users, Products, Orders, Categories\n• Think about your app\'s main "things"\n\n2. Define Attributes:\n• User: id, email, name, created_at\n• Product: id, title, price, description\n\n3. Establish Relationships:\n• One-to-Many: User → Orders\n• Many-to-Many: Products ↔ Categories\n• One-to-One: User → Profile\n\n4. Normalization:\n• Eliminate data redundancy\n• Ensure data integrity\n• Optimize for queries\n\nTools I Recommend:\n• **dbdiagram.io: Visual ERD creation\n• **Lucidchart: Professional diagrams\n• **Prisma Studio: Database browser\n\nExample Schema:*\nsql\nCREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  email VARCHAR(255) UNIQUE,\n  created_at TIMESTAMP DEFAULT NOW()\n);\n\n\nWhat entities does your project need?',
  
  // Deployment
  'deployment': '🚀 Deployment options for different project types:\n\n*Frontend Apps:\n• **Vercel: Best for React/Next.js (recommended)\n• **Netlify: Great for static sites\n• **GitHub Pages: Free for static sites\n\nFull-Stack Apps:\n• **Railway: Easy full-stack deployment\n• **Render: Free tier available\n• **Heroku: Classic choice (paid)\n\nQuick Vercel Deployment:*\nbash\nnpm install -g vercel\nvercel --prod\n\n\n*Railway Deployment:*\nbash\nnpm install -g @railway/cli\nrailway login\nrailway deploy\n\n\n*Pre-deployment Checklist:*\n✅ Environment variables configured\n✅ Build process working\n✅ Database migrations ready\n✅ Domain name ready (optional)\n\nWhat type of app are you deploying?',
  
  'vercel': '▲ Vercel is perfect for frontend deployments!\n\n*Why Vercel?\n• Zero-config deployments\n• Automatic HTTPS\n• Global CDN\n• Preview deployments\n• Excellent Next.js integration\n\nDeployment Steps:\n1. **Connect GitHub:\n   • Import your repository\n   • Automatic deployments on push\n\n2. **Configure Build:*\n   json\n   {\n     "scripts": {\n       "build": "npm run build",\n       "start": "npm start"\n     }\n   }\n   \n\n3. *Environment Variables:\n   • Add in Vercel dashboard\n   • Separate for preview/production\n\nPerfect for:\n• React applications\n• Next.js projects\n• Static sites\n• Jamstack applications\n\nFree Tier Includes:*\n• 100GB bandwidth\n• Unlimited static sites\n• Custom domains\n\nReady to deploy?',
  
  'railway': '🚄 Railway is excellent for full-stack applications!\n\n*Why Railway?\n• Deploy from GitHub in seconds\n• Built-in databases\n• Environment management\n• Automatic scaling\n• Great free tier\n\nDeployment Process:\n1. **Connect Repository:\n   • Link your GitHub repo\n   • Automatic builds on push\n\n2. **Add Database:\n   • PostgreSQL, MySQL, Redis\n   • One-click provisioning\n\n3. **Configure Environment:*\n   bash\n   # Railway automatically detects:\n   # - Node.js apps\n   # - Python apps\n   # - Docker containers\n   \n\n*Perfect for:\n• Node.js APIs\n• Full-stack applications\n• Database-driven apps\n• Microservices\n\nFree Tier:*\n• $5 monthly credit\n• Multiple services\n• Custom domains\n\nNeed help with Railway setup?',
  
  // General Help & Tools
  'help': '🤖 I\'m your AI Project Assistant! I can help with:\n\n*🎨 Frontend Development:\n• React, Next.js, Vue.js setup\n• Styling with Tailwind CSS\n• State management solutions\n• Component libraries\n\n⚙ Backend Development:\n• Node.js + Express setup\n• API design and development\n• Authentication implementation\n• Database integration\n\n🗄 Database & Schema:\n• Database selection guidance\n• Schema design best practices\n• ORM setup (Prisma, Mongoose)\n• Migration strategies\n\n🚀 Deployment & DevOps:\n• Platform recommendations\n• CI/CD pipeline setup\n• Environment configuration\n• Performance optimization\n\n💡 Project Planning:\n• Technology stack selection\n• Architecture decisions\n• Best practices and patterns\n• Tool recommendations\n\nJust ask me anything like:*\n• "How to setup React with TypeScript?"\n• "Best database for my e-commerce app?"\n• "Deploy Node.js app to Railway?"\n• "Design schema for blog application?"\n\nWhat would you like to know?',
  
  'tools': '🛠 Here are my top tool recommendations:\n\n*Frontend Tools:\n• **Vite: Lightning-fast build tool\n• **Tailwind CSS: Utility-first CSS framework\n• **React Query: Data fetching and caching\n• **Framer Motion: Animation library\n\nBackend Tools:\n• **Prisma: Next-generation ORM\n• **Zod: TypeScript-first validation\n• **JWT: Authentication tokens\n• **Nodemailer: Email sending\n\nDatabase Tools:\n• **Supabase: PostgreSQL with real-time\n• **PlanetScale: Serverless MySQL\n• **Redis: In-memory caching\n• **MongoDB Atlas: Managed MongoDB\n\nDevelopment Tools:\n• **VS Code: Best code editor\n• **Postman: API testing\n• **Git: Version control\n• **Docker: Containerization\n\nDesign Tools:\n• **Figma: UI/UX design\n• **Lucidchart: Database diagrams\n• **Canva*: Graphics and assets\n\nNeed specific tool recommendations for your project?',
  
  'typescript': '📘 TypeScript makes JavaScript development much better!\n\n*Why TypeScript?\n• Catch errors at compile time\n• Better IDE support and autocomplete\n• Improved code documentation\n• Easier refactoring\n• Better team collaboration\n\nQuick Setup:*\nbash\n# For new project\nnpm create vite@latest my-app -- --template react-ts\n\n# For existing project\nnpm install -D typescript @types/node\nnpx tsc --init\n\n\n*Essential Config (tsconfig.json):*\njson\n{\n  "compilerOptions": {\n    "target": "ES2020",\n    "module": "ESNext",\n    "strict": true,\n    "jsx": "react-jsx"\n  }\n}\n\n\n*Benefits:\n• Type safety prevents runtime errors\n• Better IntelliSense in VS Code\n• Self-documenting code\n• Easier debugging\n\nLearning Path:*\n1. Basic types (string, number, boolean)\n2. Interfaces and types\n3. Generics\n4. Advanced patterns\n\nWant help with specific TypeScript concepts?',
  
  // Project Types
  'ecommerce': '🛒 Building an e-commerce app? Here\'s the perfect stack:\n\n*Frontend:\n• Next.js for SEO optimization\n• Tailwind CSS for responsive design\n• Stripe for payments\n• React Hook Form for forms\n\nBackend:\n• Node.js + Express API\n• Prisma + PostgreSQL for data\n• JWT authentication\n• Cloudinary for images\n\nEssential Features:\n• Product catalog with search\n• Shopping cart functionality\n• User authentication\n• Payment processing\n• Order management\n• Admin dashboard\n\nRecommended Services:\n• **Stripe: Payment processing\n• **Supabase: Database + Auth\n• **Vercel: Frontend hosting\n• **Railway: Backend hosting\n\nQuick Start:*\nbash\nnpx create-next-app@latest my-store --typescript\ncd my-store\nnpm install @stripe/stripe-js prisma\n\n\nNeed help with specific e-commerce features?',
  
  'blog': '📝 Creating a blog? Here\'s the ideal setup:\n\n*Static Blog (Recommended):\n• **Next.js* with Static Generation\n• *Markdown* for content\n• *Tailwind CSS* for styling\n• *MDX* for interactive content\n\n*Dynamic Blog:\n• **Next.js* with API routes\n• *Prisma + PostgreSQL* for data\n• *Rich text editor* (Tiptap/Quill)\n• *Image optimization\n\nEssential Features:\n• SEO optimization\n• Fast loading times\n• Responsive design\n• Search functionality\n• Comments system\n• Social sharing\n\nQuick Setup:*\nbash\nnpx create-next-app@latest my-blog --typescript\ncd my-blog\nnpm install @next/mdx gray-matter\n\n\n*Content Management:\n• **Markdown files: Simple and fast\n• **Headless CMS: Strapi, Contentful\n• **Database*: For dynamic content\n\nWhat type of blog content will you create?',
  
  'api': '🔌 Building an API? Here\'s the complete guide:\n\n*REST API Stack:\n• **Node.js + Express: Fast and flexible\n• **Prisma + PostgreSQL: Type-safe database\n• **Zod: Input validation\n• **JWT: Authentication\n\nGraphQL Alternative:\n• **Apollo Server: GraphQL implementation\n• **Type-GraphQL: TypeScript integration\n• **Prisma: Database layer\n\nQuick Express Setup:*\njavascript\nconst express = require(\'express\');\nconst app = express();\n\napp.use(express.json());\napp.use(cors());\n\n// Routes\napp.get(\'/api/users\', getUsersHandler);\napp.post(\'/api/users\', createUserHandler);\n\napp.listen(3000);\n\n\n*Best Practices:\n• RESTful URL structure\n• Proper HTTP status codes\n• Input validation\n• Error handling\n• Rate limiting\n• API documentation\n\nTesting:\n• **Jest: Unit testing\n• **Supertest: API testing\n• **Postman*: Manual testing\n\nNeed help with specific API endpoints?',
  
  // Error Handling & Troubleshooting
  'error': '🐛 Common development errors and solutions:\n\n*Frontend Errors:\n• **Module not found: Check import paths\n• **Hydration mismatch: Server/client rendering issue\n• **CORS error: Configure backend CORS\n• **Build fails: Check TypeScript errors\n\nBackend Errors:\n• **Port already in use: Change port or kill process\n• **Database connection: Check connection string\n• **Authentication fails: Verify JWT secret\n• **Module not found: Run npm install\n\nDatabase Errors:\n• **Migration fails: Check schema syntax\n• **Connection timeout: Verify database URL\n• **Constraint violation: Check data integrity\n\nDeployment Errors:\n• **Build fails: Check environment variables\n• **404 on refresh: Configure routing\n• **API not found: Check deployment URLs\n\nDebugging Tips:*\n• Use console.log strategically\n• Check browser developer tools\n• Read error messages carefully\n• Use debugger statements\n\nWhat specific error are you encountering?',
  
  'performance': '⚡ Performance optimization tips:\n\n*Frontend Optimization:\n• **Code splitting: Dynamic imports\n• **Image optimization: Next.js Image component\n• **Lazy loading: React.lazy for components\n• **Bundle analysis: webpack-bundle-analyzer\n• **Caching: Service workers, browser cache\n\nBackend Optimization:\n• **Database indexing: Speed up queries\n• **Connection pooling: Manage DB connections\n• **Caching: Redis for frequently accessed data\n• **Compression: Gzip responses\n• **Rate limiting: Prevent abuse\n\nDatabase Optimization:\n• **Query optimization: Use EXPLAIN\n• **Proper indexing: On frequently queried columns\n• **Connection pooling: Limit concurrent connections\n• **Data pagination: Limit result sets\n\nMonitoring Tools:\n• **Lighthouse: Web performance audit\n• **Web Vitals: Core performance metrics\n• **New Relic: Application monitoring\n• **Sentry: Error tracking\n\nQuick Wins:*\njavascript\n// Image optimization\n<Image src="/photo.jpg" width={500} height={300} alt="Photo" />\n\n// Code splitting\nconst LazyComponent = React.lazy(() => import(\'./Component\'));\n\n\nWhat performance issues are you facing?',
  
  'security': '🔒 Security best practices for web applications:\n\n*Authentication & Authorization:\n• **Strong passwords: Enforce complexity\n• **JWT tokens: Secure token-based auth\n• **Rate limiting: Prevent brute force\n• **2FA: Two-factor authentication\n• **Session management: Secure session handling\n\nData Protection:\n• **Input validation: Sanitize all inputs\n• **SQL injection: Use parameterized queries\n• **XSS prevention: Escape user content\n• **CSRF protection: Use CSRF tokens\n• **HTTPS: Encrypt data in transit\n\nAPI Security:\n• **API keys: Secure API access\n• **CORS: Configure allowed origins\n• **Rate limiting: Prevent API abuse\n• **Input validation: Validate all requests\n• **Error handling: Don\'t expose sensitive info\n\nInfrastructure Security:\n• **Environment variables: Store secrets securely\n• **Regular updates: Keep dependencies updated\n• **Security headers: Helmet.js for Express\n• **Monitoring: Log security events\n\nQuick Security Setup:*\njavascript\n// Express security\nconst helmet = require(\'helmet\');\nconst rateLimit = require(\'express-rate-limit\');\n\napp.use(helmet());\napp.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));\n\n\nNeed help with specific security concerns?',
  
  'default': '🤖 Hi! I\'m your AI Project Assistant. I can help you with:\n\n*Quick Examples:\n• "How to setup React with TypeScript?"\n• "Best database for my project?"\n• "Deploy to Vercel step by step"\n• "Design schema for e-commerce app"\n• "Node.js API best practices"\n• "Frontend performance optimization"\n\nI specialize in:\n✨ Frontend frameworks (React, Next.js, Vue)\n✨ Backend development (Node.js, Express, APIs)\n✨ Database design and setup\n✨ Deployment strategies\n✨ Performance optimization\n✨ Security best practices\n✨ Project architecture\n\nJust ask me anything about:*\n• Technology stack recommendations\n• Step-by-step setup guides\n• Best practices and patterns\n• Troubleshooting common issues\n• Tool and library suggestions\n\nWhat would you like to know about your project? 🚀'
};