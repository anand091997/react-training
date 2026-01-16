import './css/ProductCard.css'

const ProductCard = ( { product = {} } ) => {
    const calculateDiscountedPrice = (price, discount) => {
        if (discount > 0) {
            return Math.round(price - (price * discount / 100));
        }
        return price;
    };

    const discountedPrice = calculateDiscountedPrice(product.price, product.discount || 0);
    const hasDiscount = product.discount > 0;
    const isPremium = product.price > 1000;

    return (
        <div className={`product-card ${isPremium ? 'premium-product' : ''} ${isPremium || hasDiscount ? 'has-badges' : ''}`}>
            {isPremium && (
                <div className="premium-badge">
                    ✨ Premium
                </div>
            )}
            {hasDiscount && (
                <div className="discount-badge-top">
                    {product.discount}% OFF
                </div>
            )}
            
            <div className="product-header">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-category">{product.category}</p>
            </div>

            <div className="product-rating-section">
                <div className="rating-stars">
                    {'⭐'.repeat(Math.floor(product.rating || 0))}
                </div>
                <span className="rating-value">{product.rating}</span>
                {product.rating >= 4.5 && <span className="rating-label">Excellent</span>}
                {product.rating >= 4.0 && product.rating < 4.5 && <span className="rating-label">Good</span>}
                {product.rating < 4 && <span className="rating-label">Average</span>}
            </div>

            <div className="product-price-section">
                {hasDiscount ? (
                    <>
                        <div className="price-original">₹{product.price}</div>
                        <div className="price-discounted">₹{discountedPrice}</div>
                        <div className="price-savings">You save ₹{product.price - discountedPrice}</div>
                    </>
                ) : (
                    <div className="price-regular">₹{product.price}</div>
                )}
            </div>

            <div className="product-footer">
                {product.stock ? (
                    <span className="stock-status in-stock">✓ In Stock</span>
                ) : (
                    <span className="stock-status out-of-stock">✗ Out of Stock</span>
                )}
            </div>
        </div>
    )
}

export default ProductCard
