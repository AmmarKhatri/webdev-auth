const bcrypt = require("bcrypt");
const Users = require("../../models/User");

async function registerUser (req, res) {
    try {
        const { email, password } = req.body

        let user = await Users.findOne({ email })
        console.log("User =>", user)
        if (user) return res.json({ message: "User already created!" })

        await Users.create({ ...req.body, password: await bcrypt.hash(password, 5) });

        return res.json({ msg: "CREATED" })
    } catch (error) {
        return res.json({ msg: error })
    }
};

module.exports = registerUser;