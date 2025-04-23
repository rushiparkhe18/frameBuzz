"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

const vlogs = [
  {
    id: 1,
    title: "Behind the Scenes: Mountain Expedition",
    category: "Behind the Scenes",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoId: "dQw4w9WgXcQ", // Placeholder YouTube ID
  },
  {
    id: 2,
    title: "How to Create Cinematic B-Roll",
    category: "Tutorials",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoId: "dQw4w9WgXcQ", // Placeholder YouTube ID
  },
  {
    id: 3,
    title: "Exploring Iceland's Hidden Waterfalls",
    category: "Travel",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoId: "dQw4w9WgXcQ", // Placeholder YouTube ID
  },
  {
    id: 4,
    title: "Camera Gear Review: What's in My Bag",
    category: "Tutorials",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoId: "dQw4w9WgXcQ", // Placeholder YouTube ID
  },
  {
    id: 5,
    title: "Behind the Scenes: Fashion Week",
    category: "Behind the Scenes",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoId: "dQw4w9WgXcQ", // Placeholder YouTube ID
  },
  {
    id: 6,
    title: "Tokyo Street Photography Adventure",
    category: "Travel",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoId: "dQw4w9WgXcQ", // Placeholder YouTube ID
  },
]

export default function VlogsGrid() {
  const [selectedVlog, setSelectedVlog] = useState<(typeof vlogs)[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vlogs.map((vlog, index) => (
          <motion.div
            key={vlog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <VlogCard vlog={vlog} onClick={() => setSelectedVlog(vlog)} />
          </motion.div>
        ))}
      </div>

      {selectedVlog && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg shadow-lg w-full max-w-4xl">
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVlog.videoId}?autoplay=1`}
                title={selectedVlog.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-t-lg"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-light mb-2">{selectedVlog.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{selectedVlog.category}</p>
              <button
                onClick={() => setSelectedVlog(null)}
                className="px-4 py-2 bg-muted rounded-md text-sm font-light hover:bg-muted/80 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function VlogCard({ vlog, onClick }: { vlog: (typeof vlogs)[0]; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${vlog.thumbnail})` }} />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
          >
            <Play className="h-6 w-6 text-white fill-white" />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4">
          <span className="inline-block px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white mb-2">
            {vlog.category}
          </span>
          <h3 className="text-lg text-white font-light">{vlog.title}</h3>
        </div>
      </div>
    </motion.div>
  )
}
