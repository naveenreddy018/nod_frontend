

// // // import { useState, useEffect, useCallback } from "react"
// // // import { Search, Menu, X, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react"
// // // import "../theme.css"

// // // const heroImages = [
// // //     "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80&auto=format&fit=crop",
// // //     "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80&auto=format&fit=crop",
// // //     "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80&auto=format&fit=crop",
// // //     "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600&q=80&auto=format&fit=crop",
// // //     "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1600&q=80&auto=format&fit=crop",
// // // ]

// // // export default function HeroSection() {
// // //     const [menuOpen, setMenuOpen] = useState(false)
// // //     const [current, setCurrent] = useState(0)



// // //     const goNext = useCallback(() => {
// // //         setCurrent((prev) => (prev + 1) % heroImages.length)
// // //     }, [])

// // //     const goPrev = useCallback(() => {
// // //         setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length)
// // //     }, [])

// // //     // Autoplay
// // //     useEffect(() => {
// // //         const timer = setInterval(goNext, 5000)
// // //         return () => clearInterval(timer)
// // //     }, [goNext])

// // //     return (
// // //         <header className="relative w-full font-[var(--font-body)]">





// // //             {/* ===== HERO IMAGE CAROUSEL + HEADLINE ===== */}
// // //             <div className="relative w-full h-[70vh] min-h-[420px] md:min-h-[600px] overflow-hidden">

// // //                 {/* SLIDING TRACK */}
// // //                 <div
// // //                     className="absolute inset-0 flex h-full transition-transform duration-700 ease-in-out"
// // //                     style={{ transform: `translateX(-${current * 100}%)` }}
// // //                 >
// // //                     {heroImages.map((src, i) => (
// // //                         <img
// // //                             key={i}
// // //                             src={src}
// // //                             alt={`Handcrafted interior and ceramic styling, slide ${i + 1}`}
// // //                             className="w-full h-full object-cover flex-shrink-0"
// // //                             loading={i === 0 ? "eager" : "lazy"}
// // //                         />
// // //                     ))}
// // //                 </div>

// // //                 {/* Soft overlay for text legibility */}
// // //                 <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/70 via-[var(--background)]/20 to-transparent" />

// // //                 {/* LEFT ARROW */}
// // //                 <button
// // //                     onClick={goPrev}
// // //                     aria-label="Previous image"
// // //                     className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-[var(--surface)]/20 backdrop-blur-sm border border-[var(--surface)]/30 text-[var(--surface)] hover:bg-[var(--gold)] hover:text-[var(--primary)] hover:border-[var(--gold)] transition-all duration-300"
// // //                 >
// // //                     <ChevronLeft size={20} />
// // //                 </button>

// // //                 {/* RIGHT ARROW */}
// // //                 <button
// // //                     onClick={goNext}
// // //                     aria-label="Next image"
// // //                     className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-[var(--surface)]/20 backdrop-blur-sm border border-[var(--surface)]/30 text-[var(--surface)] hover:bg-[var(--gold)] hover:text-[var(--primary)] hover:border-[var(--gold)] transition-all duration-300"
// // //                 >
// // //                     <ChevronRight size={20} />
// // //                 </button>

// // //                 {/* DOT INDICATORS - bottom */}
// // //                 <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
// // //                     {heroImages.map((_, i) => (
// // //                         <button
// // //                             key={i}
// // //                             onClick={() => setCurrent(i)}
// // //                             aria-label={`Go to slide ${i + 1}`}
// // //                             className={`h-1.5 rounded-full transition-all duration-300 ${i === current
// // //                                     ? "w-6 bg-[var(--gold)]"
// // //                                     : "w-1.5 bg-[var(--surface)]/50 hover:bg-[var(--surface)]/80"
// // //                                 }`}
// // //                         />
// // //                     ))}
// // //                 </div>
// // //                 {/* ARTISTIC HEADLINE STACK */}
// // //                 <div className="absolute top-1/2 left-4 sm:left-8 md:left-16 -translate-y-1/2 max-w-[90%] md:max-w-2xl z-10">
// // //                     <p className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-6xl text-[var(--heading)] tracking-wide leading-[0.95]">
// // //                         YOUR SPACE
// // //                     </p>
// // //                     <p className="font-[var(--font-heading)] text-3xl sm:text-5xl md:text-7xl text-[var(--heading)] tracking-wide leading-[0.95] ml-4 sm:ml-10 md:ml-16 -mt-1 md:-mt-2">
// // //                         DESERVES<span className="text-[var(--gold)]">.</span>
// // //                     </p>
// // //                     <p className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-6xl text-[var(--heading)] tracking-wide leading-[0.95] -mt-1 md:-mt-2">
// // //                         MORE THAN
// // //                     </p>
// // //                     <p className="font-[var(--font-heading)] italic font-light text-xl sm:text-3xl md:text-5xl text-[var(--heading)] tracking-wide leading-[0.95] ml-4 sm:ml-10 md:ml-16 -mt-1 md:-mt-2">
// // //                         ordinary.
// // //                     </p>
// // //                 </div>
// // //             </div>

