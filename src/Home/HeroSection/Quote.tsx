import { useState, useEffect, useRef } from "react";

function Quote() {
	const [topText, setTopText] = useState("");
	const [bottomText, setBottomText] = useState("");
	const fullTopText = "“Designing the Future...";
	const fullBottomText = "Developing with Precision...”";

	// Use refs to track indices
	const topIndexRef = useRef(0);
	const bottomIndexRef = useRef(0);

	useEffect(() => {
		const typingInterval = setInterval(() => {
			// Append characters to topText if not fully typed
			if (topIndexRef.current < fullTopText.length) {
				setTopText((prev) => {
					const newText = prev + fullTopText[topIndexRef.current];
					topIndexRef.current += 1;
					return newText;
				});
			}
			// If topText is fully typed, stop interval and introduce delay
			else if (topIndexRef.current === fullTopText.length) {
				clearInterval(typingInterval); // Stop further execution
				setTimeout(() => {
					document.getElementById("text-top")?.classList.remove("typing");
					document.getElementById("text-bottom")?.classList.add("typing");

					// Restart typing interval for bottom text
					const bottomTypingInterval = setInterval(() => {
						if (bottomIndexRef.current < fullBottomText.length) {
							setBottomText((prev) => {
								const newText = prev + fullBottomText[bottomIndexRef.current];
								bottomIndexRef.current += 1;
								return newText;
							});
						}
						// Stop once bottomText is fully typed
						if (bottomIndexRef.current === fullBottomText.length) {
							clearInterval(bottomTypingInterval);
						}
					}, 100);
				}, 500); // Delay before starting bottom text
			}
		}, 100);

		return () => clearInterval(typingInterval);
	}, []);

	return (
		<div className="quote-container">
			<h3 id="text-top" className="typing">
				{topText}
			</h3>
			<h3 id="text-bottom">{bottomText}</h3>
		</div>
	);
}

export default Quote;
