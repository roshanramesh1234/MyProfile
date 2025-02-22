import Lottie from "lottie-react";
import underConstruction from "../../assets/animations/under-construction.json";
import "./UnderConstruction.css";
export default function UnderConstruction() {
	return (
		<section className="under-construction">
			<h1>This page is under construction</h1>
			<Lottie animationData={underConstruction} className="animation" />
			<h5>Check back later to see this page</h5>
		</section>
	);
}
