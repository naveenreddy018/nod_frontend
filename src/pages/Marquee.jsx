import { Sparkles, Box, Hexagon, CircleDot, Database, Compass, Wind } from "lucide-react"
import "../theme.css"

export default function Marquee() {
  const logos = [
    { name: "Architect", icon: Compass },
    { name: "Contracter", icon: Box },
    { name: "Designer", icon: Hexagon },
    { name: "Interiors", icon: CircleDot },
    { name: "Vastu", icon: Sparkles },
    { name: "Structural Designer", icon: Wind },
    { name: "Exterior", icon: Database },
  ]

  // Double the list for a seamless marquee loop
  const marqueeLogos = [...logos, ...logos]

  return (
    <div className="relative border-y border-[var(--border)] bg-[#4a3428] py-10 overflow-hidden pointer-events-auto">

      {/* MARQUEE CONTAINER */}
      <div className="marquee flex items-center whitespace-nowrap animate-[marquee_10s_linear_infinite]">
        {marqueeLogos.map((logo, index) => {
          const Icon = logo.icon
          return (
            <div
              key={index}
              className="flex items-center gap-3 mx-12 text-white hover:text-[var(--gold)] hover:scale-[1.03] transition-all duration-100 cursor-pointer group"
            >
              <Icon size={20} className="stroke-[1.5] transition-transform duration-500 group-hover:rotate-12" />
              <span className="text-sm font-semibold tracking-[0.25em] uppercase font-sans">
                {logo.name}
              </span>
            </div>
          )
        })}
      </div>

      {/* Marquee keyframes (no Next.js styled-jsx, plain <style> tag) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}