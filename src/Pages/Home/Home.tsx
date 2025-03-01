import FadeIn from "../../Effects/FadeIn";
import About from "./About";
import Clients from "./Clients";
import Hero from "./HeroSection/Hero";
import Projects from "./Projects/Projects";

function Home() {
	return (
		<>
			<div className="home">
				<Hero />
				<FadeIn>
					<About />
				</FadeIn>
				<FadeIn>
					<Projects />
				</FadeIn>
				<FadeIn>
					<Clients />
				</FadeIn>
			</div>
		</>
	);
}
export default Home;
