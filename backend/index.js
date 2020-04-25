require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cors());

// connect to DB -> DBURL: will need your own MongoDB connection link
mongoose.connect(process.env.MONGODB_URI || process.env.DBURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});


// schema for db entries
const itemSchema = new mongoose.Schema({
    id: String,
    title: String, 
    content: String
});

const Item = mongoose.model("Item", itemSchema);

app.get("/api", function(req, res) {
    
    Item.find({}, function(err, foundItems) {
        if(err) {
            console.log(err);
        } else {
           // console.log(foundItems);
            res.json(foundItems);
        }
    })
    

})

app.delete("/delete", function(req, res) {
    console.log(req.body.id);
    Item.deleteOne({id:req.body.id}, function(err, found) {
        console.log("Item successfully deleted.");
    });
});

app.post("/save", function(req, res) {
    
    var note = new Item({
        id: req.body.id,
        title: req.body.title,
        content: req.body.content
    });

    note.save(function(err) {
        if(err) {
            console.log("Sorry, internal server error.");
        } else {
            console.log("Post saved");
        }
    });
    res.send("Entry received");
});

if (process.env.NODE_ENV ===  "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT, function(){
    console.log("App listening on port " + PORT);
});