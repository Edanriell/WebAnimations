"use client";

import { useState } from "react";
import { Presence } from "@/app/components/presence";

export default function Home() {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<button onClick={() => setOpen(true)}>open</button>
			<Presence present={open}>
				<div
					data-state={open ? "open" : "closed"}
					className="overlay"
					onClick={() => setOpen(false)}
				/>
			</Presence>
		</div>
	);
}
