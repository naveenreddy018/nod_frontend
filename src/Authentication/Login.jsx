import { useState } from "react"
import logo from "../assets/logo.png"
import "../theme.css"

const COUNTRY_CODES = [
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+971", label: "🇦🇪 +971" },
]

const COUNTRIES = ["India", "United States", "United Kingdom", "Australia", "UAE", "Germany", "France"]

const ROLE_FIELDS = {
  Client: { heading: "Almost There", subtitle: "Confirm your location and preferences.", fields: [] },
  Designer: {
    heading: "Set Up Your Designer Profile",
    subtitle: "Showcase your style and attract the right clients.",
    fields: [
      { id: "bio", label: "Short Bio", type: "textarea", placeholder: "Tell clients about your design philosophy..." },
      { id: "specialization", label: "Specialization", type: "select", options: ["Interior Designer", "Exterior Designer", "AutoCAD Designer", "Structural Designer", "Landscape Designer", "3D Visualizer"] },
      { id: "style", label: "Signature Style", type: "select", options: ["Modern", "Minimalist", "Luxury", "Scandinavian", "Industrial", "Eclectic"] },
      { id: "experience", label: "Years of Experience", type: "number", placeholder: "e.g. 5" },
      { id: "rate", label: "Hourly Rate", type: "number", placeholder: "e.g. 80" },
    ],
  },
  Architect: {
    heading: "Set Up Your Architect Profile",
    subtitle: "Highlight your expertise and win more projects.",
    fields: [
      { id: "bio", label: "Short Bio", type: "textarea", placeholder: "Describe your architectural approach..." },
      { id: "license", label: "(COA) License Number", type: "text", placeholder: "e.g. AR-123456" },
      { id: "specialization", label: "Project Type", type: "select", options: ["Residential", "Commercial", "Mixed-Use", "Industrial", "Urban Planning"] },
      { id: "software", label: "Primary Software", type: "select", options: ["AutoCAD", "Revit", "ArchiCAD", "SketchUp", "Rhino"] },
      { id: "experience", label: "Years of Experience", type: "number", placeholder: "e.g. 10" },
    ],
  },
  Contractor: {
    heading: "Set Up Your Contractor Profile",
    subtitle: "Show clients what you can build.",
    fields: [
      { id: "bio", label: "Company / Personal Bio", type: "textarea", placeholder: "Describe your contracting services..." },
      { id: "trade", label: "Primary Trade", type: "select", options: ["General Contractor", "Electrical", "Plumbing", "Carpentry", "Masonry", "Painting", "HVAC"] },
      { id: "gstin", label: "GSTIN Number", type: "text", placeholder: "e.g. 22AAAAA0000A1Z5" },
      { id: "experience", label: "Years of Experience", type: "number", placeholder: "e.g. 8" },
    ],
  },
}

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [step, setStep] = useState(1)
  const [role, setRole] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [phoneCode, setPhoneCode] = useState("+91")
  const [country, setCountry] = useState("")
  const [roleFields, setRoleFields] = useState({})
  const [showForgotModal, setShowForgotModal] = useState(false)

  const roleConfig = role ? ROLE_FIELDS[role] : null

  const inputClass =
    "w-full rounded-xl border border-[var(--gold)]/25 bg-[var(--surface)]/5 px-4 py-3.5 text-sm text-[var(--heading)] placeholder-[var(--muted)]/70 outline-none transition-all duration-300 focus:border-[var(--gold)] focus:bg-[var(--surface)]/10 hover:border-[var(--gold)]/40"

  const setRoleField = (id, value) => setRoleFields((prev) => ({ ...prev, [id]: value }))

  return (
    <div className="relative min-h-screen w-full" style={{ backgroundColor: "var(--primary)" }}>

      {/* ── LEFT PANEL (fixed) ── */}
      <div className="hidden lg:flex w-[58%] flex-col justify-end overflow-hidden fixed inset-y-0 left-0 z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3), rgba(0,0,0,0.7))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent, rgba(0,0,0,0.1))" }} />

        <div className="absolute top-8 left-8 flex items-center gap-3 z-10">
          <div
            className="w-14 h-14 rounded-full border flex items-center justify-center backdrop-blur-sm"
            style={{ borderColor: "var(--gold)", backgroundColor: "rgba(212,175,55,0.08)" }}
          >
            <img src={logo} alt="Logo" className="w-14 h-14 rounded-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className="flex items-center">
              <h1 className="text-6xl font-bold leading-none" style={{ color: "var(--surface)" }}>N</h1>
              <div className="ml-1 leading-none">
                <p className="text-3xl font-semibold" style={{ color: "var(--surface)" }}>OD</p>
                <p className="text-xs tracking-[0.3em]" style={{ color: "var(--surface)" }}>IGHT OWL DESIGNERS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 p-12 pb-16">
          <p className="mb-3 text-xs uppercase tracking-[0.4em]" style={{ color: "var(--surface)" }}>
            Studio Est. 2018
          </p>
          <h1
            className="text-5xl xl:text-6xl font-light leading-[1.1] mb-5"
            style={{ color: "var(--surface)", fontFamily: "var(--font-heading)" }}
          >
            Designing<br />
            <em className="not-italic" style={{ color: "var(--gold)" }}>Timeless</em> Spaces
          </h1>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--surface)" }}>
            Luxury architectural and interior experiences crafted with precision and modern aesthetics.
          </p>
        </div>
      </div>

      {/* ── RIGHT PANEL (scrollable) ── */}
      <div
        className="relative flex flex-col items-center justify-center px-8 py-12 border-l lg:ml-[58%] min-h-screen"
        style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
      >
        {/* Mobile logo */}
        <div className="flex lg:hidden items-center gap-3 mb-12 self-start">
          <div
            className="w-9 h-9 rounded-full border flex items-center justify-center"
            style={{ borderColor: "var(--gold)", backgroundColor: "rgba(212,175,55,0.08)" }}
          >
            <span className="text-[10px] font-semibold tracking-wider" style={{ color: "var(--heading)" }}>NOD</span>
          </div>
          <p className="text-xs font-light tracking-[0.25em] uppercase" style={{ color: "var(--heading)" }}>
            Night Owl Designers
          </p>
        </div>

        <div className="relative z-10 w-full max-w-sm">
          <div className="mb-10">
            <h2
              className="text-4xl font-light mb-2"
              style={{ color: "var(--heading)", fontFamily: "var(--font-heading)" }}
            >
              {isSignUp ? (step === 2 && roleConfig ? roleConfig.heading : "Create Account") : "Welcome Back"}
            </h2>
            <p className="text-sm tracking-wide" style={{ color: "var(--text)" }}>
              {isSignUp
                ? step === 2 && roleConfig
                  ? roleConfig.subtitle
                  : "Create your account to get started"
                : "Sign in to continue your experience"}
            </p>
          </div>

          <div className="mb-8 h-px" style={{ backgroundColor: "var(--border)" }} />

          {/* ── SIGN-IN FORM ── */}
          {!isSignUp && (
            <div className="space-y-5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--heading)" }}>
                  Email
                </label>
                <input type="email" placeholder="name@email.com" className={inputClass} />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--heading)" }}>
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={`${inputClass} pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    style={{ color: "var(--muted)" }}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
                <div className="mt-2 text-right">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(true)}
                    className="text-[11px] tracking-wide hover:underline"
                    style={{ color: "var(--gold)" }}
                  >
                    Forgot Password?
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── SIGN-UP STEP 1 ── */}
          {isSignUp && step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color: "var(--heading)" }}>
                  Select Role
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Client", "Designer", "Architect", "Contractor"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setRole(item)}
                      className="rounded-full px-4 py-2 text-xs transition-all duration-300"
                      style={
                        role === item
                          ? { backgroundColor: "var(--gold)", color: "var(--primary)" }
                          : { backgroundColor: "rgba(212,175,55,0.1)", color: "var(--text)" }
                      }
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--heading)" }}>
                  Full Name
                </label>
                <input type="text" placeholder="John Doe" className={inputClass} />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--heading)" }}>
                  Username
                </label>
                <input type="text" placeholder="johndoe123" className={inputClass} />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--heading)" }}>
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <select
                    value={phoneCode}
                    onChange={(e) => setPhoneCode(e.target.value)}
                    className="w-[100px] shrink-0 rounded-xl border px-2 py-3.5 text-sm outline-none cursor-pointer"
                    style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)", color: "var(--heading)" }}
                  >
                    {COUNTRY_CODES.map((cc) => (
                      <option key={cc.code} value={cc.code}>{cc.label}</option>
                    ))}
                  </select>
                  <input type="tel" placeholder="Phone number" className={`${inputClass} flex-1`} />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--heading)" }}>
                  Email
                </label>
                <div className="flex gap-2">
                  <input type="email" placeholder="name@email.com" className={`${inputClass} flex-1`} />
                  <button
                    type="button"
                    className="rounded-xl border px-4 text-xs font-medium shrink-0"
                    style={{ borderColor: "var(--gold)", color: "var(--gold)", backgroundColor: "rgba(212,175,55,0.05)" }}
                  >
                    Send OTP
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--heading)" }}>
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Min 8 chars, uppercase, digit, special"
                    className={`${inputClass} pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    style={{ color: "var(--muted)" }}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="text-xs" style={{ color: "var(--text)" }}>
                  I agree to the{" "}
                  <a href="/terms" style={{ color: "var(--gold)" }}>Terms and Conditions</a>
                </label>
              </div>
            </div>
          )}

          {/* ── SIGN-UP STEP 2 ── */}
          {isSignUp && step === 2 && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[10px]"
                    style={{ backgroundColor: "var(--border)", color: "var(--muted)" }}
                  >
                    ✓
                  </div>
                  <span className="text-[10px] tracking-wide" style={{ color: "var(--muted)" }}>Account</span>
                </div>
                <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium"
                    style={{ backgroundColor: "var(--gold)", color: "var(--primary)" }}
                  >
                    2
                  </div>
                  <span className="text-[10px] tracking-wide capitalize" style={{ color: "var(--gold)" }}>
                    {role} Details
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--heading)" }}>
                  Country
                </label>
                <select value={country} onChange={(e) => setCountry(e.target.value)} className={inputClass}>
                  <option value="">Select Country</option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--heading)" }}>
                  Location
                </label>
                <button type="button" className={`${inputClass} text-left`}>
                  📍 Use Current Location
                </button>
              </div>

              {roleConfig && (
                <>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
                    <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "var(--muted)" }}>
                      {role} Profile
                    </span>
                    <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
                  </div>

                  {roleConfig.fields.map((field) => (
                    <div key={field.id}>
                      <label className="block text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--heading)" }}>
                        {field.label}
                      </label>

                      {field.type === "textarea" && (
                        <textarea
                          rows={3}
                          placeholder={field.placeholder}
                          value={roleFields[field.id] || ""}
                          onChange={(e) => setRoleField(field.id, e.target.value)}
                          className={inputClass}
                        />
                      )}

                      {(field.type === "text" || field.type === "number") && (
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={roleFields[field.id] || ""}
                          onChange={(e) => setRoleField(field.id, e.target.value)}
                          className={inputClass}
                        />
                      )}

                      {field.type === "select" && (
                        <select
                          value={roleFields[field.id] || ""}
                          onChange={(e) => setRoleField(field.id, e.target.value)}
                          className={inputClass}
                        >
                          <option value="">Select {field.label}</option>
                          {field.options?.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
          )}

          {isSignUp && step === 2 && (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mb-4 mt-8 text-sm hover:underline"
              style={{ color: "var(--muted)" }}
            >
              ← Back
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              if (isSignUp && step === 1) setStep(2)
            }}
            className="mt-5 w-full rounded-full py-3.5 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:tracking-[0.2em] active:scale-[0.98]"
            style={{
              background: "linear-gradient(to right, var(--gold), var(--gold-hover))",
              color: "var(--primary)",
            }}
          >
            {isSignUp ? (step === 1 ? "Next" : "Create Account") : "Sign In"}
          </button>

          {!isSignUp && (
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
              <span className="text-[10px] tracking-widest uppercase" style={{ color: "var(--muted)" }}>or</span>
              <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
            </div>
          )}

          <p className="text-center text-xs mt-6" style={{ color: "var(--muted)" }}>
            {isSignUp ? "Already have an account?" : "Don't have an account yet?"}
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp)
                setStep(1)
                setRoleFields({})
              }}
              className="ml-1 hover:underline"
              style={{ color: "var(--heading)" }}
            >
              {isSignUp ? "Sign In" : "Create One"}
            </button>
          </p>

          {!isSignUp && (
            <button
              type="button"
              className="mt-4 w-full flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium border transition-colors"
              style={{ backgroundColor: "var(--surface)", color: "var(--heading)", borderColor: "var(--border)" }}
            >
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g>
                  <path d="m0 0H512V512H0" fill="#fff" />
                  <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                  <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                  <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                </g>
              </svg>
              Continue with Google
            </button>
          )}
        </div>

        <p className="absolute bottom-6 right-8 text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--muted)" }}>
          © 2026 NOD
        </p>
      </div>

      {/* ── FORGOT PASSWORD MODAL ── */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div
            className="relative w-full max-w-md rounded-2xl border p-8 shadow-2xl"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--gold)" }}
          >
            <button
              onClick={() => setShowForgotModal(false)}
              className="absolute right-4 top-4"
              style={{ color: "var(--muted)" }}
            >
              ✕
            </button>

            <h3 className="text-2xl font-light mb-1" style={{ color: "var(--heading)", fontFamily: "var(--font-heading)" }}>
              Recover Password
            </h3>
            <p className="text-xs mb-6" style={{ color: "var(--text)" }}>
              Enter your email address to receive a link to reset your password.
            </p>

            <label className="block text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--heading)" }}>
              Email Address
            </label>
            <input type="email" placeholder="name@email.com" className={inputClass} />

            <div className="flex gap-3 pt-6">
              <button
                type="button"
                onClick={() => setShowForgotModal(false)}
                className="flex-1 rounded-full border py-3 text-xs uppercase tracking-wider"
                style={{ borderColor: "var(--border)", color: "var(--text)" }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="flex-1 rounded-full py-3 text-xs font-medium uppercase tracking-wider"
                style={{
                  background: "linear-gradient(to right, var(--gold), var(--gold-hover))",
                  color: "var(--primary)",
                }}
              >
                Send Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}