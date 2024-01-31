const { Router } = require("express");
// const getCountries = require("../controllers/getCountries");
const getAllCountries = require("../controllers/getAllCountries");
const getCountryByName = require("../controllers/getCountryByName");
const postActivities = require("../controllers/postActivities");
const getCountryById = require("../controllers/getCountryById");
const getActivities = require("../controllers/getActivities");
const getCountryActivities = require("../controllers/getCountryActivities");
const getCountryByActivities = require("../controllers/getCountryByActivities");

const router = Router();

// router.get("/countries", getCountries);
router.get("/countries", getAllCountries);
router.get("/countries/q", getCountryByName);
router.get(`/countries/id/:cca3`, getCountryById);
router.post(`/createActivity`, postActivities);
router.get(`/activities`, getActivities);
router.get("/countriesActivities/:activity", getCountryActivities);
router.get("/getCountryByActivities/:country", getCountryByActivities);

module.exports = router;