// // //         </header>
// // //     )
// // // }


// // import { useState, useEffect, useCallback, useRef } from "react"
// // import { ChevronLeft, ChevronRight } from "lucide-react"
// // import "../theme.css"

// // const heroImages = [
// //     "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80&auto=format&fit=crop",
// //     "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80&auto=format&fit=crop",
// //     "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80&auto=format&fit=crop",
// //     "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600&q=80&auto=format&fit=crop",
// //     "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1600&q=80&auto=format&fit=crop",
// // ]

// // export default function HeroSection() {
// //     const [current, setCurrent] = useState(0)
// //     const [scrollProgress, setScrollProgress] = useState(0)
// //     const rafRef = useRef(null)

// //     const goNext = useCallback(() => {
// //         setCurrent((prev) => (prev + 1) % heroImages.length)
// //     }, [])

// //     const goPrev = useCallback(() => {
// //         setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length)
// //     }, [])

// //     // Autoplay
// //     useEffect(() => {
// //         const timer = setInterval(goNext, 5000)
// //         return () => clearInterval(timer)
// //     }, [goNext])

// //     // Scroll-driven blur / dim / parallax progress (0 → 1 over first 100vh of scroll)
// //     useEffect(() => {
// //         const handleScroll = () => {
// //             if (rafRef.current) return
// //             rafRef.current = requestAnimationFrame(() => {
// //                 const vh = window.innerHeight
// //                 const progress = Math.min(Math.max(window.scrollY / vh, 0), 1)
// //                 setScrollProgress(progress)
// //                 rafRef.current = null
// //             })
// //         }
// //         window.addEventListener("scroll", handleScroll, { passive: true })
// //         handleScroll()
// //         return () => {
// //             window.removeEventListener("scroll", handleScroll)
// //             if (rafRef.current) cancelAnimationFrame(rafRef.current)
// //         }
// //     }, [])

// //     const blurAmount = scrollProgress * 14   // px, ramps 0 → 14
// //     const dimAmount = 0.15 + scrollProgress * 0.5 // overlay opacity
// //     const scaleAmount = 1 + scrollProgress * 0.08 // subtle zoom-in as it blurs
// //     const fadeUiOpacity = Math.max(1 - scrollProgress * 2, 0)
// //     const headlineOpacity = Math.max(1 - scrollProgress * 1.6, 0)

// //     return (
// //         <div className="fixed inset-0 w-screen h-screen z-0 overflow-hidden font-[var(--font-body)]">

// //             {/* SLIDING TRACK */}
// //             <div
// //                 className="absolute inset-0 flex h-full transition-[filter,transform] duration-300 ease-out will-change-[filter,transform]"
// //                 style={{
// //                     transform: `translateX(-${current * 100}%) scale(${scaleAmount})`,
// //                     filter: `blur(${blurAmount}px)`,
// //                 }}
// //             >
// //                 {heroImages.map((src, i) => (
// //                     <img
// //                         key={i}
// //                         src={src}
// //                         alt={`Handcrafted interior and ceramic styling, slide ${i + 1}`}
// //                         className="w-full h-full object-cover flex-shrink-0"
// //                         loading={i === 0 ? "eager" : "lazy"}
// //                     />
// //                 ))}
// //             </div>

// //             {/* Legibility gradient overlay */}
// //             <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/70 via-[var(--background)]/20 to-transparent" />

// //             {/* Scroll-driven dim layer */}
// //             <div
// //                 className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-300 ease-out"
// //                 style={{ opacity: dimAmount }}
// //             />

