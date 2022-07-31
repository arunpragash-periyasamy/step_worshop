import React from 'react'
import "./loginForm.css"

const LoginForm = () => {
  return (
    <section class="login-form">
                <div class="logo-container">
                    <img src="/asserts/logo.png" alt="Foodie Logo" />
                </div>
                <form action="">
                    <h1 class="login-heading">Sign In</h1>
                    <div class="input-fields">
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div class="input-fields">
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div class="input-fields">
                        <button class="login-button" type="submit">LOGIN</button>
                    </div>
                    <span class="forgot-password">Forgot Password?</span>
                    <a href="/">Click Here</a>
                </form>
            </section>
  )
}

export default LoginForm