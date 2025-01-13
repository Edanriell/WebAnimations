"use client";

import { useState } from "react";

export default function Home() {
	const [sliderPosition, setSliderPosition] = useState(50); // Initial slider position (percentage)

	const handleSliderMove = (event) => {
		// Get the container width and mouse position
		const container = event.currentTarget.getBoundingClientRect();
		const newSliderPosition = ((event.clientX - container.left) / container.width) * 100;

		// Clamp the value between 0% and 100%
		setSliderPosition(Math.max(0, Math.min(100, newSliderPosition)));
	};

	return (
		<div className="mobile-full-width relative my-7 w-full overflow-hidden bg-white dark:bg-[#0D0D0C] md:rounded-xl h-[1000px]">
			<div className="pointer-events-none absolute inset-0 z-10 border-b border-t border-gray-400 md:rounded-xl md:border-none md:shadow-inset-border"></div>
			<div
				className="flex h-full items-center p-6 overflow-hidden !p-0 relative"
				onMouseMove={(e) => e.buttons === 1 && handleSliderMove(e)} // Handle dragging
				onTouchMove={(e) =>
					handleSliderMove({
						clientX: e.touches[0].clientX,
						currentTarget: e.currentTarget
					})
				} // Handle touch dragging
			>
				{/* Background Image (Before) */}
				<div className="absolute inset-0">
					<img
						alt="Before"
						loading="lazy"
						width="2048"
						height="1154"
						decoding="async"
						data-nimg="1"
						className="md:rounded-xl"
						src="blue_distortion.webp"
						style={{ color: "transparent" }}
					/>
				</div>

				{/* Foreground Image (After) */}
				<div
					style={{
						clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
					}}
					className="absolute inset-0"
				>
					<img
						alt="After"
						loading="lazy"
						width="2048"
						height="1154"
						decoding="async"
						data-nimg="1"
						className="md:rounded-xl"
						src="red_distortion.webp"
						style={{ color: "transparent" }}
					/>
				</div>

				{/* Slider Handle */}
				<button
					aria-label="Drag to compare"
					className="absolute z-10 flex h-full w-4 cursor-ew-resize outline-none focus-visible:shadow-focus-ring-button md:w-2.5"
					style={{ left: `${sliderPosition}%` }}
					onMouseDown={(e) => e.preventDefault()} // Prevent default to avoid unwanted text selection
				>
					<div className="h-full w-1.5 bg-white/20 transition-colors hover:bg-white/50"></div>
				</button>
			</div>
			<div className="[&amp;_section]:p-0"></div>
		</div>
	);
}
