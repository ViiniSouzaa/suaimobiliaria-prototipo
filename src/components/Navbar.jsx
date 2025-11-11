import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="brand">Sua Imobiliária</div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/properties">Imóveis</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/contact">Contato</NavLink>
      </div>
    </nav>
  )
}
