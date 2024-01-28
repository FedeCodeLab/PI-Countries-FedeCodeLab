const { Activity, Country } = require("../db");

const postActivities = async (req, res) => {
	const { name, difficulty, duration, season, countries } = req.body;
	try {
		const numericDifficulty = parseInt(difficulty, 10);

		const foundCountries = await Country.findAll({
			where: { nameCommon: countries },
		});

		const createActivity = await Activity.create({
			name,
			difficulty: numericDifficulty,
			duration,
			season,
		});

		await createActivity.addCountries(foundCountries);

		res.status(200).json(createActivity);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = postActivities;
