const express = require("express");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
require('dotenv').config();
const itemRouter = require("./item.js");

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0-ru9x4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.use(itemRouter);

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get('/items/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.use(express.static('dist'));

function listen(){
  app.listen(PORT, () => {
    console.log("Server started", PORT);
    console.log(`http://localhost:${PORT}`);
  });
};

mongoose.connect(DB_URL)
  .then(() => {
    console.log("Database access success");
    listen();
  })
  .catch( err => {
    console.error("Error happened", err);
  });