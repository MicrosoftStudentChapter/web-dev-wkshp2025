"use client"

import { Github, Star, GitFork, Users, TrendingUp, Calendar, Code2, Award, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"
import RevealOnView from "@/components/reveal-on-view"
import { personalInfo } from "@/lib/portfolio-data"
import { useEffect, useState } from "react"

interface GitHubStats {
  stars: number
  repos: number
  followers: number
  contributions: number
}

export default function GitHubStatsPage() {
  const githubUsername = "Anay0305" // Extract from personalInfo.socialLinks.github
  const [stats, setStats] = useState<GitHubStats>({
    stars: 0,
    repos: 0,
    followers: 0,
    contributions: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${githubUsername}`)
        const userData = await userResponse.json()

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100`)
        const reposData = await reposResponse.json()

        // Calculate total stars
        const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0)

        // Get contribution count from GitHub API (this year)
        const currentYear = new Date().getFullYear()
        const contributionsResponse = await fetch(`https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=${currentYear}`)
        const contributionsData = await contributionsResponse.json()
        const totalContributions = contributionsData.total[currentYear] || 0

        setStats({
          stars: totalStars,
          repos: userData.public_repos,
          followers: userData.followers,
          contributions: totalContributions
        })
      } catch (error) {
        console.error("Error fetching GitHub stats:", error)
        // Set fallback values if API fails
        setStats({
          stars: 150,
          repos: 30,
          followers: 50,
          contributions: 500
        })
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [githubUsername])

  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden relative">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6 sm:py-8 max-w-7xl">
        {/* Enhanced navigation buttons */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <Button
            asChild
            variant="ghost"
            className="text-muted-foreground hover:text-foreground hover:bg-neutral-800/60 bg-neutral-900/60 backdrop-blur-sm rounded-lg transition-all duration-300 px-3 py-2 sm:px-4 sm:py-5 border border-neutral-800/50 hover:border-neutral-700/70 hover:shadow-lg hover:shadow-blue-500/10 group"
          >
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
              <ArrowLeft className="h-5 w-5 sm:h-4 sm:w-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="text-sm sm:text-base">Back<span className="hidden sm:inline"> to Home</span></span>
            </Link>
          </Button>

          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 p-2 sm:px-4 sm:py-5"
          >
            <Link href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2">
              <Github className="h-5 w-5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline text-sm sm:text-base">Visit Profile</span>
            </Link>
          </Button>
        </div>

        {/* Header */}
        <RevealOnView intensity="hero" className="mb-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                <Github className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent">
              GitHub Stats
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my coding activity, contributions, and repository statistics
            </p>
          </div>
        </RevealOnView>

        {/* Main Stats Cards - Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <RevealOnView intensity="card" delay={0.1}>
            <div className="rounded-xl border border-neutral-800/50 bg-neutral-950/90 backdrop-blur-xl p-6 hover:border-neutral-700/70 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <Star className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    {loading ? (
                      <span className="animate-pulse">...</span>
                    ) : (
                      <span>{stats.stars.toLocaleString()}</span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Stars</div>
                </div>
              </div>
            </div>
          </RevealOnView>

          <RevealOnView intensity="card" delay={0.2}>
            <div className="rounded-xl border border-neutral-800/50 bg-neutral-950/90 backdrop-blur-xl p-6 hover:border-neutral-700/70 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Code2 className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    {loading ? (
                      <span className="animate-pulse">...</span>
                    ) : (
                      <span>{stats.repos.toLocaleString()}</span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">Repositories</div>
                </div>
              </div>
            </div>
          </RevealOnView>

          <RevealOnView intensity="card" delay={0.3}>
            <div className="rounded-xl border border-neutral-800/50 bg-neutral-950/90 backdrop-blur-xl p-6 hover:border-neutral-700/70 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <Users className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    {loading ? (
                      <span className="animate-pulse">...</span>
                    ) : (
                      <span>{stats.followers.toLocaleString()}</span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
              </div>
            </div>
          </RevealOnView>

          <RevealOnView intensity="card" delay={0.4}>
            <div className="rounded-xl border border-neutral-800/50 bg-neutral-950/90 backdrop-blur-xl p-6 hover:border-neutral-700/70 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <GitFork className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    {loading ? (
                      <span className="animate-pulse">...</span>
                    ) : (
                      <span>{stats.contributions.toLocaleString()}</span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">Contributions</div>
                </div>
              </div>
            </div>
          </RevealOnView>
        </div>

        {/* GitHub Stats Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <RevealOnView intensity="card" delay={0.5} className="h-full">
            <div className="relative overflow-hidden rounded-xl border border-neutral-800/50 bg-neutral-950/90 backdrop-blur-xl p-6 hover:border-neutral-700/70 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 group h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

              <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
                <DotGridShader />
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-400" />
                  GitHub Activity Stats
                </h2>
                <div className="flex-1 flex items-center">
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=3b82f6&icon_color=8b5cf6&text_color=ededed&hide=stars,prs&show=reviews,prs_merged,prs_merged_percentage`}
                    alt="GitHub Stats"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </RevealOnView>

          <RevealOnView intensity="card" delay={0.6} className="h-full">
            <div className="relative overflow-hidden rounded-xl border border-neutral-800/50 bg-neutral-950/90 backdrop-blur-xl p-6 hover:border-neutral-700/70 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500 group h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

              <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
                <DotGridShader />
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-purple-400" />
                  Top Languages
                </h2>
                <div className="flex-1 flex items-center">
                  <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=8b5cf6&text_color=ededed`}
                    alt="Top Languages"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </RevealOnView>
        </div>

        {/* GitHub Streak Stats */}
        <RevealOnView intensity="card" delay={0.7} className="mb-8">
          <div className="relative overflow-hidden rounded-xl border border-neutral-800/50 bg-neutral-950/90 backdrop-blur-xl p-8 hover:border-neutral-700/70 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />

            <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
              <DotGridShader />
            </div>

            <div className="relative z-10">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-orange-400" />
                Contribution Streak
              </h2>
              <div className="flex justify-center">
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=radical&hide_border=true&background=0a0a0a&ring=3b82f6&fire=f59e0b&currStreakLabel=ededed&sideNums=ededed&currStreakNum=ededed&sideLabels=a1a1a1`}
                  alt="GitHub Streak"
                  className="w-full max-w-2xl rounded-lg"
                />
              </div>
            </div>
          </div>
        </RevealOnView>

        {/* Contribution Graph */}
        <RevealOnView intensity="card" delay={0.8} className="mb-8">
          <div className="relative overflow-hidden rounded-xl border border-neutral-800/50 bg-neutral-950/90 backdrop-blur-xl p-8 hover:border-neutral-700/70 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-400/50 to-transparent" />

            <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
              <DotGridShader />
            </div>

            <div className="relative z-10">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-400" />
                Contribution Activity
              </h2>
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=react-dark&hide_border=true&bg_color=0a0a0a&color=ededed&line=3b82f6&point=8b5cf6&area=true&area_color=3b82f6`}
                alt="Contribution Graph"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </RevealOnView>

        {/* Trophy Section */}
        <RevealOnView intensity="card" delay={0.9} className="mb-8">
          <div className="relative overflow-hidden rounded-xl border border-neutral-800/50 bg-neutral-950/90 backdrop-blur-xl p-8 hover:border-neutral-700/70 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

            <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
              <DotGridShader />
            </div>

            <div className="relative z-10">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-yellow-400" />
                GitHub Trophies
              </h2>
              <div className="flex justify-center">
                <img
                  src={`https://github-profile-trophy.vercel.app/?username=${githubUsername}&theme=radical&no-frame=true&no-bg=true&row=1&column=5`}
                  alt="GitHub Trophies"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </RevealOnView>
      </div>
    </main>
  )
}
