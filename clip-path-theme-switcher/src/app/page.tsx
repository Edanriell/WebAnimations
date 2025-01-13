"use client";

import { useState } from "react";

export default function Home() {
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const [animationKey, setAnimationKey] = useState(0); // To trigger re-animation

	const toggleTheme = () => {
		setIsDarkTheme((prev) => !prev);
		setAnimationKey((prev) => prev + 1); // Update key to re-trigger animation
	};

	return (
		<div className="mobile-full-width relative my-7 w-full overflow-hidden bg-white dark:bg-[#0D0D0C] md:rounded-xl">
			<div className="pointer-events-none absolute inset-0 z-10 border-b border-t border-gray-400 md:rounded-xl md:border-none md:shadow-inset-border"></div>
			<div className="items-center p-6 hidden h-[216px] !shadow-none lg:flex">
				{/* Light Theme */}
				<div
					key={animationKey}
					className={`absolute inset-0 flex flex-col items-start justify-start gap-4 p-6 rounded-xl ${
						isDarkTheme ? "theme-dark-animate" : "theme-light-animate"
					}`}
				>
					<span className="font-medium">Experience the theme switch animation yourself.</span>
					<span>
						This technique is using <code>clip-path</code>, this element is duplicated and overlayed
						on top of the original one. The duplicated elements have different themes and we just
						reveal the one underneath by animating the <code>clip-path</code> property.
					</span>
					<button
						tabIndex="0"
						onClick={toggleTheme}
						className={`h-10 rounded-md px-4 text-sm font-medium ${
							isDarkTheme ? "bg-white text-gray-800" : "bg-black text-white"
						}`}
					>
						Switch theme
					</button>
				</div>
				{/* Dark Theme */}
				<div
					key={animationKey + 1}
					className={`absolute inset-0 flex flex-col items-start justify-start gap-4 p-6 rounded-xl ${
						isDarkTheme ? "theme-light-animate" : "theme-dark-animate"
					}`}
				>
					<span className="font-medium">Experience the theme switch animation yourself.</span>
					<span>
						This technique is using <code>clip-path</code>, this element is duplicated and overlayed
						on top of the original one. The duplicated elements have different themes and we just
						reveal the one underneath by animating the <code>clip-path</code> property.
					</span>
					<button
						tabIndex="0"
						onClick={toggleTheme}
						className={`h-10 rounded-md px-4 text-sm font-medium ${
							isDarkTheme ? "bg-black text-white" : "bg-white text-gray-800"
						}`}
					>
						Switch theme
					</button>
				</div>
			</div>
		</div>
	);
}
