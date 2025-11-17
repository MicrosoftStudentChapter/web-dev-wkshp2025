"use client"

import { CaseStudyTemplate } from "@/components/case-study-template"
import { mockTestsCaseStudy } from "@/lib/case-studies/mock-tests-data"

export default function MockTestsCaseStudy() {
  return <CaseStudyTemplate data={mockTestsCaseStudy} />
}
