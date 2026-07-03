import { Check, ShieldCheck, Cpu, MessageSquare, Briefcase, CreditCard, Sparkles, Award } from "lucide-react"
import { motion } from "framer-motion"
import "../theme.css"

export default function WhyChooseUs() {
    const clientChecklist = [
        { title: "Verified Professionals", desc: "Every designer undergoes a rigorous portfolio and credentials audit.", icon: ShieldCheck },
        { title: "AI-Powered Matching", desc: "Get matched with the perfect experts based on style, budget, and scope.", icon: Cpu },
        { title: "Project Tracking", desc: "Track blueprints, milestone approvals, and site work in real time.", icon: Sparkles },
        { title: "Secure Payments", desc: "Funds are released only when you approve the completed milestone.", icon: CreditCard },
    ]

    const professionalChecklist = [
        { title: "Milestone Contracts", desc: "Work with absolute confidence under clear, legally binding terms.", icon: Briefcase },
        { title: "Live Client Chat", desc: "Collaborate directly with clients with integrated media sharing.", icon: MessageSquare },
        { title: "Portfolio Reviews", desc: "Get structural and interior portfolios reviewed by top industry veterans.", icon: Award },
        { title: "Elite Ratings System", desc: "Earn premium trust score badges that put your profile at the top.", icon: ShieldCheck },
    ]

    return (
        <section id="why-choose" className="relative py-36 bg-[var(--primary)] overflow-hidden px-4 md:px-8">

            {/* BACKGROUND GLOW */}
            <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--gold)]/[0.04] blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[5%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[var(--gold)]/[0.03] blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-32">

                {/* BLOCK 1: CLIENT FOCUS */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* IMAGE LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 relative h-[400px] md:h-[500px] w-full overflow-hidden border border-white/10"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&auto=format&fit=crop"
                            alt="Luxury modern living room"
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                        />

                        {/* Dark glass overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                        {/* Corner accent frame */}
                        <div className="absolute top-6 right-6 w-10 h-[2px] bg-[var(--gold)]" />
                        <div className="absolute top-6 right-6 w-[2px] h-10 bg-[var(--gold)]" />

                        {/* Badge overlay - sharp bordered strip */}
                        <div className="absolute bottom-0 left-0 right-0 bg-[var(--primary)]/90 backdrop-blur-md border-t border-[var(--gold)]/40 px-6 py-5">
                            <span className="text-[10px] text-[var(--gold)] font-bold uppercase tracking-[0.2em] block mb-1.5">Elite Quality Guarantee</span>
                            <p className="text-xs text-white/75 font-light leading-relaxed">Only 3% of applicants pass our technical portfolio vetting process.</p>
                        </div>
                    </motion.div>

                    {/* TEXT RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 flex flex-col items-start"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-[2px] bg-[var(--gold)]" />
                            <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-bold">
                                For Visionary Clients
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 font-[var(--font-heading)]">
                            A Flawless Spatial Design Delivery.
                        </h2>

                        <p className="text-base text-white/70 font-light leading-relaxed mb-10 font-[var(--font-body)]">
                            We connect you with highly vetted design studios and specialists capable of executing high-end projects under absolute cost and quality control.
                        </p>

                        {/* Checklist */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7 w-full">
                            {clientChecklist.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <div key={index} className="flex gap-3.5 group">
                                        <div className="mt-0.5 h-8 w-8 shrink-0 border border-[var(--gold)]/30 bg-[var(--gold)]/[0.06] flex items-center justify-center text-[var(--gold)] transition-colors duration-300 group-hover:bg-[var(--gold)]/15 group-hover:border-[var(--gold)]">
                                            <Icon size={14} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-white mb-1 font-[var(--font-heading)]">
                                                {item.title}
                                            </h4>
                                            <p className="text-[11px] text-white/55 leading-relaxed font-light font-[var(--font-body)]">{item.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>

                </div>

                {/* BLOCK 2: PROFESSIONAL FOCUS */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* TEXT LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-[2px] bg-[var(--gold)]" />
                            <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-bold">
                                For Design Professionals
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 font-[var(--font-heading)]">
                            Grow Your Signature Practice.
                        </h2>

                        <p className="text-base text-white/70 font-light leading-relaxed mb-10 font-[var(--font-body)]">
                            Access high-value private commissions, verified contractors, and structural engineers. Run client relationships through milestone protection.
                        </p>

                        {/* Checklist */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7 w-full">
                            {professionalChecklist.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <div key={index} className="flex gap-3.5 group">
                                        <div className="mt-0.5 h-8 w-8 shrink-0 border border-[var(--gold)]/30 bg-[var(--gold)]/[0.06] flex items-center justify-center text-[var(--gold)] transition-colors duration-300 group-hover:bg-[var(--gold)]/15 group-hover:border-[var(--gold)]">
                                            <Icon size={14} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-white mb-1 font-[var(--font-heading)]">
                                                {item.title}
                                            </h4>
                                            <p className="text-[11px] text-white/55 leading-relaxed font-light font-[var(--font-body)]">{item.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* IMAGE RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 order-1 lg:order-2 relative h-[400px] md:h-[500px] w-full overflow-hidden border border-white/10"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1400&auto=format&fit=crop"
                            alt="Luxury contemporary kitchen interior"
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                        />
                        {/* Dark glass overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                        {/* Corner accent frame */}
                        <div className="absolute top-6 left-6 w-10 h-[2px] bg-[var(--gold)]" />
                        <div className="absolute top-6 left-6 w-[2px] h-10 bg-[var(--gold)]" />

                        {/* Badge overlay - sharp bordered strip */}
                        <div className="absolute bottom-0 left-0 right-0 bg-[var(--primary)]/90 backdrop-blur-md border-t border-[var(--gold)]/40 px-6 py-5 text-right">
                            <span className="text-[10px] text-[var(--gold)] font-bold uppercase tracking-[0.2em] block mb-1.5">Corporate & Tenders</span>
                            <p className="text-xs text-white/75 font-light leading-relaxed">Direct dashboard access to large commercial fit-outs and state tender bids.</p>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    )
}