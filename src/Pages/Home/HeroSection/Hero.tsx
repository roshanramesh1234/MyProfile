import myPic from "/src/assets/me.png";
import "./Hero.tsx.css";
import SkillsComponent from "./SkillsComponent";
import Quote from "./Quote";
import EnterButton from "../../../Elements/EnterButton";
import { useMemo, useRef } from "react";
import blazor from "/src/assets/skills/blazor.png";
import docker from "/src/assets/skills/docker.png";
import git from "/src/assets/skills/git.png";
import C from "/src/assets/skills/C.png";
import core from "/src/assets/skills/core.png";
import react from "/src/assets/skills/react.png";
import figma from "/src/assets/skills/figma.png";
import html from "/src/assets/skills/html5.png";
import jira from "/src/assets/skills/jira.png";
import sql from "/src/assets/skills/sql.png";
import mysql from "/src/assets/skills/mysql.png";
import azure from "/src/assets/skills/azure.png";
import css from "/src/assets/skills/css.png";
import { Link } from "react-router-dom";
function Hero() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const handleEnterButtonClick = () => {
		window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
	};
	const shuffle = (array: string[]) => {
		const shuffledArray = [...array]; // Make a copy to avoid mutation
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			]; // Swap
		}
		return shuffledArray;
	};

	const images = useMemo(
		() => [
			blazor,
			docker,
			git,
			C,
			core,
			react,
			figma,
			html,
			jira,
			sql,
			mysql,
			azure,
			css,
		],
		[]
	);
	return (
		<>
			<section className="hero-section">
				<img src={myPic} />
				<div className="hero-skills">
					{Array.from({ length: 4 }).map((_, index) => (
						<SkillsComponent
							key={index}
							height={100}
							duplicates={2}
							images={shuffle(images)}
						/>
					))}
				</div>
				<div className="content">
					<h1>Hello, I'm Roshan!</h1>
					<div className="mid-section">
						<Quote />
					</div>
					<div className="cta-buttons">
						<Link to="/contact">Reach Out</Link>
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
