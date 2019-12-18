const {
    getBodyStyle, 
    getCountry, 
    getEngine, 
    getManufacturer, 
    getModelYear}
 = require("./vin-service")();
 const parseVin = require("./vin-parser");
 const isValidVin = require("./vin-validation");

const vinController = () => {
    
    const decodeVin = (req, res) => {
        const{vin} = req.params;
        const vinCaps = vin.toUpperCase();

        if( isValidVin(vinCaps) ){
            const pasrsedVin = parseVin(vinCaps);

            let vinInformation = {
                madeIn: getCountry(pasrsedVin.countryCode),
                manufacturer: getManufacturer(parseVin.manufacturerCode),
                bodyStyle: getBodyStyle(pasrsedVin.bodyStyleCode),
                engine: getEngine(pasrsedVin.engineCode),
                modelYear: getModelYear(pasrsedVin.modelYearCode)
            } 
            return res.status(200).send({vinInformation});
        }
        return res.status(400).send({message: "Invalid vin number"})
    
    }
    return {
        decodeVin
    }
        
}

 module.exports = vinController;