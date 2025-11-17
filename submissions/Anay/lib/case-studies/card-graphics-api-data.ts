import { Code, Zap, BarChart3, ImageIcon, Server, Users } from "lucide-react"
import { CaseStudyData } from "@/components/case-study-template"
import { projectGalleries } from "@/lib/portfolio-data"

export const cardGraphicsAPICaseStudy: CaseStudyData = {
  projectId: "card-graphics-api",
  title: "Card Graphics API",
  subtitle: "Dynamic Discord Graphics Generation",
  description:
    "A sophisticated Flask-based microservice that generates dynamic Discord visuals including user profile cards, server leaderboards, and comprehensive statistics dashboards with advanced image processing capabilities.",

  accentColor: "violet",

  tags: ["Flask", "REST API", "PIL/Pillow"],

  links: [
    {
      label: "View Code",
      url: "https://github.com/Anay0305/Card-Graphics-API",
      icon: "github",
    },
  ],

  sections: [
    { id: "overview", title: "Project Overview", icon: Code },
    { id: "features", title: "API Endpoints", icon: Server },
    { id: "implementation", title: "Technical Implementation", icon: Zap },
    { id: "gallery", title: "Project Gallery", icon: ImageIcon },
    { id: "results", title: "Impact & Results", icon: BarChart3 },
    { id: "technologies", title: "Technologies Used", icon: Code },
  ],

  problemStatement: [
    "Flask-based REST API with three main endpoints",
    "PIL/Pillow for advanced image processing",
    "Dynamic avatar and banner integration",
    "Custom font rendering and text positioning",
    "Automated Git deployment endpoint",
  ],

  solutionImpact: [
    "User profile cards with statistics",
    "Server leaderboards (messages & voice)",
    "Server analytics dashboards",
    "Badge and emoji integration",
    "Responsive image layouts",
  ],

  features: [
    {
      icon: Users,
      title: "POST /profile",
      description: "Generates comprehensive user profile cards",
      details:
        "Creates detailed profile images with user statistics, top servers, friends, tracks, playlists, and custom badges with circular avatar cropping and dynamic text positioning. Supports multiple data sources including music ranks, listening time, server statistics, and user achievements.",
    },
    {
      icon: BarChart3,
      title: "POST /leaderboard",
      description: "Creates server leaderboards for messages and voice activity",
      details:
        "Generates paginated leaderboards with server branding, user avatars, and statistics. Supports both message and voice activity tracking with custom date ranges. Features responsive layout with guild icons, banners, and customizable modes for users or channels.",
    },
    {
      icon: ImageIcon,
      title: "POST /server_top",
      description: "Produces comprehensive server analytics dashboards",
      details:
        "Creates detailed server overview images with daily statistics, top contributors, and channel analytics with customizable lookback periods and timezone support. Displays message trends, voice activity, top members across text and voice channels with comprehensive data visualization.",
    },
  ],

  frontendTech: {
    title: "Performance Features",
    items: [
      "<strong>Memory Optimization:</strong> BytesIO streams for efficient image handling",
      "<strong>Error Handling:</strong> Fallback avatars and graceful degradation",
      "<strong>Text Truncation:</strong> Smart text fitting with ellipsis for long names",
      "<strong>Format Conversion:</strong> Automatic image format standardization",
    ],
  },

  backendTech: {
    title: "Image Processing",
    items: [
      "<strong>PIL/Pillow Integration:</strong> Advanced image manipulation with custom fonts, gradients, and effects",
      "<strong>Dynamic Layouts:</strong> Responsive positioning based on content length and user data",
      "<strong>Avatar Processing:</strong> Circular cropping, resizing, and transparency handling",
      "<strong>Background Effects:</strong> Gaussian blur, brightness adjustment, and overlay masking",
    ],
  },

  galleryImages: [
    ...projectGalleries.card_mask.map((img) => ({
      ...img,
      title: `Template Mask - ${img.title}`,
    })),
    ...projectGalleries.card_final.map((img) => ({
      ...img,
      title: `Final Output - ${img.title}`,
    })),
  ],

  metrics: [
    {
      value: "3",
      label: "Core API Endpoints",
    },
    {
      value: "1280x720",
      label: "High-Quality Images",
    },
    {
      value: "Real-time",
      label: "Image Generation",
    },
  ],

  technologies: [
    { name: "Python" },
    { name: "Flask Framework" },
    { name: "PIL/Pillow" },
    { name: "REST API" },
    { name: "Discord.py" },
    { name: "Image Processing" },
    { name: "BytesIO Optimization" },
    { name: "Git Automation" },
    { name: "Linux Deployment" },
  ],
}
