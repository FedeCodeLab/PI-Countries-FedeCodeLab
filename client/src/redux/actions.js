import axios from "axios";
export const SORT_ALPHABETICAL = "SORT_ALPHABETICAL";
export const FETCH = "FETCH";
export const FETCH_ACITIVITIES = "FETCH_ACITIVITIES";
export const FILTER_CONTINENTS = "FILTER_CONTINENTS";
export const SORT_POPULATION = "SORT_POPULATION";
export const RESET = "RESET";
export const GET_NAME = "GET_NAME";
export const POST_ACTIVITIES = "POST_ACTIVITIES";
export const FILTER_ACTIVITIES = "FILTER_ACTIVITIES";

// ? ---------------------------------------------------------------- SORT BY ALPHABETICAL

export function sortByAlphabetical(order) {
	return {
		type: SORT_ALPHABETICAL,
		payload: order,
	};
}

// ? ---------------------------------------------------------------- SORT BY POPULATION

export function sortByPopulation(order) {
	return {
		type: SORT_POPULATION,
		payload: order,
	};
}

// ? ---------------------------------------------------------------- FETCH

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

// ? ---------------------------------------------------------------- FILTER CONTINENTS

export const filterContinents = (continent) => {
	return {
		type: FILTER_CONTINENTS,
		payload: continent,
	};
};

// ? ---------------------------------------------------------------- RESET COUNTRIES

export const resetCountries = () => {
	return {
		type: RESET,
	};
};

// ? ---------------------------------------------------------------- GET COUNTRIES NAME

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

// ? ---------------------------------------------------------------- POST ACTIVITY

export function postActivity(payload) {
	return async function (dispatch) {
		try {
			const response = await axios.post(
				"http://localhost:3001/createActivity",
				payload
			);
			dispatch({
				type: POST_ACTIVITIES,
				payload: response.data,
			});
		} catch (err) {
			console.log("Tienes un error en: ", err);
		}
	};
}

// ? -------------------------------------------------------------------- FETCH ACTIVITIES

export function fetchActivities() {
	return async (dispatch) => {
		try {
			const response = await fetch("http://localhost:3001/activities");
			const data = await response.json();
			console.log(data);
			dispatch({
				type: FETCH_ACITIVITIES,
				payload: data,
			});
		} catch (error) {
			console.error("Error fetching countries:", error);
		}
	};
}

// ? ---------------------------------------------------------------- FILTER ACTIVITIES

export const filterActivity = (activities) => {
	return {
		type: FILTER_ACTIVITIES,
		payload: activities,
	};
};
