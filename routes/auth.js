const { Router } = require("express");
const { personalLogin_post } = require("../controllers/auth");

const router = Router();

router.post("/personal/login", personalLogin_post);

module.exports = router;
