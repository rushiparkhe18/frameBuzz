"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Wedding Client",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The way you captured our special day was beyond our expectations. Every time we watch our wedding film, we relive those moments exactly as they felt.",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Marketing Director",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Working with you on our brand campaign was a game-changer. The visual storytelling elevated our message and connected with our audience on a deeper level.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Documentary Producer",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Your eye for detail and ability to find the story within the chaos is unmatched. The documentary wouldn't have been the same without your vision.",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl text-lg font-light">
            Hear what clients have to say about their experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="overflow-hidden py-12">
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -200 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                opacity: { duration: 0.2 },
              }}
              className="flex flex-col items-center text-center"
            >
              <Quote className="h-12 w-12 text-muted-foreground mb-6 opacity-20" />
              <p className="text-xl md:text-2xl font-light italic mb-8 max-w-3xl">"{testimonials[current].quote}"</p>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <h4 className="text-lg font-medium">{testimonials[current].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1)
                    setCurrent(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-foreground w-4" : "bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
