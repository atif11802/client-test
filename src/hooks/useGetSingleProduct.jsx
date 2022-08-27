import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData = async (id) => {
	const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

	return res.data;
};

const useGetSingleProduct = (id) => {
	return useQuery(["singleProduct", id], () => getData(id));
};

export default useGetSingleProduct;
