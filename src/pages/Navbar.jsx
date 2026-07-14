import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button/button";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { label: "Designers", target: "designers" },
    { label: "Projects", target: "projects" },
    { label: "Services", target: "services" },
    { label: "About", target: "about" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <header className="absolute top-0 md:top-5 left-0 w-full z-50">
      <div className="mx-auto w-full md:max-w-7xl px-0 sm:px-4 lg:px-6">
        <div
          className="
            mx-auto
            w-full
            md:w-fit
            bg-[#1b130f]/90
            backdrop-blur-xl
            border-b
            md:border
            border-white/10
            rounded-none
            md:rounded-2xl
            shadow-2xl
          "
        >
          <div className="flex items-center justify-between h-16 lg:h-[64px] px-4 sm:px-5 lg:px-6">

            {/* Logo */}
            <div
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-2 cursor-pointer"
            >
              <img
                src={logo}
                alt="Night Owl Designers"
                className="w-8 h-8 rounded-full object-cover"
              />

              <h2 className="font-heading text-base lg:text-lg text-white whitespace-nowrap">
                Night Owl{" "}
                <span className="text-[var(--gold)]">
                  Designers
                </span>
              </h2>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-5 xl:gap-6 mx-6">
              {navLinks.map((link) => (
                
                <a  key={link.label}
                  href={`#${link.target}`}
                  onClick={(e) => handleNavClick(e, link.target)}
                  className="text-sm text-gray-300 hover:text-white transition duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <a href="/login">
                <Button
                  variant="gold"
                  size="sm"
                  className="rounded-sm px-4"
                >
                  Login
                </Button>
              </a>

              {/* <a href="/signup">
                <Button
                  variant="gold"
                  size="sm"
                  className="rounded-sm px-4"
                >
                  Contact
                </Button>
              </a> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="md:hidden bg-[#1b130f]/95 backdrop-blur-xl border-t border-white/10"
              >
                <div className="flex flex-col px-5 py-5">

                  {navLinks.map((link) => (
                   <a 
                      key={link.label}
                      href={`#${link.target}`}
                      onClick={(e) => handleNavClick(e, link.target)}
                      className="py-4 border-b border-white/10 text-white hover:text-[var(--gold)] transition"
                    >
                      {link.label}
                    </a>
                  ))}

                  <div className="flex flex-col gap-3 mt-6">
                    <a href="/login">
                      <Button
                        variant="outline"
                        fullWidth
                        className="rounded-full"
                      >
                        Login
                      </Button>
                    </a>

                    <a href="/signup">
                      <Button
                        variant="gold"
                        fullWidth
                        className="rounded-full"
                      >
                        Contact
                      </Button>
                    </a>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </header>
  );
}