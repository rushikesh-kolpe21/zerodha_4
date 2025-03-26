const {model} = require('mongoose');

const OrderSchema = require('../schemas/OrderSchema');

const Order = new model("Order",OrderSchema);

module.exports = {Order}