// //             {/* Arrows */}
// //             <div style={{ opacity: fadeUiOpacity, transition: "opacity 0.3s ease-out", pointerEvents: fadeUiOpacity === 0 ? "none" : "auto" }}>
// //                 <button
// //                     onClick={goPrev}
// //                     aria-label="Previous image"
// //                     className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-[var(--surface)]/20 backdrop-blur-sm border border-[var(--surface)]/30 text-[var(--surface)] hover:bg-[var(--gold)] hover:text-[var(--primary)] hover:border-[var(--gold)] transition-all duration-300"
// //                 >
// //                     <ChevronLeft size={20} />
// //                 </button>

// //                 <button
// //                     onClick={goNext}
// //                     aria-label="Next image"
// //                     className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-[var(--surface)]/20 backdrop-blur-sm border border-[var(--surface)]/30 text-[var(--surface)] hover:bg-[var(--gold)] hover:text-[var(--primary)] hover:border-[var(--gold)] transition-all duration-300"
// //                 >
// //                     <ChevronRight size={20} />
// //                 </button>
// //             </div>

// //             {/* Dot indicators */}
// //             <div
// //                 className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
// //                 style={{ opacity: fadeUiOpacity, transition: "opacity 0.3s ease-out", pointerEvents: fadeUiOpacity === 0 ? "none" : "auto" }}
// //             >
// //                 {heroImages.map((_, i) => (
// //                     <button
// //                         key={i}
// //                         onClick={() => setCurrent(i)}
// //                         aria-label={`Go to slide ${i + 1}`}
// //                         className={`h-1.5 rounded-full transition-all duration-300 ${i === current
// //                             ? "w-6 bg-[var(--gold)]"
// //                             : "w-1.5 bg-[var(--surface)]/50 hover:bg-[var(--surface)]/80"
// //                             }`}
// //                     />
// //                 ))}
// //             </div>

// //             {/* ARTISTIC HEADLINE STACK — fades + drifts up as user scrolls */}
// //             <div
// //                 className="absolute top-1/2 left-4 sm:left-8 md:left-16 -translate-y-1/2 max-w-[90%] md:max-w-2xl z-10"
// //                 style={{
// //                     opacity: headlineOpacity,
// //                     transform: `translateY(calc(-50% - ${scrollProgress * 60}px))`,
// //                     transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
// //                 }}
// //             >
// //                 <p className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-6xl text-[var(--heading)] tracking-wide leading-[0.95]">
// //                     YOUR SPACE
// //                 </p>
// //                 <p className="font-[var(--font-heading)] text-3xl sm:text-5xl md:text-7xl text-[var(--heading)] tracking-wide leading-[0.95] ml-4 sm:ml-10 md:ml-16 -mt-1 md:-mt-2">
// //                     DESERVES<span className="text-[var(--gold)]">.</span>
// //                 </p>
// //                 <p className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-6xl text-[var(--heading)] tracking-wide leading-[0.95] -mt-1 md:-mt-2">
// //                     MORE THAN
// //                 </p>
// //                 <p className="font-[var(--font-heading)] italic font-light text-xl sm:text-3xl md:text-5xl text-[var(--heading)] tracking-wide leading-[0.95] ml-4 sm:ml-10 md:ml-16 -mt-1 md:-mt-2">
// //                     ordinary.
// //                 </p>
// //             </div>
// //         </div>
// //     )
// // }


// import { useState, useEffect, useCallback, useRef } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import "../theme.css"

// const heroImages = [
//     "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1600&q=80&auto=format&fit=crop",
// ]

// export default function HeroSection({ panelRef }) {
//     const [current, setCurrent] = useState(0)
//     const [scrollProgress, setScrollProgress] = useState(0)
//     const rafId = useRef(null)

//     const goNext = useCallback(() => {
//         setCurrent((prev) => (prev + 1) % heroImages.length)
//     }, [])

//     const goPrev = useCallback(() => {
//         setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length)
//     }, [])

//     useEffect(() => {
//         const timer = setInterval(goNext, 5000)
//         return () => clearInterval(timer)
//     }, [goNext])

