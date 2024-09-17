import axios from 'axios';
import React, { useEffect, useState } from 'react'





function Product() {
    const [products , setProducts] = useState ([])
    useEffect(() => {
      async function fetchData() {
        const result = await axios("https://strapi-store-server.onrender.com/api/products");
        console.log(result.data.data);
        setProducts(result.data.data);
      }
      fetchData();
    }, []);
  
  
  
  
    return (
        <div id='product'>
          {products.length === 0 ? (
            <p>No products available</p>
          ) : (
            products.map((product) => (
              <div key={product} className='product'>
                        <div className='info'>

                <h2>{product.attributes.title}</h2>
                <h3>{product.attributes.company}</h3>
                <p>${product.attributes.description}</p>
                <img src={product.attributes.image} alt="" />
                
              </div>
              </div>
            ))
          )}
        </div>
      );
    }

export default Product