import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
    <div className='navbar'>
    
    <Link exact activeClassName="active_class" to='/'>ComA</Link>
    <Link exact activeClassName="active_class" to='/contact'>Contact Us</Link>
    <Link exact activeClassName="active_class" to='/about'>About Us</Link>
    <Link exact activeClassName="active_class" to='/users/hello'>User</Link>
    
    </div>
    </>
  )
}
export default NavBar;
