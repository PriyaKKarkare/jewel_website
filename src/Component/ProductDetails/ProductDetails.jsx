import React, { useState, useContext } from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import { jewel_list } from '../../assets/assets.js';
import { FaShippingFast, FaShieldAlt, FaUndo } from 'react-icons/fa';
import { BsTruck } from 'react-icons/bs';
import ProductReview from '../ProductReview/ProductReview.jsx';
import RecentProducts from '../RecentProducts/RecentProducts.jsx';
import { StoreContext } from '../../Context/StoreContext.jsx';

const ProductDetails = () => {
	const { productId } = useParams();
	const product = jewel_list.find((item) => item._id.toString() === productId);
	const [activeTab, setActiveTab] = useState('info');
	const [quantity, setQuantity] = useState(1);
	const { addToCart } = useContext(StoreContext);

	if (!product) return <div>Product not found</div>;

	const handleAddToCart = () => {
		if (quantity > 0) {
			addToCart(productId, quantity);
			alert(`${quantity} ${product.name} added to cart`);
		}
	};

	return (
		<div className="product-details">
			<div className="product-layout">
				<div className="image-gallery">
					<img src={product.img} alt={product.name} />
				</div>

				<div className="product-info-block">
					<h1 className="product-title">{product.name}</h1>

					<div className="product-price">
						<span>${product.price.toFixed(2)} USD</span>
						<span className="original-price">${product.original.toFixed(2)} USD</span>
					</div>

					<p className="product-description">
						Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous.
						Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake.
						Blush since so in noisy still built up an again. As young ye hopes no he place means.
					</p>

					<div className="product-features">
						<div><FaShippingFast size={24} /> Free Shipping</div>
						<div><BsTruck size={24} /> Fast Delivery</div>
						<div><FaShieldAlt size={24} /> Secure Payment</div>
						<div><FaUndo size={24} /> Free Return</div>
					</div>

					<div className="quantity-section">
						<label>Quantity</label>
						<input
							type="number"
							min="1"
							value={quantity}
							onChange={(e) => setQuantity(Number(e.target.value))}
						/>
						<button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
					</div>

					<div className="tab-buttons">
						<button className={activeTab === 'info' ? 'active' : ''} onClick={() => setActiveTab('info')}>Info</button>
						<button className={activeTab === 'desc' ? 'active' : ''} onClick={() => setActiveTab('desc')}>Description</button>
					</div>

					<div className="tab-content">
						{activeTab === 'info' ? (
							<ul>
								<li>Contemporary, The Look is Graceful and Precious</li>
								<li>Choice of Many Bollywood Celebrities</li>
								<li>High-Quality Polish for Long Lasting Finish</li>
								<li>Set consists of necklace and earrings</li>
							</ul>
						) : (
							<ul>
								<li>Made with love by artisans</li>
								<li>Comes in premium gift packaging</li>
								<li>Perfect for any occasion</li>
							</ul>
						)}
					</div>
				</div>
			</div>
			<ProductReview />
			<RecentProducts />
		</div>
	);
};

export default ProductDetails;
