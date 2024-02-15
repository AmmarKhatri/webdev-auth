const bcrypt = require("bcrypt");
const Users = require("../../models/User");
var express = require("express");
var router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body

        let user = await Users.findOne({ email })
        if (user) return res.statusCode(409).json({ message: "User already created!" })

        await Users.create({ ...req.body, password: await bcrypt.hash(password, 5) });

        return res.json({ msg: "CREATED" })
    } catch (error) {
        console.error(e)
    }
});

module.exports = router;