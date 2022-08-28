import React from "react";
import { GrDeliver } from "react-icons/gr";

const Delivery = () => {
	return (
		<div className='container mx-auto  flex justify-center items-center lg:w-[1000px] mt-28 md:mt-44 '>
			<div className=' mt-16 mb-12 gap-3 grid grid-cols-2  lg:grid-cols-4'>
				<div className='flex items-center'>
					<div className=''>
						<GrDeliver size={30} />
					</div>
					<div className='ml-2'>
						<h1 className='text-sm md:text-xl'>FAST DELIVERY</h1>
						<p className='text-xs md:text-sm'>Lorem ipsum dolor sit amet</p>
					</div>
				</div>
				<div className='flex items-center'>
					<div className=''>
						<GrDeliver size={30} />
					</div>
					<div className='ml-2'>
						<h1 className='text-sm md:text-xl'>FAST DELIVERY</h1>
						<p className='text-xs md:text-sm'>Lorem ipsum dolor sit amet</p>
					</div>
				</div>
				<div className='flex items-center'>
					<div className=''>
						<GrDeliver size={30} />
					</div>
					<div className='ml-2'>
						<h1 className='text-sm md:text-xl'>FAST DELIVERY</h1>
						<p className='text-xs md:text-sm'>Lorem ipsum dolor sit amet</p>
					</div>
				</div>
				<div className='flex items-center'>
					<div className=''>
						<GrDeliver size={30} />
					</div>
					<div className='ml-2'>
						<h1 className='text-sm md:text-xl'>FAST DELIVERY</h1>
						<p className='text-xs md:text-sm'>Lorem ipsum dolor sit amet</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Delivery;
