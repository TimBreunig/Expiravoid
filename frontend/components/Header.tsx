"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Nav from "@/components/Nav";


export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	
	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	return (
		<header className="fixed w-full h-full py-11 xl:py-10 z-50 pointer-events-none transition-all duration-500">
			<div className="container flex justify-between items-center xl:items-start pointer-events-auto">
				<div className="flex flex-row items-start">
					<Link href="/">
						<Image
							src="/expiravoid.svg"
							alt=""
							width="44"
							height="44"
						/>
					</Link>

					<span className="font-accent text-[2rem] text-primary-900 tracking-normal mt-1">
						Recipes
					</span>
				</div>

				{/* desktop nav & contact button */}
				<div className="hidden xl:flex items-center gap-10">
					<Nav onNavigate={() => { return }} />
				</div>

				{/* mobile nav */}
				<div className="xl:hidden">
					<Button
						variant="icon"
						size="icon"
						className="group relative z-50"
						onClick={() => setMenuOpen((prev) => !prev)}
						aria-label="Toggle menu"
					>
						<FontAwesomeIcon
						icon={menuOpen ? faXmark : faBars}
						className="relative w-full h-full text-2xl text-primary-900 z-10
									group-hover:text-primary-900"
						/>
					</Button>

					<div
						className={`fixed inset-0 z-40 bg-primary-900 transform transition-transform duration-300 ease-in-out
						${menuOpen ? "translate-x-0" : "translate-x-full"}
						`}
					>
						<div className="container-wide h-full flex flex-col justify-center items-center gap-12">
							<Nav onNavigate={() => setMenuOpen(false)} />

							<div className="flex flex-col gap-2">

								<div className="font-secondary font-medium text-lg lg:text-2xl text-center tracking-tight uppercase text-primary-600">
								&#91;
								
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};