import React, { useEffect, useState } from 'react';
import './ProductList.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products.slice(0, 24));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <Link to={`/product/${product.id}`} key={product.id} className="product-card">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-image"
          />
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
