"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

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
]

export default function FeaturedProjects() {
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
    <section ref={ref} className="py-24">
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
            A selection of cinematic stories captured through my frameBuzz
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} variants={itemVariants} />
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
}: {
  project: (typeof projects)[0]
  variants: any
}) {
  return (
    <motion.div variants={variants} className="group relative overflow-hidden rounded-lg">
      <Link href={`/projects/${project.slug}`} className="block aspect-[4/3] relative overflow-hidden">
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
      </Link>
    </motion.div>
  )
}
