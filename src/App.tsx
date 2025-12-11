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