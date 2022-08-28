import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const createPost = async (data) => {
	console.log(data);
	await axios.post("https://fakestoreapi.com/users", data);
};

const useSignUp = () => {
	return useMutation(createPost);
};

export default useSignUp;
