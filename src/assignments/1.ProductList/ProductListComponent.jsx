import './css/ProductList.css'
import ProductCard from './ProductCard'

const ProductListComponent = ({ products = [] }) => {
    return (
        <div className="product-list-container">
            <h1 className="product-list-title">Our Products</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductListComponent
