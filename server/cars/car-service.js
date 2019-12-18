const Car =require("./cars-model")

const carService = () => {
    const create = async(car) => {
        try {
            return await Car.create(car);
        } catch (err) {
            throw err;
        }
    }
    const remove = async(vin, email) => {
        try {
            return await Car.findOneAndRemove({"vin":vin, "owner.email": email});
        } catch (err) {
            throw err;
        }
    }
    const search = async(vin) => {
        try {
            return await Car.findOne({"vin":vin});
        } catch (err) {
            throw err;
        }
    }

    return {
        create,
        remove,
        search
    }

}

module.exports = carService;