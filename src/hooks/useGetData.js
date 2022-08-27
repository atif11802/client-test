import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData = async () => {
	const res = await axios.get("https://fakestoreapi.com/products");
	return res.data;
};

const useGetData = () => {
	return useQuery(["datas"], () => getData());
};

export default useGetData;
