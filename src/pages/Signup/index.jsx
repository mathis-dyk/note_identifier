import React, { useState } from 'react'
import './index.scss'
import useInput from 'hooks/useInput'
import { handleErrors } from 'tools'

const Signup = () => {
  const { value:Name, bind:bindName } = useInput('');
  const { value:Email, bind:bindEmail } = useInput('');
  const { value:Password, bind:bindPassword } = useInput('');
  const { value:PasswordConfirm, bind:bindPasswordConfirm } = useInput('');
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault();

      if (Password !== PasswordConfirm) {
        setError('Le mot de passe ainsi que la confirmation du mot de passe ne sont pas identiques.')
        return
      }

      fetch(`${process.env.REACT_APP_BACK_URL}auth/register`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "name" : Name,
          "email" : Email,
          "password" : Password
        })
      })
      .then(handleErrors)
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
  }

  return (
    <section className="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" {...bindName} />
        <input placeholder="Mail" type="mail" {...bindEmail} />
        <input placeholder="Password" type="password" {...bindPassword} />
        <input placeholder="Confirm Password" type="password" {...bindPasswordConfirm} />
        <input type="submit" />
        <p className="error">{ error }</p>
      </form>
      <p>Vous avez déjà un compte ? <span>Connectez vous</span></p>
    </section>
  )
}

export default Signup
