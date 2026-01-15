"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Riverfront Tower",
    category: "Commercial",
    image: "/modern-glass-office-tower-building-exterior.jpg",
    description: "A 25-story office complex with sustainable design features.",
  },
  {
    title: "Oakwood Residences",
    category: "Residential",
    image: "/luxury-modern-house-with-pool-and-landscaping.jpg",
    description: "Luxury custom homes in a private community setting.",
  },
  {
    title: "Metro Shopping Center",
    category: "Commercial",
    image: "/modern-shopping-mall-exterior-at-dusk.jpg",
    description: "150,000 sq ft retail development with mixed-use spaces.",
  },
  {
    title: "Harbor View Condos",
    category: "Residential",
    image: "/waterfront-condominium-building-modern-architectur.jpg",
    description: "Waterfront living with panoramic views and premium finishes.",
  },
]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-primary text-sm tracking-widest uppercase mb-3">Our Portfolio</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-secondary-foreground text-balance">
              Featured Projects
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Explore our diverse portfolio of completed projects spanning commercial and residential construction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative aspect-[4/3] overflow-hidden bg-muted cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div
                  className={`transform transition-all duration-300 ${hoveredIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                >
                  <span className="text-primary-foreground/80 text-sm tracking-widest uppercase">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mt-2 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="h-6 w-6" />
                  </h3>
                  <p className="text-primary-foreground/80 mt-2 max-w-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
