"use client"

import { CaseStudyTemplate } from "@/components/case-study-template"
import { eduguideCaseStudy } from "@/lib/case-studies/eduguide-data"

export default function EduGuideCaseStudy() {
  return <CaseStudyTemplate data={eduguideCaseStudy} />
}
