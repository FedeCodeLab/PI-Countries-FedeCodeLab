import "./formModules.css";

export default function Form() {
	return (
		<form action="" className="formActivities">
			<h1>Create Activities</h1>

			<div>
				<label htmlFor="activity">Nombre de la Actividad:</label>
				<input type="text" />
			</div>

			<div>
				<label htmlFor="dificultad">Dificultad de la actividad:</label>
				<select defaultValue="placeholder">
					<option value="placeholder" disabled>
						Difficulty
					</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>

			<div>
				<label htmlFor="dificultad">Estación en la que se realiza:</label>
				<select defaultValue="placeholder">
					<option value="placeholder" disabled>
						Season
					</option>
					<option value="Verano">Verano</option>
					<option value="Otoño">Otoño</option>
					<option value="Invierno">Invierno</option>
					<option value="Primavera">Primavera</option>
				</select>
			</div>

			<div>
				<label htmlFor="duracion">Duración de la actividad:</label>
				<select defaultValue="placeholder">
					<option value="placeholder" disabled>
						Duración
					</option>
					<option value="Una hora">Una hora</option>
					<option value="Dos horas">Dos horas</option>
					<option value="Cuatro horas">Cuatro horas</option>
					<option value="Medio dia">Medio dia</option>
					<option value="Un dia">Un dia</option>
					<option value="Tres dias">Tres dias</option>
					<option value="Una semana">Una semana</option>
				</select>
			</div>

			<div>
				<label htmlFor="countries">Países donde se lleva a cabo:</label>
			</div>

			<button>Crear Actividad</button>
		</form>
	);
}
