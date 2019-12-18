const carRouter = require("express").Router();
const{addCar, removeCar, searchCar, sendNotification} = require("./cars-controller")();
const {validateCar, validateDelete, validateNotif} = require("./cars-validation");
const checkValidationResult =  require("../middleware/validation");
const {multerUploads} = require("../config/multer-config");

carRouter.route("/cars")
.post(multerUploads.single("image"), validateCar, checkValidationResult, addCar)

carRouter.delete("/cars/:vin", validateDelete, checkValidationResult, removeCar)

carRouter.get("/cars/search", searchCar);
carRouter.post("/cars/:vin/notification",validateNotif, checkValidationResult, sendNotification);

module.exports = carRouter;