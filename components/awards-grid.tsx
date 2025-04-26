"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

// Sample team members with LinkedIn URLs
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Creative Director",
    bio: "John is an experienced creative director, passionate about storytelling through visual arts.",
    photo: "/placeholder.svg?height=100&width=100", // Replace with actual image URLs
    linkedin: "https://www.linkedin.com/in/johndoe", // LinkedIn URL
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Cinematographer",
    bio: "Jane has a keen eye for cinematography, capturing stunning visuals in every shot.",
    photo: "/placeholder.svg?height=100&width=100", // Replace with actual image URLs
    linkedin: "https://www.linkedin.com/in/janesmith", // LinkedIn URL
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Editor",
    bio: "Michael is an expert editor, bringing stories to life with his exceptional editing skills.",
    photo: "/placeholder.svg?height=100&width=100", // Replace with actual image URLs
    linkedin: "https://www.linkedin.com/in/michaelbrown", // LinkedIn URL
  },
  {
    id: 4,
    name: "Sarah Lee",
    role: "Producer",
    bio: "Sarah is an organized and efficient producer who ensures every project runs smoothly.",
    photo: "/placeholder.svg?height=100&width=100", // Replace with actual image URLs
    linkedin: "https://www.linkedin.com/in/sarahlee", // LinkedIn URL
  },
  {
    id: 5,
    name: "David Kim",
    role: "Sound Engineer",
    bio: "David is a sound engineer who creates immersive audio experiences for film and media.",
    photo: "/placeholder.svg?height=100&width=100", // Replace with actual image URLs
    linkedin: "https://www.linkedin.com/in/davidkim", // LinkedIn URL
  },
  {
    id: 6,
    name: "Emily White",
    role: "Art Director",
    bio: "Emily brings visual concepts to life with her strong design and artistic direction skills.",
    photo: "/placeholder.svg?height=100&width=100", // Replace with actual image URLs
    linkedin: "https://www.linkedin.com/in/emilywhite", // LinkedIn URL
  },
]

export default function TeamGrid() {
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
    {teamMembers.map((member, index) => (
      <motion.div
        key={member.id}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-background p-6 rounded-lg border border-border hover:shadow-lg hover:scale-105 transition-all duration-300 group"
      >
        <a
          href={member.linkedin} // LinkedIn profile link
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practice
          className="flex items-center gap-4"
        >
          <div className="relative w-16 h-16 overflow-hidden rounded-full">
            <Image
              src={member.photo || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div>
            <h4 className="text-lg font-light">{member.name}</h4>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </div>
        </a>
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm">{member.bio}</p>
        </div>
      </motion.div>
    ))}
  </motion.div>
  
  )
}
