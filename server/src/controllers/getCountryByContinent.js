// const Country = require('../db');

// const getCountryByContinent = async (req, res) => {
//   const {continent} = req.body;
//   try {
//     const countries = await Country.findAll({
//       where: {
//         continent: continent
//       }
//     })
//     res.status(200).json(countries)
//     // res.json(countries);
//   } catch (err){
//     console.error(err);
//     res.status(500).json({ error: 'Error al obtener países por continente' });
//   }
// }

// module.exports = getCountryByContinent