import "./HomeModules.css";
import "../../components/pagination/PaginationModules.css";
import Cards from "../../components/cards/Cards";
import Pagination from "../../components/pagination/Pagination";
import Filters from "../../components/filters/Filters";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchCountries } from "../../redux/actions";

export default function Home({
	porfolio,
	allCountries,
	allActivities,
	filterActivities,
}) {
	const dispatch = useDispatch();
	const countriesFilter = useSelector((state) => state.filterCountries);

	const [countriesPerPage, setCountriesPerPage] = useState(12);
	const [currentPage, setCurrentPage] = useState(1);

	let currentCountries;
	let totalCountries;

	if (filterActivities.length >= 1) {
		totalCountries = filterActivities.length;
		const lastIndex = currentPage * countriesPerPage;
		const firstIndex = lastIndex - countriesPerPage;
		currentCountries = filterActivities.slice(firstIndex, lastIndex);
	} else {
		if (countriesFilter.length >= 1) {
			totalCountries = countriesFilter.length;
			const lastIndex = currentPage * countriesPerPage;
			const firstIndex = lastIndex - countriesPerPage;
			currentCountries = countriesFilter.slice(firstIndex, lastIndex);
		} else {
			totalCountries = allCountries.length;
			const lastIndex = currentPage * countriesPerPage;
			const firstIndex = lastIndex - countriesPerPage;
			currentCountries = allCountries.slice(firstIndex, lastIndex);
		}
	}

	// if (countriesFilter.length >= 1) {
	// 	totalCountries = countriesFilter.length;
	// 	const lastIndex = currentPage * countriesPerPage;
	// 	const firstIndex = lastIndex - countriesPerPage;
	// 	currentCountries = countriesFilter.slice(firstIndex, lastIndex);
	// } else {
	// 	totalCountries = allCountries.length;
	// 	const lastIndex = currentPage * countriesPerPage;
	// 	const firstIndex = lastIndex - countriesPerPage;
	// 	currentCountries = allCountries.slice(firstIndex, lastIndex);
	// }

	return (
		<section className="home">
			<div className="container">
				<article className="introduction">
					<div className="home-left">
						<h1>Aquí puedes obtener un listado de países de todo el mundo</h1>
						<p>Proyecto Integrador de Federico Guzmán</p>
						<Link to={`${porfolio}`} target="_blank">
							<button>Portfolio</button>
						</Link>
					</div>
					<div className="home-right">
						<div id="earth"></div>
					</div>
				</article>
			</div>

			<Filters
				allActivities={allActivities}
				filterActivities={filterActivities}
			/>

			<Cards countries={currentCountries} />

			<Pagination
				countriesPerPage={countriesPerPage}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalCountries={totalCountries}
			/>
		</section>
	);
}
