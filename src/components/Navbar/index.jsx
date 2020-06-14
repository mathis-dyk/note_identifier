import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
        </div>

        <div className="nav-auth">
          <li>
            <Link to="/signup" className="signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login" className="login">Login</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar
