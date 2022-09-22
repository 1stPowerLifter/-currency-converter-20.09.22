import axios from "axios";

axios.defaults.baseURL = 'https://cdn.cur.su/api/latest.json'

export const currencyFetch = async() => {
    const response = await axios.get();
    return response.data
}