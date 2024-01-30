const { Activity } = require("../db");

const getCountryActivities = async (req, res) => {
	try {
		const { activity } = req.params;
		const act = await Activity.findOne({ where: { name: activity } });

		console.log("hola", act);
		if (act) {
			const countryAct = await act.getCountries();
			res.status(200).json(countryAct);
		} else {
			res.status(400).send("Actividad no encontrada");
		}
	} catch (err) {
		res.status(500).json({ Error: err.message });
	}
};

module.exports = getCountryActivities;
