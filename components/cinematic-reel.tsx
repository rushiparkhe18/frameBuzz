"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play } from "lucide-react"

export default function CinematicReel() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <section ref={sectionRef} className="py-24 bg-black text-white relative overflow-hidden">
      <motion.div style={{ scale, opacity }} className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Cinematic Reel</h2>
          <p className="text-white/70 max-w-2xl text-lg font-light">
            A showcase of my finest work and visual storytelling
          </p>
        </div>

        <div className="relative aspect-video max-w-5xl mx-auto overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          <video
            poster="/placeholder.svg?height=720&width=1280"
            className="w-full h-full object-cover"
            controls={false}
          >
            <source src="/placeholder.svg" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
            >
              <Play className="h-8 w-8 text-white fill-white" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
