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

            {/* CENTERED CONTENT — dead-center both horizontally and vertically */}
            <div
                className="absolute inset-0 z-10 w-full h-full flex flex-col items-center justify-center text-center px-6"
                style={{
                    opacity: contentOpacity,
                    transform: `translateY(${-scrollProgress * 40}px)`,
                }}
            >
                {/* Headline */}
                <h1 className="font-[var(--font-heading)] text-[var(--surface)] text-3xl sm:text-5xl md:text-6xl leading-tight max-w-4xl mx-auto">
                    THE POETRY OF DESIGN &amp;<br />
                    THE ENGINEERING OF CRAFT
                </h1>

                {/* Subtext */}
                <p className="mt-6 max-w-md mx-auto text-sm md:text-base text-[var(--surface)]/80">
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