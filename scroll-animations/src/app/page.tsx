"use client";

import { useInView } from "motion/react";
import { useRef } from "react";

export default function Home() {
	const ref = useRef(null);
	// Change to true only once & when at least 100px of the image is in view
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	if (isInView && ref.current) {
		ref.current.animate([{ clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0 0)" }], {
			duration: 1000,
			fill: "forwards",
			easing: "cubic-bezier(0.77, 0, 0.175, 1)"
		});
	}

	return (
		<>
			<h1>scroll down</h1>
			<img
				className="image-reveal"
				alt="A series of diagonal black and white stripes with a smooth gradient effect. The alternating light and dark bands create a sense of depth and movement, resembling light rays or shadows cast across a surface. The overall aesthetic is abstract and high-contrast, with a sleek, modern feel."
				src="raycast.jpg"
				height={430}
				ref={ref}
				width={644}
			/>
		</>
	);
}
