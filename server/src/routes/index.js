const { Router } = require("express");
// const getCountries = require("../controllers/getCountries");
const getAllCountries = require("../controllers/getAllCountries");
const getCountryByName = require("../controllers/getCountryByName");
const postActivities = require("../controllers/postActivities");
const getCountryById = require("../controllers/getCountryById");
const getActivities = require("../controllers/getActivities");

const router = Router();

// router.get("/countries", getCountries);
router.get("/countries", getAllCountries);
router.get("/countries/q", getCountryByName);
router.get(`/countries/id/:cca3`, getCountryById);
router.post(`/activities`, postActivities);
router.get(`/activities`, getActivities);

module.exports = router;
