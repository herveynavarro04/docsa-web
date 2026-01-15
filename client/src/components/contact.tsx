"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-3">Get In Touch</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              {"Let's Discuss Your Project"}
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-10 max-w-md">
              Ready to start your next construction project? Contact us today for a free consultation and detailed
              estimate.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Call Us</p>
                  <p className="text-primary-foreground font-medium">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Email Us</p>
                  <p className="text-primary-foreground font-medium">info@apexconstruction.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Visit Us</p>
                  <p className="text-primary-foreground font-medium">123 Builder Lane, Suite 100</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 md:p-10">
            <h3 className="font-serif text-2xl font-semibold text-card-foreground mb-6">Request a Free Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border"
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border min-h-[150px] resize-none"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
