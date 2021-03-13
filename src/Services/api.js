import axios from 'axios';

//https://api.hgbrasil.com/weather?key=3b97b084&lat=-23.682&lon=-46.875

export const key = '3b97b084';

const api = axios.create({
    baseURL: "https://api.hgbrasil.com"
});

export default api;