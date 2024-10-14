import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ecomContext } from '../Pages/App'




function Navbar() {
const {cart} = useContext(ecomContext)

    return (
        <>
            <header>
                <h2><Link to="/">C</Link></h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/cart">Cart<span> {   cart.length}</span></Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/loginpage">Login</Link></li>
                    <li><Link to="/contactus">Contact US</Link></li>
                    
                </ul>
            </header>
        </>
    )
}

export default Navbar