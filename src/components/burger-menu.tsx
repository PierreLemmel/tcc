'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';


const navigationItems = [
    { href: '/', label: 'Accueil' },
    { href: '/presentation', label: 'Présentation' },
    { href: '/dates', label: 'Dates' },
    { href: '/temoignages', label: 'Témoignages' },
];


const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	

	return (
		<div className="relative z-50">
			
			<button
				onClick={toggleMenu}
				className={cn(
                    "fixed top-4 left-4 z-50 p-2",
                    "rounded-md backdrop-blur-sm hover:bg-white/20 hover:cursor-pointer",
                    "transition-all duration-300",
                    !isOpen && "bg-white/10"
                )}
				aria-label="Toggle menu"
			>
				<div className="w-6 h-6 flex flex-col justify-center items-center">
					<span
						className={cn(
                            "block w-5 h-0.5 bg-red-800 ",
                            "transition-all duration-300",
                            "origin-center",
                            isOpen ? "translate-y-0.5" : "translate-y-2",
                            isOpen && 'rotate-45'
                        )}
					/>
					<span
						className={cn(
                            "block w-5 h-0.5 bg-red-800 ",
                            "transition-all duration-300",
                            isOpen ? 'opacity-0' : 'opacity-100'
                        )}
					/>
					<span
						className={cn(
                            "block w-5 h-0.5 bg-red-800 ",
                            "transition-all duration-300",
                            "origin-center",
                            isOpen ? "-translate-y-0.5" : "-translate-y-2",
                            isOpen && '-rotate-45'
                        )}
					/>
				</div>
			</button>

			{isOpen && (
				<div
					className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
					onClick={closeMenu}
				/>
			)}

			<div
				className={cn(
                    "fixed top-0 left-0 h-full w-80 bg-black/95 backdrop-blur-md border-l border-white/20",
                    "text-red-700",
                    "transform transition-transform duration-300 ease-in-out z-45",
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                )}
			>
				<div className="flex flex-col h-full">
					<div className="p-6 border-b border-white/10">
						<h2 className="text-3xl leading-none font-lemon text-red-800 text-center">Menu</h2>
					</div>

					<nav className="flex-1 p-6">
						<ul className="space-y-4">
							{navigationItems.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										onClick={closeMenu}
										className={cn(
                                            "block py-3 px-4 rounded-lg transition-all duration-200 font-aaargh text-lg",
											pathname === item.href
												? 'bg-white/10 text-red-600 font-bold'
												: 'text-red-800/80 hover:bg-foreground/5 hover:text-red-700/90 font-semibold'
                                        )}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<div className="p-6 border-t border-white/10">
						<p className="text-sm text-red-800/60 font-aaargh">
							Très chair corps
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BurgerMenu;