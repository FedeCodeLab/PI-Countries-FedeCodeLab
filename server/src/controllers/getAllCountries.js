const {Country} = require ('../db')
const {Activity} = require('../db')

//! FALTA ACTIVIDADES TURISTICAS

const getAllCountries = async(req, res) => {
    try {
      const allCountries = await Country.findAll()
      res.status(200).json(allCountries)
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = getAllCountries