import { useState } from 'react';
import { assets } from '../../assets/assets';
import './InstaAbout.css';

const InstaAbout = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const images = [
		assets.insta_1,
		assets.insta_2,
		assets.insta_3,
		assets.insta_4,
		assets.insta_5,
		assets.insta_6,
		assets.insta_7,
		assets.insta_8,
		assets.insta_9,
	];

	const instaLoginUrl = "https://www.instagram.com/accounts/login/";


	const handleClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className="instagram-section">
			<h2 className="instagram-title">Instagram</h2>
			<div className="image-grid single-row">
				{images.map((src, index) => (
					<a
						key={index}
						href={instaLoginUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="insta-wrapper"
					>
						<img
							src={src}
							alt={`Insta ${index + 1}`}
							className="insta-image"
						/>
						{activeIndex === index && (
							<div className="overlay-text">Follow on @Jewel</div>
						)}
					</a>
				))}
			</div>
		</div>
	);
};

export default InstaAbout;
