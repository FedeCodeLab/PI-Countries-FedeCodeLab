import axios from "axios";
export const SORT_ALPHABETICAL = "SORT_ALPHABETICAL";
export const FETCH = "FETCH";
export const FILTER_CONTINENTS = "FILTER_CONTINENTS";
export const SORT_POPULATION = "SORT_POPULATION";
export const RESET = "RESET";
export const GET_NAME = "GET_NAME";
export const POST_ACTIVITIES = "POST_ACTIVITIES";

export function sortByAlphabetical(order) {
	return {
		type: SORT_ALPHABETICAL,
		payload: order,
	};
}

export function sortByPopulation(order) {
	return {
		type: SORT_POPULATION,
		payload: order,
	};
}

export function fetchCountries() {
	return async (dispatch) => {
		try {
			const response = await fetch("http://localhost:3001/countries");
			const data = await response.json();
			dispatch({
				type: FETCH,
				payload: data,
			});
		} catch (error) {
			console.error("Error fetching countries:", error);
			// Manejo de errores aquí, si es necesario
		}
	};
}

export const filterContinents = (continent) => {
	return {
		type: FILTER_CONTINENTS,
		payload: continent,
	};
};

export const resetCountries = () => {
	return {
		type: RESET,
	};
};

export function getCountriesName(name) {
	return async function (dispatch) {
		try {
			let response = await fetch(
				`http://localhost:3001/countries/q?nameCommon=${name}`
			);
			if (!response.ok) {
				throw new Error("Country not found");
			}
			let countriesName = await response.json();
			return dispatch({
				type: GET_NAME,
				payload: countriesName,
			});
		} catch (error) {
			alert(error.message);
			console.error(error);
		}
	};
}

export function postActivity(payload) {
	return async function (dispatch) {
		try {
			// Realizar la solicitud POST al servidor
			const response = await axios.post(
				"http://localhost:3001/createActivity",
				payload
			);
			// Dispatch de la acción si la solicitud fue exitosa
			dispatch({
				type: POST_ACTIVITIES,
				payload: response.data, // Si el servidor devuelve datos útiles, puedes usarlos aquí
			});
			// Puedes hacer algo adicional aquí después de que se complete la solicitud, si es necesario
		} catch (err) {
			console.log("Tienes un error en: ", err);
		}
	};
}
