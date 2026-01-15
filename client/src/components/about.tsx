import { CheckCircle2 } from "lucide-react"

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "150+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
]

const values = [
  "Licensed and fully insured",
  "On-time project delivery",
  "Transparent pricing",
  "Dedicated project managers",
  "Quality craftsmanship guaranteed",
  "Safety-first approach",
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/construction-workers-reviewing-blueprints-at-job-s.jpg"
                alt="Construction team at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 hidden md:block">
              <p className="font-serif text-5xl font-bold text-primary-foreground">25+</p>
              <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mt-1">Years of Excellence</p>
            </div>
          </div>

          <div>
            <p className="text-primary text-sm tracking-widest uppercase mb-3">About Us</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Building Trust Through Quality
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Since 1998, Apex Construction has been at the forefront of the construction industry, delivering
              exceptional results for clients across residential and commercial sectors. Our commitment to quality,
              safety, and customer satisfaction has made us a trusted partner for projects of all sizes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe that every project is an opportunity to create something lasting. Our experienced team combines
              traditional craftsmanship with modern techniques to deliver spaces that exceed expectations.
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
