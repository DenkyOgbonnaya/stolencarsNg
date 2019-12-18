const {create, remove, search} = require("./car-service")();
const uploader = require("../config/cloudinary-config");
const {dataUri} = require("../config/multer-config");
const sendMail = require("../config/nodemailer-config");

const carController = () => {
    const addCar = async(req, res) => {
        const{firstname, lastname, email} = req.body;
        let credentials;

        if(!req.file){
            credentials = {
                ...req.body,
                owner: {
                    firstname,
                    lastname,
                    email
                }
            }
        }else {
            let datauri = dataUri(req.file).content;
            let result = await uploader.upload(datauri, {folder: "stolencars"});
            credentials = {
                ...req.body,
                owner: {
                    firstname,
                    lastname,
                    email
                },
                image: result.url
            }
        }
        try {
            const car = await create(credentials)
        if(car)
            return res.status(201).send({car, message: "Your car has been reported successfully"});
        return res.status(400).send({message: "Could not report car"})

        } catch (err) {
            res.status(500).send(err);
        }
        
    }
    const removeCar = async(req, res) => {
        const{email} = req.body;
        const{vin} = req.params;
        try {
            const car =  await remove(vin, email)
        if(car)
            return res.status(200).send({message: "Your car has been removed successfully"});
        return res.status(404).send({message: "This car does not exist in our database"})

        } catch (err) {
            res.status(500).send(err);
        }
        
    }
    const searchCar = async(req, res) => {
        const{vin} = req.query;
        try {
            const car =  await search(vin)
        if(car)
            return res.status(200).send({car});
        const message = `The car you searched for with VIN <b>${vin}</b> has not been reported stolen in our database. This might mean good news,
        However this does not 100 percent quarantee the car is indeed not stolen. if you intend to purchase this car, you should verify the 
        custom and registration papers are original and belong to the seller. Good luck with your purchase!`
        return res.status(404).send({message})

        } catch (err) {
            res.status(500).send(err);
        }
        
    }
    const sendNotification = async(req, res) => {
        const{vin} = req.params;
        const details = req.body;

        try {
            const car = search(vin);
            if(car){
                const ownerEmail = car.owner.email;
                const ownerName = `${car.owner.firstname} ${car.owner.lastname}`;
                const subject = "Stolencar notification";
                const message = `<div> 
                    <h4>Good news!</h4>
                    <p>Hello ${ownerName}, i hope this meets you well. Your stolen car <b> ${car.make} ${car.model} </b>
                    with Vehicle Identification Number <b> ${car.vin} </b> and registration number <b> ${car.plateNumber}</b>.
                    Was reportedly spotted at <b> ${details.location} ${details.state} </b> state.
                    </p>
                    <div> <b>Seller</b>: ${details.seller} </div>
                    <div>${details.info} </div>
                    <p> While this might be good news, verification of this information was not carried out by 
                    stolencars. We are not affiliated to any law enforcement agency, and therefore can not carry out investigation about Auto Theft.
                    You are adviced to carry out proper verification before taken action, and carry along your local law enforcement aagency.
                    </p>
                    <i>Goodluck!></i>
                </div>`

                const result = await sendMail("<Noreply@stolencars", ownerEmail, subject, message);
                if(result)
                    return res.status(200).send({message: "Message successfully sent!"});
                return res.status(500).send({message: "Could not send message, try again"})
            }
            return res.status(400).send({message: "No such vehicle available!"})
        } catch (err) {
            return res.status(500).send(err);
        }
    }
    return {
        addCar,
        removeCar,
        searchCar,
        sendNotification
    }
}
module.exports = carController;