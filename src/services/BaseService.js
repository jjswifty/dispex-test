class BaseService {
    constructor (httpClient) {
        this.instance = httpClient.instance

        this.instance.interceptors.request.use(config => {
            const token = process.env.API_TOKEN
            config.headers["Authorization"] = `Bearer ${token}`
            
            return config
        })

        this.instance.interceptors.response.use(
            (response) => {
                const error = response.data?.error;
                if (error) throw new Error(error);
            
                return response;
            },
            (error) => {
                const {
                    response: { status },
                } = error;
                
                return Promise.reject(error);
            }
        );
    }
}

export default BaseService