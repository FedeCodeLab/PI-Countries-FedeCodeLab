import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailModules.css";

const Detail = () => {
	const [country, setCountry] = useState({});
	const [activities, setActivities] = useState([]);
	let { id } = useParams();

	useEffect(() => {
		fetch(`http://localhost:3001/countries/id/${id}`)
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					setCountry(data[0]); // Primer objeto es la información del país
					setActivities(data[1]); // Segundo objeto es el array de actividades
				} else {
					alert("No se encontró un país con ese id");
				}
			})
			.catch((err) => window.alert("No existe país con ese id"));
	}, [id]);

	return (
		<article className="detail container">
			{Object.keys(country).length > 0 && (
				<div className="detailCountry">
					<div className="left">
						{country.flag && <img src={country.flag} alt="Flag" />}
					</div>
					<div className="right">
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
								{country.subregion && (
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
			)}

			{activities.length > 0 && (
				<div className="detailActivities">
					<h3>Actividades que se llevan a cabo en este país:</h3>
					<div className="grid">
						{activities.map((activity) => (
							<div className="activity" key={activity.id}>
								<h3>{activity.name}</h3>
								<div className="activity-content">
									<p>
										<span>Duración: </span>
										{activity.duration}
									</p>
									<p>
										<span>Dificultad: </span>
										{activity.difficulty}
									</p>
									<p>
										<span>Temporada: </span>
										{activity.season}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</article>
	);
};

export default Detail;
