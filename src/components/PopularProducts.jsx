import React from "react";
import useGetData from "../hooks/useGetData";
import PopularCards from "./PopularCards";
import DotLoader from "react-spinners/DotLoader";

const PopularProducts = () => {
	const { isLoading, isError, data } = useGetData();

	if (isLoading) {
		return <DotLoader />;
	}
	if (isError) {
		return <DotLoader />;
	}

	return (
		<div className='mt-14 mb-12'>
			<h1 className='text-center text-4xl font-bold'>Popular Products</h1>
			<p className='text-center text-sm mt-2'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</p>
			<div class='grid grid-cols-1 md:grid-cols-4 gap-2'>
				{data?.map((product) => (
					<div key={product.id}>
						<PopularCards
							title={product.title}
							image={product.image}
							price={product.price}
							id={product.id}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularProducts;
