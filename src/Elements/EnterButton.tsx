import React, { useEffect, useState } from "react";
import "./Elements.css";

interface EnterButtonProps {
	containerRef: React.RefObject<HTMLDivElement | null>;
	onClick: () => void;
}

const EnterButton: React.FC<EnterButtonProps> = ({ containerRef, onClick }) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isInsideContainer, setIsInsideContainer] = useState(false);

	const handleMouseMove = (e: MouseEvent) => {
		if (containerRef.current && isInsideContainer) {
			const containerRect = containerRef.current.getBoundingClientRect();

			// Get X and Y relative to container
			let x = e.clientX - containerRect.left;
			let y = e.clientY - containerRect.top;

			// Get button's dimensions
			const button = document.querySelector(".enter-button") as HTMLElement;
			const buttonWidth = button ? button.offsetWidth : 0;
			const buttonHeight = button ? button.offsetHeight : 0;

			// Center the button relative to the cursor
			x = x - buttonWidth / 2;
			y = y - buttonHeight / 2;

			// Constrain the button to stay inside the container
			x = Math.max(0, Math.min(x, containerRect.width - buttonWidth));
			y = Math.max(0, y); // Allow the button to go above the container but not below

			setPosition({ x, y });
		}
	};

	const handleMouseEnter = () => {
		setIsInsideContainer(true); // The mouse entered the container
	};

	const handleMouseLeave = () => {
		setIsInsideContainer(false); // The mouse left the container
	};

	useEffect(() => {
		// Add event listeners for mousemove and mouseenter/mouseleave
		document.addEventListener("mousemove", handleMouseMove);
		if (containerRef.current) {
			containerRef.current.addEventListener("mouseenter", handleMouseEnter);
			containerRef.current.addEventListener("mouseleave", handleMouseLeave);
		}

		// Cleanup the event listeners when the component unmounts
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			if (containerRef.current) {
				containerRef.current.removeEventListener(
					"mouseenter",
					handleMouseEnter
				);
				containerRef.current.removeEventListener(
					"mouseleave",
					handleMouseLeave
				);
			}
		};
	}, [isInsideContainer]);

	return (
		<button
			className="enter-button"
			style={{
				bottom: `${position.y}px`,
				left: `${position.x}px`,
			}}
			onClick={onClick}></button>
	);
};

export default EnterButton;
