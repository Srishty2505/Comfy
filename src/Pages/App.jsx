import React, { createContext, useState } from 'react'
import Products from '../Components/Product'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import About from '../Pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'


export const ecomContext = createContext(null)


function App() {

  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([]);


  function addProductToCart(product) {
    setCart([...cart, product])
  }
  console.log(cart)




  return (
    <>
      <BrowserRouter>
        <ecomContext.Provider value={{ products, setProducts, cart, setCart, addProductToCart }}>
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/products' element={<Products />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </main>
        </ecomContext.Provider>
      </BrowserRouter>
      {/* <Products></Products> */}
    </>
  )
}

export default App