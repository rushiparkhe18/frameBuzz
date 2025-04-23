"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ContactForm from "@/components/contact-form"
import SocialLinks from "@/components/social-links"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSubmit = () => {
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  return (
    <main className="pt-24 pb-16">
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">Contact</h1>
            <p className="text-xl font-light text-muted-foreground max-w-2xl mb-8">
              Let's create something amazing together
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <a
                  href="mailto:hello@example.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  hello@example.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p className="text-muted-foreground">Los Angeles, California</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Social</h3>
                <SocialLinks />
              </div>
            </div>
          </div>
          <div className="relative">
            {formSubmitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white z-10"
              />
            )}
            <ContactForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </section>

      <section className="mt-16 h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1650000000000!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center"
          >
            <div className="w-3 h-3 bg-background rounded-full" />
          </motion.div>
        </div>
      </section>
    </main>
  )
}
