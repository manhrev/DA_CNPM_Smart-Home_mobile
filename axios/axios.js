import axioss from "axios";
import { SERVER_URL } from "@env";

const axios = axioss.create({
    baseURL: "https://smart-home-2220.herokuapp.com",
    timeout: 10000,
    headers: { "Access-Control-Allow-Origin": "*" },
});
export default axios;