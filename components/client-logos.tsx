"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const clients = [
  { name: "Company 1", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Company 2", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Company 3", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Company 4", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Company 5", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Company 6", logo: "/placeholder.svg?height=60&width=120" },
]

export default function ClientLogos() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-2xl font-light tracking-tight mb-4">Trusted By</h2>
          <p className="text-muted-foreground max-w-2xl text-base font-light">
            Proud to collaborate with these amazing brands
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
