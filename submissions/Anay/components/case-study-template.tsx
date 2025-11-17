"use client"

import { Github, ExternalLink, LucideIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InteractiveGallery } from "@/components/interactive-gallery"
import { CaseStudySidebarNavigation } from "@/components/case-study-sidebar-navigation"
import DotGridShader from "@/components/DotGridShader"

export type AccentColor = "slate" | "indigo" | "teal" | "violet" | "amber" | "rose"

interface CaseStudyLink {
  label: string
  url: string
  icon?: "github" | "external"
}

interface CaseStudySection {
  id: string
  title: string
  icon: LucideIcon
}

interface CaseStudyFeature {
  icon: LucideIcon
  title: string
  description: string
  details: string
}

interface TechItem {
  name: string
}

interface CaseStudyMetric {
  value: string
  label: string
}

interface ImpactItem {
  title: string
  description: string
}

export interface CaseStudyData {
  // Metadata
  projectId: string
  title: string
  subtitle: string
  description: string

  // Theme
  accentColor: AccentColor

  // Header
  tags: string[]
  links: CaseStudyLink[]

  // Sections
  sections: CaseStudySection[]

  // Overview
  problemStatement: string[]
  solutionImpact: string[]

  // Features
  features: CaseStudyFeature[]

  // Technical Implementation
  frontendTech?: {
    title: string
    items: string[]
  }
  backendTech?: {
    title: string
    items: string[]
  }

  // Gallery
  galleryImages: Array<{
    src: string
    alt: string
    title: string
    description: string
  }>

  // Results
  metrics: CaseStudyMetric[]
  impactSection?: {
    title: string
    items: ImpactItem[]
  }

  // Technologies
  technologies: TechItem[]
}

interface CaseStudyTemplateProps {
  data: CaseStudyData
}

