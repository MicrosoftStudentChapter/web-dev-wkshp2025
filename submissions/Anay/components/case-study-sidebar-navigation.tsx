"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/portfolio-data"

interface Section {
  id: string
  title: string
  icon: any
}

interface CaseStudySidebarNavigationProps {
  currentProject: string
  sections: Section[]
  accentColor?: string // Added dynamic accent color prop
}

export function CaseStudySidebarNavigation({
  currentProject,
  sections,
  accentColor = "slate", // Default to slate if not provided
}: CaseStudySidebarNavigationProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "")
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false) // Added mobile toggle state for left sidebar
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false) // Added mobile toggle state for right sidebar

  const getAccentClasses = (isActive: boolean) => {
    const colorMap = {
      slate: isActive
        ? "bg-gradient-to-r from-slate-500/20 to-slate-600/20 text-foreground border border-slate-500/30 shadow-lg"
        : "text-muted-foreground hover:text-foreground hover:bg-neutral-200 dark:hover:bg-white/10 border border-transparent hover:border-neutral-300 dark:hover:border-white/20",
      indigo: isActive
        ? "bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-foreground border border-indigo-500/30 shadow-lg"
        : "text-muted-foreground hover:text-foreground hover:bg-neutral-200 dark:hover:bg-white/10 border border-transparent hover:border-neutral-300 dark:hover:border-white/20",
      teal: isActive
        ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-foreground border border-teal-500/30 shadow-lg"
        : "text-muted-foreground hover:text-foreground hover:bg-neutral-200 dark:hover:bg-white/10 border border-transparent hover:border-neutral-300 dark:hover:border-white/20",
      violet: isActive
        ? "bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-foreground border border-violet-500/30 shadow-lg"
        : "text-muted-foreground hover:text-foreground hover:bg-neutral-200 dark:hover:bg-white/10 border border-transparent hover:border-neutral-300 dark:hover:border-white/20",
      amber: isActive
        ? "bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-foreground border border-amber-500/30 shadow-lg"
        : "text-muted-foreground hover:text-foreground hover:bg-neutral-200 dark:hover:bg-white/10 border border-transparent hover:border-neutral-300 dark:hover:border-white/20",
      rose: isActive
        ? "bg-gradient-to-r from-rose-500/20 to-pink-500/20 text-foreground border border-rose-500/30 shadow-lg"
        : "text-muted-foreground hover:text-foreground hover:bg-neutral-200 dark:hover:bg-white/10 border border-transparent hover:border-neutral-300 dark:hover:border-white/20",
    }
    return colorMap[accentColor as keyof typeof colorMap] || colorMap.slate
  }

  useEffect(() => {
    if (!activeSection && sections.length > 0) {
      setActiveSection(sections[0].id)
    }

    const handleScroll = () => {
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))

      let currentSection = null
      const scrollPosition = window.scrollY + 200
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollPosition + windowHeight >= documentHeight - 100) {
        currentSection = sectionElements[sectionElements.length - 1]
      } else {
        currentSection = sectionElements.find(({ element }) => {
          if (!element) return false
          const rect = element.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 100
        })
      }

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections, activeSection]) // Added activeSection to dependency array

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setLeftSidebarOpen(false) // Close mobile sidebar after navigation
  }

  const caseStudies = projects.filter((project) => project.href.startsWith("/case-study/"))

  return (
    <>
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <Button
          onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
          variant="ghost"
          size="sm"
          className="bg-background/80 dark:bg-black/80 backdrop-blur-xl border border-border text-foreground hover:bg-neutral-200 dark:hover:bg-white/10"
        >
          {leftSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>
      </div>

      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <Button
          onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
          variant="ghost"
          size="sm"
          className="bg-background/80 dark:bg-black/80 backdrop-blur-xl border border-border text-foreground hover:bg-neutral-200 dark:hover:bg-white/10"
        >
          {rightSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>
      </div>

      {/* Left Sidebar - Sections Navigation */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-background/90 dark:bg-black/90 backdrop-blur-xl border-r border-border z-40 p-6 transition-transform duration-300 ${
          leftSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`} // Added mobile responsive classes
        style={{
          backgroundImage: `radial-gradient(circle, rgba(128,128,128,0.1) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      >
        <div className="space-y-6">
          <Button
            asChild
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-neutral-200 dark:hover:bg-white/10 border border-border hover:border-neutral-300 dark:hover:border-white/20 rounded-full transition-all duration-300"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </Button>

          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Sections</h3>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm rounded-xl transition-all duration-300 ${getAccentClasses(activeSection === section.id)}`} // Using dynamic accent colors
                >
                  <section.icon className="w-4 h-4" />
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Case Studies Navigation */}
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-background/90 dark:bg-black/90 backdrop-blur-xl border-l border-border z-40 p-6 transition-transform duration-300 ${
          rightSidebarOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0`} // Added mobile responsive classes
        style={{
          backgroundImage: `radial-gradient(circle, rgba(128,128,128,0.1) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      >
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Case Studies</h3>
          <nav className="space-y-2">
            {caseStudies.map((study) => {
              const studyId = study.href.split("/").pop()
              const isActive = studyId === currentProject

              return (
                <Link
                  key={study.href}
                  href={study.href}
                  onClick={() => setRightSidebarOpen(false)} // Close mobile sidebar after navigation
                  className={`block px-4 py-3 text-sm rounded-xl transition-all duration-300 ${getAccentClasses(isActive)}`} // Using dynamic accent colors
                >
                  <div className="font-medium">{study.title}</div>
                  <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{study.subtitle}</div>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {(leftSidebarOpen || rightSidebarOpen) && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => {
            setLeftSidebarOpen(false)
            setRightSidebarOpen(false)
          }}
        />
      )}
    </>
  )
}
