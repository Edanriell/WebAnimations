"use client";

import { useState } from "react";

const WORD = "Animations";

export default function Home() {
	const [reset, setReset] = useState(0);

	return (
		<div>
			<div key={reset}>
				<h1 className="text-4xl font-bold overflow-hidden">
					{WORD.split("").map((char, index) => (
						<span key={index} style={{ "--index": index }} className="inline-block animate-reveal">
							{char}
						</span>
					))}
				</h1>
			</div>
			<button className="button" onClick={() => setReset(reset + 1)}>
				Replay animation
			</button>
		</div>
	);
}
