import React from 'react'
import './index.scss'
import useInput from 'hooks/useInput'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = (props) => {
  const { value:Name, bind:bindName, reset: resetName } = useInput('');
  const { value:Email, bind:bindEmail, reset: resetEmail } = useInput('');
  const { value:Password, bind:bindPassword, reset: resetPassword } = useInput('');
  const { value:PasswordConfirm, bind:bindPasswordConfirm, reset: resetPasswordConfirm } = useInput('');

  const errorToast = (message) => toast.error(message);
  const successToast = (message) => toast.success(message);

  const handleSubmit = (e) => {
      e.preventDefault();

      if (Password !== PasswordConfirm) {
        errorToast("Le mot de passe ainsi que la confirmation du mot de passe ne sont pas identiques.");
        return
      }

      fetch(`${process.env.REACT_APP_BACK_URL}auth/register`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: Name,
          email: Email,
          password: Password,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.err) {
            errorToast(response.err)
          } else {
            successToast("You are well suscribed")
            resetEmail()
            resetName()
            resetPassword()
            resetPasswordConfirm()
          }
        })
    }

  return (
    <section className="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" {...bindName} />
        <input placeholder="Mail" type="mail" {...bindEmail} />
        <input placeholder="Password" type="password" {...bindPassword} />
        <input
          placeholder="Confirm Password"
          type="password"
          {...bindPasswordConfirm}
        />
        <input type="submit" />
      </form>
      <p>
        Vous avez déjà un compte ? <span>Connectez vous</span>
      </p>
      <ToastContainer />
    </section>
  );
}

export default Signup
