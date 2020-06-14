import React from 'react'
import ReactDOM from 'react-dom'
import NoteShower from './components/NoteShower'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from 'pages/Home'
import Games from 'pages/Games'
import Signup from 'pages/Signup'
import Login from 'pages/Login'
import Navbar from 'components/Navbar'
import './index.scss'
import './reset.scss'

const App = () => {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/games" component={Games} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
