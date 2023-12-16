
import axios from "axios";
import baseURL from "../shared/baseUrl";

export default axios.create({
    baseURL:baseURL
});

export const axiosPrivate = axios.create({
    baseURL:baseURL,
    headers:{'Content-Type':'application/json'},
    withCredentials:true
    
});