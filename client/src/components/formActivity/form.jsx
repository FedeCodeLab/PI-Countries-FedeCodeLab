import "./formModules.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postActivity } from "../../redux/actions";

export default function Form({ allCountries }) {
	const dispatch = useDispatch();

	const [activity, setActivity] = useState({
		name: "",
		difficulty: "",
		duration: "",
		season: "",
		countries: [],
	});

	const onChange = (e) => {
		const { name, value } = e.target;
		setActivity({ ...activity, [name]: value });
	};

	const onSubmit = (e) => {
		console.log(activity);
		e.preventDefault();
		dispatch(postActivity(activity));
		setActivity({
			name: "",
			difficulty: "",
			duration: "",
			season: "",
			countries: [],
		});
	};

	const onClick = (e) => {
		const { value } = e.target;
		setActivity({ ...activity, countries: [...activity.countries, value] });
	};

	const deleteCountry = (country) => {
		setActivity({
			...activity,
			countries: activity.countries.filter((c) => c !== country),
		});
	};

	return (
		<form className="formActivities" onSubmit={onSubmit}>
			<h1>Create Activities</h1>

			<div>
				<label htmlFor="activity">Nombre de la Actividad:</label>
				<input
					type="text"
					name="name"
					value={activity.name}
					onChange={onChange}
				/>
			</div>

			<div>
				<label htmlFor="dificultad">Dificultad de la actividad:</label>
				<select
					name="difficulty"
					value={activity.difficulty}
					onChange={onChange}
				>
					<option value="">Seleccione</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>

			<div>
				<label htmlFor="season">Estación en la que se realiza:</label>
				<select name="season" value={activity.season} onChange={onChange}>
					<option value="">Seleccione</option>
					<option value="Verano">Verano</option>
					<option value="Otoño">Otoño</option>
					<option value="Invierno">Invierno</option>
					<option value="Primavera">Primavera</option>
				</select>
			</div>

			<div>
				<label htmlFor="duracion">Duración de la actividad:</label>
				<select name="duration" value={activity.duration} onChange={onChange}>
					<option value="">Seleccione</option>
					<option value="Una hora">Una hora</option>
					<option value="Dos horas">Dos horas</option>
					<option value="Cuatro horas">Cuatro horas</option>
					<option value="Medio dia">Medio día</option>
					<option value="Un día">Un día</option>
					<option value="Tres días">Tres días</option>
					<option value="Una semana">Una semana</option>
				</select>
			</div>

			<div>
				<label htmlFor="countries">Países donde se lleva a cabo:</label>
				<div className="flex">
					<select name="countries" id="countries" value="" onChange={onClick}>
						<option value="">Seleccione un país</option>
						{allCountries.map((country) => (
							<option key={country.id} value={country.nameCommon}>
								{country.nameCommon}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className="list">
				<ul>
					{activity.countries.map((country, index) => (
						<li key={index}>
							{country}
							<button type="button" onClick={() => deleteCountry(country)}>
								x
							</button>
						</li>
					))}
				</ul>
			</div>

			<button type="submit">Crear Actividad</button>
		</form>
	);
}
