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
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/19115711/pexels-photo-19115711/free-photo-of-man-waring-black-coat-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=600?auto=compress&cs=tinysrgb&w=600?auto=compress&cs=tinysrgb&w=600")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-4 flex flex-col items-start justify-center h-full text-left text-white"
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
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
        >
         Shutter & Sound Experience
          <br />
          What we do
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
          className="text-lg md:text-xl font-light max-w-2xl mb-8"
        >
We are more than just photographers and videographers; we’re artists passionate about crafting cinematic love stories. As you laugh, cry, dance, and dream, we’ll be there capturing every moment with expert precision and a light-hearted approach. Our goal is to make you feel comfortable, radiant, and truly yourself. With Shutter & Sound, you’re not just getting wedding photos and videos – you’re getting vibrant, emotional keepsakes that echo the joy and love of your unforgettable day. Come, let’s turn your fleeting moments into everlasting memories.        </motion.p>

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
          className="flex flex-col sm:flex-row items-start gap-4"
        >
         
          
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
       
      </motion.div>

     
    </section>
  )
}
