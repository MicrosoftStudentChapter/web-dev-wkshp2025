import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import RevealOnView from "@/components/reveal-on-view"

type Props = {
  title?: string
  subtitle?: string
  imageSrc?: string
  tags?: string[]
  href?: string
  priority?: boolean
  gradientFrom?: string
  gradientTo?: string
  imageContainerClassName?: string
  containerClassName?: string
  revealDelay?: number
}

// Server Component (no client hooks)
export default function ProjectCard({
  title = "Project title",
  subtitle = "Project subtitle",
  imageSrc = "/placeholder.svg?height=720&width=1280",
  tags = ["Design", "Web"],
  href = "#",
  priority = false,
  gradientFrom = "#0f172a",
  gradientTo = "#6d28d9",
  imageContainerClassName,
  containerClassName,
  revealDelay = 0,
}: Props) {
  return (
    <article className={cn("group relative", containerClassName)}>
      <RevealOnView
        delay={revealDelay}
        className="rounded-2xl border border-neutral-900 shadow-xl lg:h-full hover:border-neutral-800 transition-all duration-300 bg-neutral-950"
      >
        <div className="relative overflow-hidden rounded-[1.35rem] bg-black lg:h-full flex flex-col">
          <div className="backdrop-blur-xl p-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="bg-neutral-800 text-neutral-300 border-neutral-700 hover:bg-neutral-700 transition-colors cursor-default duration-200"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={cn(
              "relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:flex-1",
              imageContainerClassName,
            )}
          >
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              priority={priority}
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 lg:from-black/40" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 lg:to-black/30" />
          </div>

          {/* Mobile layout remains unchanged */}
          <div className="lg:hidden bg-neutral-950 border-t border-neutral-900 p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold sm:text-xl text-foreground leading-tight">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{subtitle}</p>
              </div>
              <Link
                href={href}
                className="inline-flex items-center gap-2 rounded-lg bg-neutral-800 px-4 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-neutral-700 self-start sm:self-auto border border-neutral-700 group/link text-foreground"
                aria-label={`Open case study: ${title}`}
              >
                Case study
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Desktop layout remains unchanged */}
          <div className="hidden lg:block bg-neutral-950 border-t border-neutral-900 p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
              </div>
              <Link
                href={href}
                className="inline-flex items-center gap-2 rounded-lg bg-neutral-800 px-6 py-3 text-sm font-medium transition-colors duration-200 hover:bg-neutral-700 border border-neutral-700 group/link text-foreground"
                aria-label={`Open case study: ${title}`}
              >
                Case study
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </RevealOnView>
    </article>
  )
}
