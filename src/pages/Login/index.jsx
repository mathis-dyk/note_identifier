import React from 'react'
import './index.scss'

const Login = () => {
  return (
    <section className="login">
      <h1>Login</h1>
      <form>
        <input type="text" />
        <input type="password" />
        <input type="submit" />
      </form>
      <a href="">Mot de passe oublié ?</a>
    </section>
  )
}

export default Login
