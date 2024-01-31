import "./FiltersModules.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	sortByAlphabetical,
	sortByPopulation,
	filterContinents,
	resetCountries,
	getCountriesName, // Importa la acción getCountriesName
	filterActivity,
} from "../../redux/actions";

export default function Filters({ allActivities, filterActivities }) {
	// ?---------------------------------------------------- States

	const [name, setName] = useState("");
	const dispatch = useDispatch();

	// ?---------------------------------------------------- HANDLECHANGE

	const handleChange = (e) => {
		let { name, value } = e.target;
		if (name === "orderPop") {
			dispatch(sortByPopulation(value));
		} else if (name === "orderAlph") {
			dispatch(sortByAlphabetical(value));
		} else if (name === "continents") {
			dispatch(filterContinents(value));
		} else if (name === "activities") {
			dispatch(filterActivity(value));
		}
	};

	// ?---------------------------------------------------- handleClick

	const handleClick = () => {
		dispatch(resetCountries());
	};

	const show = () => {
		console.log("estos son los filtrados", filterActivities);
	};

	// ?---------------------------------------------------- SEARCH

	const search = (e) => {
		const { value } = e.target;
		setName(value);
	};

	// ?---------------------------------------------------- HANDLESUBMIT

	const handleSubmit = () => {
		dispatch(getCountriesName(name));
		const searchParams = new URLSearchParams(location.search);
		searchParams.set("q", name); // 'q' es el nombre de la consulta para el término de búsqueda
	};

	// ?---------------------------------------------------- RETURN

	return (
		<article className="filters container">
			{/* ------------------------------------------------------- SELECT CONTINENTS */}

			<select
				name="continents"
				defaultValue="placeholder"
				onChange={handleChange}
			>
				<option value="placeholder" disabled>
					All Continents
				</option>
				<option value="South America">South America</option>
				<option value="North America">North America</option>
				<option value="Europe">Europe</option>
				<option value="Africa">Africa</option>
				<option value="Asia">Asia</option>
				<option value="Oceania">Oceania</option>
			</select>

			{/* ------------------------------------------------------- SORT BY ALPHABETICAL */}

			<select
				name="orderAlph"
				id="order"
				onChange={handleChange}
				defaultValue="placeholder"
			>
				<option value="placeholder" disabled>
					Sort Alphabetically
				</option>
				<option value="Asc">Ascendente</option>
				<option value="Desc">Descendente</option>
			</select>

			{/* ------------------------------------------------------- SORT BY POPULATION */}

			<select
				name="orderPop"
				id="order"
				onChange={handleChange}
				defaultValue="placeholder"
			>
				<option value="placeholder" disabled>
					Sort By Population
				</option>
				<option value="Asc">Ascendente</option>
				<option value="Desc">Descendente</option>
			</select>

			{/* ------------------------------------------------------- RESET */}

			<button onClick={show}>show</button>

			<button onClick={handleClick}>Reset</button>

			{/* ------------------------------------------------------- ACTIVITIES */}

			<select
				name="activities"
				onChange={handleChange}
				defaultValue="placeholder"
			>
				<option value="placeholder" disabled>
					All
				</option>
				{allActivities.map((activities, key) => (
					<option key={key}>{activities.name}</option>
				))}
			</select>

			{/* ------------------------------------------------------- SEARCHBAR */}

			<div className="search-container">
				<input type="search" placeholder="Countries..." onChange={search} />
				<button onClick={handleSubmit}>Search</button>
			</div>
		</article>
	);
}
