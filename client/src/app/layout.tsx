import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Docsa Insumos y Servicios | Construyendo Su Grandeza desde 2016",
  description:
    "Soluciones integrales en construcción, mantenimiento industrial y suministro de equipo especializado en México y Estados Unidos.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
