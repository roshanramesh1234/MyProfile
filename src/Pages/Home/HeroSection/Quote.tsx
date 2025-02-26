import { useState, useEffect } from "react";
import "./Hero.tsx.css";
function Quote() {
	const [topText, setTopText] = useState("");
	const [bottomText, setBottomText] = useState("");
	const fullTopText = "“Designing the Future...";
	const fullBottomText = "Developing with Precision...”";

	const typeText = (
		fullText: string,
		setText: React.Dispatch<React.SetStateAction<string>>
	) => {
		for (let i = 0; i < fullText.length; i++) {
			var text = "";
			setTimeout(() => {
				text += fullText[i];
				setText(text);
			}, 100 * i);
		}
	};

	useEffect(() => {
		const startTyping = () => {
			// Start typing top text, then bottom text after a delay
			typeText(fullTopText, setTopText);
			const delayTimeout = setTimeout(() => {
				document.getElementById("text-top")?.classList.remove("typing");
				document.getElementById("text-bottom")?.classList.add("typing");
				typeText(fullBottomText, setBottomText);
			}, fullTopText.length * 100 + 500); // Delay for smooth transition

			// Cleanup function
			return () => {
				clearTimeout(delayTimeout);
			};
		};

		// Ensure typing starts only after the DOM is fully loaded
		if (document.readyState === "complete") {
			setTimeout(() => {
				startTyping();
			}, 1500);
		} else {
			window.onload = startTyping;
		}
	}, []); // Run once on mount

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
