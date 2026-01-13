const ProductCard = ( { product = {} } ) => {
    return (
        <div>
            <h2 style={product.price > 1000 ? { color: 'green' } : { color: 'white' }}>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <p>{product.rating}</p>
            {product.stock ? <p>In Stock</p> : <p>Out of Stock</p>}
            {product.discount > 0 && <p>Discount Available</p>}
            {product.rating >= 4.5 && <p>Excellent</p>}
            {product.rating >= 4.0 && <p>Good</p>}
            {product.rating < 4 && <p>Average</p>}
        </div>
    )
}

export default ProductCard
