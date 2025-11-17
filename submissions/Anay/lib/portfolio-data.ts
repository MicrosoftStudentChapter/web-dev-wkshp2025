export interface Project {
  title: string
  subtitle: string
  imageSrc: string
  tags: string[]
  href: string
  priority: boolean
  gradientFrom: string
  gradientTo: string
}

export interface Certificate {
  title: string
  platform: string
  date: string
  image: string
  url: string
}

export interface Education {
  degree: string
  institution: string
  period: string
  location: string
  grade?: string
}

export interface Skill {
  category: string
  items: string
}

export interface PersonalInfo {
  name: string
  title: string[]
  description: string
  email: string
  phone: string
  profileImage: string
  timeZone: string
  socialLinks: {
    github: string
    linkedin: string
    leetcode: string
  }
}

export interface GalleryImage {
  src: string
  alt: string
  title: string
  description: string
}

export interface ProjectGallery {
  [key: string]: GalleryImage[]
}

// Portfolio data
export const personalInfo: PersonalInfo = {
  name: "anay",
  title: ["Aspiring Software Engineer", "Passionate Music Lover", "Caffeine-Fueled Developer"],
  description:
    "Strong skills in Python, DevOps, and Cloud Platforms. Experienced in building Discord bots, REST APIs, and web applications. Passionate about open source, hackathons, and solving real-world problems with scalable solutions.",
  email: "anaysumeet@gmail.com",
  phone: "+91 90566 90327",
  profileImage: "/anay-profile.jpeg",
  timeZone: "Asia/Kolkata",
  socialLinks: {
    github: "https://github.com/Anay0305",
    linkedin: "https://linkedin.com/in/anay-gupta-77b8831a1",
    leetcode: "https://leetcode.com/u/anaygupta03/",
  },
}

export const projects: Project[] = [
  {
    title: "EduGuide: One-Stop Career & Education Advisor",
    subtitle:
      "Full-stack hackathon project (Node.js, Express, MongoDB, Next.js) to improve college enrollment; built backend APIs, secure authentication, interactive college maps, and multilingual support",
    imageSrc: "/eduguide-main-page.png",
    tags: ["Node.js", "Express", "Next.js", "MongoDB"],
    href: "/case-study/eduguide",
    priority: true,
    gradientFrom: "#0f172a",
    gradientTo: "#6d28d9",
  },
  {
    title: "Boost Bot API",
    subtitle:
      "Full-stack Django application for managing license/boost keys, live order tracking, stock monitoring, and Discord/autobuy integration with real-time WebSocket updates",
    imageSrc: "/boostbotapi-main-page.png",
    tags: ["Django", "WebSockets", "REST API"],
    href: "/case-study/boost-bot-api",
    priority: true,
    gradientFrom: "#0f172a",
    gradientTo: "#f59e0b",
  },
  {
    title: "Online Mock Tests WebApp",
    subtitle:
      "Created a Django-based web application for conducting quizzes and mock tests with secure login, instant scoring, and result tracking",
    imageSrc: "/mock-main-page.png",
    tags: ["Django", "Web App", "SQLite"],
    href: "/case-study/mock-tests",
    priority: false,
    gradientFrom: "#111827",
    gradientTo: "#2563eb",
  },
  {
    title: "Gateway Discord Bot",
    subtitle:
      "Comprehensive Discord bot with music playback, advanced moderation, economy system, and 50+ commands supporting multiple servers with 99.9% uptime",
    imageSrc: "/gateway-main-page.png",
    tags: ["Discord.py", "Music Bot", "Moderation"],
    href: "/case-study/gateway-bot",
    priority: true,
    gradientFrom: "#0f172a",
    gradientTo: "#10b981",
  },
  {
    title: "Card Graphics API for Gateway",
    subtitle:
      "Flask-based microservice generating dynamic Discord visuals - profile cards, leaderboards, and server stats with advanced PIL/Pillow image processing",
    imageSrc: "/card-main-page.png",
    tags: ["Flask", "REST API", "PIL/Pillow"],
    href: "/case-study/card-graphics-api",
    priority: true,
    gradientFrom: "#0b132b",
    gradientTo: "#5bc0be",
  },
]

export const certificates: Certificate[] = [
  {
    title: "Problem Solving (Intermediate)",
    platform: "HackerRank",
    date: "Sep 2025",
    image: "/hackerrank-problem-solving-intermediate.png",
    url: "https://www.hackerrank.com/certificates/6befacc48a92",
  },
  {
    title: "Python (Basic)",
    platform: "HackerRank",
    date: "Jan 2025",
    image: "/hackerrank-python-basic.png",
    url: "https://www.hackerrank.com/certificates/2c62486b08f2",
  },
  {
    title: "Problem Solving (Basic)",
    platform: "HackerRank",
    date: "Aug 2025",
    image: "/hackerrank-problem-solving-basic.png",
    url: "https://www.hackerrank.com/certificates/5b3b751f4c17",
  },
]

export const skills: Skill[] = [
  {
    category: "Languages",
    items: "Python, Java, C, SQL, JavaScript (Learning)",
  },
  {
    category: "Core CS",
    items: "Data Structures & Algorithms, LeetCode, Hackathons",
  },
  {
    category: "Frameworks/Libraries",
    items: "Django (learning), Flask, discord.py, Selenium, Leaflet.js",
  },
  {
    category: "Web",
    items: "HTML, CSS, JavaScript, React.js, Next.js",
  },
  {
    category: "Cloud & DevOps",
    items: "AWS (S3, EC2), Azure, GCP, Docker (beginner), REST APIs",
  },
  {
    category: "Tools",
    items: "Git, GitHub, PIL/Pillow, BeautifulSoup, Linux/Unix",
  },
]

