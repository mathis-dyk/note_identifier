import React, { useState } from 'react'
import './index.scss'
import { useAuth } from 'context/auth'
import { Redirect } from 'react-router-dom'
import useInput from 'hooks/useInput'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError] = useState(false);
  const { setAuthTokens } = useAuth();
  const referer = (props.location.state && props.location.state.referer) || '/';
  const { value:userName, bind:bindUserName } = useInput('');
  const { value:password, bind:bindPassword } = useInput('');

  const errorToast = (message) => toast.error(message);

  const postLogin = (e) => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_BACK_URL}auth/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userName,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.err) {
          setAuthTokens(response.token, response.userId);
          setLoggedIn(true);
        } else {
          errorToast(response.err);
        }
      })
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <section className="login">
      <h1>Login</h1>
      <form>
        <input
          type="username"
          value={userName}
          {...bindUserName}
          placeholder="email" />
        <input
          type="password"
          value={password}
          {...bindPassword}
          placeholder="password" />
        <button onClick={postLogin}>Sign In</button>
      </form>
      { isError && <p>The username or password provided were incorrect!</p> }
      <ToastContainer />
    </section>
  )
}

export default Login
