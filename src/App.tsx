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