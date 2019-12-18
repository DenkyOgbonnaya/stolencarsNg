const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    vin: {
        type: String,
        required: true
    },
    plateNumber: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    dateStolen: {
        type: Date,
        required: true
    },
    stateStolen: {
        type: String,
        required: true
    },
    placeStolen: {
        type: String,
        required: true
    },
    owner: {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    image: String
},
{timestamps:true}
)

module.exports = mongoose.model("Car", carSchema);