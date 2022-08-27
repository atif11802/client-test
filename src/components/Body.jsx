import React from "react";

const Body = ({ children }) => {
	return (
		<div className='container mx-auto px-4 sm:px-8  md:px-24 mt-4 md:max-w-[1600px]'>
			{children}
		</div>
	);
};

export default Body;
