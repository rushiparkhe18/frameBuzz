"use client" // Add this at the top of the file

import { Filter } from "lucide-react"
import ProjectsGrid from "@/components/projects-grid"
import { useState } from "react"

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
              Projects
            </h1>
            <p className="text-xl font-light text-muted-foreground max-w-2xl">
              A curated collection of cinematic stories
            </p>
          </div>
          {/* Removed the filter select dropdown */}
        </div>

        <ProjectsGrid />
      </section>
    </main>
  )
}
