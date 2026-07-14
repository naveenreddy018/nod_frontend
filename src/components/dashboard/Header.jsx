import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Bell, Search } from "lucide-react"
import { ROLE_NAMES } from "./roleNavConfig"

export default function Header({ user, sidebarCollapsed, title = "Dashboard" }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const roleLabel = ROLE_NAMES[user?.role] || "Account"
  const displayName = user?.name || user?.username || "there"
  const initials = displayName.slice(0, 2).toUpperCase()

  const handleLogout = () => {
    localStorage.removeItem("userData")
    navigate("/login")
  }

  return (
    <header
      className={`fixed top-0 right-0 z-10 flex items-center justify-between h-20 px-6 border-b transition-all duration-300 ${sidebarCollapsed ? "left-[76px]" : "left-64"
        }`}
      style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-xl font-light leading-tight" style={{ color: "var(--heading)", fontFamily: "var(--font-heading)" }}>
          {title}
        </h1>
        <p className="text-[11px] uppercase tracking-[0.2em] leading-tight" style={{ color: "var(--muted)" }}>
          {roleLabel} Dashboard
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:block relative">
          <Search
            size={16}
            strokeWidth={1.75}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: "var(--muted)" }}
          />
          <input
            type="search"
            placeholder="Search..."
            className="w-56 rounded-xl border pl-9 pr-4 py-2 text-sm outline-none"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)", color: "var(--text)" }}
          />
        </div>

        <button
          type="button"
          className="w-9 h-9 shrink-0 rounded-full border flex items-center justify-center"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
          title="Notifications"
        >
          <Bell size={17} strokeWidth={1.75} />
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex items-center gap-2"
          >
            <div
              className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{ backgroundColor: "var(--gold)", color: "var(--primary)" }}
            >
              {initials}
            </div>
          </button>

          {menuOpen && (
            <div
              className="absolute right-0 mt-2 w-48 rounded-xl border shadow-lg py-2 z-30"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            >
              <p className="px-4 py-1.5 text-sm truncate" style={{ color: "var(--heading)" }}>{displayName}</p>
              <p className="px-4 pb-2 text-[10px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>{roleLabel}</p>
              <div className="h-px" style={{ backgroundColor: "var(--border)" }} />
              <button
                type="button"
                onClick={() => navigate("/dashboard/settings")}
                className="w-full text-left px-4 py-2 text-sm hover:bg-black/5"
                style={{ color: "var(--text)" }}
              >
                Account Settings
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm hover:bg-black/5"
                style={{ color: "#c0392b" }}
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}