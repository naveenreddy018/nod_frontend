// Reads the user object saved during login/account creation (see LoginPage.jsx)
export const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem("userData") || "null")
  } catch {
    return null
  }
}

// True if there's a stored user with a token
export const isAuthenticated = () => {
  const user = getCurrentUser()
  console.log(isAuthenticated, "isAuthenticated1w23")
  return !!(user && user.token)
}

export const logoutUser = () => {
  localStorage.removeItem("userData")
}