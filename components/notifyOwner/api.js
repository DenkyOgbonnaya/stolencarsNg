import axios from "axios";
axios.defaults.validateStatus = status => status < 500;

export const notifyOwner = async (vin, details) => {
    try {
        return axios.post(`/api/cars/${vin}/notification`, details);
    } catch (err) {
        throw err;
    }
}