// import { useState } from "react"
// import { Search, Menu, X, ShoppingBag } from "lucide-react"
// import "../theme.css"

// export default function HeroSection() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   const leftLinks = ["Search", "What's Our Story", "Studio"]
//   const rightLinks = ["Visit", "Portfolio", "Press", "Contact"]
//   const secondaryLeft = ["Tabletop", "Accessories", "Lighting", "Furniture"]
//   const secondaryRight = ["Special Collections", "Artists & Makers", "The Eye"]

//   return (
//     <header className="relative w-full font-[var(--font-body)] mt-4 sm:mt-6 md:mt-8">

//       {/* ===== NAVBAR ===== */}
//       <nav className="relative z-30 bg-[var(--primary)] text-[var(--surface)] px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">

//           {/* TOP ROW */}
//           <div className="flex items-center justify-between py-4 md:py-5">

//             {/* LEFT LINKS - desktop */}
//             <div className="hidden lg:flex items-center gap-8">
//               {leftLinks.map((link, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="text-[10px] tracking-[0.2em] uppercase text-[var(--surface)]/80 hover:text-[var(--gold)] transition-colors duration-300"
//                 >
//                   {link}
//                 </a>
//               ))}
//             </div>

//             {/* MOBILE MENU TOGGLE */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="lg:hidden text-[var(--surface)]"
//               aria-label="Toggle menu"
//             >
//               {menuOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>

//             {/* CENTER LOGO */}
//             <div className="flex flex-col items-center leading-none absolute left-1/2 -translate-x-1/2">
//               <span className="text-[9px] tracking-[0.35em] text-[var(--gold)] font-semibold mb-1.5 hidden sm:block">
//                 INTERIOR &amp; ARCHITECTURE
//               </span>
//               <span className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold tracking-[0.08em] text-[var(--surface)]">
//                 NOD
//               </span>
//               <span className="text-[9px] md:text-[10px] tracking-[0.4em] text-[var(--surface)]/60 mt-1.5">
//                 HYDERABAD
//               </span>
//             </div>

//             {/* RIGHT LINKS - desktop */}
//             <div className="hidden lg:flex items-center gap-8">
//               {rightLinks.map((link, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="text-[10px] tracking-[0.2em] uppercase text-[var(--surface)]/80 hover:text-[var(--gold)] transition-colors duration-300"
//                 >
//                   {link}
//                 </a>
//               ))}
//             </div>

//             {/* MOBILE ICONS */}
//             <div className="flex lg:hidden items-center gap-4">
//               <Search size={17} className="text-[var(--surface)]/85" />
//               <ShoppingBag size={17} className="text-[var(--surface)]/85" />
//             </div>
//           </div>

//           {/* SECONDARY ROW - desktop only */}
//           <div className="hidden lg:flex items-center justify-between border-t border-[var(--surface)]/10 py-3.5">
//             <div className="flex items-center gap-8">
//               {secondaryLeft.map((link, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[var(--surface)] hover:text-[var(--gold)] transition-colors duration-300"
//                 >
//                   {link}
//                 </a>
//               ))}
//             </div>
//             <div className="flex items-center gap-8">
//               {secondaryRight.map((link, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[var(--surface)] hover:text-[var(--gold)] transition-colors duration-300"
//                 >
//                   {link}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* MOBILE DROPDOWN MENU */}
//         {menuOpen && (
//           <div className="lg:hidden flex flex-col gap-5 pb-6 pt-2 border-t border-[var(--surface)]/10 mt-2">
//             {[...leftLinks, ...secondaryLeft, ...secondaryRight, ...rightLinks].map((link, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="text-xs tracking-[0.15em] uppercase text-[var(--surface)]/85 hover:text-[var(--gold)] transition-colors duration-300"
//               >
//                 {link}
//               </a>
//             ))}
//           </div>
//         )}
//       </nav>

//       {/* ===== HERO IMAGE + HEADLINE ===== */}
//       <div className="relative w-full h-[70vh] min-h-[420px] md:min-h-[600px] overflow-hidden">
//         <img
//           src="https://source.unsplash.com/1600x900/?minimalist,interior,ceramics,warm-tones"
//           alt="Handcrafted ceramic pieces styled in a warm, minimalist interior"
//           className="absolute inset-0 w-full h-full object-cover"
//           loading="eager"
//         />

//         {/* Soft overlay for text legibility */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/70 via-[var(--background)]/20 to-transparent" />