//     // Poll the panel's real rendered position every frame — works regardless of
//     // native scroll, smooth-scroll libraries, or transform-based scrolling.
//     useEffect(() => {
//         const tick = () => {
//             if (panelRef?.current) {
//                 const top = panelRef.current.getBoundingClientRect().top
//                 const vh = window.innerHeight
//                 // progress = 0 when panel top is at/below viewport bottom,
//                 // 1 once panel top has reached the top of the viewport
//                 const raw = Math.min(Math.max(1 - top / vh, 0), 1)
//                 const eased = raw * raw * (3 - 2 * raw) // smoothstep
//                 setScrollProgress((prev) => (Math.abs(prev - eased) > 0.001 ? eased : prev))
//             }
//             rafId.current = requestAnimationFrame(tick)
//         }
//         rafId.current = requestAnimationFrame(tick)
//         return () => cancelAnimationFrame(rafId.current)
//     }, [panelRef])

//     const blurAmount = scrollProgress * 16
//     const dimAmount = 0.08 + scrollProgress * 0.87
//     const scaleAmount = 1 + scrollProgress * 0.08
//     const fadeUiOpacity = Math.max(1 - scrollProgress * 2, 0)
//     const headlineOpacity = Math.max(1 - scrollProgress * 1.6, 0)

//     return (
//         <div className="fixed inset-0 w-screen h-screen z-0  overflow-hidden font-[var(--font-body)]">
//             <div
//                 className="absolute inset-0 flex h-full will-change-[filter,transform]"
//                 style={{
//                     transform: `translateX(-${current * 100}%) scale(${scaleAmount})`,
//                     filter: `blur(${blurAmount}px)`,
//                 }}
//             >
//                 {heroImages.map((src, i) => (
//                     <img
//                         key={i}
//                         src={src}
//                         alt={`Handcrafted interior and ceramic styling, slide ${i + 1}`}
//                         className="w-full h-full object-cover flex-shrink-0"
//                         loading={i === 0 ? "eager" : "lazy"}
//                     />
//                 ))}
//             </div>

//             <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/70 via-[var(--background)]/20 to-transparent" />

//             <div
//                 className="absolute inset-0 bg-black pointer-events-none"
//                 style={{ opacity: dimAmount }}
//             />

//             <div style={{ opacity: fadeUiOpacity, pointerEvents: fadeUiOpacity === 0 ? "none" : "auto" }}>
//                 <button onClick={goPrev} aria-label="Previous image" className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-[var(--surface)]/20 backdrop-blur-sm border border-[var(--surface)]/30 text-[var(--surface)] hover:bg-[var(--gold)] hover:text-[var(--primary)] hover:border-[var(--gold)] transition-all duration-300">
//                     <ChevronLeft size={20} />
//                 </button>
//                 <button onClick={goNext} aria-label="Next image" className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-[var(--surface)]/20 backdrop-blur-sm border border-[var(--surface)]/30 text-[var(--surface)] hover:bg-[var(--gold)] hover:text-[var(--primary)] hover:border-[var(--gold)] transition-all duration-300">
//                     <ChevronRight size={20} />
//                 </button>
//             </div>

//             <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2" style={{ opacity: fadeUiOpacity, pointerEvents: fadeUiOpacity === 0 ? "none" : "auto" }}>
//                 {heroImages.map((_, i) => (
//                     <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to slide ${i + 1}`} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[var(--gold)]" : "w-1.5 bg-[var(--surface)]/50 hover:bg-[var(--surface)]/80"}`} />
//                 ))}
//             </div>

//             <div
//                 className="absolute top-1/2 left-4 sm:left-8 md:left-16 -translate-y-1/2 max-w-[90%] md:max-w-2xl z-10"
//                 style={{
//                     opacity: headlineOpacity,
//                     transform: `translateY(calc(-50% - ${scrollProgress * 60}px))`,
//                 }}
//             >
//                 <p className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-6xl text-[var(--heading)] tracking-wide leading-[0.95]">YOUR SPACE</p>
//                 <p className="font-[var(--font-heading)] text-3xl sm:text-5xl md:text-7xl text-[var(--heading)] tracking-wide leading-[0.95] ml-4 sm:ml-10 md:ml-16 -mt-1 md:-mt-2">DESERVES<span className="text-[var(--gold)]">.</span></p>
//                 <p className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-6xl text-[var(--heading)] tracking-wide leading-[0.95] -mt-1 md:-mt-2">MORE THAN</p>
//                 <p className="font-[var(--font-heading)] italic font-light text-xl sm:text-3xl md:text-5xl text-[var(--heading)] tracking-wide leading-[0.95] ml-4 sm:ml-10 md:ml-16 -mt-1 md:-mt-2">ordinary.</p>
//             </div>
//         </div>
//     )
// }

