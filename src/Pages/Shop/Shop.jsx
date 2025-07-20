import React from 'react';
import './Shop.css';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { jewel_list, category_list } from '../../assets/assets.js';
import { FaArrowRight } from 'react-icons/fa';

const Shop = () => {
	const { categoryName } = useParams();
	const navigate = useNavigate();

	const filteredJewels =
		categoryName && categoryName !== "all"
			? jewel_list.filter(jewel => jewel.category.toLowerCase() === categoryName.toLowerCase())
			: jewel_list;

	return (
		<div className="shop-container">
			<h1 className="shop-title">Shop {categoryName ? `- ${categoryName}` : ''}</h1>

			<div className="shop-categories">
				{category_list.map((cat, index) => (
					<button
						key={index}
						className={`category-btn ${categoryName === cat.category_name.toLowerCase() ? "active" : ""}`}
						onClick={() => navigate(`/shop/${cat.category_name.toLowerCase()}`)}
					>
						{cat.category_name}
					</button>
				))}
				<button
					className={`category-btn ${categoryName === "all" || !categoryName ? "active" : ""}`}
					onClick={() => navigate('/shop/all')}
				>
					All
				</button>
			</div>

			<div className="shop-products">
				{filteredJewels.length > 0 ? (
					filteredJewels.map((item, index) => (
						<Link
							key={index}
							to={`/product/${item._id}`} 
							className="product-card"
						>
							<img src={item.img} alt={item.name} />
							<div className="product-info">
								<h3>{item.name}</h3>
								<div className="price-row">
									<span className="current-price">${item.price.toFixed(2)} {item.currency}</span>
									<span className="old-price">${item.original.toFixed(2)} {item.currency}</span>
								</div>
								<button className="arrow-btn"><FaArrowRight /></button>
							</div>
						</Link>
					))
				) : (
					<p>No items found in this category.</p>
				)}
			</div>
		</div>
	);
};

export default Shop;
