// src/router/RoleSwitch.jsx
import { Navigate } from "react-router-dom"
import { getStoredUser } from "../components/dashboard/roleNavConfig"

export default function RoleSwitch({ map }) {
  const user = getStoredUser()
  const role = user?.role
  const Component = map?.[role]

  if (!Component) return <Navigate to="/dashboard" replace />

  return <Component />
}