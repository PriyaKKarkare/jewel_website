import React from 'react';
import './RecentProducts.css';
import { products } from '../../assets/assets.js';
import { Link } from 'react-router-dom';

const RecentProducts = () => {
  return (
    <div className="recent-products">
      <h1 className="recent-products-title">Recent Products</h1>
      <div className="products-container">
        {products.map(product => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-name">{product.name}</div>
            <div className="product-bottom">
              <div className="product-prices">
                <span className="product-price">${product.price.toFixed(2)} USD</span>
                <span className="product-original-price">${product.originalPrice.toFixed(2)} USD</span>
              </div>
              {/* <Link to={`/product/${product.id}`} className="product-arrow">
                &#8250;
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;
