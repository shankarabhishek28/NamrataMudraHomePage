import React from 'react'
import '../components/Navbar.css'

import '@fortawesome/fontawesome-free/css/all.css';
import LOGO from '../Images/logo.png'
import { MdAccountBox } from "react-icons/md";



const Navbar = () => {
  return (
    <nav>
      <div className='nav_container' >

        <ul className='nav_links'>
          <li><a>PERSONAL LOAN</a></li>
          <li><a>BUSINESS LOAN</a></li>
          <li className='left'><a>INSTANT LOAN</a></li>
          <div className='logo'><img src={LOGO} /></div>

          <li className='right'><a>SECURE LOAN</a></li>


          <div className='search-bar'>
            <input type='search' placeholder='Search...' />
            <button><i className='fas fa-search'></i></button>
          </div>
          <div className="account">
            <div className="acl">
            <MdAccountBox />
            </div>
            
            <div className="options">
              <span className="login-option">Login</span>
              <span className="signup-option">Sign Up</span>
            </div>
          </div>


        </ul>

      </div>
    </nav>
  )
}

export default Navbar