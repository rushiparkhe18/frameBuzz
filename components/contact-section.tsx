"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    setIsSubmitted(true)

    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl text-lg font-light">
            Have a project in mind? Let's create something amazing together
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-light">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formState.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all"
              />
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
                disabled={isSubmitting || isSubmitted}
                className={`relative px-8 py-3 rounded-lg font-light flex items-center gap-2 transition-all ${
                  isSubmitted ? "bg-green-500 text-white" : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </>
                )}

                {isSubmitted && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 15, 0], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-white rounded-full"
                  />
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
