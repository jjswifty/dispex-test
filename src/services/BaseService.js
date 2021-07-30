class BaseService {
    constructor (httpClient) {
        this.instance = httpClient.instance

        this.instance.interceptors.request.use(config => {
            const token = process.env.REACT_APP_API_TOKEN
            config.headers["Authorization"] = `Bearer ${token}`
            console.log(config.headers)
            return config
        },
        error => {
            Promise.reject(error);
        })
    }
}

export default BaseService