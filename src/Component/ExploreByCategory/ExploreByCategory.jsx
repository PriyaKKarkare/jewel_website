import './ExploreByCategory.css';
import { Link } from "react-router-dom";
import { category_list } from '../../assets/assets';

const ExploreByCategory = ({ category, setCategory }) => {
	return (
		<div className='explore-category'>
			<h1>Shop By Category</h1>

			<div className="explore-category-list">
				{category_list.map((item, index) => {
					return (
						<div
							onClick={() => setCategory(prev => prev === item.category_name ? "All" : item.category_name)}
							key={index}
							className="explore-category-list-item"
						>
							<img
								className={category === item.category_name ? "active" : ""}
								src={item.category_image}
								alt={item.category_name}
							/>
							<div className='shop-by-container'>
								<div className='shop-by-container-heading'>
									<p>{item.category_name}</p>
								</div>
								<div className='shop-by-container-arrow'>
									<Link to={`/shop/${item.category_name.toLowerCase()}`} className="jewel-explore">
										Explore <span className="arrow">&gt;</span>
									</Link></div>


							</div>

						</div>
					);
				})}
			</div>

			<hr />
		</div>
	);
}

export default ExploreByCategory;
