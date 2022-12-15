require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

//SETUP MIDDLEWARE
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//To make sure the nodemon is running
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.use(express.urlencoded({ extended: false }));

//View Engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//GLOBAL CONFIGURATION
const mongoURI = process.env.MONGO_URI;
// const db = mongoose.connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("connect to mongo");
});

//TESTER FOR MONGOOSE
// db.on("error", (err) => console.log(err.message + " is mongod not running?"));
// db.on("open", () => console.log("mongo connected: ", mongoURI));
// db.on("close", () => console.log("mongo disconnected"));

// constant for Store to link to index
const Store = require("./models/store.js");

//WELCOME PAGE
app.get("/", (req, res) => {
  res.send("Welcome to Bunny's Magic Shop");
});

//INDEX ROUTE
app.get("/store", (req, res) => {
  Store.find({}, (error, store) => {
    res.render("Index", {
      store: store,
    });
  });
});

// NEW ROUTE
app.get("/store/new", (req, res) => {
  res.render("New");
});

//DELETE ROURTE
app.delete("/store/:id", (req, res) => {
  Store.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/store");
  });
});

//UPDATE ROUTE
app.put("/store/:id", (req, res) => {
  Store.findByIdAndUpdate(req.params.id, req.body, (err, updatedStore) => {
    console.log(updatedStore);
    res.redirect("/store/${req.params.id}");
  });
});

//CREATE ROUTE
app.post("/pokemon", (req, res) => {
  let storeBody = req.body;
  storeBody.img = storeBody.item;

  Store.create(req.body, (error, createStore) => {
    res.reditect("/store");
  });
});

//EDIT ROUTE

app.get("/store/:id/edit", (req, res) => {
  Store.findById(req.params.id, (err, foundStore) => {
    if (!err) {
      res.render("Edit", {
        store: foundStore,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

//SHOW ROUTE
app.get("/store/:id", (req, res) => {

  Store.findById(req.params.id, (err, foundStore) => {
    res.render("Show", {
      store: foundStore,
    });
  });
});

app.listen(3000, () => {
  console.log("listening");
});
