"use client";

import useMeasure from "react-use-measure";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Example() {
	const [showExtraContent, setShowExtraContent] = useState(false);
	const [elementRef, bounds] = useMeasure();

	return (
		<div className="wrapper">
			<button className="button" onClick={() => setShowExtraContent((b) => !b)}>
				Toggle height
			</button>
			{/*animate={{ height: bounds.height }}*/}
			{/*With these two approaches we are unable to get the correct height on the initial render, it'll be 0. If you need to avoid layout shift, you can change the animate prop to this:*/}
			<motion.div animate={{ height: bounds.height ? bounds.height : null }} className="element">
				{/*We check whether the height coming from either the ResizeObserver or useMeasure is 0. If it is, we set the height to null, which means that the height becomes auto on the initial render.*/}
				<div ref={elementRef} className="inner">
					<h1>Drawer</h1>
					<p>This is a fake drawer. Animating height is tricky, but satisfying when it works.</p>
					{showExtraContent ? (
						<p>This extra content will change the height of the drawer.</p>
					) : null}
				</div>
			</motion.div>
		</div>
	);
}

// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
//
// export default function Example() {
// 	const [showExtraContent, setShowExtraContent] = useState(false);
// 	const [height, setHeight] = useState(0);
// 	const elementRef = useRef(null);
//
// 	useEffect(() => {
// 		const observer = new ResizeObserver((entries) => {
// 			for (let entry of entries) {
// 				const rect = entry.target.getBoundingClientRect();
//
// 				setHeight(rect.height);
// 			}
// 		});
//
// 		if (elementRef.current) {
// 			observer.observe(elementRef.current);
// 		}
//
// 		return () => observer.disconnect();
// 	}, []);
//
// 	return (
// 		<div className="wrapper">
// 			<button className="button" onClick={() => setShowExtraContent((b) => !b)}>
// 				Toggle height
// 			</button>
// 			<motion.div animate={{ height }} className="element">
// 				<div ref={elementRef} className="inner">
// 					<h1>Fake Family Drawer</h1>
// 					<p>
// 						This is a fake family drawer. Animating height is tricky, but satisfying when it works.
// 					</p>
// 					{showExtraContent ? (
// 						<p>
// 							This extra content will change the height of the drawer. Some even more content to
// 							make the drawer taller and taller and taller...
// 						</p>
// 					) : null}
// 				</div>
// 			</motion.div>
// 		</div>
// 	);
// }
