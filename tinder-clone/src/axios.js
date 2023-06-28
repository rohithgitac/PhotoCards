import axios from "axios";

const instance = axios.create({
    baseURL:'https://photo-cards-pm678pzj3-rohithgitac.vercel.app/'
})
export default instance