import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Button from "../components/Button/button"
import logo from "../assets/logo.png"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  const navLinks = [
    { label: "Designers", target: "designers" },
    { label: "Projects", target: "projects" },
    { label: "Services", target: "services" },
    { label: "Pricing", target: "pricing" },
    { label: "About", target: "about" },
    { label: "Contact", target: "contact" },
  ]

  const showChrome = isScrolled || mobileMenuOpen

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-500 ${
        showChrome
          ? "bg-[var(--surface)]/90 backdrop-blur-xl border-[var(--border)] shadow-[var(--shadow-sm)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 md:py-5">
        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[var(--border)] transition-transform duration-500 group-hover:rotate-12">
            <img src={logo} alt="Night Owl Designers (NOD) Logo" className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-heading text-xl font-bold tracking-tight text-[var(--heading)] transition-colors duration-300 group-hover:text-[var(--gold)]">
              N<span className="text-[var(--gold)]">OD</span>
            </span>
            <span className="font-body text-[8px] tracking-[0.25em] font-semibold uppercase mt-0.5 text-[var(--muted)]">
              Night Owl Designers
            </span>
          </div>
        </div>

        {/* DESKTOP NAV LINKS */}
        <nav className="font-body hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
           <a 
              key={link.label}
              href={`#${link.target}`}
              onClick={(e) => handleNavClick(e, link.target)}
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                hoveredLink === link.label ? "text-[var(--gold)]" : "text-[var(--text)]"
              }`}
            >
              {hoveredLink === link.label && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-0 rounded-full -z-10 bg-[var(--gold)]/10 border border-[var(--gold)]/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {link.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-3">
          <a href="/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </a>
          <a href="/signup">
            <Button variant="gold" size="sm" className="group">
              <span>Get Started</span>
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center p-2 md:hidden rounded-full border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--heading)] transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full overflow-hidden md:hidden border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                 <a 
                    key={link.label}
                    href={`#${link.target}`}
                    onClick={(e) => handleNavClick(e, link.target)}
                    className="py-2.5 text-sm font-medium border-b border-[var(--border)] flex items-center justify-between text-[var(--text)] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={12} className="text-[var(--gold)]/50" />
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-[var(--border)] flex flex-col gap-3">
                <a href="/login" onClick={() => setMobileMenuOpen(false)} className="w-full">
                  <Button variant="outline" fullWidth>
                    Login
                  </Button>
                </a>
                <a href="/signup" onClick={() => setMobileMenuOpen(false)} className="w-full">
                  <Button variant="gold" fullWidth>
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}