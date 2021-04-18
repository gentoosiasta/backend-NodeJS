const { response } = require("express");

const personalLogin_post = (req, res = response) => {
  const { usuario, contrasena } = req.body;
  res.json({ usuario, contrasena });
};

module.exports = { personalLogin_post };
