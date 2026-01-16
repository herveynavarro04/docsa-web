import { Building2, Layers, Anchor, Boxes, Truck, Zap, Power, Wind, Droplet } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Diseño y Construcción Estructural",
    description: "Soluciones estructurales seguras y eficientes para proyectos industriales y comerciales.",
  },
  {
    icon: Layers,
    title: "Mezzanines Metálicos",
    description: "Diseño y fabricación de mezzanines metálicos para optimizar espacios operativos.",
  },
  {
    icon: Anchor,
    title: "Cimentación de Equipos Industriales",
    description: "Cimentaciones especializadas para maquinaria pesada, garantizando estabilidad y precisión.",
  },
  {
    icon: Boxes,
    title: "Diseño y Montaje de Racks",
    description: "Sistemas de racks industriales diseñados y montados para máxima capacidad y seguridad.",
  },
  {
    icon: Truck,
    title: "Montaje y Maniobras de Equipo Industrial",
    description: "Instalación y maniobras controladas de equipos industriales con personal especializado.",
  },
  {
    icon: Zap,
    title: "Redes Eléctricas en Media y Alta Tensión",
    description: "Instalación y mantenimiento de redes eléctricas industriales en media y alta tensión.",
  },
  {
    icon: Power,
    title: "Subestaciones y Capacitores",
    description: "Diseño e instalación de subestaciones eléctricas y bancos de capacitores.",
  },
  {
    icon: Wind,
    title: "Redes Industriales de Fluidos y Aire Comprimido",
    description: "Sistemas industriales de tuberías para fluidos y aire comprimido de alto rendimiento.",
  },
  {
    icon: Droplet,
    title: "Concreto y Pisos Epóxicos",
    description: "Colado de concreto industrial y aplicación de pisos epóxicos de alta resistencia.",
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Nuestros Servicios</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground text-balance">
            Servicios De Construcción
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
