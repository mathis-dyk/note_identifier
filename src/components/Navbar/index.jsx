import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import { useAuth } from "context/auth";


const Navbar = () => {
  const { authTokens, setAuthTokens } = useAuth();

  const logOut = () => {
    setAuthTokens(null);
      localStorage.setItem("userid", null)
  }

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

        {
          !authTokens && (
            <div className="nav-auth">
              <li>
                <Link to="/signup" className="signup">Sign up</Link>
              </li>
              <li>
                <Link to="/login" className="login">Login</Link>
              </li>
            </div>
          )
        }

        {
          authTokens && (
            <div className="nav-auth">
              <li>
                <Link to="/profile" className="profile signup">Profile</Link>
              </li>
              <li><button onClick={logOut}>Log Out</button></li>
            </div>
          )
        }
      </ul>
    </nav>
  );
}

export default Navbar
