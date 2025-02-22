import Lottie from "lottie-react";
import notFound from "../../assets/animations/not-found.json";
import "./NotFound.css";

export default function NotFound() {
	return (
		<section className="not-found">
			<h1>404</h1>
			<Lottie animationData={notFound} className="animation" />
			<h5>We could not find the page you were looking for...</h5>
		</section>
	);
}
