import axios from 'axios';
import React, { useEffect, useState } from 'react'
import headerImage from '../assets/header-image.webp'

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