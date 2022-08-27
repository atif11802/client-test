import React from "react";
import Collections from "../components/Collections";
import Delivery from "../components/Delivery";
import FeaturedProduct from "../components/FeaturedProduct";
import Hero from "../components/Hero";
import PopularProducts from "../components/PopularProducts";
import GetOffer from "../components/GetOffer";

const Home = () => {
	return (
		<>
			<Hero />
			<Delivery />
			<Collections />
			<PopularProducts />
			<FeaturedProduct />
			<GetOffer />
		</>
	);
};

export default Home;
