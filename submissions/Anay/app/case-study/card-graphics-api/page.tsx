"use client"

import { CaseStudyTemplate } from "@/components/case-study-template"
import { cardGraphicsAPICaseStudy } from "@/lib/case-studies/card-graphics-api-data"

export default function CardGraphicsAPICase() {
  return <CaseStudyTemplate data={cardGraphicsAPICaseStudy} />
}
