/*jshint esversion: 6 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var WolfSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Wolf', WolfSchema);