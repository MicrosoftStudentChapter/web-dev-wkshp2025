"use client"

import { useEffect, useState } from "react"

type Props = {
  timeZone?: string
  className?: string
}

export default function LiveClock({ timeZone = "UTC", className = "" }: Props) {
  const [now, setNow] = useState<string | null>(null)

  useEffect(() => {
    const format = () =>
      new Date().toLocaleString("en-US", {
        timeZone,
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZoneName: "short",
      })

    setNow(format())
    const id = setInterval(() => setNow(format()), 1000)
    return () => clearInterval(id)
  }, [timeZone])

  if (!now) return null // nothing until mounted

  return <div className={className}>{now}</div>
}
