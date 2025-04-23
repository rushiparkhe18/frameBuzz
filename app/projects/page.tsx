import { Filter } from "lucide-react"
import ProjectsGrid from "@/components/projects-grid"

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">Projects</h1>
            <p className="text-xl font-light text-muted-foreground max-w-2xl">
              A curated collection of cinematic stories
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            <select className="bg-transparent border-b border-border py-2 pr-8 focus:outline-none">
              <option value="all">All Projects</option>
              <option value="commercial">Commercial</option>
              <option value="documentary">Documentary</option>
              <option value="wedding">Wedding</option>
              <option value="music">Music Video</option>
            </select>
          </div>
        </div>
        <ProjectsGrid />
      </section>
    </main>
  )
}
