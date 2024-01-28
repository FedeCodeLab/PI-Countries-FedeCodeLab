import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailModules.css";

const Detail = () => {
	const [country, setCountry] = useState({});
	let { id } = useParams();
	useEffect(() => {
		fetch(`http://localhost:3001/countries`)
			.then((res) => res.json())
			.then((data) => {
				const filteredCountry = data.find((c) => c.cca3 === id);
				if (filteredCountry) {
					setCountry(filteredCountry);
				} else {
					alert("No se encontró un país con ese id");
				}
			})
			.catch((err) => window.alert("No existe pais con ese id"));
	}, [id]);

	return (
		<article className="detail">
			<div className="detailContent">
				<div className="left">
					{country.flag && <img src={country.flag}></img>}
				</div>
				<div className="right">
					<div className="column">
						{country.nameOfficial && <h1>{country.nameOfficial}</h1>}
						<div className="flex">
							<div>
								{country.cca3 && (
									<p>
										<span>Id: </span>
										{country.cca3}
									</p>
								)}
								{country.continent && (
									<p>
										<span>Continent: </span>
										{country.continent}
									</p>
								)}
								{country.capital && (
									<p>
										<span>Capital: </span>
										{country.capital}
									</p>
								)}
							</div>
							<div>
								{country.area && (
									<p>
										<span>Area: </span>
										{country.area}
									</p>
								)}
								{country.area && (
									<p>
										<span>Subregion: </span>
										{country.subregion}
									</p>
								)}
								{country.population && (
									<p>
										<span>Population: </span>
										{country.population}
									</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Detail;
