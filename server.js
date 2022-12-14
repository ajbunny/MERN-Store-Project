require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000

//SETUP MIDDLEWARE
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

//GLOBAL CONFIGURATION
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection
mongoose.connect(mongoURI);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

//TESTER FOR MONGOOSE
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));


// constant for Store to link to index
const Store = require('./models/store.js')


//To make sure the modemon is running
app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})



//View Engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// const items = [
//     {item: "Amethyst", color: "purple", quantity: "0", price: "20.00", img: "./images/amethhyst"},
//     {item: "Citrine", color: "yello", quantity: "0", price: "20.00", img: "./images/citrine"},
//     {item: "Clear Quartz", color: "clear", quantity: "0", price: "20.00", img: "./images/clear_quartz"},
//     {item: "Rose Quartz", color: "pink", quantity: "0", price: "20.00", img: "./images/rose_quartz"},
//     {item: "Incense", color: "purle", quantity: "0", price: "20.00",  img: "./images/incense2"},
//     {item: "Oils", color: "purle", quantity: "0", price: "20.00",  img: "./images/oils2"},
//     {item: "Sage", color: "purle", quantity: "0", price: "20.00",  img: "./images/sage2"},
//     {item: "Books", color: "purle", quantity: "0", price: "20.00",  img: "./images/books"},
//     {item: "Sound Bowls", color: "purle", quantity: "0", price: "20.00",  img: "./images/sound_bowls2"},
//     {item: "Shea Butter", color: "brown", quantity: "0", price: "15.00",  img: "./images/Shea_butter"},
// ]

// //THIS CODE WAS ALSO USED TO CONNECT DATA TO MONGO DB
// Store.insertMany(items)
// // if database transaction succeeds
// .then((items) => {
//   console.log(items)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
// //  db.close()
// })


//WELCOME PAGE
app.get('/', (req, res) =>{
    res.send("Welcome to Bunny's Magic Shop")
})

//INDEX ROUTE
app.get('/store', (req, res) =>{
    Store.find({}, (error, store) =>{
        res.render('Index', {
            store: store
        })
    })
})


// NEW ROUTE










app.listen(3000, () => {
    console.log('listening')
});