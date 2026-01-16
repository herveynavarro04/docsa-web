"use client"

import { useState, useEffect } from "react"
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"

const stats = [
  { value: "10+", label: "Años de Experiencia" },
  { value: "50+", label: "Proyectos Completados" },  
  { value: "100%", label: "Clientes Satisfechos" },
]

const values = [
  "Empresa certificada y totalmente asegurada",
  "Entrega de proyectos en tiempo y forma",
  "Precios transparentes",
  "Gerentes de proyecto dedicados",
  "Calidad de ejecución garantizada",
  "Enfoque prioritario en seguridad",
]

const carouselImages = [
  {
    src: "/castillos.jpeg",
    alt: "Castillos de construcción",
  },
  {
    src: "/cosaFomi.jpeg",
    alt: "Cosa de construcción",
  },
  {
    src: "/instalacion.jpeg",
    alt: "Cosa de construcción",
  },
  {
    src: "/maquina.jpeg",
    alt: "Cosa de construcción",
  },
  {
    src: "/tubos.jpeg",
    alt: "Cosa de construcción",
  },
]

export function About() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden relative group">
              {carouselImages.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5 text-foreground" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5 text-foreground" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-background/60"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 hidden md:block">
              <p className="font-serif text-5xl font-bold text-primary-foreground">10+</p>
              <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mt-1">Años de Excelencia</p>
            </div>
          </div>

          <div>
            <p className="text-primary text-sm tracking-widest uppercase mb-3">Nosotros</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Construyendo confianza a través de la calidad
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Desde 2016, DOCSA Insumos y Servicios se ha posicionado a la vanguardia de la industria, entregando resultados excepcionales 
              para clientes de los sectores comercial, industrial y educativo tanto en México como en Estados Unidos. 
              Nuestro compromiso con la calidad en obra civil, mantenimiento y suministros especializados nos ha convertido en un socio 
              confiable para proyectos de cualquier magnitud, fiel a nuestra filosofía de construir grandeza.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Creemos que cada proyecto es una oportunidad para crear algo perdurable. Nuestro equipo experto combina la maestría 
              tradicional con técnicas modernas para entregar espacios que superan las expectativas.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{value}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}