import { navigate } from "@reach/router";

const isBrowser = typeof window !== `undefined`

const getUser = () => window.localStorage.googleUser
    ? JSON.parse(window.localStorage.googleUser)
    : {}

// const getUser = () =>
//   window.localStorage.gatsbyUser
//     ? JSON.parse(window.localStorage.gatsbyUser)
//     : {}

const setUser = user => (window.localStorage.googleUser = JSON.stringify(user))
// const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user))

// export const handleLogin = ({ username, password }) => {
//   if (!isBrowser) return false

//   if (username === `gatsby` && password === `demo`) {
//     console.log(`Credentials match! Setting the active user.`)
//     return setUser({
//       name: `Jim`,
//       legalName: `James K. User`,
//       email: `jim@example.org`,
//     })
//   }

//   return false
// }

export const handleLogin = (user) => {
    if (!isBrowser) return false;

    if (user) {
        setUser(user);
        navigate(`/app/profile`)
    }

    return false;
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()

  return !!user.profileObj && !!user.profileObj.email
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return

  console.log(`Ensuring the \`gatsbyUser\` property exists.`)
  setUser({})
  callback()
}