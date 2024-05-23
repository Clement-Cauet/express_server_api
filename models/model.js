const mongoose = require('mongoose');
const { Schema } = mongoose;

const ScoringSchema = new Schema({
    comment: String,
    score: Number
});

const RestauSchema = new Schema({
    code: Number,
    EmailAddress: String,
    name: String,
    type: String,
    website: String,
    street: String,
    number: String,
    city: String,
    zip: String,
    country: String,
    phone: String,
    date: Date,
    payment: String,
    description: String,
    scoring: [ScoringSchema]
}, { collection: 'restau' });

module.exports = mongoose.model('restau', RestauSchema);