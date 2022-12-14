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