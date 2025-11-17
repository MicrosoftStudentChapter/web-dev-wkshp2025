"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type TypewriterHeadingProps = {
  className?: string
  lines: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseDuration?: number
}

export default function TypewriterHeading({
  className,
  lines,
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: TypewriterHeadingProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (lines.length === 0) return

    const currentLine = lines[currentLineIndex]

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentLineIndex((prev) => (prev + 1) % lines.length)
          }
        } else {
          if (currentText.length < currentLine.length) {
            setCurrentText(currentLine.slice(0, currentText.length + 1))
          } else {
            setIsPaused(true)
          }
        }
      },
      isPaused ? pauseDuration : isDeleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentLineIndex, isDeleting, isPaused, lines, typeSpeed, deleteSpeed, pauseDuration])

  return (
    <h1 className={cn("relative", className)}>
      <span className="inline-block">
        {currentText}
        <span className="animate-pulse ml-1 text-purple-400">|</span>
      </span>
    </h1>
  )
}
