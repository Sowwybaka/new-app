import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import { useState } from 'react';
import About from './components/About'
import {
	BrowserRouter as Router,
	Route,
	Routes
}
	from "react-router-dom"

function App() {
	const changeTheme = () => {
		if (theme == "info") {
			setTheme("dark")
			document.body.style.backgroundColor = "gray"
		}
		else {
			setTheme("info")
			document.body.style.backgroundColor = "lightblue"
		}
	}
	const [theme, setTheme] = useState("info")
	let theme2 = "info"
	return (
		<>
			<Router>
				<Navbar heading="caseConverter" about="About" home="Home" theme={theme} changeT={changeTheme} />
				<Routes>
					<Route path="/" element={<Text buttonOne="Convert to Lowercase" theme={theme} />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
