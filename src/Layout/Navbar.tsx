import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	return (
		<nav>
			<Link to="/" className="nav-brand">
				Roshan
			</Link>
			<div className="nav-links">
				<Link to="/">Home</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/projects">Projects</Link>
			</div>
		</nav>
	);
}
