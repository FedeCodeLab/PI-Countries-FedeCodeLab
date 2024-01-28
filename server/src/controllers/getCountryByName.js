const { Op } = require("sequelize");
const { Country } = require("../db");

const getCountryByName = async (req, res) => {
	const { nameCommon } = req.query;
	try {
		const countries = await Country.findAll();

		const filteredCountries = countries.filter((country) =>
			country.nameCommon.toLowerCase().startsWith(nameCommon.toLowerCase())
		);

		if (filteredCountries.length > 0) {
			res.status(200).json(filteredCountries);
		} else {
			res
				.status(404)
				.json({ message: "No countries found with the specified name." });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = getCountryByName;
