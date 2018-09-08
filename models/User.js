const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String, 
    password: String,
    token: String,
    providerType: { type: String, default: null},
    providerId: { type: String, default: null}
});

const User = mongoose.model('users', userSchema);

module.exports = User;