import "./FormModules.css";
import { useEffect, useState } from "react";
import validation from "./validation";

export default function Form({ login }) {
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		const { value, name } = event.target;
		setUserData({ ...userData, [name]: value });
		setErrors(validation({ ...userData, [name]: value }));
	};

	function handleSubmit(e) {
		e.preventDefault();
		login(userData);
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<div className="form-lft">
				<h3>¡Bienvenido!</h3>
				<h1>
					<span>Ingresa</span> a tu cuenta
				</h1>

				<div className="user">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						key="email"
						placeholder="Invernalia@gmail.com"
						value={userData.email}
						onChange={handleChange}
					/>
					{errors.email && <p className="error">{errors.email}</p>}
				</div>

				<div className="pass">
					<label htmlFor="password">Contraseña</label>
					<input
						type="password"
						name="password"
						key="password"
						placeholder="Ingresa tu contraseña"
						value={userData.password}
						onChange={handleChange}
					/>
					{errors.password && <p className="error">{errors.password}</p>}
				</div>
				<button className="submit" type="submit">
					Iniciar Sesión
				</button>
			</div>
			<div className="form-rght">
				<h2>¿Eres nuevo aquí?</h2>
				<p>¿Te gustaría saber mas acerca de otros países?</p>
			</div>
		</form>
	);
}
