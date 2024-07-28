'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export interface NavLink {
	href: string;
	label: string;
	index: string;
}

export interface Props {
	navLinks: NavLink[];
}

export default function Menu({ navLinks }: Props) {
	const [isClicked, setIsClicked] = useState(false);
	const pathname = usePathname();

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div
				onClick={() => setIsClicked(!isClicked)}
				className={`${
					isClicked
						? `relative  h-[25px] w-[35px] md:hidden transition-all ease-in-out cursor-pointer z-50`
						: `relative  h-[25px] w-[35px] md:hidden transition-all ease-in-out cursor-pointer z-50`
				}`}
			>
				<div
					className={
						isClicked
							? 'absolute top-1/2 transform -translate-y-1/2 w-[35px] h-[3px] block bg-white rounded-xl -rotate-45 transition-all ease-in-out'
							: 'absolute top-0 w-[35px] h-[3px] block bg-white rounded-xl transition-all ease-in-out'
					}
				></div>
				<div
					className={
						isClicked
							? 'hidden transition-all ease-in-out'
							: 'absolute top-1/2 transform -translate-y-1/2 w-[24px] h-[3px] block bg-white rounded-xl transition-all ease-in-out'
					}
				></div>
				<div
					className={
						isClicked
							? 'absolute top-1/2 transform -translate-y-1/2 w-[35px] h-[3px] block bg-white rounded-xl rotate-45 transition-all ease-in-out'
							: 'absolute bottom-0 w-[35px] h-[3px] block bg-white rounded-xl transition-all ease-in-out'
					}
				></div>
			</div>

			{isClicked && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-40'
				>
					{navLinks.map((e, index) => (
						<ul className='flex-col gap-y-5 text-center'>
							<li>
								<Link
									key={index}
									className='text-[22px] font-light hover:underline text-white'
									href={e.href}
									onClick={() => setIsClicked(false)}
								>
									{e.label}
								</Link>
							</li>
						</ul>
					))}
				</motion.div>
			)}

			<nav className='hidden md:block'>
				<ul className='flex gap-x-5 text-[14px]'>
					{navLinks.map((link, index) => (
						<li key={link.index}>
							<Link
								className={`text-[22px] font-light hover:underline ${
									pathname === link.href
										? 'text-white font-bold hover:text-[#ff00aa] transition-all'
										: 'text-white'
								}`}
								href={link.href}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</motion.div>
	);
}
