"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight, X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Urban Landscapes",
    category: "Documentary",
    description: "A visual exploration of city architecture and urban life",
    thumbnail: "https://imgs.search.brave.com/o0MswaFDvoBNcfH2laKC122Lib4TcK9-ghVJchxlQ14/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ5Lzdk/L2UyLzQ5N2RlMjAz/NWE4Mzg3MTJlNWIy/MTlkOGNlYzg1MTEw/LmpwZw?height=600&width=800",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // EMBED link (important)
  },
  {
    id: 2,
    title: "Wedding Stories",
    category: "Event",
    description: "Capturing the emotion and beauty of wedding celebrations",
    thumbnail: "https://imgs.search.brave.com/5KRKX3L7AfOV3LajuSoYf6yu6DS7OdsoBSIMae-YwLc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93ZXZh/cGhvdG9ncmFwaHku/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA2L0JyZWF0/aHRha2luZy1CbGFj/ay1hbmQtV2hpdGUt/V2VkZGluZy1QaG90/b3MuanBn?height=600&width=800",
    url: "https://www.example.com", // Non-YouTube, will fallback
  },
  {
    id: 3,
    title: "Mountain Expedition",
    category: "Adventure",
    description: "Following climbers through breathtaking mountain landscapes",
    thumbnail: "https://imgs.search.brave.com/0KMIFpznMiXbNLr3-SxgE9shZtobjl26G3g0oG_J5G0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzIwLzQ3Lzg4/LzM2MF9GXzIyMDQ3/ODg5OF9rTWRkVFpq/OVF2eHNldVZpcXhl/TmNTSlI4QjBuOW1t/ay5qcGc?height=600&width=800",
    url: "https://www.youtube.com/embed/J---aiyznGQ", // EMBED link (important)
  },
]

export default function FeaturedProjects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-24 relative">
      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-6 right-0 text-white p-2 rounded-full hover:bg-white/20"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              src={activeVideo}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      )}

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl text-lg font-light">
            A selection of cinematic stories captured through my framebuzzmedia
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} variants={itemVariants} onOpenVideo={setActiveVideo} />
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center mt-12"
        >
          <motion.div variants={itemVariants}>
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-sm font-light hover:text-foreground/70 transition-colors"
            >
              View all projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  variants,
  onOpenVideo,
}: {
  project: (typeof projects)[0]
  variants: any
  onOpenVideo: (url: string) => void
}) {
  const isYouTube = project.url.includes("youtube.com/embed")

  return (
    <motion.div variants={variants} className="group relative overflow-hidden rounded-lg">
      {isYouTube ? (
        <button
          onClick={() => onOpenVideo(project.url)}
          className="block aspect-[4/3] relative overflow-hidden w-full"
        >
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="inline-block px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white mb-2">
              {project.category}
            </span>
            <h3 className="text-xl text-white font-light mb-1">{project.title}</h3>
            <p className="text-sm text-white/80">{project.description}</p>
          </div>
        </button>
      ) : (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block aspect-[4/3] relative overflow-hidden"
        >
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="inline-block px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white mb-2">
              {project.category}
            </span>
            <h3 className="text-xl text-white font-light mb-1">{project.title}</h3>
            <p className="text-sm text-white/80">{project.description}</p>
          </div>
        </a>
      )}
    </motion.div>
  )
}
