import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const PopularCards = ({ title, image, price, id }) => {
	var stringTruncate = function (str, length) {
		var dots = str.length > length ? " ..." : "";
		return str.substring(0, length) + dots;
	};

	return (
		<Link
			// style={{ display: "block", margin: "1rem 0" }}
			to={`/product/${id}`}
		>
			<div className='flex items-center justify-center'>
				<div className='w-[252px] mt-20'>
					<img src={image} alt='' className='w-full h-[356px]' />
					<div className='mt-3 flex justify-between'>
						<p className='text-sm'>Shirts</p>
						<div className='flex'>
							<AiFillStar
								color='#F09522
'
								size={16}
							/>
							<AiFillStar
								color='#F09522
'
								size={16}
							/>
							<AiFillStar
								color='#F09522
'
								size={16}
							/>
							<AiFillStar
								color='#F09522
'
								size={16}
							/>
							<AiFillStar
								color='#F09522
'
								size={16}
							/>
						</div>
					</div>
					<h1 className='mt-1 text-sm font-bold'>
						{stringTruncate(title, 25)}
					</h1>
					<div className='flex justify-between'>
						<h1 className='text-xl text-orange-500 font-bold'>${price}</h1>
						<div className='flex justify-between'>
							<BsFillCircleFill size={16} color='blue' className='mr-2' />
							<BsFillCircleFill size={16} color='red' className='mr-2' />
							<BsFillCircleFill size={16} color='green' className='mr-2' />
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default PopularCards;
