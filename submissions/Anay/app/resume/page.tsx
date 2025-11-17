"use client"

import {
  ArrowLeft,
  Download,
  Mail,
  Github,
  Linkedin,
  Code,
  MapPin,
  Calendar,
  GraduationCap,
  Trophy,
  Phone,
  Briefcase,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DotGridShader from "@/components/DotGridShader"
import RevealOnView from "@/components/reveal-on-view"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "EduGuide: One-Stop Career & Education Advisor",
    subtitle: "Smart India Hackathon",
    period: "Sept 2025 – Present",
    description:
      "Developing a full-stack platform (Node.js, Express, MongoDB, Next.js) to improve college enrollment through personalized recommendations and interactive roadmaps.",
    achievements: [
      "Built secure authentication, role-based access, and RESTful APIs for courses, bookmarks, and recommendations",
      "Integrated interactive college maps and multilingual support (Google Translate) to enhance accessibility",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Next.js", "Google Translate API"],
    githubUrl: "https://github.com/Anay0305/EduGuide",
  },
  {
    title: "Boost Bot API",
    subtitle: "Personal Project",
    period: "Apr 2025 – May 2025",
    description:
      "Developed Django backend for license key management, live order tracking, and Discord autobuy integrations.",
    achievements: ["Implemented WebSocket support for real-time updates and secure token-based authentication"],
    technologies: ["Django", "WebSocket", "REST API", "Discord API"],
    githubUrl: "https://github.com/Anay0305/Boost-Bot-API",
  },
  {
    title: "Online Mock Tests WebApp",
    subtitle: "Personal Project",
    period: "Feb 2025 – Mar 2025",
    description:
      "Developed a Django-based platform for conducting quizzes and mock exams with secure login and result tracking.",
    achievements: [
      "Implemented instant scoring, answer review, and an admin panel for managing tests, questions, and users",
    ],
    technologies: ["Django", "Python", "SQLite", "HTML/CSS"],
    githubUrl: "https://github.com/Anay0305/Online-Mock-Tests-WebApp",
  },
  {
    title: "Gateway Discord Bot & Card Graphics API",
    subtitle: "Public Project",
    period: "Nov 2022 – Jul 2024",
    description:
      "Developed and launched a multifunctional Discord bot with automation, moderation, and engagement features.",
    achievements: [
      "Integrated REST APIs and a Flask-based Card Graphics API to generate dynamic profile cards, leaderboards, and stats",
      "Scaled to 635 guilds and 1.3M+ users while maintaining efficient backend performance",
    ],
    technologies: ["Python", "discord.py", "Flask", "REST API", "PIL/Pillow"],
    githubUrl: "https://github.com/Anay0305/Gateway-discord-bot",
  },
]

const education = [
  {
    institution: "Thapar Institute of Engineering & Technology",
    degree: "B.E. in Computer Science",
    period: "2025 – 2029 (Expected)",
    location: "Patiala, India",
    coursework: "Data Structures & Algorithms, C Programming, Discrete Mathematics (in progress)",
  },
  {
    institution: "SSD Krishna Vatika School",
    degree: "Higher Secondary School (12th Board: 77.2%)",
    period: "2023 – 2025",
    location: "Bathinda, India",
  },
  {
    institution: "Bishop Cotton School",
    degree: "Secondary School (10th Board: 81.8%)",
    period: "2020 – 2023",
    location: "Shimla, India",
  },
]

const technicalSkills = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C", "SQL", "JavaScript (Learning)"],
  },
  {
    category: "Core CS",
    skills: ["Data Structures & Algorithms", "LeetCode", "Hackathons"],
  },
  {
    category: "Frameworks/Libraries",
    skills: ["Django", "Flask", "discord.py", "Selenium", "Leaflet.js"],
  },
  {
    category: "Web",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (S3, EC2)", "Azure", "GCP", "Docker (beginner)", "REST APIs"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "PIL/Pillow", "BeautifulSoup", "Linux/Unix"],
  },
]

