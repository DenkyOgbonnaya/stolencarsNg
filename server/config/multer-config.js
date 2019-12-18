const path = require('path');
const multer = require("multer");
const datauri = require('datauri');



const storage = multer.memoryStorage();
const multerUploads = multer({ 
    storage ,
    limits: {
        fileSize: 2 * 1024 * 1024 //2mb
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpg|png|jpeg/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase())

        if(mimetype && extname){
            return cb(null, true);
        }
        cb(new Error(`Only the following image types are supported ${filetypes}`), false)
    }
});
const dUri = new datauri();

/**
* @description This function converts the buffer to data url
* @param {Object} req containing the field object
* @returns {String} The data url from the string buffer
*/
const dataUri = (file)=> dUri.format(path.extname(file.originalname).toString(), file.buffer);

module.exports = {multerUploads, dataUri};
 