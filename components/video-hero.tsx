"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Play } from "lucide-react"
import Link from "next/link"

export default function VideoHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showReel, setShowReel] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      <motion.div style={{ opacity, scale }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onCanPlay={() => setIsLoaded(true)}
        >
          <source src="/placeholder.svg" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative flex flex-col items-center justify-center h-full text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            y: isLoaded ? 0 : 20,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-3xl md:text-5xl lg:text-7xl font-light text-white tracking-tight mb-6"
        >
          Capturing Life.
          <br />
          One Frame at a Time.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            y: isLoaded ? 0 : 20,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-lg md:text-xl font-light text-white/80 max-w-2xl mb-8"
        >
          Professional videography and visual storytelling that transforms moments into cinematic experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            y: isLoaded ? 0 : 20,
          }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowReel(true)}
            className="px-6 py-3 bg-white text-black rounded-full font-light flex items-center gap-2 hover:bg-white/90 transition-colors"
          >
            <Play className="h-4 w-4" />
            Watch Showreel
          </motion.button>
          <Link
            href="/projects"
            className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-light hover:bg-white/20 transition-colors"
          >
            View Projects
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToContent}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.button>
      </motion.div>

      {showReel && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Showreel"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowReel(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
