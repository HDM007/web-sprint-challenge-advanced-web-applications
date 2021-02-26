import {axiosWithAuth} from "../helpers/axiosWithAuth";

const getColorData = () => {
    return axiosWithAuth()
    .get('/colors')
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    })
}

export default getColorData;