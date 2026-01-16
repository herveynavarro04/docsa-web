import { Cpu, ToggleRight, CircuitBoard, Wrench } from "lucide-react"

const supplies = [
  {
    name: "Motores Eléctricos",
    description: "Motores eléctricos de alto rendimiento para aplicaciones industriales y comerciales",
    icon: Cpu,
  },
  {
    name: "Interruptores, Sensores y Breakers",
    description: "Componentes eléctricos confiables para sistemas de control y protección",
    icon: ToggleRight,
  },
  {
    name: "PLCs",
    description: "Controladores Lógicos Programables para automatización y control de procesos",
    icon: CircuitBoard,
  },
  {
    name: "MRO Industrial",
    description: "Suministros de Mantenimiento, Reparación y Operaciones para instalaciones industriales",
    icon: Wrench,
  },
]

export function Supplies() {
  return (
    <section id="supplies" className="py-20 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-foreground/70 text-sm tracking-widest uppercase mb-3">Insumos Industriales</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground text-balance">
            Productos de calidad para su industria
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            Suministramos una amplia gama de equipos industriales de alta calidad para mantener sus operaciones en funcionamiento continuo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supplies.map((supply) => (
            <div
              key={supply.name}
              className="group bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-8 hover:bg-primary-foreground/20 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-foreground/30 transition-colors">
                {supply.icon && <supply.icon className="h-8 w-8 text-primary-foreground" />}
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-2">{supply.name}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{supply.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
