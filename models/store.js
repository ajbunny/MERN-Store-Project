const mongoose = require('mongoose');




const storeSchema = new mongoose.Schema({
    item: {type: String, require: true},
    color: {type: String, require: true},
    quantity: {type: Number, require:true},
    price: {type: Number, require:true},
    img: {type: String, require: true},
})




const Store = mongoose.model('Store', storeSchema);
module.exports = Store; 






// const items = [
    // {item: "Amethyst", color: "purple", quantity: "0", price: "20.00", img: "https://images.pexels.com/photos/4040587/pexels-photo-4040587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
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