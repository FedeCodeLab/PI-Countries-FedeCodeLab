const { Country } = require("../db");
const { Activity } = require("../db");

//! FALTA ACTIVIDADES TURISTICAS

const getCountries = async () => {
	try {
		const api = await fetch("http://localhost:5000/countries");
		const data = await api.json();
		const map = data.map((m) => ({
			cca3: m.cca3,
			nameCommon: m.name.common,
			nameOfficial: m.name.official,
			flag: m.flags.png,
			capital:
				Array.isArray(m.capital) && m.capital.length > 0 ? m.capital[0] : "",
			continent: m.continents[0], // Obtenemos el primer elemento del array
			subregion: m.subregion,
			area: m.area,
			population: m.population,
			map: m.maps.openStreetMaps,
		}));
		await Country.bulkCreate(map);
	} catch (error) {
		console.error(error.message);
	}
};

module.exports = getCountries;

// const getCountries = async () => {
// 	try {
// 		const api = await fetch("http://localhost:5000/countries");
// 		const data = await api.json();
// 		const map = data.map((m) => ({
// 			cca3: m.cca3,
// 			nameCommon: m.name.common,
// 			nameOfficial: m.name.official,
// 			flag: m.flags.png,
// 			capital: m.capital,
// 			continent: m.region,
// 			subregion: m.subregion,
// 			area: m.area,
// 			population: m.population,
// 		}));
// 		await Country.bulkCreate(map);
// 	} catch (error) {
// 		console.error(error.message);
// 	}
// };

// module.exports = getCountries;
