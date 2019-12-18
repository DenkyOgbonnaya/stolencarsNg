const{check} = require("express-validator/check");

const validateCar = [
    check("make", "Car make is required").notEmpty(),
    check("model", "Car model is required").notEmpty(),
    check("vin", "Car vin must be 17 characters long").isLength({min:17, max:17}),
    check("plateNumber", "plateNumber is required").notEmpty(),
    check("color", "Car make is required").optional(),
    check("dateStolen", "The stolen date is required").notEmpty(),
    check("placeStolen", "place stolen is required").notEmpty(),
    check("firstname", "firstname is required").notEmpty(),
    check("lastname", "lastname is required").notEmpty(),
    check("email", "email is required").notEmpty(),
]
const validateDelete = [
    check("vin", "vin is required").notEmpty(),
    check("email", "email is required").notEmpty(),
]
const validateDecode = [
    check("vin", "vin is required").notEmpty(),
    
]
const validateNotif = [
    check("state", "state is required").notEmpty(),
    check("location", "location is required").notEmpty(),
]

module.exports = {
    validateCar,
    validateDelete,
    validateDecode,
    validateNotif
};