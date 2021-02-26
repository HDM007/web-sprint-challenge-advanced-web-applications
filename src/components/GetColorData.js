import {axiosWithAuth} from "../helpers/axiosWithAuth";

const getColorData = () => {
    return axiosWithAuth()
    .get('http://localhost:5000/api/colors')
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    })
}

export default getColorData;