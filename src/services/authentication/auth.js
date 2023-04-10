import axios from "axios";

export const loginService = async(user) => {
    try {
        console.log(process.env.REACT_APP_BASE_AXIOS_URL);
        let response = await axios.post(`${process.env.REACT_APP_BASE_AXIOS_URL}/api/auth/login`, user);
        return response.data;
    } catch (error) {
        return null;
    }
};

export const registerService = async(data) => {
    try {
        let response = await axios.post(`${process.env.REACT_APP_BASE_AXIOS_URL}/api/auth/register`, data);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
}

