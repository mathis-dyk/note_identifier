import React from 'react'
import './index.scss'

const Signup = () => {
  return (
    <section className="signup">
      <h1>Signup</h1>
      <form>
        <input type="text" />
        <input type="mail" />
        <input type="password" />
        <input type="password" />
        <input type="submit" />
      </form>
      <p>Vous avez déjà un compte ? <span>Connectez vous</span></p>
    </section>
  )
}

export default Signup
