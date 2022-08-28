import React from "react";
import Cards from "./Cards";

const Collections = () => {
	return (
		<div className='container mx-auto mt-32 flex justify-center items-center md:mt-44 w-[290px]  md:w-auto md:h-auto  '>
			<div className='grid grid-cols-1 gap-1  sm:grid-cols-2  md:grid-cols-3 md:gap-4  '>
				<Cards
					image={
						"https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
				>
					Up to <span className='bg-orange-400 p-1'>50%</span> off sale
				</Cards>
				<Cards
					image={
						"https://images.unsplash.com/photo-1514976575739-7902e7066844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80"
					}
				>
					<span className='bg-orange-400 p-1'> Women’s</span> Collection
				</Cards>
				<Cards
					image={
						"https://images.unsplash.com/photo-1516446470040-1a8877df33ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
					}
					des='w-[343px] h-[438px] '
				>
					<span className='bg-orange-400 p-1 '>Men’s</span>
					Collection
				</Cards>
			</div>
		</div>
	);
};

export default Collections;
