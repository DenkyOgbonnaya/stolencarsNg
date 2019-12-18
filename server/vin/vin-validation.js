//first validate the vin length
let isValidVin = (inputedVin) => {
    let vin = inputedVin.toUpperCase();
 
     if(!vin.length == 17 ){
         return false;
     }else
     //vin must not contain letter I,O && Q
     if(!/[A-HJ-NPR-Z0-9]{17}/.test(vin)){
         return false
     }
      return true;
 }
 
 module.exports = isValidVin;
 