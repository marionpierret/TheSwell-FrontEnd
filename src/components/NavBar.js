import React from 'react'
import { useContext } from 'react'
import { TheSwellContext } from '../context/TheSwellContext'
import { Link, withRouter, useHistory, useNavigate, useParams } from 'react-router-dom'



const Navbar = () =>  {
  let navigate = useNavigate()
  const { value4, value9 } = useContext(TheSwellContext);
  const [users, setUsers] = value4;

  let { userId } = useParams();

  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    navigate(`/`)
  }
  
  const loginRegLink = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
    </ul>
  )

  

  const userLink = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to='/profile' className="nav-link">
          My profile
        </Link>
      </li>
      <li className="nav-item">
        <a href="" onClick={logOut} className="nav-link">
          Logout
        </a>
      </li>
    </ul>
  )
   

    return (
        
        
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    )
  }

export default Navbar 