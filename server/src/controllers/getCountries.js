const Country = require('../models/Country');
const Activity = require('../models/Activity');

const getCountries = async (req, res) => {
  try {
    const countries = await Country.findAll({
      include: Activity,
    });
    res.status(200).json(countries);
  } catch (error) {
    console.error('Error fetching countries:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = getCountries;