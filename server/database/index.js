const mongoose = require('mongoose');
require('dotenv').config();

const{MONGODB_URL} = process.env;

const dbUrl = process.env.MONGODB_URI || MONGODB_URL  //'mongodb://localhost:27017/stolencars';

const connectToDb = () => {
    mongoose.connect(dbUrl, {useNewUrlParser: true})
    .then(() => console.log('connected to stolencars db'))
    .catch(err => console.log(err))
}

module.exports = connectToDb;
