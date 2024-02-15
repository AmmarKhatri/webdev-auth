const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true, // Ensures email is unique
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true, // Ensures username is unique
        required: true
    },
    role: { 
        type: String, 
        enum: ['ADMIN', 'USER', 'GUEST'], // Example roles, adjust as needed
        default: 'ADMIN'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;
