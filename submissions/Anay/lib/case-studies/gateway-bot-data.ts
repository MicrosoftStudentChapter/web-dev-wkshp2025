import { Code, Zap, BarChart3, BookOpen, ImageIcon, Music, Shield } from "lucide-react"
import { CaseStudyData } from "@/components/case-study-template"
import { projectGalleries } from "@/lib/portfolio-data"

export const gatewayBotCaseStudy: CaseStudyData = {
  projectId: "gateway-bot",
  title: "Gateway Discord Bot",
  subtitle: "Multifunctional Discord Bot",
  description:
    "A comprehensive, multifunctional Discord bot featuring music playback, advanced moderation tools, and community engagement features that successfully served over 635 guilds with 1.3M+ users at its peak.",

  accentColor: "rose",

  tags: ["Discord.py", "Python", "Music Bot"],

  links: [
    {
      label: "View Code",
      url: "https://github.com/Anay0305/Gateway-discord-bot",
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
    "High-quality music streaming",
    "Advanced moderation tools",
    "Community engagement features",
    "24/7 uptime reliability",
    "Scalable architecture design",
  ],

  solutionImpact: [
    "635+ guilds served at peak",
    "1.3M+ users reached",
    "22ms average response time",
    "5.5% CPU usage efficiency",
    "14.8% memory optimization",
  ],

  features: [
    {
      icon: Music,
      title: "Advanced Music System",
      description: "High-quality audio streaming with multi-platform support",
      details:
        "Sophisticated music streaming system supporting YouTube, Spotify, and SoundCloud with queue management, playlists, volume control, and audio filters for optimal user experience across all connected servers.",
    },
    {
      icon: Shield,
      title: "Comprehensive Moderation",
      description: "Automated moderation with intelligent filtering",
      details:
        "Built comprehensive moderation tools with auto-moderation filters, warning systems, audit logging, and role-based permissions for effective server management and community safety.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time monitoring and optimization",
      details:
        "Achieved exceptional performance with 5.5% CPU usage, 14.8% memory usage, and 22ms latency while serving 1.3M+ users across 635+ guilds simultaneously with comprehensive analytics tracking.",
    },
  ],

  frontendTech: {
    title: "System Features",
    items: [
      "<strong>Scalable Design:</strong> Efficient resource management for large-scale deployment",
      "<strong>Auto-Recovery:</strong> Self-healing capabilities with automatic restart functionality",
      "<strong>Modular Structure:</strong> Plugin-based architecture for easy feature expansion",
      "<strong>Performance Monitoring:</strong> Real-time metrics and optimization algorithms",
    ],
  },

  backendTech: {
    title: "Backend Architecture",
    items: [
      "<strong>Discord.py Framework:</strong> Advanced Discord API integration with event handling",
      "<strong>Async Programming:</strong> Efficient concurrent processing for multiple guilds",
      "<strong>Music Streaming:</strong> Multi-platform audio source integration and processing",
      "<strong>Database Management:</strong> Persistent data storage for user preferences and settings",
    ],
  },

  galleryImages: projectGalleries.gateway,

  metrics: [
    {
      value: "635 Guilds",
      label: "Peak Server Count",
    },
    {
      value: "1.3M+ Users",
      label: "Peak User Base",
    },
    {
      value: "22ms Latency",
      label: "Average Response",
    },
  ],

  technologies: [
    { name: "Discord.py" },
    { name: "Python" },
    { name: "Async Programming" },
    { name: "Music Streaming" },
    { name: "Auto-Moderation" },
    { name: "Database Management" },
    { name: "Performance Optimization" },
    { name: "API Integration" },
    { name: "Real-time Analytics" },
  ],
}
