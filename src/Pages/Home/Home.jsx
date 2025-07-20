import React, { useState } from 'react'
import Header from '../../Component/Header/Header'
import ExploreByCategory from '../../Component/ExploreByCategory/ExploreByCategory'
import RecentProducts from '../../Component/RecentProducts/RecentProducts';
import InstagramSection from '../../Component/InstagramSection/InstagramSection';

const Home = () => {
	const [category, setCategory] = useState("All");
	return (
		<div>
			<Header />
			<ExploreByCategory category={category} setCategory={setCategory} />
			<RecentProducts/>
			<InstagramSection/>
		</div>
	)
}

export default Home
