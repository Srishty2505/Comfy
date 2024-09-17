import React from 'react'
import Products from '../Components/Product'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Products></Products> */}
    </>
  )
}

export default App