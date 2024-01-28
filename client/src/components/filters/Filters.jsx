import "./FiltersModules.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	sortByAlphabetical,
	sortByPopulation,
	filterContinents,
	resetCountries,
	getCountriesName, // Importa la acción getCountriesName
} from "../../redux/actions";

export default function Filters({ countriesFilter }) {
	const [name, setName] = useState("");
	const dispatch = useDispatch();

	const handleChange = (e) => {
		let { name, value } = e.target;
		if (name === "orderPop") {
			dispatch(sortByPopulation(value));
		} else if (name === "orderAlph") {
			dispatch(sortByAlphabetical(value));
		} else if (name === "continents") {
			dispatch(filterContinents(value));
		}
	};

	const handleClick = () => {
		dispatch(resetCountries());
	};

	const show = () => {
		console.log(countriesFilter);
	};

	const search = (e) => {
		const { value } = e.target;
		setName(value); // Actualiza el estado 'name' con el valor del campo de búsqueda
	};

	const handleSubmit = () => {
		dispatch(getCountriesName(name)); // Dispara la acción getCountriesName con el valor de 'name'
	};

	return (
		<article className="filters container">
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
			<button onClick={handleClick}>Reset</button>
			<button onClick={show}>Show</button>
			<div className="search-container">
				<input type="search" placeholder="Countries..." onChange={search} />
				<button onClick={handleSubmit}>Search</button>
			</div>
		</article>
	);
}
