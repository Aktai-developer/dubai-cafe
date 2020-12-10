import React from 'react'
import  { Link } from "react-router-dom"
import './header.css'
const Header = () => {
    return (
        <header className='bg position-absolute w-100'>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/">Cafe Dubai</Link>
                   <div className="navbar-nav ml-auto">
                       <Link className="nav-link" to="/">Home</Link>
                       <Link className="nav-link" to="/menu">Menu</Link>
                   </div>
                </nav>
            </div>
        </header>
    )
}

export default Header