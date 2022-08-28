import React, { useState } from "react";
import "../styles/hr.css";
import Facebook from "../assets/Facebook Icon.png";
import Google from "../assets/Google G.png";
import LinkedIn from "../assets/Linkedin.png";
import { ToastContainer, toast } from "react-toastify";
import useSignUp from "../hooks/useSignUp";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const [fName, setFname] = useState("John");
	const [lName, setLname] = useState("Doe");
	const [email, setEmail] = useState("John@gmail.com");
	const [password, setPassword] = useState("m38rmF$");
	const [confirmPassword, setConfirmPassword] = useState("m38rmF$");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("1-570-236-7033");
	const mutation = useSignUp();

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("handleSubmit");
		mutation.mutate({
			email: "John@gmail.com",
			username: "johnd",
			password: "m38rmF$",
			name: {
				firstname: "John",
				lastname: "Doe",
			},
			address: {
				city: "kilcoole",
				street: "7835 new road",
				number: 3,
				zipcode: "12926-3874",
				geolocation: {
					lat: "-37.3159",
					long: "81.1496",
				},
			},
			phone: "1-570-236-7033",
		});
	};

	if (mutation.isSuccess) {
		toast.success("User registration successful", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		navigate("/");
	}

	return (
		<>
			{/* <Navbar /> */}
			<form className='space-y-4 md:space-y-6'>
				<div>
					<label
						Htmlfor='name'
						className='block mb-2 text-sm font-medium text-gray-900 '
					>
						First Name
					</label>
					<input
						type='text'
						name='name'
						id='name'
						className='  bg-orange-200 border-gray-300 text-black sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  '
						placeholder='ENter Your Name'
						required=''
						value={fName}
						onChange={(e) => setFname(e.target.value)}
					/>
				</div>
				<div>
					<label
						Htmlfor='lastName'
						className='block mb-2 text-sm font-medium text-gray-900 '
					>
						Last Name
					</label>
					<input
						type='text'
						name='lastName'
						id='lastName'
						className='  bg-orange-200 border-gray-300 text-black sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  '
						placeholder='ENter Your Name'
						required=''
						value={lName}
						onChange={(e) => setLname(e.target.value)}
					/>
				</div>

				<div>
					<label
						htmlFor='email'
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
						htmlFor='password'
						className='block mb-2 text-sm font-medium text-gray-900 '
					>
						create Password
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
				<div>
					<label
						htmlFor='password'
						className='block mb-2 text-sm font-medium text-gray-900 '
					>
						Confirm Password
					</label>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='••••••••'
						className='  bg-orange-200 border-gray-300 text-black sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  '
						required=''
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
				<div>
					<label
						HtmlFor='address'
						className='block mb-2 text-sm font-medium text-gray-900 '
					>
						Address <sup className='text-sm'>*</sup>
					</label>
					<input
						type='text'
						name='address'
						id='address'
						className='  bg-orange-200 border-gray-300 text-black sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  '
						placeholder='address'
						required=''
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>
				<div>
					<label
						HtmlFor='phone'
						className='block mb-2 text-sm font-medium text-gray-900 '
					>
						phone
					</label>
					<input
						type='text'
						name='phpne'
						id='phpne'
						className='  bg-orange-200 border-gray-300 text-black sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  '
						placeholder='phone number'
						required=''
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
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
					type='submit'
					onClick={handleSubmit}
					className='w-full bg-orange-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center '
				>
					Sign in
				</button>

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
					<h1>Privacy Policy and Cookies</h1>
					<div class='vl'></div>
					<h1>Terms of Sale and Us</h1>
				</div>
			</form>
			<ToastContainer />
		</>
	);
};

export default SignUp;
