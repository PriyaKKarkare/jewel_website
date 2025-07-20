import './Aboutus.css';
import { assets } from '../../assets/assets';
import AboutDetails from '../../Component/Aboutdetails/AboutDetails';
import AboutExtras from '../../Component/AboutExtras/AboutExtras';
import InstaAbout from '../../Component/InstaAbout/InstaAbout';

const Aboutus = () => {
	return (
		<>
			<section className="about-section">
				<div className="about-container">
					<div className="about-left">
						<h2 className="about-title">Our Story</h2>
						<p className="about-paragraph">
							Demesne far hearted supposed venture and excited to see had had. Dependent on
							so extremely delivered by. Yet no jokes worse her why.
						</p>
						<p className="about-paragraph">
							Bed one supposing breakfast day fulfilled off depending questions. Whatever boy
							her exertion his extended. Ecstatic followed handsome drawings entirely Mrs one
							yet outweigh.
						</p>

						<div className="about-stats">
							<div className="stat-box">
								<h3>90%</h3>
								<p>Jewellery Item</p>
							</div>
							<div className="stat-box">
								<h3>1.2m</h3>
								<p>Happy Customers</p>
							</div>
							<div className="stat-box">
								<h3>5+</h3>
								<p>Years of experience</p>
							</div>
						</div>
					</div>

					<div className="about-right">
						<img src={assets.aboutus_image} alt="Jewellery" className="about-image" />
					</div>
				</div>
				<AboutExtras />
				<AboutDetails />
				<InstaAbout/>

			</section>
		</>

	);
};

export default Aboutus;
