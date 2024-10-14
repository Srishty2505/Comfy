import axios from 'axios';
// import Product from "../Components/Product.jsx"
import React, { useContext, useEffect, useState } from 'react'
import headerImage from '../assets/header-image.webp'
import { ecomContext } from '../Pages/App';

function FeaturedProducts() {

    const { products, setProducts } = useContext(ecomContext)
    const [fp, setFP] = useState([]);


    useEffect(() => (products.length > 0) ? setFP(products.filter(product => product.attributes.featured)) : ""
        , [])


    console.log(fp)
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
            {fp.length === 0 ? (
                <p>No products available</p>
            ) : (
                <>
                    <h1>Featured Product</h1>
                    <div className="featuredProducts">
                        {fp.map((product, index) => (
                            <div key={product.id} className='product'>
                                <div className='mainpare'>
                                    <div className='homeinfo'>
                                        <div className='info'>

                                            <img src={product.attributes.image} alt="" />
                                            <h1>{product.attributes.title}</h1>
                                            <h2>{product.attributes.company}</h2>
                                            <p>${product.attributes.price / 100}</p>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        ))
                        }
                    </div>
                </>
            )}
        </div>
    );
}

export default FeaturedProducts