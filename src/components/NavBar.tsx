"use client";
<<<<<<< HEAD
import { SignedIn, UserButton } from "@clerk/nextjs";
=======
import { UserButton, SignedIn, useAuth } from "@clerk/nextjs";
>>>>>>> abd2f0baa1c75e678de640bf75affde95b7043ba
import Link from "next/link";
import { useState } from "react";
import { SignIn } from "@clerk/nextjs";

const Navbar = () => {
	const user = useAuth();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className=''>
			<div className=' top-0 absolute container mx-14 flex items-center justify-between   p-4  '>
				<span className=' text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-inter font-light text-black'>
					VIOS
				</span>

				<div className='hidden md:flex space-x-9'>
					<Link
						href='/'
						className='text-2xl font-inter text-black hover:text-gray-700'>
						Home
					</Link>
					<SignedIn>
						<Link
							href='dashboard'
							className='text-2xl font-inter text-black hover:text-gray-700'>
							Dashboard
						</Link>
						<Link
							href='/'
							className='text-2xl font-inter text-black hover:text-gray-700'>
							Profile
						</Link>
					</SignedIn>
					<Link
						href='about-us'
						className='text-2xl font-inter text-black hover:text-gray-700'>
						About Us
					</Link>
					<Link
						href='contact-us'
						className='text-2xl font-inter text-black hover:text-gray-700'>
						Contact
					</Link>
					<UserButton />
				</div>

				<button
					className='md:hidden text-black focus:outline-none'
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h16m-7 6h7'></path>
					</svg>
				</button>
			</div>
			<div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
				{/* Mobile menu */}
				<div className='flex flex-col items-center py-4'>
					<a
						href='#'
						className='text-2xl font-inter text-black hover:text-gray-700 py-2'>
						Home
					</a>
					<a
						href='#'
						className='text-2xl font-inter text-black hover:text-gray-700 py-2'>
						Dashboard
					</a>
					<a
						href='#'
						className='text-2xl font-inter text-black hover:text-gray-700 py-2'>
						Profile
					</a>
					<a
						href='#'
						className='text-2xl font-inter text-black hover:text-gray-700 py-2'>
						About Us
					</a>
					<a
						href='#'
						className='text-2xl font-inter text-black hover:text-gray-700 py-2'>
						Contact Us
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
