import React from "react";

const FeaturedCard = () => {
	return (
		<div>
			{/* <div className='flex-col md:flex  sm:flex-row  md:justify-center mt-16'> */}
			<div className='flex md:flex  sm:flex-row  md:justify-center mt-16'>
				<div className='grid grid-cols-2 gap-2 md:gap-4'>
					<img
						src='https://images.unsplash.com/photo-1533088622265-f0ca964f0853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
						alt=''
						className='w-32 h-32 md:w-60 md:h-60'
					/>
					<img
						src='https://images.unsplash.com/photo-1533088622265-f0ca964f0853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
						alt=''
						className='w-32 h-32 md:w-60 md:h-60'
					/>
					<img
						src='https://images.unsplash.com/photo-1533088622265-f0ca964f0853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
						alt=''
						className='w-32 h-32 md:w-60 md:h-60'
					/>
					{/* <img
						src='https://images.unsplash.com/photo-1533088622265-f0ca964f0853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
						alt=''
						className='w-60'
					/> */}
					<div className='relative'>
						<div className='border-8 border-white w-[80px] h-[90px]  md:w-[170px] md:h-[150px] absolute bottom-6 left-3 md:bottom-8 md:left-8  text-clip'>
							<h1 className='text-white text-sm md:text-3xl p-4 mt-4 text-wrap '>
								30% off
							</h1>
						</div>
						<img
							src='https://images.unsplash.com/photo-1549291501-ecf9d358cf99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&q=80'
							alt=''
							className='w-32 h-32 md:w-60 md:h-60'
						/>
					</div>
				</div>
				<div className='ml-4'>
					<img
						src='https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
						alt=''
						className='h-[260px] md:h-[500px]'
					/>
				</div>
			</div>
		</div>
	);
};

export default FeaturedCard;
