import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Layout/Navbar";
import UnderConstruction from "./Pages/UnderConstruction/UnderConstruction";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
	return (
		<>
			{" "}
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/projects" element={<UnderConstruction />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
