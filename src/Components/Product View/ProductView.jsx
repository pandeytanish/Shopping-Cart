import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductView.css'; // Import the CSS file

function ProductView() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the product data using the product ID
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!product) {
    return <div className="error">Product not found.</div>;
  }

  return (
    <div className="product-view">
      <div className="product-header">
        <img src={product.images[0]} alt={product.title} className="product-image" />
        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">${product.price}</p>
        </div>
      </div>
      <div className="product-description">
        <h3>Description</h3>
        <p>{product.description}</p>
      </div>
      <div className="product-details">
        {/* You can add more product details here such as rating, category, etc. */}
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Rating:</strong> {product.rating}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductView;