//         {/* ARTISTIC HEADLINE STACK */}
//         <div className="absolute top-8 left-4 sm:top-12 sm:left-8 md:top-16 md:left-16 max-w-[90%] md:max-w-2xl">
//           <p className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-6xl text-[var(--heading)] tracking-wide leading-[0.95]">
//             SUBTLE
//           </p>
//           <p className="font-[var(--font-heading)] text-3xl sm:text-5xl md:text-7xl text-[var(--heading)] tracking-wide leading-[0.95] ml-4 sm:ml-10 md:ml-16 -mt-1 md:-mt-2">
//             REVOLUTION<span className="text-[var(--gold)]">...</span>
//           </p>
//           <p className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-6xl text-[var(--heading)] tracking-wide leading-[0.95] -mt-1 md:-mt-2">
//             SHAPES
//           </p>
//           <p className="font-[var(--font-heading)] italic font-light text-xl sm:text-3xl md:text-5xl text-[var(--heading)] tracking-wide leading-[0.95] ml-4 sm:ml-10 md:ml-16 -mt-1 md:-mt-2">
//             in craft
//           </p>
//         </div>
//       </div>

//     </header>
//   )
// }

import { useState, useEffect, useCallback } from "react"
import { Search, Menu, X, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react"
import "../theme.css"

const heroImages = [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1600&q=80&auto=format&fit=crop",
]

export default function HeroSection() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [current, setCurrent] = useState(0)



    const goNext = useCallback(() => {
        setCurrent((prev) => (prev + 1) % heroImages.length)
    }, [])

    const goPrev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    }, [])

    // Autoplay
    useEffect(() => {
        const timer = setInterval(goNext, 5000)
        return () => clearInterval(timer)
    }, [goNext])

    return (
        <header className="relative w-full font-[var(--font-body)]">





            {/* ===== HERO IMAGE CAROUSEL + HEADLINE ===== */}
            <div className="relative w-full h-[70vh] min-h-[420px] md:min-h-[600px] overflow-hidden">

                {/* SLIDING TRACK */}
                <div
                    className="absolute inset-0 flex h-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {heroImages.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Handcrafted interior and ceramic styling, slide ${i + 1}`}
                            className="w-full h-full object-cover flex-shrink-0"
                            loading={i === 0 ? "eager" : "lazy"}
                        />
                    ))}
                </div>

                {/* Soft overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/70 via-[var(--background)]/20 to-transparent" />

                {/* LEFT ARROW */}
                <button
                    onClick={goPrev}
                    aria-label="Previous image"
                    className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-[var(--surface)]/20 backdrop-blur-sm border border-[var(--surface)]/30 text-[var(--surface)] hover:bg-[var(--gold)] hover:text-[var(--primary)] hover:border-[var(--gold)] transition-all duration-300"
                >
                    <ChevronLeft size={20} />
                </button>

                {/* RIGHT ARROW */}
                <button
                    onClick={goNext}
                    aria-label="Next image"
                    className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-[var(--surface)]/20 backdrop-blur-sm border border-[var(--surface)]/30 text-[var(--surface)] hover:bg-[var(--gold)] hover:text-[var(--primary)] hover:border-[var(--gold)] transition-all duration-300"
                >
                    <ChevronRight size={20} />
                </button>

                {/* DOT INDICATORS - bottom */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                    {heroImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === current
                                    ? "w-6 bg-[var(--gold)]"
                                    : "w-1.5 bg-[var(--surface)]/50 hover:bg-[var(--surface)]/80"
                                }`}
                        />
                    ))}
                </div>
                {/* ARTISTIC HEADLINE STACK */}
                <div className="absolute top-1/2 left-4 sm:left-8 md:left-16 -translate-y-1/2 max-w-[90%] md:max-w-2xl z-10">
                    <p className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-6xl text-[var(--heading)] tracking-wide leading-[0.95]">
                        YOUR SPACE
                    </p>
                    <p className="font-[var(--font-heading)] text-3xl sm:text-5xl md:text-7xl text-[var(--heading)] tracking-wide leading-[0.95] ml-4 sm:ml-10 md:ml-16 -mt-1 md:-mt-2">
                        DESERVES<span className="text-[var(--gold)]">.</span>
                    </p>
                    <p className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-6xl text-[var(--heading)] tracking-wide leading-[0.95] -mt-1 md:-mt-2">
                        MORE THAN
                    </p>
                    <p className="font-[var(--font-heading)] italic font-light text-xl sm:text-3xl md:text-5xl text-[var(--heading)] tracking-wide leading-[0.95] ml-4 sm:ml-10 md:ml-16 -mt-1 md:-mt-2">
                        ordinary.
                    </p>
                </div>
            </div>

        </header>
    )
}

