import { Code, Zap, BarChart3, BookOpen, ImageIcon, Server, Database } from "lucide-react"
import { CaseStudyData } from "@/components/case-study-template"
import { projectGalleries } from "@/lib/portfolio-data"

export const boostBotAPICaseStudy: CaseStudyData = {
  projectId: "boost-bot-api",
  title: "Boost Bot API for License & Order Management",
  subtitle: "Real-time License Management System",
  description:
    "A comprehensive Django application for managing license/boost keys, live order tracking, stock monitoring, and Discord/autobuy integration with real-time WebSocket updates and automated workflow processing.",

  accentColor: "amber",

  tags: ["Django", "WebSocket", "REST API"],

  links: [
    {
      label: "View Code",
      url: "https://github.com/Anay0305/Boost-Bot-API",
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
    "Django 5 with Django Channels for WebSocket",
    "Real-time order tracking like Amazon shipments",
    "JWT token-based authentication system",
    "Automated key generation and redemption",
    "SellAuth webhook integration",
  ],

  solutionImpact: [
    "License/boost key management system",
    "Live stock monitoring dashboard",
    "Real-time WebSocket communication",
    "Discord server integration",
    "Comprehensive admin panel",
  ],

  features: [
    {
      icon: Database,
      title: "Key Management System",
      description: "Comprehensive license and boost key operations",
      details:
        "Advanced key generation, validation, and redemption system with Discord server linking. Users can redeem keys with automatic server association, while admins can bulk generate keys, monitor usage, and track redemption patterns with detailed analytics.",
    },
    {
      icon: BarChart3,
      title: "Live Order Tracking",
      description: "Real-time order progress monitoring",
      details:
        "Amazon-style order tracking with real-time progress updates from Pending to Completed status. WebSocket integration provides instant notifications, percentage completion tracking, and detailed order messages for transparent user experience.",
    },
    {
      icon: Server,
      title: "Integration & Automation",
      description: "Seamless third-party platform integration",
      details:
        "SellAuth webhook integration for automated order processing, worker-to-server result communication, and multi-platform autobuy support. Token-based API authentication ensures secure data exchange between all integrated services.",
    },
  ],

  frontendTech: {
    title: "Real-time Features",
    items: [
      "<strong>WebSocket Communication:</strong> Live order status updates and notifications",
      "<strong>Stock Monitoring:</strong> Real-time inventory tracking across durations",
      "<strong>Worker Integration:</strong> Automated result processing from external workers",
      "<strong>Webhook Processing:</strong> SellAuth integration for automated workflows",
    ],
  },

  backendTech: {
    title: "Backend Architecture",
    items: [
      "<strong>Django Framework:</strong> Django 5 with Channels for WebSocket support",
      "<strong>ASGI Server:</strong> Uvicorn for asynchronous request handling",
      "<strong>Database:</strong> SQLite/PostgreSQL with optimized queries",
      "<strong>Authentication:</strong> JWT tokens with access/refresh token rotation",
    ],
  },

  galleryImages: projectGalleries.boost,

  metrics: [
    {
      value: "Real-time",
      label: "Order Tracking",
    },
    {
      value: "100%",
      label: "Automated Workflow",
    },
    {
      value: "Multi-platform",
      label: "Integration Support",
    },
  ],

  technologies: [
    { name: "Django 5" },
    { name: "Django Channels" },
    { name: "WebSocket" },
    { name: "Uvicorn ASGI" },
    { name: "JWT Authentication" },
    { name: "REST API" },
    { name: "SQLite/PostgreSQL" },
    { name: "SellAuth Integration" },
    { name: "WhiteNoise" },
  ],
}
