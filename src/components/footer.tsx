import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-african-forest to-african-gold" />
              <span className="text-xl font-bold">RUZIVO</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Localizing AI Research for Africa. A collective of researchers from African Leadership University.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Research</h3>
            <div className="space-y-2">
              <Link href="/research" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects & Publications
              </Link>
              <Link href="/people" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Team
              </Link>
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">About</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Our Mission
              </Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Join Us
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@ruzivo.org"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 RUZIVO Research Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

