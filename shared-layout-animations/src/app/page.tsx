"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
	const [showSecond, setShowSecond] = useState(false);

	return (
		<div className="wrapper">
			<motion.button layout className="button" onClick={() => setShowSecond((s) => !s)}>
				Animate
			</motion.button>
			{showSecond ? (
				<motion.div layoutId="rectangle" className="second-element" style={{ borderRadius: 12 }} />
			) : (
				<motion.div layoutId="rectangle" className="element" style={{ borderRadius: 12 }} />
			)}
		</div>
	);
}
