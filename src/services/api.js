import axios from "axios";


export const api = axios.create({
    baseURL:'https://backend-pg-neon.onrender.com/'
});