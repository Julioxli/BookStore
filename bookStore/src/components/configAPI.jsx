import axios from "axios";

const Api = axios.create({
    baseURL: "https://livrariacoisaetau.onrender.com/",
});

export default Api;