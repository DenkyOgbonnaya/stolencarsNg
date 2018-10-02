
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let moment = require('moment');
let schemas = require('../models/schemas');
let validateInputs = require(__dirname+'/validatesInputs');
let vinDecoder = require(__dirname+'/vinDecoder');

let urlencodedParser = bodyParser.urlencoded({extended: false});
let mongoDB = process.env.MONGODB_URI || 'mongodb://denkyltd:denkyltd1@ds219983.mlab.com:19983/stolencars'
//connect to db
mongoose.connect(mongoDB, function(err){
    if(err) throw err;
    console.log('connected to stolencars db');
});
    
//create model/collecions from schemas
let Car = mongoose.model('Car', schemas.carSchema);
let Reviews = mongoose.model('Reviews', schemas.reviewsSChema);

module.exports = function(app){
   //handle GET requests
    app.get('/', function(req, res){
        res.sendFile('index.html', {root: './public/'});
        });
    app.get('/report-stolen-car.html', function(req, res){
            res.sendFile('report-stolen-car.html', {root: './public/'});
        });
    app.get('/remove-stolen-car.html', function(req, res){
            res.sendFile('remove-stolen-car.html', {root: './public/'});
        });
    app.get('/stolen-cars-statistics.html', function(req, res){
            res.sendFile('stolen-cars-statistics.html', {root: './public/'});
        });
    app.get('/reviews.html', function(req, res){
            res.sendFile('reviews.html', {root: './public/'});
        });
    app.get('/about-stolen-cars.html', function(req, res){
            res.sendFile('about-stolen-cars.html', {root: './public/'});
        });
    app.get('/vinDecoder.html', function(req, res){
        res.sendFile('vinDecoder.html', {root: './public/'});
    })
    app.get('/reviews', function(req, res){
        Reviews.find({}, function(error, reviews){
            if(error)throw error;
            res.send(reviews);
        })
    })
    app.get('/todaysFeature', function(req, res){
        Car.find({}, function(error, data){
            if(error) throw error;

            let randData = Math.floor(Math.random() * data.length);
            let feature = data[randData]
            res.send({data: feature});
        })
    })
    app.get('/mail-owner/:vin', function(req, res){
        res.render('mail-owner', {data: req.params.vin});
    });
    
    
    
    //handles POST request from specific routes
    app.post('/reviews', urlencodedParser, function(req, res){
        let reviewsData = req.body;
        let reviewTime = moment().format('MMMM Do YYYY h:mm:ss a');
        let newReview = Reviews({
            name: reviewsData.name,
            comment: reviewsData.comment,
            time: reviewTime
        });
        newReview.save(function(err, data){
            if(err)throw err;
            res.send({name:data.name, comment: data.comment, time: reviewTime});
        })

    })
    app.post('/report-stolen-car.html', urlencodedParser, function(req, res){
        let formData = req.body;
        //validates the formData
        let isValidFormData = validateInputs.validateFormData(formData);
        
        if(isValidFormData){
            //add formData to database
            let newCar = Car({
                carMake: formData.carMake,
                model: formData.model,
                vin: formData.vin,
                plateNumber: formData.plateNumber,
                color: formData.color,
                date: formData.date,
                stateStolen: formData.stateStolen,
                placeStolen: formData.placeStolen,
                owner: {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email
                },
                dateRegistered: moment().format('MMMM Do YYYY h:mm:ss a')
            });
            newCar.save(function(error, data){
                if(error) throw error;
                //pass data to view
                res.send({car:formData});
            });
            
        }else{
            //return error log message to the client
           if(req.xhr){
            let errorMess =validateInputs.errorMessage;
    
            res.send({errorMessage: errorMess});
           }
           let length = validateInputs.errorMessage.length;
           validateInputs.errorMessage.splice(0,length);
        } 
    });
    app.post('/searchCar', urlencodedParser, function(req, res){
        let carVin = req.body;
        let isValidVin = validateInputs.validateVin(carVin);

        if(isValidVin){
            Car.findOne({vin: carVin.vin}, function(error, searchedCar){
                if(error) throw error;
                if(!searchedCar){
                    res.send({notFound: 'car not found'})
                }else{
                    res.send(searchedCar); 
                } 
            });
        }else{
            res.send({invalidVin: 'The "VIN" entered is invalid!.'})
        }
        
    })
    app.post('/mailto', urlencodedParser, function(req, res){
        let mail = req.body;
        if(validateInputs.validateMail(mail)){

            // Compose mail and sent
            
                 res.send({sent: 'mail sent!. your information will be helpful in the recovery of this car'})   
            
        }else res.send({nullMessage: 'place stolen is required'});
    })
    app.post('/decodeVin', urlencodedParser, function(req, res){
        let vin = req.body;
        let vinInfo = vinDecoder.decodeVin(vin.vin);
        res.send(vinInfo);
    })

    app.delete('/removeCar', function(req, res){
        let query = req.query;
        Car.findOneAndRemove({vin: query.vin, "owner.email": query.email}).remove(function(error, data){
            if(error) throw error;
            if(data == null){
                res.send({removed: 'record not found in db'});
               
            }else{
                res.send({removed: 'Car successfully removed from db'});
            }
           
        });
    });

}