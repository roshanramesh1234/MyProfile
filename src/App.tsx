import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Layout/Navbar";

function App() {
	return (
		<>
			{" "}
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	);
}

export default App;
