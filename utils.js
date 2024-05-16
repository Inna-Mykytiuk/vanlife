// import { redirect } from "react-router-dom"

// export async function requireAuth(request) {
//   const pathname = new URL(request.url).pathname
//   const isLoggedIn = localStorage.getItem("loggedin")

//   if (!isLoggedIn) {
//     throw redirect(
//       `/login?message=You must log in first.&redirectTo=${pathname}`
//     )
//   }
// }

import { redirect } from "react-router-dom"

export async function requireAuth() {
  const isLoggedIn = localStorage.getItem("loggedin")

  if (!isLoggedIn) {
    throw redirect(
      `/login?message=You must log in first.`
    )
  }
}

// export async function requireAuth() {

//   const isLoggedIn = true

//   if (!isLoggedIn) {
//     const response = redirect("/login")
//     response.body = true
//     throw response
//   }
//   return null
// }