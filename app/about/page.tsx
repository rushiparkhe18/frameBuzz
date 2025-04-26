"use client"

import { ArrowRight } from "lucide-react"
import Timeline from "@/components/timeline"
import AwardsGrid from "@/components/awards-grid"

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      {/* Background video section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
  
  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full">
    <img
      src="https://images.unsplash.com/photo-1682803076480-8206df865e6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhJTIwY2luZW1hdGljJTIwZ3JheSUyMGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D?auto=compress&cs=tinysrgb&w=600"
      alt="Background"
      className="object-cover w-full h-full"
    />
  </div>
  
  <div className="relative container mx-auto h-full flex flex-col justify-end pb-16">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">About</h1>
    <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-2xl">The story behind framebuzzmedia</p>
  </div>
</section>


      {/* Section: The Visual Storyteller */}
      <section className="container mx-auto py-16 px-4">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    {/* Text Section */}
    <div className="space-y-6">
      <h2 className="text-3xl font-light tracking-tight">The Visual Storyteller</h2>
      <p className="text-muted-foreground">
        With over a decade of experience in visual storytelling, I've dedicated my career to capturing moments
        that evoke emotion and create lasting impressions. My journey began with a simple camera and a passion for
        finding beauty in everyday life.
      </p>
      <p className="text-muted-foreground">
        Today, I collaborate with brands, couples, and creative individuals to translate their visions into
        cinematic experiences. My approach combines technical precision with artistic intuition, resulting in
        visuals that feel both authentic and elevated.
      </p>
      <p className="text-muted-foreground">
        When I'm not behind the camera, I'm exploring new landscapes, studying film techniques, or teaching the
        next generation of visual storytellers through workshops and mentorship programs.
      </p>
      <blockquote className="border-l-2 pl-6 italic my-8">
        "It's not about capturing images, it's about capturing emotion."
      </blockquote>
    </div>

    {/* Video Section */}
    <div className="relative w-full h-[500px] lg:h-[600px]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="object-cover rounded-lg w-full h-full"
      >
        <source src="https://videos.pexels.com/video-files/2003070/2003070-sd_640_360_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</section>


      {/* Section: My Journey */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-light tracking-tight mb-16 text-center">My Journey</h2>
        <Timeline />
      </section>

      {/* Section: Awards & Recognition */}
      <section className="container mx-auto py-16 px-4">
      <div className="flex flex-col items-center text-center mb-16">
  <h2 className="text-3xl font-light tracking-tight mb-4">Meet Our Team</h2>
  <p className="text-muted-foreground max-w-2xl">
    A group of passionate creatives, working together to bring your vision to life.
  </p>
</div>

        <AwardsGrid />
      </section>

      {/* Section: Call to Action */}
      <section className="container mx-auto py-16 px-4">
        <div className="bg-muted rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-light mb-4">Ready to create something amazing?</h3>
            <p className="text-muted-foreground max-w-md">
              Let's collaborate on your next project and bring your vision to life through cinematic storytelling.
            </p>
          </div>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </main>
  )
}
