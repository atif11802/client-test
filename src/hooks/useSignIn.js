import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const createSignIn = async (data) => {
	const res = await axios.post(process.env.REACT_APP_LOGIN, data);
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
