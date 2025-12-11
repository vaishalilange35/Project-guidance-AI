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