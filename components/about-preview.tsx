"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function AboutPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md mx-auto lg:max-w-none"
          >
            {/* Reduced height for video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover rounded-lg w-full h-[400px] lg:h-[650px]"
            >
              <source
                src="https://videos.pexels.com/video-files/2003070/2003070-sd_640_360_24fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-light tracking-tight">The Visual Storyteller</h2>
            <p className="text-muted-foreground">
              With over a decade of experience in visual storytelling, I've dedicated my career to capturing moments
              that evoke emotion and create lasting impressions. My journey began with a simple camera and a passion for
              finding beauty in everyday life.
            </p>
            <blockquote className="border-l-2 pl-6 italic my-8">
              "It's not about capturing images, it's about capturing emotion."
            </blockquote>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-sm font-light hover:text-foreground/70 transition-colors"
            >
              Learn more about me
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
