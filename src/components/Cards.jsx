import React from "react";

const Cards = ({ children, image }) => {
	return (
		<div className='relative '>
			<div className='border-8 border-white w-[200px] h-[300px] md:w-[243px] md:h-[338px] absolute bottom-8 left-12  text-clip'>
				<h1 className='text-white text-2xl md:text-4xl p-3 md:p-4 mt-40 text-wrap'>
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