export function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  const getColorClasses = (type: "text" | "textAlt" | "bg" | "bgAlt" | "border" | "shadow" | "gradient" | "gradientAlt" | "button" | "badgeGradient" | "iconGradient" | "topAccent") => {
    const colorMap: Record<AccentColor, Record<string, string>> = {
      slate: {
        text: "text-slate-300",
        textAlt: "text-slate-400",
        bg: "bg-slate-300",
        bgAlt: "bg-slate-400",
        border: "hover:border-slate-400/35",
        shadow: "hover:shadow-slate-500/10",
        gradient: "from-slate-900/20 via-neutral-950 to-neutral-900 border-slate-600/20 hover:border-slate-500/35 hover:shadow-slate-500/10",
        gradientAlt: "from-slate-800/20 via-neutral-950 to-neutral-900 border-slate-500/20 hover:border-slate-400/35 hover:shadow-slate-400/10",
        button: "bg-gradient-to-r from-slate-600/85 to-slate-700/85 hover:from-slate-500/85 hover:to-slate-600/85 hover:shadow-slate-500/25",
        badgeGradient: "from-slate-500/20 to-slate-600/20 border-slate-500/30",
        iconGradient: "from-slate-500/20 to-slate-600/20",
        topAccent: "from-transparent via-slate-400/50 to-transparent",
      },
      indigo: {
        text: "text-indigo-300",
        textAlt: "text-blue-300",
        bg: "bg-indigo-300",
        bgAlt: "bg-blue-300",
        border: "hover:border-indigo-400/35",
        shadow: "hover:shadow-indigo-500/10",
        gradient: "from-indigo-950/18 via-neutral-950 to-neutral-900 border-indigo-600/18 hover:border-indigo-500/35 hover:shadow-indigo-500/10",
        gradientAlt: "from-blue-950/18 via-neutral-950 to-neutral-900 border-blue-600/18 hover:border-blue-500/35 hover:shadow-blue-500/10",
        button: "bg-gradient-to-r from-indigo-600/85 to-blue-600/85 hover:from-indigo-500/85 hover:to-blue-500/85 hover:shadow-indigo-500/25",
        badgeGradient: "from-indigo-500/20 to-blue-500/20 border-indigo-500/30",
        iconGradient: "from-indigo-500/20 to-blue-500/20",
        topAccent: "from-transparent via-indigo-400/50 to-transparent",
      },
      teal: {
        text: "text-teal-300",
        textAlt: "text-cyan-300",
        bg: "bg-teal-300",
        bgAlt: "bg-cyan-300",
        border: "hover:border-teal-400/35",
        shadow: "hover:shadow-teal-500/10",
        gradient: "from-teal-950/18 via-neutral-950 to-neutral-900 border-teal-600/18 hover:border-teal-500/35 hover:shadow-teal-500/10",
        gradientAlt: "from-cyan-950/18 via-neutral-950 to-neutral-900 border-cyan-600/18 hover:border-cyan-500/35 hover:shadow-cyan-500/10",
        button: "bg-gradient-to-r from-teal-600/85 to-cyan-600/85 hover:from-teal-500/85 hover:to-cyan-500/85 hover:shadow-teal-500/25",
        badgeGradient: "from-teal-500/20 to-cyan-500/20 border-teal-500/30",
        iconGradient: "from-teal-500/20 to-cyan-500/20",
        topAccent: "from-transparent via-teal-400/50 to-transparent",
      },
      violet: {
        text: "text-violet-300",
        textAlt: "text-purple-300",
        bg: "bg-violet-300",
        bgAlt: "bg-purple-300",
        border: "hover:border-violet-400/35",
        shadow: "hover:shadow-violet-500/10",
        gradient: "from-violet-950/18 via-neutral-950 to-neutral-900 border-violet-600/18 hover:border-violet-500/35 hover:shadow-violet-500/10",
        gradientAlt: "from-purple-950/18 via-neutral-950 to-neutral-900 border-purple-600/18 hover:border-purple-500/35 hover:shadow-purple-500/10",
        button: "bg-gradient-to-r from-violet-600/85 to-purple-600/85 hover:from-violet-500/85 hover:to-purple-500/85 hover:shadow-violet-500/25",
        badgeGradient: "from-violet-500/20 to-purple-500/20 border-violet-500/30",
        iconGradient: "from-violet-500/20 to-purple-500/20",
        topAccent: "from-transparent via-violet-400/50 to-transparent",
      },
      amber: {
        text: "text-amber-300",
        textAlt: "text-yellow-300",
        bg: "bg-amber-300",
        bgAlt: "bg-yellow-300",
        border: "hover:border-amber-400/35",
        shadow: "hover:shadow-amber-500/10",
        gradient: "from-amber-950/18 via-neutral-950 to-neutral-900 border-amber-600/18 hover:border-amber-500/35 hover:shadow-amber-500/10",
        gradientAlt: "from-yellow-950/18 via-neutral-950 to-neutral-900 border-yellow-600/18 hover:border-yellow-500/35 hover:shadow-yellow-500/10",
        button: "bg-gradient-to-r from-amber-600/85 to-yellow-600/85 hover:from-amber-500/85 hover:to-yellow-500/85 hover:shadow-amber-500/25",
        badgeGradient: "from-amber-500/20 to-yellow-500/20 border-amber-500/30",
        iconGradient: "from-amber-500/20 to-yellow-500/20",
        topAccent: "from-transparent via-amber-400/50 to-transparent",
      },
      rose: {
        text: "text-rose-300",
        textAlt: "text-pink-300",
        bg: "bg-rose-300",
        bgAlt: "bg-pink-300",
        border: "hover:border-rose-400/35",
        shadow: "hover:shadow-rose-500/10",
        gradient: "from-rose-950/18 via-neutral-950 to-neutral-900 border-rose-600/18 hover:border-rose-500/35 hover:shadow-rose-500/10",
        gradientAlt: "from-pink-950/18 via-neutral-950 to-neutral-900 border-pink-600/18 hover:border-pink-500/35 hover:shadow-pink-500/10",
        button: "bg-gradient-to-r from-rose-600/85 to-pink-600/85 hover:from-rose-500/85 hover:to-pink-500/85 hover:shadow-rose-500/25",
        badgeGradient: "from-rose-500/20 to-pink-500/20 border-rose-500/30",
        iconGradient: "from-rose-500/20 to-pink-500/20",
        topAccent: "from-transparent via-rose-400/50 to-transparent",
      },
    }

    return colorMap[data.accentColor][type]
  }

  const colors = {
    text: getColorClasses("text"),
    textAlt: getColorClasses("textAlt"),
    bg: getColorClasses("bg"),
    bgAlt: getColorClasses("bgAlt"),
    border: getColorClasses("border"),
    shadow: getColorClasses("shadow"),
    gradient: getColorClasses("gradient"),
    gradientAlt: getColorClasses("gradientAlt"),
    button: getColorClasses("button"),
    badgeGradient: getColorClasses("badgeGradient"),
    iconGradient: getColorClasses("iconGradient"),
    topAccent: getColorClasses("topAccent"),
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Ambient Background - 3 pulsing orbs matching main page */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <CaseStudySidebarNavigation
        currentProject={data.projectId}
        sections={data.sections}
        accentColor={data.accentColor}
      />

      <div className="lg:ml-64 lg:mr-64 px-6 py-12 max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 pt-12 lg:pt-0">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h1 className="text-4xl font-bold text-foreground bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text">{data.title}</h1>
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={`bg-gradient-to-r ${colors.badgeGradient} text-neutral-200 border hover:scale-105 transition-all duration-300 shadow-sm ${colors.shadow}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <p className="text-lg text-muted-foreground/90 leading-relaxed">{data.description}</p>
        </div>

        {/* Links - Enhanced buttons */}
        <div className="flex gap-4 mb-12">
          {data.links.map((link, index) => (
            <Button
              key={index}
              asChild
              className={`text-background transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl ${colors.button}`}
            >
              <Link href={link.url} className="flex items-center gap-2">
                {link.icon === "github" && <Github className="w-4 h-4" />}
                {link.icon === "external" && <ExternalLink className="w-4 h-4" />}
                {link.label}
              </Link>
            </Button>
          ))}
        </div>

        {/* Project Overview */}
        <section id="overview" className="mb-12">
          <h2 className={`text-2xl font-semibold mb-6 flex items-center gap-2 text-foreground`}>
            <div className={`p-1.5 rounded-md bg-gradient-to-br ${colors.iconGradient}`}>
              {(() => {
                const IconComponent = data.sections[0].icon
                return <IconComponent className={`w-6 h-6 ${colors.text}`} />
              })()}
            </div>
            {data.sections[0].title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              className={`relative overflow-hidden bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border-neutral-800/50 backdrop-blur-xl ${colors.border} transition-all duration-300 shadow-xl hover:shadow-2xl ${colors.shadow} group`}
            >
              {/* Glass morphism overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colors.badgeGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${colors.topAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
                <DotGridShader />
              </div>

              <CardHeader className="relative z-10">
                <CardTitle className="text-foreground">Problem Statement</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground relative z-10">
                <ul className="space-y-2">
                  {data.problemStatement.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`relative overflow-hidden bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border-neutral-800/50 backdrop-blur-xl ${colors.border} transition-all duration-300 shadow-xl hover:shadow-2xl ${colors.shadow} group`}
            >
              {/* Glass morphism overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colors.badgeGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${colors.topAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
                <DotGridShader />
              </div>

              <CardHeader className="relative z-10">
                <CardTitle className="text-foreground">Solution Impact</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground relative z-10">
                <ul className="space-y-2">
                  {data.solutionImpact.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Features */}
        <section id="features" className="mb-12">
          <h2 className={`text-2xl font-semibold mb-6 flex items-center gap-2 text-foreground`}>
            <div className={`p-1.5 rounded-md bg-gradient-to-br ${colors.iconGradient}`}>
              {(() => {
                const IconComponent = data.sections[1].icon
                return <IconComponent className={`w-6 h-6 ${colors.textAlt}`} />
              })()}
            </div>
            {data.sections[1].title}
          </h2>
          <div className="space-y-6">
            {data.features.map((feature, index) => {
              const FeatureIcon = feature.icon
              return (
                <Card
                  key={index}
                  className={`relative overflow-hidden bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border-neutral-800/50 backdrop-blur-xl ${colors.border} transition-all duration-300 shadow-xl hover:shadow-2xl ${colors.shadow} hover:scale-[1.02] group`}
                >
                  {/* Glass morphism overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.badgeGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${colors.topAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Texture background */}
                  <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
                    <DotGridShader />
                  </div>

                  <CardHeader className="relative z-10">
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <div className={`p-1.5 rounded-md bg-gradient-to-br ${colors.iconGradient} transition-all duration-300 group-hover:scale-110`}>
                        <FeatureIcon className={`w-5 h-5 ${colors.textAlt} transition-colors`} />
                      </div>
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-neutral-500">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground mb-4">{feature.details}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Technical Implementation */}
        {(data.frontendTech || data.backendTech) && (
          <section id="implementation" className="mb-12">
            <h2 className={`text-2xl font-semibold mb-6 flex items-center gap-2 text-foreground`}>
              <div className={`p-1.5 rounded-md bg-gradient-to-br ${colors.iconGradient}`}>
                {(() => {
                  const IconComponent = data.sections[2].icon
                  return <IconComponent className={`w-6 h-6 ${colors.text}`} />
                })()}
              </div>
              {data.sections[2].title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.frontendTech && (
                <Card
                  className={`relative overflow-hidden bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border-neutral-800/50 backdrop-blur-xl ${colors.border} transition-all duration-300 shadow-xl hover:shadow-2xl ${colors.shadow} group`}
                >
                  {/* Glass morphism overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.badgeGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${colors.topAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Texture background */}
                  <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
                    <DotGridShader />
                  </div>

                  <CardHeader className="relative z-10">
                    <CardTitle className="text-foreground">{data.frontendTech.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground space-y-3 relative z-10">
                    {data.frontendTech.items.map((item, index) => (
                      <p key={index} dangerouslySetInnerHTML={{ __html: `• ${item}` }} />
                    ))}
                  </CardContent>
                </Card>
              )}

              {data.backendTech && (
                <Card
                  className={`relative overflow-hidden bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border-neutral-800/50 backdrop-blur-xl ${colors.border} transition-all duration-300 shadow-xl hover:shadow-2xl ${colors.shadow} group`}
                >
                  {/* Glass morphism overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.badgeGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${colors.topAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Texture background */}
                  <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
                    <DotGridShader />
                  </div>

                  <CardHeader className="relative z-10">
                    <CardTitle className="text-foreground">{data.backendTech.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground space-y-3 relative z-10">
                    {data.backendTech.items.map((item, index) => (
                      <p key={index} dangerouslySetInnerHTML={{ __html: `• ${item}` }} />
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </section>
        )}

        {/* Project Gallery */}
        <section id="gallery" className="mb-12">
          <h2 className={`text-2xl font-semibold mb-6 flex items-center gap-2 text-foreground`}>
            <div className={`p-1.5 rounded-md bg-gradient-to-br ${colors.iconGradient}`}>
              {(() => {
                const IconComponent = data.sections[3].icon
                return <IconComponent className={`w-6 h-6 ${colors.textAlt}`} />
              })()}
            </div>
            {data.sections[3].title}
          </h2>
          <InteractiveGallery images={data.galleryImages} accentColor={data.accentColor} />
        </section>

        {/* Impact & Results */}
        <section id="results" className="mb-12">
          <h2 className={`text-2xl font-semibold mb-6 flex items-center gap-2 text-foreground`}>
            <div className={`p-1.5 rounded-md bg-gradient-to-br ${colors.iconGradient}`}>
              {(() => {
                const IconComponent = data.sections[4].icon
                return <IconComponent className={`w-6 h-6 ${colors.text}`} />
              })()}
            </div>
            {data.sections[4].title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.metrics.map((metric, index) => {
              const gradientClass = index % 2 === 0 ? colors.gradient : colors.gradientAlt
              const textClass = index % 2 === 0 ? colors.text : colors.textAlt
              return (
                <Card
                  key={index}
                  className={`relative overflow-hidden bg-gradient-to-br ${gradientClass} backdrop-blur-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group`}
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${colors.topAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Texture background */}
                  <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
                    <DotGridShader />
                  </div>

                  <CardContent className="relative z-10 pt-6">
                    <div className={`text-3xl font-bold ${textClass} mb-2`}>{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          {data.impactSection && (
            <div className="mt-8">
              <Card
                className={`relative overflow-hidden bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border-neutral-800/50 backdrop-blur-xl ${colors.border} transition-all duration-300 shadow-xl hover:shadow-2xl ${colors.shadow} group`}
              >
                {/* Glass morphism overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.badgeGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${colors.topAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Texture background */}
                <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
                  <DotGridShader />
                </div>

                <CardHeader className="relative z-10">
                  <CardTitle className="text-foreground">{data.impactSection.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground relative z-10">
                  <div className="grid md:grid-cols-2 gap-4">
                    {data.impactSection.items.map((item, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-sm text-neutral-500">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </section>

        {/* Technologies Used */}
        <section id="technologies">
          <h2 className={`text-2xl font-semibold mb-6 flex items-center gap-2 text-foreground`}>
            <div className={`p-1.5 rounded-md bg-gradient-to-br ${colors.iconGradient}`}>
              {(() => {
                const IconComponent = data.sections[5].icon
                return <IconComponent className={`w-6 h-6 ${colors.text}`} />
              })()}
            </div>
            {data.sections[5].title}
          </h2>
          <div
            className={`relative overflow-hidden bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-800/50 backdrop-blur-xl rounded-lg p-6 shadow-xl transition-all duration-300 hover:shadow-2xl ${colors.border} ${colors.shadow} group`}
          >
            {/* Glass morphism overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${colors.badgeGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            {/* Top accent line */}
            <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${colors.topAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            {/* Texture background */}
            <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
              <DotGridShader />
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 relative z-10">
              {data.technologies.map((tech, index) => {
                const bgClass = index % 2 === 0 ? colors.bg : colors.bgAlt
                return (
                  <div key={index} className="flex items-center gap-2 group/tech">
                    <div className={`w-2 h-2 ${bgClass} rounded-full transition-all duration-300 group-hover/tech:scale-150 ${colors.shadow}`}></div>
                    <span className="text-muted-foreground group-hover/tech:text-foreground transition-colors duration-200">{tech.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
