import React from "react";

const Hero = () => {
	return (
		<div className='mt-10 md:mt-24'>
			<div className='flex flex-col sm:flex-col md:flex-row justify-between items-center'>
				<div className='lg:w-1/2  mx-auto ml-6 md:ml-28'>
					<h1 className='text-4xl mt-10 font-bold'>Top Designers Pick</h1>
					<p className='md:w-1/2 mt-8 text-sm'>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less
					</p>
					<button className='mt-8 bg-orange-500 text-white px-8 py-4'>
						Shop Now
					</button>
					<div className='bg-black w-3/4  lg:w-[300px] h-[135px] mt-5'>
						<h1
							className='text-sm text-white pt-5 ml-12 md:ml-8
                        '
						>
							50% Discount Till
						</h1>
						<div className=''>
							<div className='text-white flex pt-2 ml-12 md:ml-8'>
								<h1 className='flex text-sm md:text-xl flex-col lg:text-3xl font-bold'>
									05 :{" "}
									<span
										className='
                                  text-xs  sm:text-sm font-light text-center'
									>
										Days{" "}
									</span>
								</h1>
								<h1 className='flex text-sm md:text-xl flex-col lg:text-3xl font-bold ml-2'>
									{"  "}72 :{" "}
									<span
										className='
										text-xs  sm:text-sm font-light text-center'
									>
										Hours{" "}
									</span>{" "}
								</h1>
								<h1 className='flex text-sm md:text-xl flex-col lg:text-3xl font-bold ml-2'>
									{" "}
									35 :{" "}
									<span
										className='
										text-xs  sm:text-sm font-light text-center'
									>
										Minitues
									</span>{" "}
								</h1>
								<h1 className='flex text-sm md:text-xl flex-col lg:text-3xl font-bold ml-2'>
									{" "}
									20{" "}
									<span
										className='
										text-xs  sm:text-sm font-light text-center ml-2'
									>
										{" "}
										Seconds{" "}
									</span>
								</h1>
							</div>
						</div>
					</div>
				</div>
				<div className='flex mt-6 md:mt-0'>
					<img
						src='https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
						alt=''
						className='w-[140px] h-[190px] sm:w-[140px] sm:h-[180px]   md:w-[140px] md:h-[180px] lg:w-[208px] lg:h-[288px] relative z-10 top-16  md:top-16 md:right-20'
					/>
					<img
						src='https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
						alt=''
						className=' w-[240px] h-[290px] sm:w-[240px] sm:h-[280px]   md:w-[240px] md:h-[280px] lg:w-[358px] lg:h-[494px] relative  right-16 md:right-44 '
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
