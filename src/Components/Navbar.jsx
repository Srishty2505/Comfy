import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <header>
                <h2><Link to="/">C</Link></h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </header>
        </>
    )
}

export default Navbar