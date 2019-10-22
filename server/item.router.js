const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Item = require("./item.model.js");

// Delete an item
router.delete("/items/:itemId", (req, res) =>{
    Item.deleteOne({"_id" : mongoose.Types.ObjectId(req.params.itemId)}, (err) =>{
        if(err) {
        console.log(err);
        return res.send(500);
        }
        console.log("Save success!");
        return res.send(204);
    });
});

// Returns all items
router.get("/items", (req, res) =>{
    Item.find({}, function(err, items){
        if(err){
            console.log("Error:", err);
            res.status(500).send(err);
            return;
        }
        res.send(items); 
    });
});

// Create a new item
router.post("/items", (req, res) =>{
    const props = {
        imgSrc: "google.com",
        title: "Veljepuhastusvahend",
        category: "products",
        price: 40,
    };
    const item1 = new Item(props);
    item1.save( err =>{
        if(err){
            console.log("Error:", err);
            res.send(500);
            return;
        }
        console.log("Successfully created!")
        res.send(201);
    });
});

// Returns an item
router.get("/api/items/:itemId", (req, res) =>{
    Item.findById(req.params.itemId, function (err, item) {
        if(err){
            console.log("Error:", err);
            res.status(500).send(err);
            return;
        }
        res.send(item);
    });
});

module.exports = router;