"use client"

import { CaseStudyTemplate } from "@/components/case-study-template"
import { boostBotAPICaseStudy } from "@/lib/case-studies/boost-bot-api-data"

export default function WebAppLicenseManagementCaseStudy() {
  return <CaseStudyTemplate data={boostBotAPICaseStudy} />
}
