const Tickets = require("../../models/Ticket");
const Users = require("../../models/User"); // Import the Users model

async function updateTicket(req, res) {
    try {
        const { email } = req.user;
        let user = await Users.findOne({ email });
        
        // User doesn't exist
        if (!user) return res.status(404).json({ message: "User doesn't exist!" });

        // Fetch ticket
        const ticket = await Tickets.findOne({ _id: req.params.id });

        // Check if ticket doesn't exist or user doesn't have this ticket
        if (!ticket || !user.tickets.includes(req.params.id))
            return res.status(404).json({ msg: "Ticket not valid!" });

        // Update ticket
        ticket.type = req.body.type;
        ticket.updatedAt = Date.now();
        await ticket.save();

        return res.status(200).json({ msg: "Ticket type updated" });
    } catch (error) {
        return res.status(500).json({ error });
    }
}

module.exports = updateTicket;
