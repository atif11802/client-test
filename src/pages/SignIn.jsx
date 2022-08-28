import React, { useState } from "react";
import "../styles/hr.css";
import Facebook from "../assets/Facebook Icon.png";
import Google from "../assets/Google G.png";
import LinkedIn from "../assets/Linkedin.png";
import { useNavigate } from "react-router-dom";
import useSignIn from "../hooks/useSignIn";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { SignInRed } from "../actions";

const SignIn = () => {
	const [email, setEmail] = useState("John@gmail.com");
	const [password, setPassword] = useState("m38rmF$");
	const navigate = useNavigate();
	const mutation = useSignIn();

	const dispatch = useDispatch();

	const handleSignIn = (e) => {
		e.preventDefault();
		mutation.mutate({
			username: "mor_2314",
			password: "83r5^_",
		});
	};

	if (mutation.isSuccess) {
		toast.success("User Login successful", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

		navigate("/");

		dispatch(SignInRed());
	}

	return (
		<>
			<form className='space-y-4 md:space-y-6'>
				<div>
					<label
						for='email'
						className='block mb-2 text-sm font-medium text-gray-900 '
					>
						Your email
					</label>
					<input
						type='email'
						name='email'
						id='email'
						className='  bg-orange-200 border-gray-300 text-black sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  '
						placeholder='name@company.com'
						required=''
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label
						for='password'
						className='block mb-2 text-sm font-medium text-gray-900 '
					>
						Password
					</label>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='••••••••'
						className='  bg-orange-200 border-gray-300 text-black sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  '
						required=''
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='flex items-center justify-between'>
					<a
						href='/'
						className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'
					>
						Forgot Your password?
					</a>
					<div className='flex items-start'>
						<div className='flex items-center h-5'>
							<input
								id='remember'
								aria-describedby='remember'
								type='checkbox'
								className='w-4 h-4 border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
								required=''
							/>
						</div>
						<div className='ml-3 text-sm'>
							<label for='remember' className='text-gray-500 '>
								Remember me
							</label>
						</div>
					</div>
				</div>
				<button
					onClick={handleSignIn}
					type='submit'
					className='w-full bg-orange-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center '
				>
					Sign in
				</button>
				{/* <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
				Don’t have an account yet?{" "}
				<a
					href='#'
					className='font-medium text-primary-600 hover:underline dark:text-primary-500'
				>
					Sign up
				</a>
			</p> */}

				<div className='flex justify-center items-center'>
					<div class='divider'>
						<span></span>
						<span
							style={{
								top: "-3px",
							}}
							className='text-xl'
						>
							Or
						</span>
						<span></span>
					</div>
				</div>

				<h1 className='text-sm text-center '>Sign In With</h1>
				<div className='flex justify-center items-center'>
					<img src={Google} alt='google' className='p-2 ' />
					<img src={Facebook} alt='facebook' className='p-2' />
					<img src={LinkedIn} alt='linkedin' className='p-2' />
				</div>
				<div className='flex'>
					<p className='text-xs md:text-xl'>Privacy Policy and Cookies</p>
					<div class='vl'></div>
					<p className='text-xs md:text-xl'>Terms of Sale and Us</p>
				</div>
				<ToastContainer />
			</form>
		</>
	);
};

export default SignIn;
