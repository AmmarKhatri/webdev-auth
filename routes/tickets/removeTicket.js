const Tickets = require("../../models/Ticket")
const Users = require("../../models/User")
async function removeTicket (req, res) {
    try {
        const { email } = req.user
        let user = await Users.findOne({ email })
        //user doesnt exist
        if (!user) return res.json({ message: "User doesn't exist!" })
        await Tickets.findOneAndDelete({ _id: req.params.id });
        // Remove ticket ID from user's tickets array
        user.tickets = user.tickets.filter(ticketId => ticketId.toString() !== req.params.id)
        // Save the updated user document
        await user.save();
        return res.json({ msg: "DELETED" })
    } catch (error) {
        return res.json({ msg: error })
    }
};

module.exports = removeTicket;