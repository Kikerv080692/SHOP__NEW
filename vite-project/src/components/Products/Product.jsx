import {useNavigate} from "react-router-dom";

const Product = ({product}) => {
    const navigate = useNavigate()

    const viewProduct = (product) => {
        navigate(`product/${product.id}`, {state: {data: product}})
    }
    const addToBasket = (product) => {
        navigate(`cart`, {state: {data: product}})
        localStorage.setItem('product', JSON.stringify(product))
    }

    return (
        <div key={product.id} className="product">
            <img className="product__image" src={product.image} alt={product.title}/>
            <h2 className="product__title">
                {product.title.length > 30 ? product.title.slice(0, 30) + '...' : product.title}
            </h2>
            <p className="product__category">{product.category}</p>
            <p className="product__description">
                {product.description.length > 50 ? product.description.slice(0, 50) + '...' : product.description}
            </p>
            <p className={`product__price ${product.price > 100 ? "product__price-expensive" : "product__price-cheep"}`}>
                {product.price}
            </p>
            <p className="product__rating">{product.rating.rate}</p>
            <button className="product__btn-view" onClick={() => viewProduct(product)} >View</button>
            <button className="product__btn-basket" onClick={() => addToBasket(product) } >Add to basket</button>
        </div>
    )
}

export default Product