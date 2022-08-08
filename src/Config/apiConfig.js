import axios from 'axios';


const apiConfig = axios.create({
    baseURL: "https://randomuser.me/api/",
});

export { apiConfig };
