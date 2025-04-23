import { Instagram, Youtube, Twitter, Linkedin } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-muted transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-muted transition-colors"
        aria-label="YouTube"
      >
        <Youtube className="h-5 w-5" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-muted transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-muted transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>
    </div>
  )
}
