import About from "./About";
import Clients from "./Clients";
import Hero from "./HeroSection/Hero";
import Projects from "./Projects/Projects";

function Home() {
	return (
		<>
			<div className="home">
				<Hero />
				<About />
				<Projects />
				<Clients />
			</div>
			;
		</>
	);
}
export default Home;
