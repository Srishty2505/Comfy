import { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ecomContext } from "../Pages/App"
import CartQty from "../Components/cartQty"

function SingleProduct() {
    const { id } = useParams()
    const { products, addProductToCart } = useContext(ecomContext)
    console.log(products)
    const [displayedProduct, setDisplayedProduct] = useState({})


    useEffect(() => {
        if (products.length > 0) {
            const productToDisplay = products.find((product) => {
                return product.id === Number(id)
            })
            setDisplayedProduct(productToDisplay)
        }
    }, [products, id])

    console.log(displayedProduct)


    return (
        <>
            {Object.keys(displayedProduct).length >0 ? (
                <div className="singleProduct">
                    <div className="left">
                        <img src={displayedProduct.attributes.image} alt={displayedProduct.attributes.title} />
                    </div>
                    <div className="right">
                        <h3>{displayedProduct.attributes.title}</h3>
                        <p>Category: {displayedProduct.attributes.category}</p>
                        <p>Price: <strong>{displayedProduct.attributes.price/100}</strong></p>
                        {/* <Link to="#" onClick={() => addProductToCart(displayedProduct)}>Add to Cart</Link> */}
                        {/* <CartQty productID={displayedProduct.id} /> */}
                    </div>
                </div>
            ) : (
                <p>Product not found.</p>
            )}
        </>
    );
}

export default SingleProduct