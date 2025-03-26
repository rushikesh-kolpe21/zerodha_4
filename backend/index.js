require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

// const {Position} = require('./model/PositionModel.js');
// const data = require('../dashboard/src/data/data.js')

const PORT = process.env.PORT || 3002;
const MONG_URL = process.env.ATLAS_MONGO_URL;



main()
    .then(()=>{
        console.log("connected with mogoose")
    })
    .catch((err)=>{
        console.log("not connected to mongoose")
    })

 async function main(){
   await mongoose.connect(MONG_URL)
}

// const initDb = async () => {
//   await Position.insertMany(data.positions)
//   console.log("data was initial")
// }
// initDb()

app.listen(PORT, () => {
  console.log("App is Started on port:", PORT);
});