export const education: Education[] = [
  {
    degree: "B.E. in Computer Science",
    institution: "Thapar Institute of Engineering & Technology",
    period: "2025 - 2029 (Expected)",
    location: "Patiala, India",
  },
  {
    degree: "Higher Secondary School",
    institution: "SSD Krishna Vatika School",
    period: "2023 - 2025",
    location: "Bathinda, India",
    grade: "12th Board: 77.2%",
  },
  {
    degree: "Secondary School",
    institution: "Bishop Cotton School",
    period: "2020 - 2023",
    location: "Shimla, India",
    grade: "10th Board: 81.8%",
  },
]

export const projectGalleries: ProjectGallery = {
  gateway: [
    {
      src: "/gateway-help.png",
      alt: "Help Command of Gateway",
      title: "Help Command",
      description: "A collective help command to get the overview of all the modules and commands available",
    },
    {
      src: "/gateway-stats.png",
      alt: "Statistics of Gateway",
      title: "Peak Stats of Gateway",
      description: "Showing the information of bot like number of guilds, user with some code and server information as well",
    },
    {
      src: "/gateway-main-page.png",
      alt: "Music Player",
      title: "Music Player of Gateway",
      description: "Advanced Music Player with easy access to features like add to favourites, shuffle, autoplay etc",
    },
  ],
  card_mask: [
    {
      src: "/card-profile-mask.png",
      alt: "Template of Profile Cards",
      title: "Template of Profile Cards",
      description: "Mask of the Profile which will be in background",
    },
    {
      src: "/card-bg.png",
      alt: "Background of Images",
      title: "Background",
      description: "Common Background of leaderboard and server",
    },
    {
      src: "/card-lb-mask.png",
      alt: "Template of Leaderboard Cards",
      title: "Template of Leaderboard Cards",
      description: "Mask of the Leaderboard which will be in background",
    },
    {
      src: "/card-stats-mask.png",
      alt: "Template of Server Statistics Cards",
      title: "Template of Server Analytics Cards",
      description: "Mask of the Server Analytics which will be in background",
    },
  ],
  card_final: [
    {
      src: "/card-profile.png",
      alt: "Profile Card",
      title: "Dynamic Profile Cards",
      description: "Automated profile card generation with custom themes, stats, and user avatars",
    },
    {
      src: "/card-lb.png",
      alt: "Leaderboard Graphics",
      title: "Server Leaderboards",
      description: "Beautiful leaderboard graphics with rankings, number of messages/time spent in voice channel",
    },
    {
      src: "/card-main-page.png",
      alt: "Server Statistics",
      title: "Server Analytics Cards",
      description: "Comprehensive server statistics with member activity and engagement metrics",
    },
  ],
  mock: [
    {
      src: "/mock-signup.png",
      alt: "SignUp",
      title: "SignUp Page",
      description: "Clean and simple Signup Page with details like email, username and password",
    },
    {
      src: "/mock-main-page.png",
      alt: "Dashboard",
      title: "Dashboard",
      description: "Dashboard of the webapp which will be featuring the tests available and navigate through pages",
    },
    {
      src: "/mock-start-test.png",
      alt: "Start Test",
      title: "Instructions Page",
      description: "Displaying all the information regarding the selected test before starting it",
    },
  ],
  boost: [
    {
      src: "/boostbotapi-main-page.png",
      alt: "Dashboard",
      title: "Dashboard",
      description: "Dashboard of Auto Boosting Bot which will be showcase all the features and help in navigation",
    },
    {
      src: "/boostbotapi-live-stock.png",
      alt: "Live Stock Manager",
      title: "Live Stock",
      description: "Gets the real time stock of boosts available via websocket connected to the bot",
    },
    {
      src: "/boostbotapi-key-info.png",
      alt: "Key Info",
      title: "Key Info",
      description: "Shows the information regarding Key on webpage",
    },
    {
      src: "/boostbotapi-redeem-panel.png",
      alt: "Redeem Panel",
      title: "Redeem Panel",
      description: "Claim the key through webpage and get instant boosts on your server",
    },
  ],
  eduguide: [
    {
      src: "/eduguide-signup.png",
      alt: "EduGuide Signup Page",
      title: "Signup Page",
      description: "User registration interface for creating new EduGuide accounts",
    },
    {
      src: "/eduguide-main-page.png",
      alt: "EduGuide Main Dashboard",
      title: "Main Dashboard",
      description: "Central hub with access to navigation, quizzes, exams, and roadmap tools",
    },
    {
      src: "/eduguide-profile.png",
      alt: "EduGuide Profile Management",
      title: "Profile Page",
      description: "User profile section for managing personal, academic, and career details",
    },
    {
      src: "/eduguide-quiz.png",
      alt: "EduGuide Aptitude Quiz",
      title: "Aptitude Quiz",
      description: "Interactive quiz to assess user skills, interests, and career preferences",
    },
    {
      src: "/eduguide-navigator.png",
      alt: "EduGuide Career Navigator Map",
      title: "Career Navigator",
      description: "Interactive map and filters to explore colleges and career opportunities",
    },
    {
      src: "/eduguide-exams.png",
      alt: "EduGuide Exams Section",
      title: "Exams Section",
      description: "Information hub for entrance exams, competitive tests, and preparation details",
    },
    {
      src: "/eduguide-roadmap.png",
      alt: "EduGuide Career Roadmap",
      title: "Career Roadmap",
      description: "Step-by-step personalized roadmap guiding users towards their career goals",
    },
  ],
}
