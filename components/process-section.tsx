"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const processSteps = [
  {
    number: "01",
    title: "Concept Development",
    description:
      "We begin with understanding your vision, goals, and target audience to develop a concept that aligns with your brand.",
  },
  {
    number: "02",
    title: "Pre-Production",
    description:
      "Detailed planning including storyboarding, location scouting, casting, and scheduling to ensure a smooth production process.",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Professional filming with state-of-the-art equipment and techniques to capture high-quality footage that tells your story.",
  },
  {
    number: "04",
    title: "Post-Production",
    description:
      "Expert editing, color grading, sound design, and visual effects to transform raw footage into a polished final product.",
  },
  {
    number: "05",
    title: "Delivery",
    description:
      "Final review, revisions, and delivery of your project in multiple formats optimized for your distribution channels.",
  },
]

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Creative Process</h2>
          <p className="text-muted-foreground max-w-2xl text-lg font-light">
            A methodical approach to bringing your vision to life
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border hidden md:block" />

          <div className="space-y-16 md:space-y-0">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessStep({
  step,
  index,
  isInView,
}: {
  step: (typeof processSteps)[0]
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col md:flex-row items-center md:items-start ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8 md:gap-16`}
    >
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl font-light text-foreground/30">{step.number}</span>
          <h3 className="text-2xl font-light">{step.title}</h3>
        </div>
        <p className="text-muted-foreground max-w-md">{step.description}</p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-foreground" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-border/30 animate-pulse" />
        </div>
      </div>
    </motion.div>
  )
}
