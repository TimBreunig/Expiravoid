"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';


type NavProps = {
	onNavigate: React.MouseEventHandler<HTMLAnchorElement>;
};

const links = [
    {
		name: "Home",
		path: "/",
	},
	{
		name: "Shopping List",
		path: "/shopping-list",
	},
];


const Nav = ({ onNavigate }: NavProps) => {
	const pathname = usePathname();

	return (
		<nav className="flex flew-col xl:flex-row gap-4 xl:gap-8 text-center xl:text-right">
			{links.map((link, index) => (
				<Link
					key={index}
					href={link.path}
					onClick={onNavigate}
					className={`text-xl hover:text-purple-500 uppercase tracking-wide transition-all duration-300 ${
							pathname.includes(link.path) ? "font-semibold text-primary-400" : "font-medium text-primary-700"
						}`}
					>
					{link.name}
				</Link>
			))}
		</nav>
	);
};

export default Nav;