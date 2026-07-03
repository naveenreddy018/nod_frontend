import { motion } from "framer-motion"
import { Compass, HardHat, Trees, Layers, Sparkles, Building2, Eye, Paintbrush } from "lucide-react"
import "../theme.css"

export default function FeaturedServices() {
  const services = [
    {
      title: "Interior Design",
      description: "Sophisticated interior environments blending luxury, utility, and exquisite materials.",
      icon: Paintbrush,
      badge: "Residential",
    },
    {
      title: "Architecture",
      description: "Visionary structural designs combining structural integrity with sculptural elegance.",
      icon: Compass,
      badge: "Master Planning",
    },
    {
      title: "Construction",
      description: "Flawless engineering and general contracting executed to the highest quality standards.",
      icon: HardHat,
      badge: "Civil Build",
    },
    {
      title: "Landscape",
      description: "Lush, custom outdoor environments curated to align perfectly with structural layouts.",
      icon: Trees,
      badge: "Eco-Design",
    },
    {
      title: "Furniture Design",
      description: "Signature bespoke furnishings created by master craftsmen for custom projects.",
      icon: Layers,
      badge: "Artisanal",
    },
    {
      title: "3D Visualization",
      description: "Photorealistic 3D rendering and immersive virtual tours to visualize before you build.",
      icon: Eye,
      badge: "Interactive VR",
    },
    {
      title: "Renovation",
      description: "Restructuring and modernizing aged properties while maintaining historical character.",
      icon: Sparkles,
      badge: "Refit",
    },
    {
      title: "Commercial Spaces",
      description: "Strategic layout and high-end design for modern offices, retail stores, and hotels.",
      icon: Building2,
      badge: "Corporate",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  }

  return (
    <section id="services" className="relative py-36 bg-[var(--background)] overflow-hidden px-4 md:px-8">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--gold)]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--primary)]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="mb-20 text-center relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] font-bold block mb-4">
            Our Specialties
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[var(--heading)] leading-tight font-[var(--font-heading)]">
            Start Your Journey As Professional Or Client
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--text)] font-light opacity-90 font-[var(--font-body)]">
            Connecting you with specialized design practices and builders capable of executing complex, bespoke architecture projects.
          </p>
        </div>

        {/* SERVICES GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-xl p-8 transition-all duration-500 hover:border-[var(--gold)]/40 hover:shadow-[var(--shadow-lg)] overflow-hidden cursor-pointer"
              >
                {/* CORNER GLOW EFFECT */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--gold)]/10 via-[var(--gold)]/3 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute -inset-px bg-gradient-to-r from-transparent via-[var(--gold)]/0 to-[var(--gold)]/0 rounded-[var(--radius-lg)] group-hover:via-[var(--gold)]/15 group-hover:to-[var(--gold)]/5 transition-all duration-700 pointer-events-none" />

                {/* ICON */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--background-secondary)] text-[var(--gold)] border border-[var(--border)] group-hover:bg-[var(--gold)]/10 group-hover:text-[var(--heading)] transition-all duration-300">
                  <Icon size={22} className="stroke-[1.5] transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* BADGE */}
                <span className="block text-[9px] uppercase tracking-widest text-[var(--muted)]/70 font-bold mb-2">
                  {service.badge}
                </span>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-[var(--heading)] group-hover:text-[var(--gold)] transition-colors duration-300 mb-3">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm leading-relaxed text-[var(--text)]/80 font-light group-hover:text-[var(--heading)] transition-colors duration-300">
                  {service.description}
                </p>

                {/* READ MORE INDICATOR */}
                <div className="mt-8 flex items-center gap-1.5 text-xs text-[var(--gold)] font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <span>Explore Specialties</span>
                  <span className="text-sm">→</span>
                </div>

              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}