import React from "react";
import { AiFillInstagram, AiFillStar } from "react-icons/ai";
import {
	BsFacebook,
	BsFillCircleFill,
	BsPinterest,
	BsSquareFill,
	BsTag,
} from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";

const ProductBody = ({ data }) => {
	return (
		<div className='md:max-w-screen mx-auto flex flex-col lg:flex-row justify-center mt-12  '>
			<div className='basis-0 md:basis-1/2 flex flex-col lg:justify-center lg:items-center'>
				<img
					src={data.image}
					alt=''
					className=' w-[280px] h-[400px] lg:w-[524px] lg:h-[695px]'
				/>
				<div className='flex mt-2'>
					<img
						src={data.image}
						alt=''
						className='w-[70px] h-[70px] lg:w-[161px] lg:h-[161px] mt-2'
					/>
					<img
						src={data.image}
						alt=''
						className='w-[70px] h-[70px] lg:w-[161px] lg:h-[161px] m-3'
					/>
					<img
						src={data.image}
						alt=''
						className='w-[70px] h-[70px] lg:w-[161px] lg:h-[161px] m-3'
					/>
				</div>
			</div>
			<div className='ml-3 basis-1/2'>
				<h1 className='text-3xl font-bold'>{data.title}</h1>
				<div
					className='mt-10 flex items-center
        '
				>
					<div className='text-orange-500'>
						<h1 className='text-xl font-bold'>$ {data.price}</h1>
					</div>
					<div className='text-gray-300 ml-4 line-through'>
						<h1 className='text-sm font-bold'>$20.00</h1>
					</div>
				</div>
				<div className='flex mt-6'>
					<AiFillStar size={20} color={"#F18A3D"} />
					<AiFillStar size={20} color={"#F18A3D"} />
					<AiFillStar size={20} color={"#F18A3D"} />
					<AiFillStar size={20} color={"#F18A3D"} />
					<AiFillStar size={20} color={"#F18A3D"} />
				</div>
				<div
					className='w-3/4 mt-8
            mb-4
        '
				>
					<hr
						style={{
							height: "2px",
							backgroundColor: "#ccc",
						}}
					/>
				</div>
				<div className='flex items-center'>
					<h1 className='font-bold'>Colors</h1>
					<div className='flex ml-16'>
						<BsFillCircleFill size={30} color='blue' className='mr-3' />
						<BsFillCircleFill size={30} color='red' className='mr-3' />
						<BsFillCircleFill size={30} color='green' className='mr-3' />
					</div>
				</div>
				<p className='text-sm text-orange-500 mt-8'>Only 7 Left In Stock</p>
				<div className='flex mt-12'>
					<div className='bg-gray-400 h-12 w-44 flex justify-center items-center'>
						<h1 className='font-bold'>Add To Cart</h1>
						<MdKeyboardArrowDown size={30} />
					</div>
					<div className='bg-orange-500 h-12 w-44 flex justify-center items-center ml-16'>
						<h1 className='font-bold text-white'>Add To Cart</h1>
					</div>
				</div>
				<div
					className='w-3/4 mt-8
            mb-4
        '
				>
					<hr
						style={{
							height: "2px",
							backgroundColor: "#ccc",
						}}
					/>
				</div>
				<div className='flex items-center mt-4'>
					<div className='flex items-center'>
						<GiSelfLove size={30} color={"#999"} />
						<h1 className='ml-3 text-sm text-gray-400'>Add To Wishlist</h1>
					</div>
					<div className='flex items-center ml-5'>
						<BsTag size={30} color={"#999"} />
						<h1 className='ml-3 text-sm text-gray-400'>Compare</h1>
					</div>
				</div>
				<div
					className='w-3/4 mt-8
            mb-4
        '
				>
					<h1 className='text-sm md:text-xl  '>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less page when looking
						at its layout. The point of using Lorem Ipsum is that it has a
						more-or-less
					</h1>
				</div>
				<div className='mt-3'>
					<div className='flex items-center'>
						<BsSquareFill size={30} color={"#999"} />
						<h1 className=' text-sm md:text-xl ml-4  '>
							Lorem Ipsum is simply dummy text.
						</h1>
					</div>
					<div className='flex items-center mt-3'>
						<BsSquareFill size={30} color={"#999"} />
						<h1 className=' text-sm md:text-xl ml-4   '>
							Lorem Ipsum is simply dummy text.
						</h1>
					</div>
				</div>
				<div className='flex items-center mt-3'>
					<h1>Share :</h1>
					<BsPinterest size={22} color={"red"} className='ml-4' />
					<BsFacebook size={22} color={"#4267B2"} className='ml-4' />
					<AiFillInstagram size={22} color={"#999"} className='ml-4' />
				</div>
			</div>
		</div>
	);
};

export default ProductBody;
