import axios from "axios";
axios.defaults.validateStatus = status => status < 500;

export const removeCar = async (vin, email) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        },
        data: {email}
    }
    try {
        return axios.delete(`/api/cars/${vin}`,config);
    } catch (err) {
        throw err;
    }
}