export default function ResumePage() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setActiveProjectIndex(index)
            }
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px",
      }
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const handleDownloadPDF = () => {
    const link = document.createElement("a")
    link.href = "/resume-anay-gupta.pdf"
    link.download = "Anay-Gupta-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="bg-[#0a0a0a] text-foreground min-h-screen cursor-default overflow-x-hidden relative">
      {/* Elegant ambient background matching main page */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Enhanced navigation buttons */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <Button
            asChild
            variant="ghost"
            className="text-muted-foreground hover:text-foreground hover:bg-neutral-800/60 bg-neutral-900/60 backdrop-blur-sm rounded-lg transition-all duration-300 px-3 py-2 sm:px-4 sm:py-5 border border-neutral-800/50 hover:border-neutral-700/70 hover:shadow-lg hover:shadow-blue-500/10 group"
          >
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
              <ArrowLeft className="h-5 w-5 sm:h-4 sm:w-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="text-sm sm:text-base">Back<span className="hidden sm:inline"> to Portfolio</span></span>
            </Link>
          </Button>

          <Button
            onClick={handleDownloadPDF}
            aria-label="Download resume PDF"
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white border-0 rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 p-2 sm:px-4 sm:py-5"
          >
            <Download className="h-5 w-5 sm:h-4 sm:w-4 sm:mr-2" />
            <span className="hidden sm:inline text-sm sm:text-base">Download PDF</span>
          </Button>
        </div>

        {/* Main resume card with glass morphism */}
        <RevealOnView
          as="div"
          intensity="hero"
          className="relative overflow-hidden rounded-2xl border border-neutral-800/50 bg-neutral-950/90 backdrop-blur-xl shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:border-neutral-700/70 transition-all duration-500 group"
        >
          {/* Glass morphism gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Elegant top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

          {/* Texture background */}
          <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
            <DotGridShader />
          </div>

          <div className="relative z-10 p-6 sm:p-8 lg:p-12">
            {/* Header section with enhanced styling */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-foreground bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text">
                Anay Gupta
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground/90 mb-4 sm:mb-6 font-medium">Aspiring Software Engineer</p>
              <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
                Aspiring Software Engineer with skills in Python, Java, and C, experienced in REST APIs, web
                applications, and automation. Hands-on experience with cloud platforms (AWS, Azure, GCP) and backend
                frameworks (Django, Flask, Selenium). Passionate about open source, hackathons, and building scalable
                solutions.
              </p>

              {/* Elegant divider */}
              <div className="w-4/5 h-px bg-gradient-to-r from-transparent via-neutral-700/50 to-transparent mx-auto mb-6 sm:mb-8"></div>

              {/* Contact links with enhanced hover effects */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 max-w-4xl mx-auto">
                <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground group">
                  <div className="p-1.5 rounded-lg bg-neutral-800/40 group-hover:bg-neutral-700/60 transition-colors duration-200">
                    <Phone className="h-4 w-4 flex-shrink-0 text-cyan-400/80 transition-colors duration-200 group-hover:text-cyan-400" />
                  </div>
                  <a
                    href="tel:+919056690327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 rounded-sm"
                  >
                    +91 90566 90327
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground group">
                  <div className="p-1.5 rounded-lg bg-neutral-800/40 group-hover:bg-neutral-700/60 transition-colors duration-200">
                    <Mail className="h-4 w-4 flex-shrink-0 text-blue-400/80 transition-colors duration-200 group-hover:text-blue-400" />
                  </div>
                  <a
                    href="mailto:anaysumeet@gmail.com"
                    className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-sm"
                  >
                    anaysumeet@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground group">
                  <div className="p-1.5 rounded-lg bg-neutral-800/40 group-hover:bg-neutral-700/60 transition-colors duration-200">
                    <Github className="h-4 w-4 flex-shrink-0 text-purple-400/80 transition-colors duration-200 group-hover:text-purple-400" />
                  </div>
                  <a
                    href="https://github.com/Anay0305"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 rounded-sm"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground group">
                  <div className="p-1.5 rounded-lg bg-neutral-800/40 group-hover:bg-neutral-700/60 transition-colors duration-200">
                    <Linkedin className="h-4 w-4 flex-shrink-0 text-blue-400/80 transition-colors duration-200 group-hover:text-blue-400" />
                  </div>
                  <a
                    href="https://linkedin.com/in/anay-gupta-77b8831a1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-sm"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground group">
                  <div className="p-1.5 rounded-lg bg-neutral-800/40 group-hover:bg-neutral-700/60 transition-colors duration-200">
                    <Code className="h-4 w-4 flex-shrink-0 text-emerald-400/80 transition-colors duration-200 group-hover:text-emerald-400" />
                  </div>
                  <a
                    href="https://leetcode.com/u/anaygupta03/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 rounded-sm"
                  >
                    LeetCode
                  </a>
                </div>
              </div>
            </div>

            {/* Education section with emerald accent */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Education</h2>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-xl p-4 sm:p-6 border border-neutral-800/50 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 backdrop-blur-sm transition-all duration-300 hover:border-emerald-700/50 hover:shadow-lg hover:shadow-emerald-500/10 hover:from-neutral-800/50 hover:to-neutral-900/50 group"
                  >
                    {/* Subtle top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-emerald-300 transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm mt-1 lg:mt-0">
                        <Calendar className="h-4 w-4 flex-shrink-0 text-emerald-400/60" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground/90 mb-1 text-sm sm:text-base">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground/80">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-emerald-400/60" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    {edu.coursework && (
                      <p className="text-xs sm:text-sm text-muted-foreground/70 mt-2 italic">
                        Relevant Coursework: {edu.coursework}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Projects section with blue accent and enhanced timeline */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Projects</h2>
              </div>

              {/* Enhanced timeline container */}
              <div className="relative overflow-hidden rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 shadow-xl hover:border-neutral-700/70 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500 group">
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="space-y-6 sm:space-y-8">
                    {projects.map((project, idx) => {
                      const totalProjects = projects.length
                      const dotPosition = totalProjects === 1 ? 10 : 10 + (idx / (totalProjects - 1)) * 80
                      const nextDotPosition = totalProjects === 1 ? 10 : 10 + ((idx + 1) / (totalProjects - 1)) * 80
                      const isActive = activeProjectIndex === idx

                      return (
                        <div
                          key={idx}
                          className="relative pl-8 md:pl-10 group/project"
                          ref={(el) => {
                            projectRefs.current[idx] = el
                          }}
                        >
                          {/* Enhanced timeline line with gradient */}
                          {idx < projects.length - 1 && (
                            <div
                              className="absolute left-[6px] md:left-[7px] w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-600/30 to-neutral-800/50 pointer-events-none transition-all duration-500"
                              style={{
                                top: `${dotPosition}%`,
                                height: `calc(100% - ${dotPosition}% + 2rem + ${nextDotPosition}%)`,
                              }}
                              aria-hidden="true"
                            />
                          )}

                          {/* Enhanced project card */}
                          <div className="peer relative overflow-hidden rounded-xl p-4 md:p-6 border border-neutral-800/50 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 backdrop-blur-sm transition-all duration-300 hover:border-blue-700/50 hover:from-neutral-800/50 hover:to-neutral-900/50 hover:shadow-lg hover:shadow-blue-500/10 motion-reduce:transform-none">
                            {/* Subtle top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 group-hover/project:opacity-100 transition-opacity duration-300" />

                            <div className="space-y-4">
                              {/* Header with gradient on hover */}
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                <div className="flex items-start gap-3 flex-1 min-w-0">
                                  <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight flex-1 group-hover/project:text-blue-300 transition-colors duration-300">
                                    {project.title}
                                  </h3>
                                  {project.githubUrl && (
                                    <a
                                      href={project.githubUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-muted-foreground hover:text-blue-400 transition-all duration-200 hover:scale-110 mt-0.5"
                                      aria-label="View on GitHub"
                                    >
                                      <Github className="h-5 w-5" />
                                    </a>
                                  )}
                                </div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-900/50 border border-neutral-700/50 rounded-lg text-muted-foreground/80 text-xs sm:text-sm shrink-0">
                                  <Calendar className="h-3.5 w-3.5 flex-shrink-0 text-blue-400/60" />
                                  <span className="whitespace-nowrap font-medium">{project.period}</span>
                                </div>
                              </div>

                              {/* Subtitle badge with gradient */}
                              <div className="space-y-3">
                                <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-md">
                                  <p className="text-sm text-blue-300 font-semibold">{project.subtitle}</p>
                                </div>
                                <p className="text-muted-foreground/90 text-sm leading-relaxed">{project.description}</p>
                              </div>

                              {/* Achievements with icon */}
                              {project.achievements.length > 0 && (
                                <div className="space-y-2 pt-2">
                                  <ul className="space-y-2.5">
                                    {project.achievements.map((achievement, achievementIdx) => (
                                      <li key={achievementIdx} className="flex items-start gap-3">
                                        <Sparkles className="w-4 h-4 text-blue-400/60 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm leading-relaxed text-muted-foreground/90">{achievement}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Technologies with enhanced styling */}
                              <div className="flex flex-wrap gap-2 pt-2">
                                {project.technologies.map((tech, techIdx) => (
                                  <span
                                    key={techIdx}
                                    className="px-2.5 py-1 bg-neutral-900/50 text-neutral-300 text-xs font-medium rounded-md border border-neutral-700/50 hover:bg-blue-900/20 hover:border-blue-600/50 hover:text-blue-200 transition-all duration-200 hover:scale-105 hover:shadow-sm hover:shadow-blue-500/20"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Enhanced timeline dot with glow effect */}
                          <div
                            className={`absolute left-0 w-4 h-4 rounded-full transition-all duration-500 pointer-events-none ${
                              isActive
                                ? "bg-blue-400 border-2 border-blue-300 scale-125 shadow-lg shadow-blue-400/50"
                                : "bg-neutral-700 border-2 border-neutral-600 peer-hover:!border-blue-400 peer-hover:!bg-blue-400 peer-hover:shadow-md peer-hover:shadow-blue-400/30"
                            }`}
                            style={{ top: `${dotPosition}%` }}
                            aria-hidden="true"
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills section with blue/purple accents */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Technical Skills</h2>
              </div>

              <div className="relative overflow-hidden rounded-xl p-5 sm:p-6 lg:p-8 border border-neutral-800/50 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700/70 hover:shadow-lg hover:shadow-blue-500/10 group">
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                  {technicalSkills.map((skillGroup, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-5 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full" />
                        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                          {skillGroup.category}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-neutral-900/50 rounded-lg text-sm border border-neutral-700/50 text-neutral-300 transition-all duration-200 hover:bg-blue-900/20 hover:border-blue-600/50 hover:text-blue-200 hover:shadow-md hover:shadow-blue-500/20 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Problem Solving section with purple accent */}
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Problem Solving & Competitive Programming</h2>
              </div>

              <div className="relative overflow-hidden rounded-xl p-4 sm:p-6 border border-neutral-800/50 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 backdrop-blur-sm transition-all duration-300 hover:border-purple-700/50 hover:shadow-lg hover:shadow-purple-500/10 group">
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <p className="text-muted-foreground/90 text-sm leading-relaxed mb-4">
                  Regular practice on LeetCode and hackathons, focusing on problem-solving with Data Structures &
                  Algorithms.
                </p>
                <p className="text-muted-foreground/90 text-sm leading-relaxed">
                  Proficient in arrays, strings, hash tables, linked lists, stacks, trees, tries, sorting, dynamic
                  programming, divide & conquer, and bit manipulation. Strong foundation in applying algorithmic
                  techniques to solve real-world problems efficiently.
                </p>
              </div>
            </div>
          </div>
        </RevealOnView>
      </div>
    </main>
  )
}
