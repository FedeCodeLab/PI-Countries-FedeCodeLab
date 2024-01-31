import {
	SORT_ALPHABETICAL,
	FILTER_CONTINENTS,
	FETCH,
	SORT_POPULATION,
	RESET,
	GET_NAME,
	POST_ACTIVITIES,
	FETCH_ACITIVITIES,
	FILTER_ACTIVITIES,
} from "./actions";

const initialState = {
	allCountries: [],
	filterCountries: [], //filtrados
	allActivities: [],
	filterActivities: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		// ? --------------------------------------------------- SORT_POPULATION

		case SORT_POPULATION:
			let orderPop;

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

			return {
				...state,
				// allCountries: orderPop,
				filterCountries: orderPop,
			};

		// ? --------------------------------------------------- SORT_ALPHABETICAL

		case SORT_ALPHABETICAL:
			let orderedCountries = [...state.allCountries];

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

		case FETCH_ACITIVITIES:
			return {
				...state,
				allActivities: action.payload,
			};

		// ? ------------------------------------------------------ FILTER_CONTINENTS
		case FILTER_CONTINENTS:
			console.log(action.payload);
			let filteredContinents;
			filteredContinents =
				action.payload === "All"
					? { ...state, filterCountries: state.allCountries }
					: {
							...state,
							filterCountries: state.allCountries.filter(
								(c) => c.continent === action.payload
							),
					  };

			console.log("Filtered Countries:", filteredContinents.filterCountries); // Verifica los países filtrados
			return { ...state, ...filteredContinents };

		// ? -------------------------------------------------------- RESET

		case RESET:
			return {
				...state,
				filterCountries: [],
				filterActivities: [],
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
				allActivities: [...state.allActivities, payload],
			};

		// ? ------------------------------------------------------------ FILTER ACTIVITIES

		case FILTER_ACTIVITIES:
			let filteredActivities;
			filteredActivities =
				action.payload === "All"
					? { ...state, filterActivities: state.allActivities }
					: {
							...state,
							filterActivities: state.allActivities.filter(
								(activity) => activity.name === action.payload
							),
					  };
			return { ...state, ...filteredActivities };

		// ? -------------------------------------------------------- DEFAULT

		default:
			return {
				...state,
			};
	}
}
