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
//     {item: "Amethyst", color: "purple", quantity: "100", price: "20.00", img: "https://images.pexels.com/photos/4040587/pexels-photo-4040587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
//     {item: "Citrine", color: "yello", quantity: "100", price: "20.00", img: "https://images.unsplash.com/photo-1614092872241-c9a193f2b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
//     {item: "Clear Quartz", color: "clear", quantity: "100", price: "20.00", img: "https://images.pexels.com/photos/8140266/pexels-photo-8140266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
//     {item: "Rose Quartz", color: "pink", quantity: "100", price: "20.00", img: "https://images.pexels.com/photos/4040589/pexels-photo-4040589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
//     {item: "Incense", color: "purle", quantity: "100", price: "20.00",  img: "https://images.unsplash.com/photo-1541795083-1b160cf4f3d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
//     {item: "Oils", color: "purle", quantity: "100", price: "20.00",  img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
//     {item: "Sage", color: "purle", quantity: "100", price: "20.00",  img: "https://images.unsplash.com/photo-1617500490512-da5f45a25d7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
//     {item: "Books", color: "purle", quantity: "100", price: "20.00",  img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
//     {item: "Sound Bowls", color: "purle", quantity: "100", price: "20.00",  img: "https://images.unsplash.com/photo-1597682886233-61b9023db181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80"},
//     {item: "Shea Butter", color: "brown", quantity: "100", price: "15.00",  img: "https://images.unsplash.com/photo-1610853956061-7a9a57d58ea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=517&q=80"},
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