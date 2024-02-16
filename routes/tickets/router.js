const express = require("express");
const createTicket = require("./createTIcket");
const authMiddleware = require("../../controllers/authMiddleware");
const getTicketsByUser = require("./getTicketsByUser");
const removeTicket = require("./removeTicket");
const router = express.Router()
//ticket route registeration
router.post("/create", authMiddleware, createTicket);
router.get("/", authMiddleware, getTicketsByUser);
router.delete("/:id", authMiddleware, removeTicket);
module.exports = router;