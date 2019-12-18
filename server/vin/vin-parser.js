const isValidVin = require("./vin-validation");

const parseVin = vin => {
    if(isValidVin(vin)){
        return {
            countryCode: vin.substring(0, 2),
            manufacturerCode: vin.substring(0, 3),
            modelYearCode: vin.charAt(9),
            bodyStyleCode: vin.charAt(5),
            engineCode: vin.charAt(7)
        }
    }
}

module.exports = parseVin;