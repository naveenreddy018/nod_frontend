import { motion } from "framer-motion"
import "../theme.css"

export default function OurProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      desc: "We start the incredible journey of designing a space for you by understanding you and your requirements. This leads us to create a Layout Plan and Mood Board with our style proposals.",
    },
    {
      number: "02",
      title: "Conceptualization",
      desc: "Detailed information about your existing furniture, electrical gadgets and appliances are vital to kick start this phase. We iterate design concepts and present to you.",
    },
    {
      number: "03",
      title: "Detailed Specification",
      desc: "At this stage, we meet at our studio to discuss the 2D designs and select materials from our sample library. We then start working on Technical Drawings.",
    },
    {
      number: "04",
      title: "Execution",
      desc: "We take over the supervision of the project from the procurement of the materials to tracking deadlines and also communicating with the suppliers and builders.",
    },
  ]

  return (
    <section id="process" className="relative py-24 px-4 md:px-8 overflow-hidden bg-[var(--background-secondary)]">

      {/* BACKGROUND PHOTO */}
      <div className="absolute inset-0">
        <img
          src="/images/studio-team.webp"
          alt="Design studio team working"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* WHITE WASH OVERLAY */}
        <div className="absolute inset-0 bg-[var(--background)]/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] font-bold block mb-3">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--heading)] leading-tight font-[var(--font-heading)]">
            From <span className="text-[var(--gold)]">Concept</span> to Completion
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-[var(--text)] font-light leading-relaxed font-[var(--font-body)]">
            We follow a meticulous and systematic design process to ensure unmatched quality of design as well as construction. Our systems have put us among the top residential and commercial interior designers in Hyderabad.
          </p>
          <div className="w-10 h-[2px] bg-[var(--gold)] mx-auto mt-8" />
        </div>

        {/* STEP CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] p-6 flex flex-col items-start rounded-[var(--radius-lg)]"
              style={{ transition: "var(--transition)" }}
            >
              {/* NUMBER BADGE */}
              <div
                className="h-14 w-14 flex items-center justify-center bg-[var(--primary)] group-hover:bg-[var(--gold)] text-[var(--surface)] text-xl font-extrabold mb-6 font-[var(--font-heading)] rounded-[var(--radius-md)]"
                style={{ transition: "var(--transition)" }}
              >
                {step.number}
              </div>

              <h3 className="text-base font-bold text-[var(--heading)] mb-3 font-[var(--font-heading)] group-hover:text-[var(--gold-hover)]" style={{ transition: "var(--transition)" }}>
                {step.title}
              </h3>

              <p className="text-xs text-[var(--muted)] font-light leading-relaxed font-[var(--font-body)]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}