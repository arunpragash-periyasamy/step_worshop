import React from 'react'
import LoginBackgroundImage from '../../component/loginBackgroundImage/LoginBackgroundImage'
import LoginForm from '../../component/LoginForm/LoginForm'
import "./login.css"

const Login = () => {
  return (
    <main class="login-page">
            <LoginBackgroundImage />
            <LoginForm />
            
        </main>
  )
}

export default Login