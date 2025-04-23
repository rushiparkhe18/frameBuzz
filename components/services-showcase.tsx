"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Film, Camera, Edit, Award, Presentation, Video } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: <Film className="h-8 w-8" />,
    title: "Commercial Production",
    description: "High-quality video content for brands and businesses that drives engagement and conversions.",
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Event Videography",
    description: "Capturing the essence and emotion of weddings, conferences, and special occasions.",
  },
  {
    icon: <Edit className="h-8 w-8" />,
    title: "Post-Production",
    description: "Professional editing, color grading, and visual effects to elevate your footage.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Documentary Filmmaking",
    description: "Telling compelling stories that educate, inspire, and create impact.",
  },
  {
    icon: <Presentation className="h-8 w-8" />,
    title: "Corporate Training",
    description: "Educational and training videos that communicate complex ideas clearly.",
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: "Aerial Cinematography",
    description: "Breathtaking drone footage that adds a new dimension to your visual story.",
  },
]

export default function ServicesShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
            Services
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl text-lg font-light">
            Professional video production services tailored to your vision
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow group"
            >
              <div className="mb-6 text-foreground">{service.icon}</div>
              <h3 className="text-xl font-light mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Link
                href="/contact"
                className="text-sm font-light inline-flex items-center border-b border-transparent group-hover:border-foreground transition-colors"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
