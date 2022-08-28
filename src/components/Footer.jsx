import React from "react";

const Footer = () => {
	return (
		<div className='bg-black  text-white   '>
			<div
				className='
            flex flex-col  md:flex-row   justify-center items-center  
            '
			>
				<div className='p-10 md:p-16 basis-1/4 flex flex-col justify-center '>
					<h1 className='text-sm md:text-xl font-bold'>Funshion</h1>
					<p className='text-xs md:text-sm mt-2'>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout.
					</p>
				</div>
				<div className='p-10 md:p-16 basis-1/4 flex flex-col justify-center '>
					<h1 className='text-sm md:text-xl font-bold'>Need Help?</h1>
					<ul className='text-xs md:text-sm mt-2'>
						<li>Support</li>
						<li>Get Started</li>
						<li>Terms of like</li>
						<li>Privecy Policy</li>
					</ul>
				</div>
				<div className='p-10 md:p-16 basis-1/4 flex flex-col justify-center '>
					<h1 className='text-sm md:text-xl font-bold'>Need Help?</h1>
					<ul className='text-xs md:text-sm mt-2'>
						<li>Support</li>
						<li>Get Started</li>
						<li>Terms of like</li>
						<li>Privecy Policy</li>
					</ul>
				</div>
				<div className='p-10 md:p-16 basis-1/4 flex flex-col justify-center '>
					<h1 className='text-sm md:text-xl font-bold'>Need Help?</h1>
					<ul className='text-xs md:text-sm mt-2'>
						<li>Support</li>
						<li>Get Started</li>
						<li>Terms of like</li>
						<li>Privecy Policy</li>
					</ul>
				</div>
			</div>
			<div
				className='md:flex-row   justify-center items-center  max-w-[400px] md:max-w-[1200px] mx-auto
            '
			>
				<hr />
				<h1 className='ml-8 pt-2 pb-2 md:ml-0  md:pt-4 md:pb-4'>
					Copyright @ Funshion. All Right Reserved.
				</h1>
			</div>
		</div>
	);
};

export default Footer;
