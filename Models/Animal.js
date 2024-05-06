const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: String,
    type: String,
    age: Number,
});

module.exports = mongoose.model('Animal', animalSchema);

