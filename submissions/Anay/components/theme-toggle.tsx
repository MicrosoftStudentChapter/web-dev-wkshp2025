"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="group relative h-12 w-12 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 shadow-lg backdrop-blur-sm transition-all duration-300"
        disabled
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 to-transparent opacity-50" />
        <Sun className="absolute inset-0 m-auto h-5 w-5 text-neutral-700" />
      </button>
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative h-12 w-12 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-lg hover:shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Glass morphism effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 dark:to-transparent opacity-50" />

      {/* Sun icon for light mode */}
      <Sun className={`absolute inset-0 m-auto h-5 w-5 transition-all duration-500 ${
        isDark
          ? "rotate-90 scale-0 opacity-0"
          : "rotate-0 scale-100 opacity-100"
      } text-amber-500 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]`} />

      {/* Moon icon for dark mode */}
      <Moon className={`absolute inset-0 m-auto h-5 w-5 transition-all duration-500 ${
        isDark
          ? "rotate-0 scale-100 opacity-100"
          : "-rotate-90 scale-0 opacity-0"
      } text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]`} />

      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
