import { Building2, Home, Hammer, HardHat, Ruler, Wrench } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Full-service commercial building solutions for offices, retail spaces, and industrial facilities.",
  },
  {
    icon: Home,
    title: "Residential Building",
    description: "Custom homes and residential developments built with precision and care.",
  },
  {
    icon: Hammer,
    title: "Renovations",
    description: "Transform existing spaces with our expert renovation and remodeling services.",
  },
  {
    icon: Ruler,
    title: "Design-Build",
    description: "Streamlined design and construction under one roof for efficient project delivery.",
  },
  {
    icon: HardHat,
    title: "Project Management",
    description: "Professional oversight ensuring your project stays on time and within budget.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Ongoing facility maintenance and repair services to protect your investment.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground text-balance">
            Comprehensive Construction Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <service.icon className="h-10 w-10 text-primary mb-6" />
              <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
