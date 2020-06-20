// LIBS 

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES

import Home from 'pages/Home'
import Games from 'pages/Games'
import Signup from 'pages/Signup'
import Login from 'pages/Login'
import Lessons from "pages/Lessons";
import Lesson from "pages/Lesson";
import Navbar from 'components/Navbar'
import NoteIdentification from './pages/NoteIdentification';
import Profile from 'pages/Profile'

// CONTEXT
import { AuthContext } from "./context/auth";

// COMPONENTS
import PrivateRoute from "components/PrivateRoute";

// SCSS

import './index.scss'
import './reset.scss'

const App = (props) => {
  const existingTokens = JSON.parse(localStorage.getItem("tokens")) || '';
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data, userid = null) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    localStorage.setItem("userid", JSON.stringify(userid))
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route
              path="/games/dechiffre-une-partition"
              component={NoteIdentification}
            />
            <Route path="/games" component={Games} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/lessons/:slug" children={<Lesson />} />
            <Route path="/lessons" component={Lessons} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

ReactDOM.render(<App />,document.querySelector("#root"))
