import "./FiltersModules.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	sortByAlphabetical,
	sortByPopulation,
	filterContinents,
	resetCountries,
} from "../../redux/actions";

export default function Filters() {
	const dispatch = useDispatch();

	const handleChange = (e) => {
		let { name, value } = e.target;
		if (name === "orderPop") {
			dispatch(sortByPopulation(value));
		} else if (name === "orderAlph") {
			console.log(value);
			dispatch(sortByAlphabetical(value));
		}
	};

	const handleClick = () => {
		console.log("holis");
		dispatch(resetCountries());
	};

	return (
		<article className="filters container">
			<input type="text" placeholder="Search" />
			<select name="Continents">
				<option value="All">All</option>
				<option value="America">América</option>
				<option value="Asia">Asia</option>
				<option value="Africa">África</option>
				<option value="Europe">Europe</option>
				<option value="Antarctica">Antarctica</option>
				<option value="Oceania">Oceanía</option>
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
		</article>
	);
}
