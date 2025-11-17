# Case Study Template Guide

This directory contains data files for case studies that use the reusable `CaseStudyTemplate` component.

## Creating a New Case Study

### Step 1: Create a Data File

Create a new file in this directory: `your-project-data.ts`

```typescript
import { Code, Zap, BarChart3, BookOpen, ImageIcon, Users } from "lucide-react"
import { CaseStudyData } from "@/components/case-study-template"
import { projectGalleries } from "@/lib/portfolio-data"

export const yourProjectCaseStudy: CaseStudyData = {
  // Metadata
  projectId: "your-project",
  title: "Your Project Title",
  subtitle: "Short subtitle",
  description: "Full description of your project...",

  // Theme - Choose one: "blue", "purple", "green", "orange", "pink", "cyan"
  accentColor: "purple",

  // Header tags
  tags: ["React", "Node.js", "MongoDB"],

  // Links
  links: [
    {
      label: "View Code",
      url: "https://github.com/username/repo",
      icon: "github",
    },
    {
      label: "Live Demo",
      url: "https://demo.com",
      icon: "external",
    },
  ],

  // Navigation sections
  sections: [
    { id: "overview", title: "Project Overview", icon: Code },
    { id: "features", title: "Core Features", icon: BookOpen },
    { id: "implementation", title: "Technical Implementation", icon: Zap },
    { id: "gallery", title: "Project Gallery", icon: ImageIcon },
    { id: "results", title: "Impact & Results", icon: BarChart3 },
    { id: "technologies", title: "Technologies Used", icon: Code },
  ],

  // Overview section
  problemStatement: [
    "Problem point 1",
    "Problem point 2",
    "Problem point 3",
  ],

  solutionImpact: [
    "Impact point 1",
    "Impact point 2",
    "Impact point 3",
  ],

  // Features
  features: [
    {
      icon: Users,
      title: "Feature Name",
      description: "Short description",
      details: "Longer detailed explanation...",
    },
  ],

  // Technical implementation (optional)
  frontendTech: {
    title: "Frontend Architecture",
    items: [
      "<strong>React:</strong> Component-based UI",
      "<strong>TypeScript:</strong> Type safety",
    ],
  },

  backendTech: {
    title: "Backend Systems",
    items: [
      "<strong>Node.js:</strong> Server runtime",
      "<strong>MongoDB:</strong> Database",
    ],
  },

  // Gallery (make sure to add images to projectGalleries in portfolio-data.ts)
  galleryImages: projectGalleries.yourProject,

  // Results metrics
  metrics: [
    {
      value: "100K+",
      label: "Users",
    },
    {
      value: "99.9%",
      label: "Uptime",
    },
    {
      value: "50ms",
      label: "Response Time",
    },
  ],

  // Impact section (optional)
  impactSection: {
    title: "Impact Title",
    items: [
      {
        title: "Impact Area 1",
        description: "Description of impact...",
      },
      {
        title: "Impact Area 2",
        description: "Description of impact...",
      },
    ],
  },

  // Technologies list
  technologies: [
    { name: "React" },
    { name: "Node.js" },
    { name: "MongoDB" },
    { name: "TypeScript" },
  ],
}
```

### Step 2: Create the Page

Create: `app/case-study/your-project/page.tsx`

```typescript
"use client"

import { CaseStudyTemplate } from "@/components/case-study-template"
import { yourProjectCaseStudy } from "@/lib/case-studies/your-project-data"

export default function YourProjectCaseStudy() {
  return <CaseStudyTemplate data={yourProjectCaseStudy} />
}
```

### Step 3: Add Gallery Images

In `lib/portfolio-data.ts`, add your gallery images:

```typescript
export const projectGalleries = {
  // ... existing galleries
  yourProject: [
    {
      src: "/images/your-project/screenshot1.png",
      alt: "Screenshot description",
      title: "Feature Name",
      description: "What this screenshot shows...",
    },
  ],
}
```

## Available Accent Colors

Each accent color automatically provides a consistent theme throughout the case study:

- **blue**: Blue → Cyan gradient (professional, tech-focused)
- **purple**: Purple → Pink gradient (creative, modern)
- **green**: Green → Emerald gradient (eco, growth)
- **orange**: Orange → Amber gradient (energetic, warm)
- **pink**: Pink → Rose gradient (friendly, approachable)
- **cyan**: Cyan → Blue gradient (fresh, innovative)

## Features Included

The template automatically handles:
- ✅ Dynamic color theming
- ✅ Responsive sidebar navigation
- ✅ Interactive gallery with theme matching
- ✅ Hover effects and transitions
- ✅ Problem/Solution cards
- ✅ Feature cards with icons
- ✅ Technical implementation sections
- ✅ Metrics with gradient backgrounds
- ✅ Technology list with colored bullets
- ✅ Consistent styling across all sections

## HTML Support

The `frontendTech` and `backendTech` items support HTML for formatting:
- Use `<strong>` for bold text
- Automatically renders with `dangerouslySetInnerHTML`

Example:
```typescript
"<strong>React:</strong> Component-based UI framework"
```
