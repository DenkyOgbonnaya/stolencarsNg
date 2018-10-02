
 let errorMessage = [];
 let validateFormData= function (formData){
    
    if(!/[a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+/.test(formData.carMake)){
        errorMessage.push('car make is required or invalid');
    } 
    if(!/[A-HJ-NPR-Z0-9]{17}/.test(formData.vin)){
        errorMessage.push('VIN is required and must be over 17 character long');
    } 
    if(!/\w{8}/.test(formData.plateNumber)){
        errorMessage.push('plate number is required or invalid');
    } 
    if(!/[a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+/.test(formData.color)){
        errorMessage.push('car color is required or invalid');
    } 
    if(!/[a-zA-Z]+/.test(formData.firstName)){
        errorMessage.push('firstname is required or invalid');
    } 
    if(!/[a-zA-Z]+/.test(formData.lastName)){
        errorMessage.push('invalid Lastname');
    } 
    if(!/\w+@./.test(formData .email)){
        errorMessage.push('invalid email');
    } 

    if(errorMessage.length >0){
        return false;
    }else{
        return true;
    }  
}
let validateVin = function(carVin){
    if(/[A-HJ-NPR-Z0-9]{17}/.test(carVin.vin)){
        return true;;
    } else return false;
}
let validateMail = function(mail){
        if(mail.placeSeen == '' && mail.stateSeen == null){
            return false;
        }else return true;

}
module.exports.validateFormData = validateFormData;
module.exports.errorMessage = errorMessage;
module.exports.validateVin = validateVin;
module.exports.validateMail = validateMail;