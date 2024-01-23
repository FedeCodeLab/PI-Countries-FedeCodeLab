require("dotenv").config();
const { EMAIL, PASSWORD } = process.env;

function login(req, res) {
  const { email, password } = req.query;
  if (EMAIL === email && PASSWORD === password) {
    res.status(200).json({ access: true });
  } else {
    res
      .status(403)
      .json({ access: false, message: "Acceso denegado" });
  }
}

module.exports = login;