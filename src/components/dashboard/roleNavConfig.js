import {
  Home,
  FolderKanban,
  Search,
  MessageSquare,
  CreditCard,
  Settings,
  Image,
  FileText,
  Wallet,
  Wrench,
  FileSignature,
} from "lucide-react"

// Role codes match the backend enum: 1=Client, 2=Designer, 3=Architect, 4=Contractor
export const ROLE_NAMES = {
  1: "Client",
  2: "Designer",
  3: "Architect",
  4: "Contractor",
}

export const NAV_CONFIG = {
  1: [ // Client
    { label: "Overview", path: "/dashboard", icon: Home, end: true },
    { label: "My Projects", path: "/dashboard/projects", icon: FolderKanban },
    { label: "Find a Pro", path: "/dashboard/find", icon: Search },
    { label: "Messages", path: "/dashboard/messages", icon: MessageSquare },
    { label: "Payments", path: "/dashboard/payments", icon: CreditCard },
    { label: "Settings", path: "/dashboard/settings", icon: Settings },
  ],
  2: [ // Designer
    { label: "Overview", path: "/dashboard", icon: Home, end: true },
    { label: "Portfolio", path: "/dashboard/portfolio", icon: Image },
    { label: "Proposals", path: "/dashboard/proposals", icon: FileSignature },
    { label: "Active Projects", path: "/dashboard/projects", icon: FolderKanban },
    { label: "Messages", path: "/dashboard/messages", icon: MessageSquare },
    { label: "Earnings", path: "/dashboard/earnings", icon: Wallet },
    { label: "Settings", path: "/dashboard/settings", icon: Settings },
  ],
  3: [ // Architect
    { label: "Overview", path: "/dashboard", icon: Home, end: true },
    { label: "Portfolio", path: "/dashboard/portfolio", icon: Image },
    { label: "Proposals", path: "/dashboard/proposals", icon: FileSignature },
    { label: "Active Projects", path: "/dashboard/projects", icon: FolderKanban },
    { label: "License & Docs", path: "/dashboard/documents", icon: FileText },
    { label: "Messages", path: "/dashboard/messages", icon: MessageSquare },
    { label: "Earnings", path: "/dashboard/earnings", icon: Wallet },
    { label: "Settings", path: "/dashboard/settings", icon: Settings },
  ],
  4: [ // Contractor
    { label: "Overview", path: "/dashboard", icon: Home, end: true },
    { label: "Active Jobs", path: "/dashboard/projects", icon: Wrench },
    { label: "Bids & Quotes", path: "/dashboard/proposals", icon: FileSignature },
    { label: "Messages", path: "/dashboard/messages", icon: MessageSquare },
    { label: "Payments", path: "/dashboard/earnings", icon: Wallet },
    { label: "Settings", path: "/dashboard/settings", icon: Settings },
  ],
}

// Reads the logged-in user out of localStorage (set during login/account creation)
export const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem("userData") || "null")
  } catch {
    return null
  }
}