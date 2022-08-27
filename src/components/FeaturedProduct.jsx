import React from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedProduct = () => {
	return (
		<div className='mt-28'>
			<h1 className='text-center text-4xl font-bold'>Featured Products</h1>
			<p className='text-center text-sm mt-2'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</p>
			<FeaturedCard />
		</div>
	);
};

export default FeaturedProduct;
