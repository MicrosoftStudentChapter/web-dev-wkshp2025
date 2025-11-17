"use client"

import {
  Mail,
  Github,
  Linkedin,
  Code,
  Phone,
  ArrowRight,
  ExternalLink,
  FileText,
  Award,
  GraduationCap,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DotGridShader from "@/components/DotGridShader"
import LiveClock from "@/components/live-clock"
import TypewriterHeading from "@/components/typewriter-heading"
import { useState } from "react"

import ProjectCard from "@/components/project-card"
import RevealOnView from "@/components/reveal-on-view"

import { personalInfo, projects, certificates, skills, education } from "@/lib/portfolio-data"

export default function Page() {
  const [activeSection, setActiveSection] = useState<"projects" | "certs">("projects")

  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden relative">
      {/* Elegant gradient overlay for depth */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4 relative z-10">
        {/* LEFT: fixed sidebar that stays in place during scroll - DESKTOP ONLY */}
        <aside className="hidden lg:block fixed left-4 top-4 w-[420px] h-[calc(100vh-2rem)] z-40">
          <div className="sticky top-4 h-[calc(100vh-2rem)]">
            <div
              className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-800/50 bg-neutral-950/90 backdrop-blur-xl shadow-2xl
                opacity-0 animate-fadeInLeft hover:border-neutral-700/70 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 group"
            >
              {/* Glass morphism gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Elegant top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
                <DotGridShader />
              </div>

              <div className="flex-1 overflow-y-auto p-6 sm:p-8 scrollbar-hide relative z-10">
                {/* Status indicator with glow */}
                <div className="mb-4 flex items-center justify-center gap-3">
                  <div className="relative">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full blur-sm animate-pulse" />
                  </div>
                  <LiveClock
                    timeZone={personalInfo.timeZone}
                    className="text-xs text-white/60 font-mono tracking-wider"
                  />
                </div>

                {/* Profile image with elegant border and glow */}
                <div className="mb-6 flex justify-center">
                  <div className="relative group/avatar">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-md opacity-50 group-hover/avatar:opacity-75 transition-opacity duration-300" />
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-neutral-700/50 shadow-2xl ring-2 ring-blue-500/20 group-hover/avatar:ring-blue-500/40 transition-all duration-300">
                      <img
                        src={personalInfo.profileImage || "/placeholder.svg"}
                        alt={`${personalInfo.name} profile`}
                        className="w-full h-full object-cover group-hover/avatar:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Name with subtle glow */}
                <div className="mb-2 flex items-center justify-center gap-2">
                  <div className="text-2xl font-bold tracking-tight text-foreground bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text">
                    {personalInfo.name}
                  </div>
                </div>

                <TypewriterHeading
                  className="h-20 text-3xl font-bold leading-tight tracking-tight sm:text-4xl text-foreground text-center mb-6"
                  lines={personalInfo.title}
                />

                <p className="text-base text-muted-foreground/90 leading-relaxed text-center mb-6">{personalInfo.description}</p>

                {/* Enhanced button group with better shadows */}
                <div className="flex flex-wrap items-center gap-3 justify-center mb-6">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white border-0 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                  >
                    <Link href={`mailto:${personalInfo.email}`} className="group">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact me
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-lg border-neutral-700/50 bg-neutral-800/40 backdrop-blur-sm hover:bg-neutral-700/60 hover:border-neutral-600/50 text-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/resume" className="group">
                      <FileText className="mr-2 h-4 w-4" />
                      View Resume
                    </Link>
                  </Button>
                </div>

                {/* GitHub Stats Link */}
                <div className="flex justify-center mb-6">
                  <Link
                    href="/github-stats"
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-700/30 hover:border-purple-600/50 hover:from-purple-900/50 hover:to-blue-900/50 text-purple-200 hover:text-purple-100 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm font-medium">View GitHub Stats</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>

                {/* Social links with hover effects */}
                <div className="flex flex-wrap items-center gap-4 text-sm justify-center mb-8">
                  <Link
                    href={personalInfo.socialLinks.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110 hover:text-blue-400"
                  >
                    <div className="p-2 rounded-lg bg-neutral-800/40 hover:bg-neutral-700/60 transition-colors duration-200">
                      <Github className="h-4 w-4" />
                    </div>
                    <span className="hidden sm:inline">GitHub</span>
                  </Link>
                  <Link
                    href={personalInfo.socialLinks.linkedin}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110 hover:text-blue-400"
                  >
                    <div className="p-2 rounded-lg bg-neutral-800/40 hover:bg-neutral-700/60 transition-colors duration-200">
                      <Linkedin className="h-4 w-4" />
                    </div>
                    <span className="hidden sm:inline">LinkedIn</span>
                  </Link>
                  <Link
                    href={personalInfo.socialLinks.leetcode}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110 hover:text-blue-400"
                  >
                    <div className="p-2 rounded-lg bg-neutral-800/40 hover:bg-neutral-700/60 transition-colors duration-200">
                      <Code className="h-4 w-4" />
                    </div>
                    <span className="hidden sm:inline">LeetCode</span>
                  </Link>
                  <div className="flex items-center gap-2 text-muted-foreground/80">
                    <div className="p-2 rounded-lg bg-neutral-800/40">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span className="hidden sm:inline">{personalInfo.phone}</span>
                  </div>
                </div>

                {/* Technical Skills section with compact grid layout */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800/50">
                    <div className="p-1.5 rounded-md bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <Code className="h-3.5 w-3.5 text-blue-400" />
                    </div>
                    <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                      Technical Skills
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-800/50 hover:border-blue-700/50 hover:from-neutral-800/50 hover:to-neutral-900/50 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 group-hover:scale-150 transition-transform duration-300" />
                          <h3 className="text-xs font-bold text-foreground/80 group-hover:text-foreground transition-colors duration-200">
                            {skill.category}
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground/80 leading-relaxed group-hover:text-muted-foreground transition-colors duration-200">
                          {skill.items}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {activeSection === "projects" && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800/50">
                      <div className="p-1.5 rounded-md bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                        <Award className="h-3.5 w-3.5 text-purple-400" />
                      </div>
                      <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                        Certifications
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {certificates.map((cert, idx) => (
                        <Link
                          key={idx}
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative overflow-hidden rounded-xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 p-3 hover:border-neutral-700/70 hover:from-neutral-800/50 hover:to-neutral-900/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-500/10"
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-neutral-700/50 group-hover:border-neutral-600/70 transition-all duration-300 group-hover:shadow-md">
                              <img
                                src={cert.image || "/placeholder.svg"}
                                alt={`${cert.title} Certificate`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-foreground truncate transition-colors duration-200 group-hover:text-blue-300">
                                {cert.title}
                              </div>
                              <div className="text-xs text-muted-foreground/80 transition-colors duration-200">
                                {cert.platform} • {cert.date}
                              </div>
                              <div className="text-xs text-blue-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">View Credentials →</div>
                            </div>
                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-blue-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === "certs" && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800/50">
                      <div className="p-1.5 rounded-md bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                        <Briefcase className="h-3.5 w-3.5 text-cyan-400" />
                      </div>
                      <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                        Projects
                      </p>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      {projects.slice(0, 4).map((project, idx) => (
                        <Link
                          key={idx}
                          href={project.href}
                          className="group block p-3 rounded-xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 hover:border-neutral-700/70 hover:from-neutral-800/50 hover:to-neutral-900/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/10"
                        >
                          <div className="font-medium text-foreground truncate mb-1 transition-colors duration-200 group-hover:text-cyan-300">
                            {project.title}
                          </div>
                          <div className="text-xs text-muted-foreground/80 transition-colors duration-200">
                            {project.subtitle}
                          </div>
                          <div className="text-xs text-cyan-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">View Project →</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education section with enhanced styling */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800/50">
                    <div className="p-1.5 rounded-md bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                      <GraduationCap className="h-3.5 w-3.5 text-emerald-400" />
                    </div>
                    <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                      Education
                    </p>
                  </div>
                  <div className="space-y-4 text-sm">
                    {education.map((edu, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700/50 hover:from-neutral-800/50 hover:to-neutral-900/50 transition-all duration-300"
                      >
                        <div className="font-medium text-foreground mb-1">{edu.degree}</div>
                        <div className="text-muted-foreground/90">{edu.institution}</div>
                        <div className="text-xs text-muted-foreground/70 mt-2">
                          {edu.period} • {edu.grade && `${edu.grade} • `}
                          {edu.location}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT: main content area */}
        <div className="lg:ml-[440px] space-y-4 lg:pr-4 relative">
          {/* Desktop toggle with glass morphism */}
          <div className="hidden lg:block fixed top-4 right-4 z-50">
            <div className="flex items-center gap-2 bg-neutral-950/80 backdrop-blur-xl border border-neutral-800/50 rounded-xl p-1.5 shadow-2xl shadow-black/20 hover:border-neutral-700/70 transition-all duration-300">
              <button
                onClick={() => setActiveSection("projects")}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === "projects"
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-neutral-800/60"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveSection("certs")}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === "certs"
                    ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-neutral-800/60"
                }`}
              >
                Certificates
              </button>
            </div>
          </div>

          <div className="lg:hidden">
            {/* Mobile About Section - Always shown first */}
            <div className="space-y-8 pt-4 pb-8">
              <div className="relative overflow-hidden rounded-2xl border border-neutral-800/50 bg-neutral-950/90 backdrop-blur-xl shadow-2xl p-6 hover:border-neutral-700/70 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 group">
                {/* Glass morphism gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Elegant top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

                {/* Texture background */}
                <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
                  <DotGridShader />
                </div>

                {/* Profile Section */}
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    {/* Status indicator */}
                    <div className="mb-4 flex items-center justify-center gap-3">
                      <div className="relative">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full blur-sm animate-pulse" />
                      </div>
                      <LiveClock
                        timeZone={personalInfo.timeZone}
                        className="text-xs text-white/60 font-mono tracking-wider"
                      />
                    </div>

                    <div className="mb-6 flex justify-center">
                      <div className="relative group/avatar">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-md opacity-50 group-hover/avatar:opacity-75 transition-opacity duration-300" />
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-neutral-700/50 shadow-2xl ring-2 ring-blue-500/20">
                          <img
                            src={personalInfo.profileImage || "/placeholder.svg"}
                            alt={`${personalInfo.name} profile`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-2 flex items-center justify-center gap-2">
                      <div className="text-2xl font-bold tracking-tight text-foreground">
                        {personalInfo.name}
                      </div>
                    </div>

                    <TypewriterHeading
                      className="text-2xl font-bold leading-tight tracking-tight text-foreground text-center mb-4"
                      lines={personalInfo.title}
                    />

                    <p className="text-base text-muted-foreground/90 leading-relaxed text-center mb-6">
                      {personalInfo.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 justify-center mb-6">
                      <Button
                        asChild
                        size="lg"
                        className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white border-0 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
                      >
                        <Link href={`mailto:${personalInfo.email}`} className="group">
                          <Mail className="mr-2 h-4 w-4" />
                          Contact me
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="rounded-lg border-neutral-700/50 bg-neutral-800/40 backdrop-blur-sm hover:bg-neutral-700/60 hover:border-neutral-600/50 text-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Link href="/resume" className="group">
                          <FileText className="mr-2 h-4 w-4" />
                          View Resume
                        </Link>
                      </Button>
                    </div>

                    {/* GitHub Stats Link */}
                    <div className="flex justify-center mb-6">
                      <Link
                        href="/github-stats"
                        className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-700/30 hover:border-purple-600/50 hover:from-purple-900/50 hover:to-blue-900/50 text-purple-200 hover:text-purple-100 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                      >
                        <Github className="h-4 w-4" />
                        <span className="text-sm font-medium">View GitHub Stats</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm justify-center mb-8">
                      <Link
                        href={personalInfo.socialLinks.github}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110 hover:text-blue-400"
                      >
                        <div className="p-2 rounded-lg bg-neutral-800/40 hover:bg-neutral-700/60 transition-colors duration-200">
                          <Github className="h-4 w-4" />
                        </div>
                        GitHub
                      </Link>
                      <Link
                        href={personalInfo.socialLinks.linkedin}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110 hover:text-blue-400"
                      >
                        <div className="p-2 rounded-lg bg-neutral-800/40 hover:bg-neutral-700/60 transition-colors duration-200">
                          <Linkedin className="h-4 w-4" />
                        </div>
                        LinkedIn
                      </Link>
                      <Link
                        href={personalInfo.socialLinks.leetcode}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110 hover:text-blue-400"
                      >
                        <div className="p-2 rounded-lg bg-neutral-800/40 hover:bg-neutral-700/60 transition-colors duration-200">
                          <Code className="h-4 w-4" />
                        </div>
                        LeetCode
                      </Link>
                      <div className="flex items-center gap-2 text-muted-foreground/80">
                        <div className="p-2 rounded-lg bg-neutral-800/40">
                          <Phone className="h-4 w-4" />
                        </div>
                        {personalInfo.phone}
                      </div>
                    </div>
                  </div>

                  {/* Technical Skills */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800/50">
                      <div className="p-1.5 rounded-md bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                        <Code className="h-3.5 w-3.5 text-blue-400" />
                      </div>
                      <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                        Technical Skills
                      </p>
                    </div>
                    <div className="space-y-3 text-sm">
                      {skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-800/50 hover:border-blue-700/50 hover:from-neutral-800/50 hover:to-neutral-900/50 transition-all duration-300 group"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 group-hover:scale-150 transition-transform duration-300" />
                            <h3 className="text-xs font-bold text-foreground/80 group-hover:text-foreground transition-colors duration-200">
                              {skill.category}
                            </h3>
                          </div>
                          <p className="text-xs text-muted-foreground/80 leading-relaxed group-hover:text-muted-foreground transition-colors duration-200">
                            {skill.items}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800/50">
                      <div className="p-1.5 rounded-md bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                        <GraduationCap className="h-3.5 w-3.5 text-emerald-400" />
                      </div>
                      <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                        Education
                      </p>
                    </div>
                    <div className="space-y-4 text-sm">
                      {education.map((edu, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-800/50"
                        >
                          <div className="font-medium text-foreground mb-1">{edu.degree}</div>
                          <div className="text-muted-foreground/90">{edu.institution}</div>
                          <div className="text-xs text-muted-foreground/70 mt-2">
                            {edu.period} • {edu.grade && `${edu.grade} • `}
                            {edu.location}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- MOBILE TOGGLE: stays here in DOM but becomes sticky once scrolled to ---------- */}
            <div className="sticky top-4 z-50 mx-4 -mb-2 flex items-center justify-center" aria-hidden={false}>
              <div className="flex items-center gap-1.5 bg-neutral-950/80 backdrop-blur-xl border border-neutral-800/50 rounded-xl px-1.5 py-1.5 shadow-2xl mb-4 hover:border-neutral-700/70 transition-all duration-300">
                <button
                  onClick={() => setActiveSection("projects")}
                  className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === "projects"
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-neutral-800/60"
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => setActiveSection("certs")}
                  className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === "certs"
                      ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-neutral-800/60"
                  }`}
                >
                  Certificates
                </button>
              </div>
            </div>

            <div className="pt-4">
              {/* Projects section for mobile */}
              {activeSection === "projects" && (
                <div className="space-y-4">
                  {projects.map((p, idx) => (
                    <ProjectCard
                      key={p.title}
                      title={p.title}
                      subtitle={p.subtitle}
                      tags={p.tags}
                      href={p.href}
                      imageSrc={p.imageSrc}
                      priority={p.priority}
                      gradientFrom={p.gradientFrom}
                      gradientTo={p.gradientTo}
                      imageContainerClassName="h-48"
                      containerClassName="h-auto"
                      revealDelay={idx * 0.06}
                    />
                  ))}
                </div>
              )}

              {/* Certificates section for mobile */}
              {activeSection === "certs" && (
                <div className="space-y-4">
                  {certificates.map((cert, idx) => (
                    <RevealOnView
                      key={cert.title}
                      as="div"
                      intensity="hero"
                      className="relative overflow-hidden rounded-2xl border border-neutral-800/50 bg-neutral-950/90 backdrop-blur-xl shadow-2xl p-8 flex flex-col justify-center group hover:border-neutral-700/70 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)] transition-all duration-500"
                      delay={idx * 0.06}
                    >
                      {/* Glass morphism gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Elegant top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

                      <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
                        <DotGridShader />
                      </div>

                      <div className="text-center relative z-10">
                        <div className="mb-8 relative">
                          <img
                            src={cert.image || "/placeholder.svg"}
                            alt={`${cert.title} Certificate`}
                            className="w-full max-w-2xl h-auto mx-auto rounded-xl border border-neutral-700/50 object-contain shadow-2xl relative z-10 group-hover:shadow-purple-500/20 transition-shadow duration-500"
                          />
                        </div>

                        <div className="mb-2">
                          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-4">
                            Certificate
                          </div>
                        </div>

                        <h2 className="text-3xl font-bold text-foreground mb-4 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text">
                          {cert.title}
                        </h2>
                        <p className="text-xl text-foreground/90 mb-2 font-medium">{cert.platform}</p>
                        <p className="text-base text-muted-foreground/80 mb-8">{cert.date}</p>

                        <Link
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105"
                        >
                          View Credentials
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      </div>
                    </RevealOnView>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop content sections */}
          <div className="hidden lg:block">
            {/* Projects section for desktop */}
            {activeSection === "projects" && (
              <div className="space-y-4">
                {projects.map((p, idx) => (
                  <ProjectCard
                    key={p.title}
                    title={p.title}
                    subtitle={p.subtitle}
                    imageSrc={p.imageSrc}
                    tags={p.tags}
                    href={p.href}
                    priority={p.priority}
                    gradientFrom={p.gradientFrom}
                    gradientTo={p.gradientTo}
                    imageContainerClassName="lg:h-full"
                    containerClassName="lg:h-[calc(100vh-2rem)]"
                    revealDelay={idx * 0.06}
                  />
                ))}
              </div>
            )}

            {/* Certificates section for desktop */}
            {activeSection === "certs" && (
              <div className="space-y-4">
                {certificates.map((cert, idx) => (
                  <RevealOnView
                    key={cert.title}
                    as="div"
                    intensity="hero"
                    className="relative overflow-hidden rounded-2xl border border-neutral-800/50 bg-neutral-950/90 backdrop-blur-xl p-8 hover:border-neutral-700/70 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)] transition-all duration-500 cursor-pointer lg:h-[calc(100vh-2rem)] flex items-center justify-center group"
                    delay={idx * 0.06}
                  >
                    {/* Glass morphism gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Elegant top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

                    <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
                      <DotGridShader />
                    </div>

                    <div className="text-center relative z-10">
                      <div className="mb-8 relative">
                        <img
                          src={cert.image || "/placeholder.svg"}
                          alt={`${cert.title} Certificate`}
                          className="w-full max-w-2xl h-auto mx-auto rounded-xl border border-neutral-700/50 object-contain shadow-2xl relative z-10 group-hover:shadow-purple-500/20 transition-shadow duration-500"
                        />
                      </div>

                      <div className="mb-2">
                        <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-4">
                          Certificate
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold text-foreground mb-4 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text">
                        {cert.title}
                      </h2>
                      <p className="text-xl text-foreground/90 mb-2 font-medium">{cert.platform}</p>
                      <p className="text-base text-muted-foreground/80 mb-8">{cert.date}</p>

                      <Link
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105"
                      >
                        View Credentials
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </div>
                  </RevealOnView>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
