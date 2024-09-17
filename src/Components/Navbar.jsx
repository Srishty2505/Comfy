import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <header>
                <h2><Link to="/">Ecommerce</Link></h2>
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="">About</Link></li>
                    <li><Link to="">Cart</Link></li>
                    <li><Link to="">Login</Link></li>
                </ul>
            </header>
        </>
    )
}

export default Navbar