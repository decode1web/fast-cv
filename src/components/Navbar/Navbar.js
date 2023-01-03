import React from 'react'
// import UseAnimations from 'react-useanimations'
import { IoBag, IoHome, IoLanguage } from 'react-icons/io5'
import { FaEnvelope } from 'react-icons/fa' 
import { BsLaptopFill } from 'react-icons/bs'
import logo from '../../assets/1.png'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar' id='home-nav'>
        <h1 className='navbar-logo'>
          <img className='navbar-logo-icon' src={logo} alt='logo'/>
          <div className='navbar-logo-text'>Fast CV</div>
        </h1>
        <nav className='navbar-menu'>
          <NavLink className={({isActive}) => (isActive ? 'active' : '')} to='home'><IoHome /></NavLink>
          <NavLink className={({isActive}) => (isActive ? 'active' : '')} to='how-work'><BsLaptopFill /></NavLink>
          <NavLink className={({isActive}) => (isActive ? 'active' : '')} to='reviews'><FaEnvelope /></NavLink>
          <NavLink className={({isActive}) => (isActive ? 'active' : '')} to='languages'><IoLanguage /></NavLink>
        </nav>
    </nav>
  )
}


// --legacy-peer-deps for installing