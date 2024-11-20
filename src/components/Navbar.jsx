import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className='nav'>
        {/* Aqui deberan agregar los Links */}
        <Link to={'/'}>Home</Link>
        <Link to={'/contacto'}>contacto</Link>
    </nav>
  )
}

export default Navbar