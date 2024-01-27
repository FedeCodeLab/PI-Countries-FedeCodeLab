export const SORT_ALPHABETICAL = "SORT_ALPHABETICAL";
export const FETCH = "FETCH";
export const FILTER_CONTINENTS = "FILTER_CONTINENTS";
export const SORT_POPULATION = "SORT_POPULATION";
export const RESET = "RESET";

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
