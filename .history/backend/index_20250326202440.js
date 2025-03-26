require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const bodyParser = require('body-parser');
const cors = require("cors")

const { Holding } = require("./model/HoldingModel");
const { Position } = require("./model/PositionModel");
const { Order } = require("./model/OrderModel");
// const data = require('../dashboard/src/data/data.js')

const PORT = process.env.PORT || 3002;
const MONG_URL = process.env.ATLAS_MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

main()
  .then(() => {
    console.log("connected with mogoose");
  })
  .catch((err) => {
    console.log("not connected to mongoose");
  });

async function main() {
  await mongoose.connect(MONG_URL);
}

// allHoldings
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await Holding.find({});
  res.json(allHoldings)
  // console.log(allHoldings);
});

// allPostion
app.get("/allPositions", async (req, res) => {
  let allPosition = await Position.find({});
  res.json(allPosition)
  // console.log(allPosition);
});

// for adding new data
app.post("/newOrder", async (req, res) =>{
  let newOrder = await new Order({
    name : req.body.name,
    qty :  req.body.number,
    price : req.body.price,
    mode : req.body.mode,
  })

  newOrder.save();
  res.send(" Order saved! ")
})

// const initDb = async () => {
//   await Position.insertMany(data.positions)
//   console.log("data was initial")
// }
// initDb()

app.listen(PORT, () => {
  console.log("App is Started on port:", PORT);
});
