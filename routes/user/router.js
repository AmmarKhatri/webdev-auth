const express = require("express")
const router = express.Router()
//user route registeration
const loginUser = require("./loginUser")
const registerUser = require("./registerUser")
const getUser = require("./getUser")
const authMiddleware = require("../../controllers/authMiddleware")

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/", authMiddleware ,getUser);

module.exports = router;