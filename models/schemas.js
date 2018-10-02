let mongoose = require('mongoose');

    let carSchema = mongoose.Schema({
        carMake: String,
        model: String,
        vin: String,
        plateNumber: String,
        color: String,
        date: Date,
        stateStolen: String,
        placeStolen: String,
        owner: {
            firstName: String,
            lastName: String,
            email: String
        },
        dateRegistered: String
    });
    
    let reviewsSChema = mongoose.Schema({
        name: String,
        comment: String,
        time: String 
    })
    
    module.exports.carSchema = carSchema;
    module.exports.reviewsSChema = reviewsSChema;
     
