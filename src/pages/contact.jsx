

import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const countryCodes = [
    { code: "+91", flag: "🇮🇳", label: "India" },
    { code: "+1", flag: "🇺🇸", label: "USA" },
    { code: "+44", flag: "🇬🇧", label: "UK" },
    { code: "+971", flag: "🇦🇪", label: "UAE" },
    { code: "+61", flag: "🇦🇺", label: "Australia" },
];

function FieldUnderline({ label, name, type = "text", value, onChange, textarea }) {
    const [focused, setFocused] = useState(false);
    const filled = value && value.length > 0;

    const Comp = textarea ? "textarea" : "input";

    return (
        <div className="relative">
            <label
                htmlFor={name}
                className={`block text-xs tracking-[0.15em] mb-2 transition-colors duration-300 ${focused ? "text-[var(--gold,#b8934a)]" : "text-black/40"
                    }`}
            >
                {label.toUpperCase()}
            </label>

            <Comp
                id={name}
                name={name}
                type={!textarea ? type : undefined}
                rows={textarea ? 1 : undefined}
                value={value}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="w-full bg-transparent text-black text-sm outline-none pb-2 resize-none placeholder-black/25"
            />

            <div className="relative h-px w-full bg-black/15">
                <div
                    className="absolute inset-y-0 left-0 h-px bg-black transition-all duration-500 ease-out"
                    style={{ width: focused || filled ? "100%" : "0%" }}
                />
            </div>
        </div>
    );
}

export default function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        details: "",
    });
    const [country, setCountry] = useState(countryCodes[0]);
    const [countryOpen, setCountryOpen] = useState(false);
    const [phoneFocused, setPhoneFocused] = useState(false);

    const handleChange = (key) => (e) =>
        setForm((prev) => ({ ...prev, [key]: e.target.value }));

    const handleSubmit = () => {
        // wire this up to your actual submit endpoint
        console.log({ ...form, phone: `${country.code} ${form.phone}` });
    };

    return (
        <section id="contact" className="relative bg-[#f7f4f1] py-12 md:py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">

                {/* Left — heading */}
                <div>
                    <p className="text-xs tracking-[0.25em] text-sky-600 mb-3">WRITE US</p>
                    <h2 className="font-[var(--font-heading)] text-black text-2xl sm:text-3xl md:text-4xl leading-tight">
                        GREAT INTERIORS
                        <br />
                        <span className="block ml-4 sm:ml-8 md:ml-10">BEGINS WITH A</span>
                        <span className="block ml-8 sm:ml-12 md:ml-16">CONVERSATION</span>
                    </h2>
                </div>

                {/* Right — form */}
                <div className="flex flex-col gap-5 md:gap-6">
                    <FieldUnderline
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange("name")}
                    />

                    <FieldUnderline
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange("email")}
                    />

                    {/* Phone with country code dropdown */}
                    <div className="relative">
                        <div className="flex items-end gap-2.5">
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setCountryOpen((o) => !o)}
                                    className="flex items-center gap-1.5 pb-2 text-black"
                                >
                                    <span className="text-base leading-none">{country.flag}</span>
                                    <ChevronDown
                                        size={13}
                                        className={`text-black/50 transition-transform duration-300 ${countryOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {countryOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-black/10 rounded-lg overflow-hidden z-10 shadow-xl">
                                        {countryCodes.map((c) => (
                                            <button
                                                key={c.code}
                                                type="button"
                                                onClick={() => {
                                                    setCountry(c);
                                                    setCountryOpen(false);
                                                }}
                                                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-black/80 hover:bg-black/5 transition-colors"
                                            >
                                                <span>{c.flag}</span>
                                                <span>{c.code}</span>
                                                <span className="text-black/40 text-xs ml-auto">{c.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <span className="pb-2 text-black/60 text-sm">
                                {country.code}
                            </span>

                            <input
                                type="tel"
                                value={form.phone}
                                onChange={handleChange("phone")}
                                onFocus={() => setPhoneFocused(true)}
                                onBlur={() => setPhoneFocused(false)}
                                placeholder="099876 54321"
                                className="flex-1 bg-transparent text-black text-sm outline-none pb-2 placeholder-black/25"
                            />
                        </div>

                        <div className="relative h-px w-full bg-black/15">
                            <div
                                className="absolute inset-y-0 left-0 h-px bg-black transition-all duration-500 ease-out"
                                style={{ width: phoneFocused || form.phone ? "100%" : "0%" }}
                            />
                        </div>
                    </div>

                    <FieldUnderline
                        label="Company"
                        name="company"
                        value={form.company}
                        onChange={handleChange("company")}
                    />

                    <FieldUnderline
                        label="Details about your project"
                        name="details"
                        textarea
                        value={form.details}
                        onChange={handleChange("details")}
                    />

                    <div className="flex justify-end pt-1">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="group flex items-center gap-2 text-black text-sm tracking-[0.2em]"
                        >
                            <span className="border-b border-black pb-0.5 group-hover:border-[var(--gold,#b8934a)] group-hover:text-[var(--gold,#b8934a)] transition-colors duration-300">
                                SEND
                            </span>
                            <ArrowUpRight
                                size={16}
                                className="group-hover:text-[var(--gold,#b8934a)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}


