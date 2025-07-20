import { assets } from '../../assets/assets';
import './InstagramSection.css';

const InstagramSection = () => {

	const images = [
		assets.insta_1,
		assets.insta_2,
		assets.insta_3,
		assets.insta_4,
		assets.insta_5,
		assets.insta_6,
	];

	const instaLoginUrl = "https://www.instagram.com/accounts/login/";

	const firstRow = images.slice(0, 3);
	const secondRow = images.slice(3, 6);

	return (
		<div className="instagram-section">
			<div className="image-grid first-row">
				{firstRow.map((src, index) => (
					<a
						href={instaLoginUrl}
						target="_blank"
						rel="noopener noreferrer"
						key={index}
					>
						<img
							src={src}
							alt={`Insta ${index + 1}`}
							className={`insta-image img-${index + 1}`}
						/>
					</a>

				))}
			</div>

			<h2 className="instagram-title">Checkout Us On<br />Instagram</h2>

			<div className="image-grid second-row">
				{secondRow.map((src, index) => (
					<a
						href={instaLoginUrl}
						target="_blank"
						rel="noopener noreferrer"
						key={index + 3}
					>
						<img
							src={src}
							alt={`Insta ${index + 4}`}
							className={`insta-image img-${index + 4}`}
						/>
					</a>

				))}
			</div>
		</div>
	);
};
export default InstagramSection;