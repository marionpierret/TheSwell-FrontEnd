import React from 'react'
import { Link, withRouter, useHistory, useNavigate } from 'react-router-dom'
import iconLogin from '../images/power-off.png'
import iconProfile from '../images/account.png'
import iconHome from '../images/home.png'



const Navbar = () =>  {
  let navigate = useNavigate()


  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    navigate(`/`)
  }
  
  const loginRegLink = (
    <div className="navbar">
<div nav-link>
        <Link to="/login" className="nav-link">
          <img src={iconLogin} alt='login'/>
        </Link>


        <Link to="/register" className="nav-link">
        <img src={iconLogin} alt='login'/>
        </Link>
</div>
    </div>
  )

  
  const userLink = (
    <div className="navbar">
<div nav-link>
        <Link to="/profile" className="nav-link">
          <img src={iconProfile} alt='my-profile'></img>
        </Link>
      
        <a href="" onClick={logOut} className="nav-link">
        <img src={iconLogin} alt='logout'/>
        </a>
</div>
    </div>
  )
   

    return (
        
        
      <div className="navbar">
              <Link to="/" className="nav-link">
              <img src={iconHome} alt='home'/>
              </Link>
          {localStorage.usertoken ? userLink : loginRegLink}
      </div>
    )
  }

export default Navbar 