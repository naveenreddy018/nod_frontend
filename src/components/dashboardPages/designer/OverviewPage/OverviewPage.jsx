import React from "react"
import { useGetUserDetailsQuery } from "./overpageApiSlice"

export default function OverviewPage() {
  const { data, isLoading, isError, error } = useGetUserDetailsQuery()

  if (isLoading) {
    return <div className="p-6 text-sm text-gray-500">Loading user details...</div>
  }

  if (isError) {
    return (
      <div className="p-6 text-sm text-red-500">
        Failed to load user details: {error?.data?.message || "Something went wrong"}
      </div>
    )
  }

  const user = data?.data

  if (!user) {
    return <div className="p-6 text-sm text-gray-500">No user details found.</div>
  }

  const ROLE_LABELS = { 1: "Client", 2: "Designer", 3: "Architect", 4: "Contractor" }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-light mb-6">DesignerOverview</h2>

      <div className="rounded-xl border border-gray-200 bg-white p-6 max-w-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-lg font-medium text-gray-600">
            {user.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-lg font-medium">{user.name}</p>
            <p className="text-xs text-gray-500">@{user.username}</p>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <Row label="Email" value={user.email} />
          <Row label="Phone" value={`${user.countryCode} ${user.phone}`} />
          <Row label="Role" value={ROLE_LABELS[user.role] || user.role} />
          <Row label="City" value={user.city} />
          <Row label="State" value={user.state} />
          <Row label="Country" value={user.country} />
          <Row label="Address" value={user.address} />
          <Row label="Verified" value={user.isVerified ? "Yes" : "No"} />
          <Row label="Blocked" value={user.isBlocked ? "Yes" : "No"} />
          <Row label="Wallet Balance" value={`₹${user.walletBalance}`} />
        </div>
      </div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between border-b border-gray-100 pb-2">
      <span className="text-gray-400">{label}</span>
      <span className="text-gray-800 text-right max-w-[65%]">{value || "—"}</span>
    </div>
  )
}