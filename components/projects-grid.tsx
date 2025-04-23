"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Urban Landscapes",
    category: "Documentary",
    description: "A visual exploration of city architecture and urban life",
    thumbnail: "/placeholder.svg?height=600&width=800",
    slug: "urban-landscapes",
  },
  {
    id: 2,
    title: "Wedding Stories",
    category: "Event",
    description: "Capturing the emotion and beauty of wedding celebrations",
    thumbnail: "/placeholder.svg?height=600&width=800",
    slug: "wedding-stories",
  },
  {
    id: 3,
    title: "Mountain Expedition",
    category: "Adventure",
    description: "Following climbers through breathtaking mountain landscapes",
    thumbnail: "/placeholder.svg?height=600&width=800",
    slug: "mountain-expedition",
  },
  {
    id: 4,
    title: "Fashion Week",
    category: "Commercial",
    description: "Behind the scenes at Milan Fashion Week",
    thumbnail: "/placeholder.svg?height=600&width=800",
    slug: "fashion-week",
  },
  {
    id: 5,
    title: "Ocean Life",
    category: "Documentary",
    description: "Exploring the mysteries of marine ecosystems",
    thumbnail: "/placeholder.svg?height=600&width=800",
    slug: "ocean-life",
  },
  {
    id: 6,
    title: "Music Festival",
    category: "Event",
    description: "Capturing the energy and atmosphere of live music events",
    thumbnail: "/placeholder.svg?height=600&width=800",
    slug: "music-festival",
  },
  {
    id: 7,
    title: "Desert Journey",
    category: "Adventure",
    description: "A cinematic journey through vast desert landscapes",
    thumbnail: "/placeholder.svg?height=600&width=800",
    slug: "desert-journey",
  },
  {
    id: 8,
    title: "Product Launch",
    category: "Commercial",
    description: "Showcasing new products through compelling visual storytelling",
    thumbnail: "/placeholder.svg?height=600&width=800",
    slug: "product-launch",
  },
  {
    id: 9,
    title: "Wildlife Conservation",
    category: "Documentary",
    description: "Documenting efforts to protect endangered species",
    thumbnail: "/placeholder.svg?height=600&width=800",
    slug: "wildlife-conservation",
  },
]

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/projects/${project.slug}`} className="block aspect-video relative overflow-hidden">
        <Image
          src={project.thumbnail || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
          >
            <Play className="h-6 w-6 text-white fill-white" />
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="inline-block px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white mb-2">
            {project.category}
          </span>
          <h3 className="text-xl text-white font-light mb-1">{project.title}</h3>
          <p className="text-sm text-white/80">{project.description}</p>
        </div>
      </Link>
    </div>
  )
}
