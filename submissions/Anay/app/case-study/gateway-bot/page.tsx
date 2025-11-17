"use client"

import { CaseStudyTemplate } from "@/components/case-study-template"
import { gatewayBotCaseStudy } from "@/lib/case-studies/gateway-bot-data"

export default function GatewayBotCaseStudy() {
  return <CaseStudyTemplate data={gatewayBotCaseStudy} />
}
