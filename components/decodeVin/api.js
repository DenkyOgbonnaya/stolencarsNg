import axios from "axios";
axios.defaults.validateStatus = status => status < 500;
export const decodeVin = async(vin) => {
    try {
        return await axios.get(`/api/decodevin/${vin}`);
    } catch (err) {
        throw err;
    }
}