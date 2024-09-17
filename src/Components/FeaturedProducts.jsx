import axios from 'axios';
import React, { useEffect, useState } from 'react'

function FeaturedProducts() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchData() {
            const result = await axios("https://strapi-store-server.onrender.com/api/products");
            console.log(result.data.data);
            setProducts(result.data.data.filter((product) => {
                return product.attributes.featured === true
            }))
        }
        fetchData();
    }, []);







    return (
        <div id='products'>
            {products.length === 0 ? (
                <p>No products available</p>
            ) : (
                products.map((product) => (
                    <div key={product} className='product'>
                        <div className='info'>
                        <img src={product.attributes.image} alt="" />
                        <h2>{product.attributes.title}</h2>
                <h3>{product.attributes.company}</h3>
                <p>${product.attributes.description}</p>
                        </div>
                         
                       

                    </div>
                ))
            )}
        </div>
    );
}

export default FeaturedProducts