import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import About from "./views/about/About";
import Detail from "./views/detail/Detail";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Activities from "./views/activities/activities";
const EMAIL = "f@f.com";
const PASSWORD = "hola123";

function App() {
	const linkedIn = "https://www.linkedin.com/in/fedecodelab/";
	const github = "https://github.com/FedeCodeLab";
	const PORFOLIO = "https://fedecodelab.tech/";
	const { pathname } = useLocation();
	const navigate = useNavigate();

	// ! --------------------------------------------------- Login
	const [access, setAccess] = useState(false);
	const login = ({ email, password }) => {
		if (email === EMAIL && password === PASSWORD) {
			setAccess(true);
		}
	};
	useEffect(() => {
		const currentPath = pathname.toLowerCase();
		const isLogin = currentPath === "/";
		if (access && isLogin) {
			navigate("/home");
		} else if (!access && !isLogin) {
			navigate("/");
		}
	}, [access, pathname, navigate]);
	const exit = () => {
		setAccess(!access);
	};

	return (
		<div className="App">
			{pathname !== "/" && (
				<Navbar
					github={github}
					linkedIn={linkedIn}
					porfolio={PORFOLIO}
					exit={exit}
				/>
			)}
			<main>
				<Routes>
					<Route path="/" element={<Login login={login} />} />
					<Route path="/home" element={<Home porfolio={PORFOLIO} />} />
					<Route
						path="/about"
						element={
							<About github={github} linkedIn={linkedIn} porfolio={PORFOLIO} />
						}
					/>
					<Route path="/detail/:id" element={<Detail />} />
					<Route path="/activities" element={<Activities />} />
				</Routes>
			</main>
			{pathname !== "/" && (
				<Footer github={github} linkedIn={linkedIn} porfolio={PORFOLIO} />
			)}
		</div>
	);
}

export default App;
