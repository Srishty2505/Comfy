import React, { useContext, useEffect, useState } from 'react'
import { ecomContext } from './App'
import { Link } from 'react-router-dom'
import { FaRupeeSign } from "react-icons/fa";
import CartQty from '../Components/cartQty'



function Cart() {
  const { cart } = useContext(ecomContext)

  const [carttotal, setcarttotal] = useState(0)
  const [deliveryfees, setdeliveryfees] = useState(0)
  console.log(cart)

  useEffect(() => {
    let total = 0;
    cart.forEach((cartitem) => {
      total += cartitem.attributes.price * cartitem.quantity
    })
    setcarttotal(total.toFixed(2))

  }, [cart])


  return (
    <>
    <div className='cartmain'>

   
    <div className='carth1' >
    <h1 className='shoppings'>Shopping cart</h1>
    </div>
      
      {
        cart.length > 0 ?

          <div className='cart'>
            <div className='contents'>
              {
                cart.map((item) => {
                  return (
                    <div className='cartitem' key={item.id}>
                      <div className='left'>
                        <img src={item.attributes.image} alt="Cart Item" />

                      </div>
                      <div className='right'>
                        <h4>{item.attributes.title}</h4>
                        {/* <h4>{item.attributes.description}</h4> */}
                        <p>Price: <FaRupeeSign />{(item.attributes.price /100).toFixed(2)}</p>
                        <CartQty productID= {item.id}/>
                      </div>
                    </div>
                  )}
  )}
            </div>
            <div className='total'>
              <h3>Order Summary</h3>
              <ul>
                <li>
                  <span>Items:</span>
                  <span>{carttotal/100}</span>
                </li>
                <li>
                  <span>Delivery:</span>
                  <span>{deliveryfees}</span>
                </li>
              </ul>
              <hr />
              <h3>
                <span>Your Total :</span>
                <span>{(Number(carttotal /100) + Number(deliveryfees)).toFixed(2)}</span>
              </h3>

            </div>
          </div> :
          <h2 className="cmsg">Your cart is empty. <Link to="/"> Go Shopping</Link></h2>
      }
       </div>
    </>
  )
}

export default Cart