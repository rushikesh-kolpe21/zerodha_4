const { model } = require("mongoose");

const {HoldingSchema} = require('../schemas/HoldingSchema');

const Holding = new model('Holding', HoldingSchema);

module.exports = {Holding};