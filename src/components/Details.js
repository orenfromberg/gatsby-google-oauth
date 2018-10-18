import React from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"

const Details = () => {
  // const { name, legalName, email } = getCurrentUser()
  const { profileObj } = getCurrentUser();


  return (
    <View title="Your Details">
      <ul>
        <li>Preferred name: {profileObj.name}</li>
        <li>Email address: {profileObj.email}</li>
      </ul>
    </View>
  )
}

export default Details