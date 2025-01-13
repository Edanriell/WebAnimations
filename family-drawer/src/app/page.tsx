"use client";

import { useMemo, useRef, useState } from "react";
import { Drawer } from "vaul";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion } from "motion/react";
import { DefaultView, Key, Phrase, RemoveWallet } from "./components";
import { CloseIcon } from "./icons";

export default function FamilyDrawer() {
	const [isOpen, setIsOpen] = useState(false);
	const [view, setView] = useState("default");
	const [elementRef, bounds] = useMeasure();
	const previousHeightRef = useRef();

	const content = useMemo(() => {
		switch (view) {
			case "default":
				return <DefaultView setView={setView} />;
			case "remove":
				return <RemoveWallet setView={setView} />;
			case "phrase":
				return <Phrase setView={setView} />;
			case "key":
				return <Key setView={setView} />;
		}
	}, [view]);

	const opacityDuration = useMemo(() => {
		const currentHeight = bounds.height;
		const previousHeight = previousHeightRef.current;

		const MIN_DURATION = 0.15;
		const MAX_DURATION = 0.27;

		if (!previousHeightRef.current) {
			previousHeightRef.current = currentHeight;
			return MIN_DURATION;
		}

		const heightDifference = Math.abs(currentHeight - previousHeight);
		previousHeightRef.current = currentHeight;

		const duration = Math.min(Math.max(heightDifference / 500, MIN_DURATION), MAX_DURATION);

		return duration;
	}, [bounds.height]);

	return (
		<>
			<button
				className="fixed top-1/2 left-1/2 antialiased -translate-y-1/2 -translate-x-1/2 h-[44px] rounded-full border border-gray-200 bg-white px-4 py-2 font-medium text-black transition-colors hover:bg-[#F9F9F8] focus-visible:shadow-focus-ring-button md:font-medium"
				onClick={() => setIsOpen(true)}
				style={{ fontFamily: "Open Runde" }}
			>
				Try it out
			</button>
			<Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
				<Drawer.Portal>
					<Drawer.Overlay
						className="fixed inset-0 z-10 bg-black/30"
						onClick={() => setIsOpen(false)}
					/>
					<Drawer.Content
						asChild
						className="fixed inset-x-4 bottom-4 z-10 mx-auto max-w-[361px] overflow-hidden rounded-[36px] bg-[#FEFFFE] outline-none md:mx-auto md:w-full"
						style={{ fontFamily: "Open Runde" }}
					>
						<motion.div
							animate={{
								height: bounds.height,
								transition: {
									duration: 0.27,
									ease: [0.25, 1, 0.5, 1]
								}
							}}
						>
							<Drawer.Close asChild>
								<button
									data-vaul-no-drag=""
									className="absolute right-8 top-7 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F8F9] text-[#949595] transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-75"
								>
									<CloseIcon />
								</button>
							</Drawer.Close>
							<div ref={elementRef} className="px-6 pb-6 pt-2.5 antialiased">
								<AnimatePresence initial={false} mode="popLayout" custom={view}>
									<motion.div
										initial={{ opacity: 0, scale: 0.96 }}
										animate={{ opacity: 1, scale: 1, y: 0 }}
										exit={{ opacity: 0, scale: 0.96 }}
										key={view}
										transition={{
											duration: opacityDuration,
											ease: [0.26, 0.08, 0.25, 1]
										}}
									>
										{content}
									</motion.div>
								</AnimatePresence>
							</div>
						</motion.div>
					</Drawer.Content>
				</Drawer.Portal>
			</Drawer.Root>
		</>
	);
}
