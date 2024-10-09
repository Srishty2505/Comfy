import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ecomContext } from '../Pages/App';
import CartQty from "../Components/cartQty"





function Product() {
  const { products, setProducts, addProductToCart, isProductAddedToCart } = useContext(ecomContext)


  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios("https://strapi-store-server.onrender.com/api/products");
  //     console.log(result.data.data);
  //     setProducts(result.data.data);
  //   }
  //   fetchData();
  // }, []);




  return (
    <div id='product'>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className='product'>
            <Link to={`${product.id}`}>
              <img src={product.attributes.image} alt={product.attributes.title} />
            </Link>
            <div className='info'>

              <h5>{product.attributes.title}</h5>
              {/* <p><span>{product.attributes.description}</span></p> */}
              <p><span>${product.attributes.price}</span></p>
              {isProductAddedToCart(product) ? (
                <CartQty productID={product.id} />
              ) : (
                <Link to="" onClick={() => addProductToCart(product)}>Add to Cart</Link>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Product