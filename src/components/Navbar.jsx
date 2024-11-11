import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{display: "flex", justifyContent: "space-between"}}>
        <h2>Logo</h2>
        <ul style={{display: 'flex', gap: "40px"}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
