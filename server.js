require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000
const db = mongoose.connection
const methodOverride = require('method-override')











app.listen(3000, () => {
    console.log('listening')
});