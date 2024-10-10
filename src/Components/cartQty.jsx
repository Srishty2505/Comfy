import { MdRemoveShoppingCart } from "react-icons/md";
import React, { useContext } from 'react'
import { ecomContext } from "../Pages/App";


function cartQty({ productID }) {
  const { handleRemoveFromCart, increment, decrement, getproductquantity, cart } = useContext(ecomContext)

  return (
    <div className='minicart'>
      <div className='cartqty'>
        <button onClick={() => increment(productID)}>+</button>
        <p>{getproductquantity(productID)}</p>

        <button onClick={() => decrement(productID)}>-</button>
      </div>
      <MdRemoveShoppingCart  className="cartbtn"  onClick={() => handleRemoveFromCart(productID)} />

    </div>
  )
}

export default cartQty