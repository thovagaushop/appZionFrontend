import axios from "axios";

export const loginService = async(user) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(process.env.REACT_APP_BASE_AXIOS_URL);
            let response = await axios.post(`${process.env.REACT_APP_BASE_AXIOS_URL}/api/auth/login`, user);
            return resolve(response.data);
        } catch (error) {
            return reject(error.response.data);
        }
    })
    
};

export const registerService = async(data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(`${process.env.REACT_APP_BASE_AXIOS_URL}/api/auth/register`, data);
            return resolve(response.data);
        } catch (error) {
            return reject(error.response.data);
        }
    });
}

