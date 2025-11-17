import { Code, Zap, BarChart3, BookOpen, ImageIcon, Users, Award } from "lucide-react"
import { CaseStudyData } from "@/components/case-study-template"
import { projectGalleries } from "@/lib/portfolio-data"

export const mockTestsCaseStudy: CaseStudyData = {
  projectId: "mock-tests",
  title: "Online Mock Tests WebApp",
  subtitle: "Educational Assessment Platform",
  description:
    "A comprehensive Django-based platform for creating and taking interactive quizzes with real-time scoring, progress tracking, and detailed analytics for educational institutions and certification programs.",

  accentColor: "teal",

  tags: ["Django", "Python", "SQLite"],

  links: [
    {
      label: "View Code",
      url: "https://github.com/Anay0305/Online-Mock-Tests-WebApp",
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
    "Multiple question types support",
    "Real-time scoring and feedback",
    "Timed test functionality",
    "Progress tracking dashboard",
    "Comprehensive analytics",
  ],

  solutionImpact: [
    "Django REST framework backend",
    "SQLite database with optimized queries",
    "Bootstrap responsive frontend",
    "User authentication & authorization",
    "Admin panel for content management",
  ],

  features: [
    {
      icon: Users,
      title: "Question Management System",
      description: "Flexible question creation and organization",
      details:
        "Support for multiple choice, true/false, and text-based questions with rich media support. Questions can be organized into categories, tagged for easy searching, and include detailed explanations for educational value.",
    },
    {
      icon: BarChart3,
      title: "Real-time Assessment",
      description: "Instant feedback and scoring system",
      details:
        "Automated scoring algorithms provide instant feedback with detailed explanations for each answer. Timer functionality ensures fair testing conditions while progress tracking helps users monitor their performance over time.",
    },
    {
      icon: Award,
      title: "Analytics Dashboard",
      description: "Comprehensive performance tracking",
      details:
        "Detailed analytics showing performance trends, improvement areas, and comparative statistics. Admin dashboard provides insights into user engagement, question difficulty, and overall platform usage patterns.",
    },
  ],

  frontendTech: {
    title: "Frontend Experience",
    items: [
      "<strong>Responsive Design:</strong> Bootstrap framework for mobile-first approach",
      "<strong>Interactive UI:</strong> JavaScript for dynamic question navigation and timers",
      "<strong>User Experience:</strong> Intuitive interface with progress indicators",
      "<strong>Accessibility:</strong> WCAG compliant design for inclusive access",
    ],
  },

  backendTech: {
    title: "Backend Development",
    items: [
      "<strong>Django Framework:</strong> Robust MVC architecture with built-in admin interface",
      "<strong>Database Design:</strong> Optimized SQLite schema for efficient query performance",
      "<strong>API Development:</strong> RESTful endpoints for seamless frontend integration",
      "<strong>Security Features:</strong> CSRF protection, user authentication, and data validation",
    ],
  },

  galleryImages: projectGalleries.mock,

  metrics: [
    {
      value: "Educational",
      label: "Platform Success",
    },
    {
      value: "Real-time",
      label: "Assessment System",
    },
    {
      value: "Scalable",
      label: "Architecture",
    },
  ],

  technologies: [
    { name: "Django" },
    { name: "Python" },
    { name: "SQLite" },
    { name: "HTML/CSS" },
    { name: "JavaScript" },
    { name: "Bootstrap" },
    { name: "REST API" },
    { name: "User Authentication" },
    { name: "Admin Panel" },
  ],
}
