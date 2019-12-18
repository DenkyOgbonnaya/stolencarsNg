const vinRouter = require("express").Router();
const{decodeVin} = require("./vin-controller")();

vinRouter.get("/decodevin/:vin", decodeVin);

module.exports = vinRouter;