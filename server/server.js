const express = require("express");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
require('dotenv').config();
const itemRouter = require("./item.router.js");
const userRouter = require("./user.router.js");
const authRouter = require("./auth.router.js");
const DB = require("./database.js");
const Item = require("./item.model.js");
const bodyParser = require("body-parser");

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0-ru9x4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// Development environment. In Heroku we don't use .env file
if(process.env.NODE_ENV !== "production"){
  require('dotenv').config();
}

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/", itemRouter);
app.use("/api/v1/users", userRouter);

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
    //deleteAllItems();
    migrate();
    listen();
  })
  .catch( err => {
    console.error("Error happened", err);
  });
  // - Ei tea millal kõik tooted on salvestatud kuna tegemist on a sünkroonse teenusega
  function migrate(){
    Item.count({}, (err, countNr) =>{
      if(err) throw err;
      if(countNr > 0) {
        console.log("Already had items, don't save!");
        return;
      }
      saveAllItems();
    });
  }

  function deleteAllItems(){
    Item.deleteMany({}, (err, doc) =>{
      console.log('err', err, "doc", doc);
    });
  };

  function saveAllItems(){
    console.log("Migrate started");
    const items = DB.getItems();
    items.forEach(item => {
      const document = new Item(item);
      document.save( (err) =>{
        if(err){
          console.log(err);
          throw new Error("Something happened during save!");
        }
        console.log("Save success!");
      })
    });
    console.log("items", items);
 }