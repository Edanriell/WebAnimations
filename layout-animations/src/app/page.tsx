"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
	const [open, setOpen] = useState(false);

	return (
		<div className="wrapper">
			<motion.div
				onClick={() => setOpen((t) => !t)}
				className="element"
				style={
					open
						? { position: "fixed", inset: 0, width: "100%", height: "100%" }
						: { height: 48, width: 48 }
				}
				layout
			/>
		</div>
	);
}
