import React, { createContext, useEffect, useState } from 'react'
import Products from '../Components/Product'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import About from '../Pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import SingleProduct from '../Pages/SingleProduct'
import axios from 'axios'
// import { getFirestore } from 'firebase/firestore'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Loginpage from "../Pages/Loginpage"
import Dashboard from '../Components/Dashboard'
import Contactus from '../Components/Contactus'



export const ecomContext = createContext(null)


// const db=getFirestore(firebase)

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  // function addProductToCart(product) {
  //   const productFound = cart.find((cartitem) => cartitem.id === product.id);
  //   if (productFound) {
  //     increment(product.id);
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // }

  useEffect(() => {
    async function fetchData() {
      const result = await axios("https://strapi-store-server.onrender.com/api/products");
      // console.log(result.data.data);
      setProducts(result.data.data);
    }
    fetchData();
  }, []);

  function addProductToCart(productToAdd) {
    const ProductAddingToCart = { ...productToAdd, quantity: 1 };
    setCart([...cart, ProductAddingToCart])
  }
  // console.log(cart)

  function handleRemoveFromCart(productID) {
    setCart(cart.filter((cartitem) => { return cartitem.id !== productID }));
  }

  function increment(productID) {
    setCart(cart.map((cartitem) =>
      cartitem.id === productID ?
        { ...cartitem, quantity: cartitem.quantity + 1 } :
        cartitem));
  }


  function decrement(productID) {
    setCart(cart.map((cartitem) =>
      cartitem.id === productID ?
        { ...cartitem, quantity: cartitem.quantity - 1 } :
        cartitem));
  }

  function isProductAddedToCart(product) {
    return cart.find((cartitem) => cartitem.id === product.id);
  }

  function getproductquantity(productID) {
    const productFound = cart.find((cartitem) => {
      return cartitem.id === productID;
    })
    return productFound.quantity;
  }

  return (
    <BrowserRouter>
      {products.length > 0 ?
        <ecomContext.Provider value={{ products, setProducts, cart, setCart, addProductToCart, handleRemoveFromCart, isProductAddedToCart, getproductquantity, increment, decrement }}>
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/cart' element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path='/products/:id' element={<SingleProduct />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/contactus' element={<Contactus />} />


              <Route path='/loginpage' element={<Loginpage />} />
            </Routes>
          </main>
        </ecomContext.Provider>
        : ""
      }
    </BrowserRouter>
  );
}

export default App