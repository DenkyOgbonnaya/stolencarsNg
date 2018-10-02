
let countriesCodes = require('../models/countryData'),
manufacturersCodes = require('../models/manufacturerData'),
bodyStyleCodes = require('../models/bodyStyleData'),
engineCodes = require('../models/engineData'),
modelYearCodes = require('../models/modelYearData')
vinValidator = require(__dirname+'/vinValidator');

let getCountry = function(countryCode){
    return getInfo(countryCode, countriesCodes);
}
let getManufacturer = function(manufacturerCode){
    return getInfo(manufacturerCode, manufacturersCodes);
}
let getBodyStyle = function(bodyStyleCode){
    return getInfo(bodyStyleCode, bodyStyleCodes);
}
let getEngine = function(engineCode){
    return getInfo(engineCode, engineCodes);
}
let getModelYear = function(modelYearCode){
    return getInfo(modelYearCode, modelYearCodes);
}

let decodeVin = function(inputedVin){
   let vin = inputedVin.toUpperCase();
    if(vinValidator.isValidVin  (vin)){
        let vinParser = {
            countryCode: vin.substring(0, 2),
            manufacturerCode: vin.substring(0, 3),
            modelYearCode: vin.charAt(9),
            bodyStyleCode: vin.charAt(5),
            engineCode: vin.charAt(7)
        }

        let vinInformation = {
         madeIn: getCountry(vinParser.countryCode),
         manufacturer: getManufacturer(vinParser.manufacturerCode),
         bodyStyle: getBodyStyle(vinParser.bodyStyleCode),
         engine: getEngine(vinParser.engineCode),
         modelYear: getModelYear(vinParser.modelYearCode)
        } 
    return vinInformation;
    }else return {badVin: 'Invalid VIN'};
    
}

let getInfo = function(code, codeData){
    for(let data of codeData){
        if(data.code == code){
            return data.name;
        }
    }
    return 'No information';
}
module.exports.decodeVin = decodeVin;