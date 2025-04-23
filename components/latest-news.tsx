"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Art of Visual Storytelling",
    excerpt: "Exploring how cinematography can evoke emotion and create lasting impressions.",
    date: "April 15, 2023",
    image: "/placeholder.svg?height=400&width=600",
    slug: "art-of-visual-storytelling",
  },
  {
    id: 2,
    title: "Behind the Scenes: Mountain Documentary",
    excerpt: "A look at the challenges and triumphs of filming in extreme conditions.",
    date: "March 22, 2023",
    image: "/placeholder.svg?height=400&width=600",
    slug: "behind-the-scenes-mountain-documentary",
  },
  {
    id: 3,
    title: "Essential Gear for Cinematic Videography",
    excerpt: "A guide to the equipment that can elevate your video production.",
    date: "February 10, 2023",
    image: "/placeholder.svg?height=400&width=600",
    slug: "essential-gear-cinematic-videography",
  },
]

export default function LatestNews() {
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
            Latest News
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl text-lg font-light">
            Insights, behind-the-scenes, and industry knowledge
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                  <h3 className="text-xl font-light group-hover:text-foreground/80 transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </div>
              </Link>
            </motion.div>
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
              href="/blog"
              className="group flex items-center gap-2 text-sm font-light hover:text-foreground/70 transition-colors"
            >
              View all articles
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
