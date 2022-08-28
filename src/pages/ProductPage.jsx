import React from "react";
import { useParams } from "react-router-dom";
import { DotLoader } from "react-spinners";
import Delivery from "../components/Delivery";
import Navbar from "../components/Navbar";
import PopularProducts from "../components/PopularProducts";
import ProductBody from "../components/ProductBody";
import useGetSingleProduct from "../hooks/useGetSingleProduct";

const ProductPage = () => {
	let { id } = useParams();

	const { isLoading, isError, data } = useGetSingleProduct(id);

	if (isLoading) {
		return (
			<div className='flex justify-center items-center mt-20 mb-20'>
				<DotLoader />
			</div>
		);
	}
	if (isError) {
		return (
			<div className='flex justify-center items-center mt-20 mb-20'>
				<DotLoader />
			</div>
		);
	}

	return (
		<>
			{/* <Navbar /> */}
			<ProductBody data={data} />
			<Delivery />
			<PopularProducts />
		</>
	);
};

export default ProductPage;
