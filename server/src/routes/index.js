const { Router } = require("express");
// const getCountries = require("../controllers/getCountries");
const getAllCountries = require("../controllers/getAllCountries");
// const getCountryByContinent = require("../controllers/getCountryByContinent")

const router = Router();

// router.get('/countries', getCountries)
router.get('/countries', getAllCountries)
// router.get('/countries/continent', getCountryByContinent)
router.get(`/countries/:idPais`)
router.get(`/countries/name`)
router.post(`/activities`)
router.get(`/activities`)

module.exports = router;