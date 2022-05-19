import React from 'react'
import logo from '../Assets/turnerscars.png'
import "./Navbar.css"


const Navbar = () => {
  return (
    <>
      <div className='navbar-background'>
        <img className='logo' src= {logo} alt="logo" width={200}/>
      </div>
    </>
  )
}

export default Navbar