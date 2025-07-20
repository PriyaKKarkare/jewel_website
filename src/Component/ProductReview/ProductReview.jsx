import React from 'react';
import './ProductReview.css';

const ProductReview = () => {
	return (
		<div className="product-reviews">
			<h2>Reviews</h2>

			<div className="review-card">
				<div className="review-author">Samuel Bishop</div>
				<div className="review-title">A must-have product</div>
				<div className="review-content">
					Demesne far hearted supposed venture and excited to see had had. Dependent on so extremely delivered by.
					Yet no jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions.
				</div>
				<div className="review-stars">★★★★★</div>
			</div>

			<div className="review-card">
				<div className="review-author">Joan Wallace</div>
				<div className="review-title">Amazing...loved it</div>
				<div className="review-content">
					Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely Mrs one yet outweigh.
					Of acceptance insipidity remarkably is an invitation.
				</div>
				<div className="review-stars">★★★★★</div>
			</div>
		</div>
	);
};

export default ProductReview;
