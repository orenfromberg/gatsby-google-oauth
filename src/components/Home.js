import React from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"

const Home = () => {
  const { profileObj } = getCurrentUser()

  return (
    <View title="Your Profile">
      <p>Welcome back, {profileObj.name}!</p>
    </View>
  )
}

export default Home