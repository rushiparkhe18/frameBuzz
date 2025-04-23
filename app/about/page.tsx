import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Timeline from "@/components/timeline"
import AwardsGrid from "@/components/awards-grid"

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Videographer at work"
          fill
          className="object-cover blur-sm"
          priority
        />
        <div className="relative container mx-auto h-full flex flex-col justify-end pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">About</h1>
          <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-2xl">The story behind the frameBuzz</p>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
          <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none">
            <Image
              src="/placeholder.svg?height=800&width=800"
              alt="Portrait"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-light tracking-tight mb-16 text-center">My Journey</h2>
        <Timeline />
      </section>

      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-light tracking-tight mb-4">Awards & Recognition</h2>
          <p className="text-muted-foreground max-w-2xl">
            Honored to have my work recognized by these prestigious organizations
          </p>
        </div>
        <AwardsGrid />
      </section>

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
