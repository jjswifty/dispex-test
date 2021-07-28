import axios from "axios";

export default class HttpClient {
    constructor(baseURL) {
        this.instance = axios.create({
            baseURL,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
