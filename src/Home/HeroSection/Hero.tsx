import myPic from "/src/assets/me.png";
import "./Hero.tsx.css";
import SkillsComponent from "./SkillsComponent";
import Quote from "./Quote";
import EnterButton from "../../Elements/EnterButton";
import { useRef } from "react";
function Hero() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const handleEnterButtonClick = () => {
		window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
	};
	return (
		<>
			<section className="hero-section">
				<img src={myPic} />
				<div className="content">
					<h1>Hello, I'm Roshan!</h1>
					<div className="mid-section">
						<SkillsComponent />
						<Quote />
					</div>
					<div className="cta-buttons">
						<button>Reach Out</button>
						<div className="enter-button-container" ref={containerRef}>
							<EnterButton
								containerRef={containerRef}
								onClick={handleEnterButtonClick}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default Hero;
