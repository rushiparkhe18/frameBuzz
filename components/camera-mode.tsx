"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Camera, X, Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function CameraMode() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [videoProgress, setVideoProgress] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const [videoSrc, setVideoSrc] = useState("https://videos.pexels.com/video-files/2003070/2003070-sd_640_360_24fps.mp4")

  // Hide controls after inactivity
  useEffect(() => {
    if (!isOpen) return

    let timeout: NodeJS.Timeout
    const resetTimeout = () => {
      clearTimeout(timeout)
      setShowControls(true)
      timeout = setTimeout(() => setShowControls(false), 3000)
    }

    resetTimeout()
    window.addEventListener("mousemove", resetTimeout)
    window.addEventListener("touchstart", resetTimeout)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener("mousemove", resetTimeout)
      window.removeEventListener("touchstart", resetTimeout)
    }
  }, [isOpen])

  // Simulate video progress
  useEffect(() => {
    if (!isOpen || !isPlaying) return

    const interval = setInterval(() => {
      setVideoProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 0
        }
        return prev + 0.1
      })
    }, 100)

    return () => clearInterval(interval)
  }, [isOpen, isPlaying])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:bg-foreground/90 transition-colors"
        aria-label="Camera mode"
      >
        <Camera className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black"
            onMouseMove={() => setShowControls(true)}
          >
            <video
              autoPlay={isPlaying}
              muted={isMuted}
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <AnimatePresence>
              {showControls && (
                <>
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsOpen(false)}
                    className="absolute top-8 right-8 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Close camera mode"
                  >
                    <X className="h-5 w-5" />
                  </motion.button>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-8 left-0 right-0 px-8"
                  >
                    <div className="max-w-4xl mx-auto">
                      <div className="mb-4">
                        <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                          <motion.div className="h-full bg-white rounded-full" style={{ width: `${videoProgress}%` }} />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={togglePlay}
                            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                          >
                            {isPlaying ? (
                              <Pause className="h-5 w-5 text-white" />
                            ) : (
                              <Play className="h-5 w-5 text-white" />
                            )}
                          </button>
                          <button
                            onClick={toggleMute}
                            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                          >
                            {isMuted ? (
                              <VolumeX className="h-5 w-5 text-white" />
                            ) : (
                              <Volume2 className="h-5 w-5 text-white" />
                            )}
                          </button>
                        </div>

                        <div className="text-white text-sm">Cinematic Reel</div>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
