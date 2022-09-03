import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

  return (
    <header>
      <nav>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
      </nav>
    </header>
  )
}

export default Header
