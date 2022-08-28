import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Profile = ({ setAuth }) => {
	const [signin, setSignUp] = useState(true);

	return (
		<>
			{/* <Navbar /> */}

			<div className='flex flex-col items-center justify-center'>
				<div className='w-full bg-white  shadow  md:mt-0 sm:max-w-md xl:p-0 '>
					<div className='p-6 space-y-3 md:space-y-4 sm:p-8'>
						<h1 className='text-3xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-4xl '>
							Welcome
						</h1>
						<h1 className='text-3xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-4xl '>
							Please Sign In
						</h1>
						<div className='flex justify-center mt-6 w-full'>
							<div className='flex justify-center items-center '>
								<input
									checked={signin ? true : false}
									id='default-radio-1'
									type='radio'
									value=''
									name='default-radio'
									className='w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 accent-orange-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									onClick={() => setSignUp(true)}
								/>
								<label
									for='default-radio-1'
									className='ml-2 text-sm font-medium '
								>
									Sign In
								</label>
							</div>
							<div className='flex justify-center items-center ml-6'>
								<input
									checked={!signin ? true : false}
									id='default-radio-2'
									type='radio'
									value=''
									className='w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 accent-orange-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									onClick={() => setSignUp(false)}
								/>
								<label
									for='default-radio-2'
									className='ml-2 text-sm font-medium '
								>
									Create Account
								</label>
							</div>
						</div>
						{signin ? <SignIn setAuth={setAuth} /> : <SignUp />}
					</div>
				</div>
				{/* <div className='flex flex-col justify-center items-center mt-12 min-w-[800px] mx-auto'>
				<h1 className='text-4xl font-bold '>Welcome</h1>
				<h1 className='text-4xl font-bold '>Please Sign In</h1>
			</div> */}
			</div>
		</>
	);
};

export default Profile;
