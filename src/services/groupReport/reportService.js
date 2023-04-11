import axios from "axios";

export function insertNewReport (report, token) {
    return new Promise(async(resolve, reject) => {
        try {
            let res = await axios.post(
                `${process.env.REACT_APP_BASE_AXIOS_URL}/api/pastoralWork/groupReport`, report,
                {
                  headers: {
                    "authorization": `Bearer ${token}`
                  }
                }
            );
            return resolve(res.data);
        } catch (error) {
            return reject(error.response.data);
        }
    });
}