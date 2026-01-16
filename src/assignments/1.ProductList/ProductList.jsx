import ProductListComponent from './ProductListComponent'

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
      category: "Electronics",
      rating: 4.6,
      stock: true,
      discount: 20
    },
    {
      id: 2,
      name: "Running Shoes",
      price: 1799,
      category: "Footwear",
      rating: 4.2,
      stock: true,
      discount: 10
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 4999,
      category: "Electronics",
      rating: 4.8,
      stock: false,
      discount: 0
    },
    {
      id: 4,
      name: "Backpack",
      price: 999,
      category: "Accessories",
      rating: 3.9,
      stock: true,
      discount: 5
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 2999,
      category: "Electronics",
      rating: 4.4,
      stock: true,
      discount: 15
    },
    {
      id: 6,
      name: "Laptop Stand",
      price: 799,
      category: "Office",
      rating: 4.1,
      stock: true,
      discount: 0
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      price: 3499,
      category: "Electronics",
      rating: 4.7,
      stock: false,
      discount: 25
    },
    {
      id: 8,
      name: "Office Chair",
      price: 8999,
      category: "Furniture",
      rating: 4.3,
      stock: true,
      discount: 30
    },
    {
      id: 9,
      name: "Water Bottle",
      price: 499,
      category: "Lifestyle",
      rating: 3.8,
      stock: true,
      discount: 0
    },
    {
      id: 10,
      name: "Sunglasses",
      price: 1299,
      category: "Accessories",
      rating: 4.0,
      stock: false,
      discount: 10
    },
    {
      id: 11,
      name: "Gaming Mouse",
      price: 1599,
      category: "Electronics",
      rating: 4.5,
      stock: true,
      discount: 20
    },
    {
      id: 12,
      name: "Notebook",
      price: 199,
      category: "Stationery",
      rating: 3.5,
      stock: true,
      discount: 0
    },
    {
      id: 13,
      name: "Desk Lamp",
      price: 1199,
      category: "Home Decor",
      rating: 4.1,
      stock: true,
      discount: 12
    },
    {
      id: 14,
      name: "Power Bank",
      price: 2199,
      category: "Electronics",
      rating: 4.6,
      stock: false,
      discount: 18
    },
    {
      id: 15,
      name: "Travel Mug",
      price: 899,
      category: "Lifestyle",
      rating: 4.2,
      stock: true,
      discount: 0
    }
  ];
  
  return <ProductListComponent products={products} />
}

export default ProductList
