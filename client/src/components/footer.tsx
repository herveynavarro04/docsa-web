import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-serif text-2xl font-bold text-background tracking-tight">APEX</span>
              <span className="text-xs text-background/60 tracking-widest uppercase">Construction</span>
            </Link>
            <p className="text-background/60 leading-relaxed max-w-md">
              Building excellence since 1998. We deliver exceptional construction services with uncompromising quality
              and attention to detail.
            </p>
          </div>

          <div>
            <h4 className="text-background font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#services" className="text-background/60 hover:text-background transition-colors text-sm">
                Services
              </Link>
              <Link href="#projects" className="text-background/60 hover:text-background transition-colors text-sm">
                Projects
              </Link>
              <Link href="#about" className="text-background/60 hover:text-background transition-colors text-sm">
                About Us
              </Link>
              <Link href="#contact" className="text-background/60 hover:text-background transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-background font-semibold mb-4">Services</h4>
            <nav className="flex flex-col gap-3">
              <span className="text-background/60 text-sm">Commercial Construction</span>
              <span className="text-background/60 text-sm">Residential Building</span>
              <span className="text-background/60 text-sm">Renovations</span>
              <span className="text-background/60 text-sm">Design-Build</span>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-sm">© 2025 Apex Construction. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-background/40 hover:text-background transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/40 hover:text-background transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
