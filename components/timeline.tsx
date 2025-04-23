"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const timelineEvents = [
  {
    year: "2014",
    title: "First Documentary",
    description: "Released my first documentary film exploring urban architecture",
  },
  {
    year: "2016",
    title: "International Award",
    description: "Received recognition at the International Film Festival",
  },
  {
    year: "2018",
    title: "Studio Launch",
    description: "Established my own production studio in the heart of the city",
  },
  {
    year: "2020",
    title: "Major Client",
    description: "Partnered with leading brands for commercial productions",
  },
  {
    year: "2023",
    title: "Global Expedition",
    description: "Documented stories across five continents",
  },
]

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border" />

      <div className="space-y-16">
        {timelineEvents.map((event, index) => (
          <TimelineEvent key={index} event={event} index={index} />
        ))}
      </div>
    </div>
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
