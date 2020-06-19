import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from 'pages/Home'
import Games from 'pages/Games'
import Signup from 'pages/Signup'
import Login from 'pages/Login'
import Navbar from 'components/Navbar'
import './index.scss'
import './reset.scss'
import NoteIdentification from './pages/NoteIdentification';
import { AuthContext } from "./context/auth";
import Admin from 'pages/Admin'
import Profile from 'pages/Profile'
import PrivateRoute from 'components/PrivateRoute'

const App = (props) => {
  const existingTokens = JSON.parse(localStorage.getItem("tokens")) || '';
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data, userid = null) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    localStorage.setItem("userid", JSON.stringify(userid))
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider  value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/games/dechiffre-une-partition" component={NoteIdentification} />
          <Route path="/games" component={Games} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      </Router>
    </AuthContext.Provider>
  );
}

ReactDOM.render(
      <App />,
  document.querySelector("#root")
);
