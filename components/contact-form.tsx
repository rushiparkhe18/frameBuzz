"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function ContactForm({ onSubmit }: { onSubmit: () => void }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    onSubmit()

    // Reset form
    setFormState({
      name: "",
      email: "",
      projectType: "",
      message: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-light">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formState.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-light">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="projectType" className="text-sm font-light">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formState.projectType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all"
        >
          <option value="">Select a project type</option>
          <option value="commercial">Commercial</option>
          <option value="documentary">Documentary</option>
          <option value="wedding">Wedding</option>
          <option value="music">Music Video</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-light">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all resize-none"
        />
      </div>

      <div className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="relative px-8 py-3 rounded-lg font-light flex items-center gap-2 bg-foreground text-background hover:bg-foreground/90 transition-all"
        >
          {isSubmitting ? (
            <>
              <div className="h-5 w-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="h-4 w-4" />
            </>
          )}
        </motion.button>
      </div>
    </form>
  )
}
