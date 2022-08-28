import React from "react";

const GetOffer = () => {
	return (
		<div className='flex justify-center items-center mt-28 mb-12'>
			<div className='min-w-[320px] lg:min-w-screen bg-orange-300  h-[230px] md:h-[300px] flex flex-row '>
				<div className=' basis-3/4 flex flex-col justify-center items-center'>
					<h1 className='w-1/2 text-sm md:text-xl lg:text-4xl font-bold'>
						SIGN UP FOR NEWS & GET 20% OFF
					</h1>
					<div className='w-1/2 mt-6 flex items-center'>
						<input
							type='text'
							className='w-3/4 h-14 outline-0 p-4 placeholder-gray-500'
							placeholder='Your Email Address'
						/>
						<button className='bg-orange-700 w-[30px] md:w-1/4 h-14 text-white text-xs  lg:text-xl'>
							Sign up
						</button>
					</div>
				</div>
				<div className='bg-orange-500 md:min-w-[335px] lg:min-w-[435px]  '>
					<img
						src='https://pngimg.com/uploads/dress/dress_PNG196.png'
						alt=''
						className='w-full h-full'
					/>
				</div>
			</div>
		</div>
	);
};

export default GetOffer;
