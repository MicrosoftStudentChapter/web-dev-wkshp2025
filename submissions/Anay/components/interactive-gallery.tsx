"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryImage {
  src: string
  alt: string
  title: string
  description: string
}

interface InteractiveGalleryProps {
  images: GalleryImage[]
  accentColor?: "slate" | "indigo" | "teal" | "violet" | "amber" | "rose"
}

export function InteractiveGallery({ images, accentColor = "slate" }: InteractiveGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const getAccentClasses = () => {
    const colorMap = {
      slate: {
        border: "hover:border-slate-400/35",
        shadow: "hover:shadow-slate-500/10",
        buttonHover: "hover:bg-slate-600/80",
        buttonBorder: "border-slate-500/30",
        counterBorder: "border-slate-500/30",
        dotActive: "bg-slate-400 shadow-slate-500/50",
      },
      indigo: {
        border: "hover:border-indigo-400/35",
        shadow: "hover:shadow-indigo-500/10",
        buttonHover: "hover:bg-indigo-600/80",
        buttonBorder: "border-indigo-500/30",
        counterBorder: "border-indigo-500/30",
        dotActive: "bg-indigo-400 shadow-indigo-500/50",
      },
      teal: {
        border: "hover:border-teal-400/35",
        shadow: "hover:shadow-teal-500/10",
        buttonHover: "hover:bg-teal-600/80",
        buttonBorder: "border-teal-500/30",
        counterBorder: "border-teal-500/30",
        dotActive: "bg-teal-400 shadow-teal-500/50",
      },
      violet: {
        border: "hover:border-violet-400/35",
        shadow: "hover:shadow-violet-500/10",
        buttonHover: "hover:bg-violet-600/80",
        buttonBorder: "border-violet-500/30",
        counterBorder: "border-violet-500/30",
        dotActive: "bg-violet-400 shadow-violet-500/50",
      },
      amber: {
        border: "hover:border-amber-400/35",
        shadow: "hover:shadow-amber-500/10",
        buttonHover: "hover:bg-amber-600/80",
        buttonBorder: "border-amber-500/30",
        counterBorder: "border-amber-500/30",
        dotActive: "bg-amber-400 shadow-amber-500/50",
      },
      rose: {
        border: "hover:border-rose-400/35",
        shadow: "hover:shadow-rose-500/10",
        buttonHover: "hover:bg-rose-600/80",
        buttonBorder: "border-rose-500/30",
        counterBorder: "border-rose-500/30",
        dotActive: "bg-rose-400 shadow-rose-500/50",
      },
    }
    return colorMap[accentColor]
  }

  const colors = getAccentClasses()

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  if (!images || images.length === 0) {
    return null
  }

  const currentImage = images[currentIndex]

  return (
    <div className="relative w-full">
      {/* Main Image Container */}
      <div className={`relative w-full h-[500px] bg-gradient-to-br from-neutral-950 to-neutral-900 border border-neutral-800 ${colors.border} ${colors.shadow} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl`}>
        <img
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.alt}
          className="w-full h-full object-contain"
        />

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <Button
              onClick={goToPrevious}
              className={`absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 ${colors.buttonHover} hover:scale-110 text-white shadow-lg backdrop-blur-sm transition-all duration-200 ease-in-out w-12 h-12`}
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={goToNext}
              className={`absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 ${colors.buttonHover} hover:scale-110 text-white shadow-lg backdrop-blur-sm transition-all duration-200 ease-in-out w-12 h-12`}
            >
              <ArrowRight className="w-6 h-6" />
            </Button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className={`absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm`}>
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Image Details */}
      <div className={`mt-4 p-4 bg-gradient-to-br from-neutral-950 to-neutral-900 border border-neutral-800 ${colors.border} rounded-lg transition-all duration-300`}>
        <h3 className="text-lg font-semibold text-foreground mb-2">{currentImage.title}</h3>
        <p className="text-muted-foreground text-sm">{currentImage.description}</p>
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? `${colors.dotActive} shadow-lg` : "bg-neutral-600 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
