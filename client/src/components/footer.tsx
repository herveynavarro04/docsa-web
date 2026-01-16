import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-serif text-2xl font-bold text-background tracking-tight">Docsa</span>
              <span className="text-xs text-background/60 tracking-widest uppercase">Insumos Y Servicios</span>
            </Link>
            <p className="text-background/60 leading-relaxed max-w-md">
            Soluciones integrales en construcción, mantenimiento industrial y suministro de equipo especializado en México y Estados Unidos.
            </p>
          </div>

          <div>
            <h4 className="text-background font-semibold mb-4">Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#services" className="text-background/60 hover:text-background transition-colors text-sm">
                Servicios
              </Link>
              <Link href="#supplies" className="text-background/60 hover:text-background transition-colors text-sm">
                Insumos Industriales
              </Link>
              <Link href="#about" className="text-background/60 hover:text-background transition-colors text-sm">
                Nosotros
              </Link>
              <Link href="#contact" className="text-background/60 hover:text-background transition-colors text-sm">
                Contacto
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-background font-semibold mb-4">Insumos Industriales</h4>
            <nav className="flex flex-col gap-3">
              <span className="text-background/60 text-sm">Motores Eléctricos</span>
              <span className="text-background/60 text-sm">Interruptores, Sensores y Breakers</span>
              <span className="text-background/60 text-sm">PLCs</span>
              <span className="text-background/60 text-sm">MRO Industrial</span>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-sm">© 2026 DOCSA Insumos y Servicios S.A. de C.V. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
