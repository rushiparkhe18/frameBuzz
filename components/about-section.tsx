"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const timelineEvents = [
  {
    year: "2018",
    title: "First Documentary",
    description: "Released my first documentary film exploring urban architecture",
  },
  {
    year: "2019",
    title: "International Award",
    description: "Received recognition at the International Film Festival",
  },
  {
    year: "2020",
    title: "Studio Launch",
    description: "Established my own production studio in the heart of the city",
  },
  {
    year: "2022",
    title: "Major Client",
    description: "Partnered with leading brands for commercial productions",
  },
  {
    year: "2023",
    title: "Global Expedition",
    description: "Documented stories across five continents",
  },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section ref={sectionRef} className="py-24 bg-muted">
      <motion.div style={{ opacity, y }} className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">About Me</h2>
            <p className="text-muted-foreground mb-6">
              I am a professional videographer with over 8 years of experience capturing stories that matter. My passion
              lies in finding the extraordinary in everyday moments and translating them into cinematic experiences that
              resonate with audiences.
            </p>
            <p className="text-muted-foreground mb-6">
              With a background in fine arts and cinematography, I bring a unique perspective to every project. My work
              has been featured in international film festivals and I've collaborated with brands that share my vision
              for authentic storytelling.
            </p>
            <p className="text-muted-foreground">
              When I'm not behind the camera, I'm exploring new landscapes, studying film techniques, or teaching the
              next generation of visual storytellers.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Videographer portrait"
              width={600}
              height={800}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-light tracking-tight mb-12 text-center">My Journey</h3>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border" />

            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <TimelineEvent key={index} event={event} index={index} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
}: {
  event: (typeof timelineEvents)[0]
  index: number
}) {
  const itemRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -20 : 20, 0])

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity, scale, x }}
      className={`relative flex ${index % 2 === 0 ? "justify-end md:pr-12" : "justify-start md:pl-12"}`}
    >
      <div className={`w-full md:w-1/2 p-6 bg-background rounded-lg shadow-sm border border-border`}>
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-foreground" />
        <span className="inline-block px-3 py-1 text-xs rounded-full bg-muted mb-3">{event.year}</span>
        <h4 className="text-xl font-light mb-2">{event.title}</h4>
        <p className="text-muted-foreground text-sm">{event.description}</p>
      </div>
    </motion.div>
  )
}
