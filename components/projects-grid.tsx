"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play, X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Urban Landscapes",
    category: "Documentary",
    description: "A visual exploration of city architecture and urban life",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Wedding Stories",
    category: "Event",
    description: "Capturing the emotion and beauty of wedding celebrations",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    id: 3,
    title: "Mountain Expedition",
    category: "Adventure",
    description: "Following climbers through breathtaking mountain landscapes",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
  },
  {
    id: 4,
    title: "Fashion Week",
    category: "Commercial",
    description: "Behind the scenes at Milan Fashion Week",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_4",
  },
  {
    id: 5,
    title: "Ocean Life",
    category: "Documentary",
    description: "Exploring the mysteries of marine ecosystems",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_5",
  },
  {
    id: 6,
    title: "Music Festival",
    category: "Event",
    description: "Capturing the energy and atmosphere of live music events",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_6",
  },
  {
    id: 7,
    title: "Desert Journey",
    category: "Adventure",
    description: "A cinematic journey through vast desert landscapes",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_7",
  },
  {
    id: 8,
    title: "Product Launch",
    category: "Commercial",
    description: "Showcasing new products through compelling visual storytelling",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_8",
  },
  {
    id: 9,
    title: "Wildlife Conservation",
    category: "Documentary",
    description: "Documenting efforts to protect endangered species",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_9",
  },
]

export default function ProjectsGrid() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <div className="relative">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              project={project}
              onOpenVideo={setActiveVideo}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  onOpenVideo,
}: {
  project: (typeof projects)[0]
  onOpenVideo: (url: string) => void
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        onClick={() => onOpenVideo(project.videoUrl)}
        className="block aspect-video relative overflow-hidden cursor-pointer"
      >
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
      </div>
    </div>
  )
}
