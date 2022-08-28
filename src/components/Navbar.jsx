import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsBag, BsPinterest } from "react-icons/bs";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = ({ auth, setAuth }) => {
	const [nav, setNav] = useState(false);

	const handleAuth = () => {
		localStorage.removeItem("Token");
		setAuth(false);
	};

	return (
		<div>
			{/* upper nav */}
			<div className='flex justify-between h-16 items-center bg-black'>
				<div className='pl-8 md:pl-11'>
					<h1 className='text-white text-sm sm:text-sm md:text-sm'>
						Free shipping on all UK orders!
					</h1>
				</div>

				<div className='flex justify-between items-center  pr-8 md:pr-11'>
					<FaFacebook color='#499BF7' size={24} className='mr-2' />
					<RiInstagramFill color='gray' size={24} className='mr-2' />
					<BsPinterest color='#E60023' size={24} className='mr-2' />
				</div>
			</div>

			{/* lower nav */}
			<div className='flex justify-between h-16 items-center border-b-2  '>
				<div className='pl-8 md:pl-24 '>
					<Link to='/'>
						<h1 className='text-2xl md:text-3xl font-bold'>Funshion</h1>
					</Link>
				</div>
				<div className='hidden sm:flex md:flex justify-between mr-16'>
					<ul className='flex justify-between mr-16'>
						<li className='mr-3 cursor-pointer font-semibold'>Home</li>
						<li className='mr-3 cursor-pointer font-semibold'>About </li>
						<li className='mr-3 cursor-pointer font-semibold'>Shop</li>
						<li className='mr-3 cursor-pointer font-semibold'>Pages</li>
						<li className='mr-3 cursor-pointer font-semibold'>Blog</li>
					</ul>
					<div className='hidden sm:flex md:flex justify-between items-center  pr-8 md:pr-11'>
						<FiSearch size={24} className='mr-4  cursor-pointer' />
						{auth ? (
							<FiLogOut
								size={24}
								className='mr-4  cursor-pointer'
								onClick={handleAuth}
							/>
						) : (
							<Link to='/profile'>
								<CgProfile size={24} className='mr-4  cursor-pointer' />
							</Link>
						)}

						<BsBag size={24} className='mr-4  cursor-pointer' />
					</div>
				</div>
				<div className='md:hidden sm:hidden mr-14'>
					<GiHamburgerMenu
						size={24}
						className='cursor-pointer'
						onClick={() => setNav(!nav)}
					/>
				</div>

				{nav ? (
					<div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
				) : (
					""
				)}

				<div
					className={
						nav
							? "fixed top-0 left-0 w-[300px] h-screen bg-white z-50 duration-300"
							: "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-50 duration-300"
					}
				>
					<AiOutlineClose
						onClick={() => setNav(!nav)}
						size={30}
						className='absolute right-4 top-4 cursor-pointer'
					/>

					<h1 className='text-2xl p-4 font-bold'>Funshion</h1>
					<ul className=''>
						<Link to='/'>
							<li className='mr-3 cursor-pointer text-xl border-b-2 p-2 ml-3 border-gray'>
								Home
							</li>
						</Link>

						<li className='mr-3 cursor-pointer text-xl border-b-2 p-2 ml-3 border-gray'>
							About{" "}
						</li>
						<li className='mr-3 cursor-pointer text-xl border-b-2 p-2 ml-3 border-gray'>
							Shop
						</li>
						<li className='mr-3 cursor-pointer text-xl border-b-2 p-2 ml-3 border-gray'>
							Pages
						</li>
						<li className='mr-3 cursor-pointer text-xl border-b-2 p-2 ml-3 border-gray'>
							Blog
						</li>
					</ul>
					<div className='mt-4'>
						<ul>
							<li className='mr-3 p-3 cursor-pointer text-xl border-b-2 ml-3 border-gray'>
								<FiSearch size={33} className='mr-4  cursor-pointer' />
							</li>
							<li className='mr-3 p-3 cursor-pointer text-xl border-b-2 ml-3 border-gray'>
								{auth ? (
									<FiLogOut
										size={33}
										className='mr-4  cursor-pointer'
										onClick={handleAuth}
									/>
								) : (
									<Link to='/profile'>
										<CgProfile size={33} className='mr-4  cursor-pointer' />
									</Link>
								)}
							</li>
							<li className='mr-3 p-3 cursor-pointer text-xl border-b-2 ml-3 border-gray'>
								<BsBag size={33} className='mr-4  cursor-pointer' />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
