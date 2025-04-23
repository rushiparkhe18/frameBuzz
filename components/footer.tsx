import Link from "next/link"
import SocialLinks from "./social-links"

export default function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-xl font-light tracking-tight">
              frameBuzz
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Professional videography capturing life one frame at a time through cinematic storytelling
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <SocialLinks />
            <p className="text-xs text-muted-foreground mt-4">
              © {new Date().getFullYear()} frameBuzz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
