import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary pt-16">
      <div className="absolute inset-0">
        <img
          src="/modern-construction-site-with-crane-at-sunset.jpg"
          alt="Construction site"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-4">
            Building Excellence Since 1998
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
            Crafting Spaces That Inspire
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            From concept to completion, we deliver exceptional construction services with uncompromising quality and
            attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#projects">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="#contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
