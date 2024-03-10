
import {useEffect, useState} from "react";
import {getAllProducts} from "../../api/products.js";
import './Products.scss'
import Product from "./Product.jsx";
import Loading from "../../ui/Loading.jsx";
import BackToTopButton from "../BackToTopButton/BackToTopButton.jsx";


const Products = () => {
    const [products, setProducts] = useState([])
    const [modal, setModal] = useState(false)


    useEffect(() => {
        getAllProducts().then(data => setProducts(data))
    }, []);

    if(!products || products.length === 0){
        return <Loading/>
    }

    console.log(products)

    return (
        <>
        <header className='products__header'>
            <h2 onClick={() => setModal(prev => !prev)}>Products</h2>
            <h2>Amount: {products.length}</h2>
        </header>
            {
                modal && <h2>
                    start
                </h2>
            }
        <div className="products">
            {
                products.map(product => <Product key={product.id} product={product}/>)
            }
        </div>
            <BackToTopButton/>
        </>
    )
}

export default Products