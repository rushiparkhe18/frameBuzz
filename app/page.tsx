import VideoHero from "@/components/video-hero"
import FeaturedProjects from "@/components/featured-projects"
import ServicesShowcase from "@/components/services-showcase"
import ProcessSection from "@/components/process-section"
import ClientLogos from "@/components/client-logos"
import AboutPreview from "@/components/about-preview"
import TestimonialsSection from "@/components/testimonials-section"
import LatestNews from "@/components/latest-news"
import ContactPreview from "@/components/contact-preview"
import LoadingAnimation from "@/components/loading-animation"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <LoadingAnimation />
      <VideoHero />
      <AboutPreview />
      <ServicesShowcase />
      
      <ProcessSection />
      <FeaturedProjects />
      <ClientLogos />
      
      <TestimonialsSection />
      <LatestNews />
      <ContactPreview />
    </main>
  )
}
