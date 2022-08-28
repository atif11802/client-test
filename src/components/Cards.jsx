import React from "react";

const Cards = ({ children, image }) => {
	return (
		<div className='relative '>
			<div
				className='border-8 border-white w-[260px] h-[300px] md:w-[180px] md:h-[300px] lg:w-[243px] lg:h-[338px] absolute
			
				bottom-8 left-4
				md:bottom-10 md:left-3
			lg:bottom-8 lg:left-12  text-clip'
			>
				<h1 className='text-white text-xl md:text-2xl  lg:text-3xl p-1 md:p-4 mt-40 text-wrap'>
					{children}
				</h1>
				<p className=' text-white  pl-4'>Check Now</p>
			</div>
			<img
				src={image}
				alt=''
				className='w-[290px] h-[360px] md:w-[343px] md:h-[438px] '
			/>
		</div>
	);
};

export default Cards;
