const countriesCodes = require("./vin-country-data"),
manufacturersCodes = require("./vin-manufacturer-data"),
bodyStyleCodes = require("./vin-bodystyle-data"),
engineCodes = require("./vin-engine-data"),
modelYearCodes = require("./vin-model-year-data")

const vinService = () => {
    const getCountry = function(countryCode){
        return getInfo(countryCode, countriesCodes);
    }
    const getManufacturer = function(manufacturerCode){
        return getInfo(manufacturerCode, manufacturersCodes);
    }
    const getBodyStyle = function(bodyStyleCode){
        return getInfo(bodyStyleCode, bodyStyleCodes);
    }
    const getEngine = function(engineCode){
        return getInfo(engineCode, engineCodes);
    }
    const getModelYear = function(modelYearCode){
        return getInfo(modelYearCode, modelYearCodes);
    }
    const getInfo = (code, codeData) => {
        for(let data of codeData){
            if(data.code == code){
                return data.name;
            }
        }
        return 'No information';
    }

    return {
        getCountry,
        getManufacturer,
        getBodyStyle,
        getEngine,
        getModelYear,
    }
}

module.exports = vinService;