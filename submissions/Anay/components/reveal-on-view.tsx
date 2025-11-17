"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import type { CSSProperties } from "react"
import { animate, inView, stagger } from "motion"

type RevealOnViewProps = {
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  children: React.ReactNode
  delay?: number
  style?: CSSProperties
  intensity?: "soft" | "hero"
  staggerChildren?: boolean
}

export default function RevealOnView({
  as = "div",
  className,
  children,
  delay = 0,
  style,
  intensity = "soft",
  staggerChildren = false,
}: RevealOnViewProps) {
  const Tag = as as any
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const targets = staggerChildren
      ? Array.from(element.children) as HTMLElement[]
      : [element]

    const startTranslate = intensity === "hero" ? 28 : 18
    const startBlur = intensity === "hero" ? 16 : 10
    const startScale = intensity === "hero" ? 0.965 : 0.98

    // Initial hidden state
    targets.forEach((t) => {
      t.style.opacity = "0"
      t.style.transform = `translateY(${startTranslate}px) scale(${startScale})`
      t.style.filter = `blur(${startBlur}px)`
    })

    // If always visible (like sticky sidebar), animate immediately
    const alwaysVisible = element.getBoundingClientRect().top < window.innerHeight
    const animateTargets = () => {
      targets.forEach((t, i) => {
        animate(
          t as any,
          {
            opacity: [0, 1],
            transform: [`translateY(${startTranslate}px) scale(${startScale})`, "translateY(0) scale(1)"],
            filter: [`blur(${startBlur}px)`, "blur(0px)"],
          },
          {
            duration: 0.95,
            delay: delay + (staggerChildren ? i * 0.12 : 0),
          }
        )
      })
    }

    if (alwaysVisible) {
      animateTargets()
    } else {
      const cleanup = inView(element, animateTargets)
      return () => cleanup()
    }
  }, [delay, intensity, staggerChildren])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: `translateY(${intensity === "hero" ? 28 : 18}px) scale(${intensity === "hero" ? 0.965 : 0.98})`,
        filter: `blur(${intensity === "hero" ? 16 : 10}px)`,
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}
