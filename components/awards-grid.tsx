"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const awards = [
  {
    id: 1,
    name: "International Film Festival",
    year: "2016",
    category: "Best Documentary",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Visual Arts Association",
    year: "2018",
    category: "Excellence in Cinematography",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "National Film Awards",
    year: "2019",
    category: "Best Short Film",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Creative Media Awards",
    year: "2021",
    category: "Best Commercial",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Storytellers Guild",
    year: "2022",
    category: "Visual Storytelling",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "Digital Content Awards",
    year: "2023",
    category: "Best Series",
    logo: "/placeholder.svg?height=100&width=100",
  },
]

export default function AwardsGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {awards.map((award, index) => (
        <motion.div
          key={award.id}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-background p-6 rounded-lg border border-border hover:shadow-md transition-shadow group"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 overflow-hidden">
              <Image
                src={award.logo || "/placeholder.svg"}
                alt={award.name}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <h4 className="text-lg font-light">{award.name}</h4>
              <p className="text-sm text-muted-foreground">{award.year}</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm">{award.category}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
