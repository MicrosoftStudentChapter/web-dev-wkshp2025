import { Code, Zap, BarChart3, BookOpen, ImageIcon, Users, MapPin, Globe } from "lucide-react"
import { CaseStudyData } from "@/components/case-study-template"
import { projectGalleries } from "@/lib/portfolio-data"

export const eduguideCaseStudy: CaseStudyData = {
  projectId: "eduguide",
  title: "EduGuide: One-Stop Career & Education Advisor",
  subtitle: "AI-Powered Educational Platform",
  description:
    "A comprehensive full-stack platform built for Smart India Hackathon 2025 that serves as a personalized digital mentor, helping students make informed academic and career choices through AI-powered recommendations, interactive college maps, and multilingual support.",

  accentColor: "indigo",

  tags: ["Next.js", "Node.js", "MongoDB", "Smart India Hackathon 2025"],

  links: [
    {
      label: "View Code",
      url: "https://github.com/Anay0305/EduGuide",
      icon: "github",
    },
  ],

  sections: [
    { id: "overview", title: "Project Overview", icon: Code },
    { id: "features", title: "Core Features", icon: BookOpen },
    { id: "implementation", title: "Technical Implementation", icon: Zap },
    { id: "gallery", title: "Project Gallery", icon: ImageIcon },
    { id: "results", title: "Impact & Results", icon: BarChart3 },
    { id: "technologies", title: "Technologies Used", icon: Code },
  ],

  problemStatement: [
    "Students struggle with stream selection after Class 10/12",
    "Limited awareness of nearby government colleges",
    "Unclear career paths for different degrees",
    "Language barriers in rural areas",
    "Scattered information across multiple sources",
  ],

  solutionImpact: [
    "Improves college enrollment rates",
    "Promotes educational equity",
    "Bridges urban-rural information divide",
    "Saves time for students and parents",
    "Creates stronger, informed workforce",
  ],

  features: [
    {
      icon: Users,
      title: "AI Career Counsellor",
      description: "Personalized recommendations based on aptitude and interests",
      details:
        "Advanced AI-powered system that analyzes student aptitude tests and interest surveys to provide personalized course recommendations, helping students make informed decisions about their academic future.",
    },
    {
      icon: MapPin,
      title: "Interactive College Explorer",
      description: "Location-based college search with advanced filtering",
      details:
        "Interactive map-based interface using Leaflet.js and Google Maps API for discovering nearby government colleges with comprehensive filters for courses, rankings, facilities, and fees.",
    },
    {
      icon: Globe,
      title: "Multilingual Platform",
      description: "Breaking language barriers for inclusive education",
      details:
        "Comprehensive multilingual support starting with English, Hindi, and regional languages (J&K focus) using Google Translate API to ensure educational information accessibility across diverse communities.",
    },
    {
      icon: BarChart3,
      title: "Course-to-Career Mapping",
      description: "Visual career pathways for informed decision making",
      details:
        "Comprehensive visual charts and pathways showing career opportunities, job prospects, higher education options, and competitive exam routes for each degree program (B.A., B.Sc., B.Com., etc.).",
    },
  ],

  frontendTech: {
    title: "Frontend Architecture",
    items: [
      "<strong>Next.js with TypeScript:</strong> Modern React framework with server-side rendering",
      "<strong>Tailwind CSS + ShadCN UI:</strong> Responsive, accessible component design system",
      "<strong>Leaflet.js Integration:</strong> Interactive maps for college visualization",
      "<strong>Google Translate API:</strong> Real-time multilingual content translation",
    ],
  },

  backendTech: {
    title: "Backend Systems",
    items: [
      "<strong>Node.js + Express:</strong> RESTful API server with modular architecture",
      "<strong>MongoDB + Mongoose:</strong> Flexible document storage for user data and courses",
      "<strong>JWT Authentication:</strong> Secure user sessions and data protection",
      "<strong>Google Maps API:</strong> Location services and college mapping integration",
    ],
  },

  galleryImages: projectGalleries.eduguide,

  metrics: [
    {
      value: "SIH 2025",
      label: "Hackathon Prototype",
    },
    {
      value: "Full-Stack",
      label: "Complete Solution",
    },
    {
      value: "Multilingual",
      label: "Inclusive Platform",
    },
  ],

  impactSection: {
    title: "Socio-Economic Impact",
    items: [
      {
        title: "Educational Equity",
        description:
          "Promotes equal access to educational information regardless of background, helping bridge the urban-rural divide through multilingual support.",
      },
      {
        title: "Workforce Development",
        description:
          "Guides students toward sustainable, informed career paths, contributing to a stronger and more skilled workforce across various sectors.",
      },
    ],
  },

  technologies: [
    { name: "Next.js (React + TypeScript)" },
    { name: "Node.js + Express.js" },
    { name: "MongoDB + Mongoose" },
    { name: "Tailwind CSS + ShadCN UI" },
    { name: "Leaflet.js" },
    { name: "Google Maps API" },
    { name: "Google Translate API" },
    { name: "JWT Authentication" },
    { name: "RESTful API Design" },
    { name: "ESLint + Prettier" },
  ],
}
