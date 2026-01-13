import ProductCard from './ProductCard'

const ProductList = ({ products = [] }) => {
    return (
        <div>
            <h1>Our Products</h1>
            <div>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
