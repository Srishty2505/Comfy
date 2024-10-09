import axios from 'axios';
import Product from "../Components/Product.jsx"
import React, { useContext, useEffect, useState } from 'react'
import headerImage from '../assets/header-image.webp'
import { ecomContext } from '../Pages/App';

function FeaturedProducts() {

    const { products, setProducts } = useContext(ecomContext)
    // useEffect(() => {
    //     async function fetchData() {
    //         const result = await axios("https://strapi-store-server.onrender.com/api/products");
    //         console.log(result.data.data);
    //         setProducts(result.data.data.filter((product) => {
    //             return product.attributes.featured === true
    //         }))
    //     }
    //     fetchData();
    // }, []);







    return (
        <div id='products'>
            <div className='hproducts'>

                       
                <div className='part1'>
                    
                    <h1>We are changing the way people shop</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
                    <button>Our products</button>
                </div>
                <div className='part2'>

                    <img src={headerImage} alt="" />

                </div>
            </div>
            {products.length === 0 ? (
                <p>No products available</p>
            ) : (
                products.map((product , index) => (
                    
                    <div key={product.id} className='product'>
                        
                        <div className='info'>
                            {index === 0 && <h1>Featured Product</h1>} 
                            <img src={product.attributes.image} alt="" />
                            <h1>{product.attributes.title}</h1>
                            <h2>{product.attributes.company}</h2>
                            <p>{product.attributes.description}</p>
                            <p>${product.attributes.price}</p>
                        </div>



                    </div>
                ))
            )}
        </div>
    );
}

export default FeaturedProducts