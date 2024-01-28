const { Activity, Country } = require("../db");

const getCountryById = async (req, res) => {
	const { cca3 } = req.params;
	try {
		const country = await Country.findOne({
			where: { cca3 },
		});
		if (country) {
			res.status(200).json(country);
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = getCountryById;
