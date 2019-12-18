import axios from "axios";

axios.defaults.validateStatus = status => status < 500;

export const reportCar = async credentials => {
    try {
        return axios.post("/api/cars", credentials);
    } catch (err) {
        throw err;
    }
}
export const getStates = async() => {
    try {
        return axios.get("http://locationsng-api.herokuapp.com/api/v1/states");
    } catch (err) {
        throw err;
    }
}
export const searchCar = async vin => {
    try {
        return axios.get(`/api/cars/search?vin=${vin}`);
    } catch (err) {
        throw err;
    }
}