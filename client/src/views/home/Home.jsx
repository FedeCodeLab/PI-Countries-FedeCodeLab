import "./HomeModules.css";
import "../../components/pagination/PaginationModules.css";
import Cards from "../../components/cards/Cards";
import Pagination from "../../components/pagination/Pagination";
import Filters from "../../components/filters/Filters";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../../redux/actions";

export default function Home() {
	// ? -------------------------------------------- Fetch y creación de estado countries

	// const countriesFilter = useSelector((state) => state.countries)
	const allCountries = useSelector((state) => state.allCountries);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCountries());
	}, [dispatch]);

	// ? -------------------------------------------- Paginado

	const totalCountries = allCountries.length;
	const [countriesPerPage, setCountriesPerPage] = useState(12);
	const [currentPage, setCurrentPage] = useState(1);

	const lastIndex = currentPage * countriesPerPage;
	const firstIndex = lastIndex - countriesPerPage;
	const currentCountries = allCountries.slice(firstIndex, lastIndex);

	// const totalPaginationCountries = countries.length()

	return (
		<section className="home">
			<div className="container">
				<article className="introduction">
					<div className="home-left">
						<h1>Aquí puedes obtener un listado de países de todo el mundo</h1>
						<p>Proyecto Integrador de Federico Guzmán</p>
						<button>Portfolio</button>
					</div>
					<div className="home-right">
						<div id="earth"></div>
					</div>
				</article>
			</div>

			<Filters allCountries={allCountries} />

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
