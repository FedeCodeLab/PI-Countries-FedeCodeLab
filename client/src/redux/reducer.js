import {
	SORT_ALPHABETICAL,
	FILTER_CONTINENTS,
	FETCH,
	SORT_POPULATION,
	RESET,
	GET_NAME,
	POST_ACTIVITIES,
} from "./actions";

const initialState = {
	allCountries: [],
	filterCountries: [], //filtrados
	activities: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		// ? --------------------------------------------------- SORT_POPULATION

		case SORT_POPULATION:
			let orderPop;
			if (filterCountries.length === 0) {
				orderPop = state.allCountries.toSorted((a, b) => {
					switch (action.payload) {
						case "Asc":
							return a.population - b.population;
						case "Desc":
							return b.population - a.population;
						default:
							return 0;
					}
				});
			} else {
				orderPop = state.filterCountries.toSorted((a, b) => {
					switch (action.payload) {
						case "Asc":
							return a.population - b.population;
						case "Desc":
							return b.population - a.population;
						default:
							return 0;
					}
				});
			}

			return {
				...state,
				// allCountries: orderPop,
				filterCountries: orderPop,
			};

		// ? --------------------------------------------------- SORT_ALPHABETICAL

		case SORT_ALPHABETICAL:
			let orderedCountries;

			if (filterCountries.length === 0) {
				orderedCountries = [...state.allCountries];
			} else {
				orderedCountries = [...state.filterCountries];
			}

			switch (action.payload) {
				case "Asc":
					orderedCountries.sort((a, b) =>
						a.nameCommon.localeCompare(b.nameCommon)
					);
					break;
				case "Desc":
					orderedCountries.sort((a, b) =>
						b.nameCommon.localeCompare(a.nameCommon)
					);
					break;
				default:
					break;
			}

			return {
				...state,
				filterCountries: orderedCountries,
			};

		// ? -------------------------------------------------------- FETCH

		case FETCH:
			return {
				...state,
				allCountries: action.payload,
			};

		// ? ------------------------------------------------------ FILTER_CONTINENTS
		case FILTER_CONTINENTS:
			console.log(action.payload);
			let filteredContinents;
			if (filterCountries.length === 0) {
				filteredContinents =
					action.payload === "All"
						? { ...state, filterCountries: state.allCountries }
						: {
								...state,
								filterCountries: state.allCountries.filter(
									(c) => c.continent === action.payload
								),
						  };
			} else {
				filteredContinents =
					action.payload === "All"
						? { ...state, filterCountries: state.filterCountries }
						: {
								...state,
								filterCountries: state.filterCountries.filter(
									(c) => c.continent === action.payload
								),
						  };
			}

			console.log("Filtered Countries:", filteredContinents.filterCountries); // Verifica los países filtrados
			return { ...state, ...filteredContinents };

		// ? -------------------------------------------------------- RESET

		case RESET:
			return {
				...state,
				filterCountries: [],
			};

		// ? ---------------------------------------------------------- GET NAME

		case GET_NAME:
			return {
				...state,
				filterCountries: action.payload,
			};

		// ? ----------------------------------------------------------- POST ACTIVITY

		case POST_ACTIVITIES:
			const { payload } = action;
			console.log("esto es un payload", payload);
			return {
				...state,
				activities: [...state.activities, payload],
			};

		// ? -------------------------------------------------------- DEFAULT

		default:
			return {
				...state,
			};
	}
}
