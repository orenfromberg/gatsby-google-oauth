import React from "react"
import { navigate } from "gatsby"
import Form from "./Form"
import View from "./View"
import { handleLogin, isLoggedIn } from "../utils/auth"
import GoogleLogin from 'react-google-login'

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    handleLogin(this.state)
  }

  responseGoogle(response) {
    console.log(response);
  }

  handleSuccess(response) {
    handleLogin(response)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <View title="Log In">
        {/* <Form
          handleUpdate={e => this.handleUpdate(e)}
          handleSubmit={e => this.handleSubmit(e)}
        /> */}
        <GoogleLogin
            clientId={process.env.GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={this.handleSuccess}
            onFailure={this.responseGoogle}
        />
      </View>
    )
  }
}

export default Login