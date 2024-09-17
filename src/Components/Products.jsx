import axios from 'axios';
import React, { useEffect, useState } from 'react'





function Products() {
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
        <div id='products'>
          {products.length === 0 ? (
            <p>No products available</p>
          ) : (
            products.map((product) => (
              <div key={product.id} className='product'>
                <h2>{product.attributes.title}</h2>
                <p>{product.attributes.company}</p>
                <p>${product.attributes.description}</p>
                <img src={product.attributes.image} alt="" />
                
              </div>
            ))
          )}
        </div>
      );
    }

export default Products