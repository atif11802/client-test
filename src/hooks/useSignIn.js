import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const createSignIn = async (data) => {
	const res = await axios.post("https://fakestoreapi.com/auth/login", data);
	localStorage.setItem("Token", JSON.stringify(res.data.token));
	return res.data.token;
};
const useSignIn = () => {
	return useMutation(createSignIn, {
		onSuccess: (data) => {
			console.log(data);
		},
	});
};

export default useSignIn;