import { useState, useEffect, useCallback, useRef } from "react"
import "../theme.css"

const heroImages = [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1600&q=80&auto=format&fit=crop",
]

export default function HeroSection({ panelRef }) {
    const [current, setCurrent] = useState(0)
    const [scrollProgress, setScrollProgress] = useState(0)
    const rafId = useRef(null)

    const goNext = useCallback(() => {
        setCurrent((prev) => (prev + 1) % heroImages.length)
    }, [])

    useEffect(() => {
        const timer = setInterval(goNext, 5000)
        return () => clearInterval(timer)
    }, [goNext])

    // Poll the panel's real rendered position every frame — works regardless of
    // native scroll, smooth-scroll libraries, or transform-based scrolling.
    useEffect(() => {
        const tick = () => {
            if (panelRef?.current) {
                const top = panelRef.current.getBoundingClientRect().top
                const vh = window.innerHeight
                const raw = Math.min(Math.max(1 - top / vh, 0), 1)
                const eased = raw * raw * (3 - 2 * raw) // smoothstep
                setScrollProgress((prev) => (Math.abs(prev - eased) > 0.001 ? eased : prev))
            }
            rafId.current = requestAnimationFrame(tick)
        }
        rafId.current = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(rafId.current)
    }, [panelRef])

    const blurAmount = scrollProgress * 16
    const dimAmount = 0.35 + scrollProgress * 0.6
    const scaleAmount = 1 + scrollProgress * 0.08
    const contentOpacity = Math.max(1 - scrollProgress * 1.6, 0)

    return (
        <div className="fixed inset-0 w-screen h-screen z-0 overflow-hidden font-[var(--font-body)]">

            {/* SLIDING TRACK — auto-plays, no manual controls */}
            <div
                className="absolute inset-0 flex h-full will-change-[filter,transform]"
                style={{
                    transform: `translateX(-${current * 100}%) scale(${scaleAmount})`,
                    filter: `blur(${blurAmount}px)`,
                }}
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

            {/* Base dark wash — gives the moody, legible-everywhere interior-design look */}
            <div className="absolute inset-0 bg-[var(--primary)]/50" />

            {/* Scroll-driven dim layer — light to dark as CategoryShowcase reveals */}
            <div
                className="absolute inset-0 bg-black pointer-events-none"
                style={{ opacity: dimAmount }}
            />

            {/* CENTERED CONTENT — monogram, tagline, headline, subtext, CTA */}
            <div
                className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6"
                style={{
                    opacity: contentOpacity,
                    transform: `translateY(${-scrollProgress * 40}px)`,
                }}
            >
                {/* Monogram mark */}
                {/* <div className="w-12 h-16 mb-4 flex items-center justify-center rounded-full border border-[var(--gold)]/60"> */}
                    <span className="font-[var(--font-heading)] text-[var(--gold)] text-lg tracking-wide">NOD</span>
                {/* </div> */}

                {/* Script-style tagline */}
                <p
                    className="mb-6 text-[var(--gold)]/80 text-lg md:text-xl italic"
                    style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 300 }}
                >
                    Made in  India
                </p>

                {/* Headline */}
                <h1 className="font-[var(--font-heading)] text-[var(--surface)] text-3xl sm:text-5xl md:text-6xl leading-tight max-w-4xl">
                    THE POETRY OF DESIGN &amp;<br />
                    THE ENGINEERING OF CRAFT
                </h1>

                {/* Subtext */}
                <p className="mt-6 max-w-md text-sm md:text-base text-[var(--surface)]/80">
                    We turn architectural designs into masterpiece interiors crafted by
                    genius designers.
                </p>

                {/* CTA */}
                <button className="mt-8 px-6 py-3 rounded-full bg-[var(--surface)] text-[var(--primary)] text-xs md:text-sm font-medium tracking-wide uppercase hover:bg-[var(--gold)] transition-colors duration-300">
                    Start a Project
                </button>
            </div>
        </div>
    )
}
