import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData = async () => {
	const res = await axios.get(process.env.REACT_APP_PRODUCTS);
	return res.data;
};

const useGetData = () => {
	return useQuery(["datas"], () => getData());
};

export default useGetData;
