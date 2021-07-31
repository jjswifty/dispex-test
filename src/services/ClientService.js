import { HttpClient } from "../modules";
import { Config } from "../modules/Constants";
import BaseService from "./BaseService";

class ClientService extends BaseService {
    getClients = async (params) => {
        const { data } = await this.instance.get('/HousingStock/client', {
            params,
        })

        return data
    }

    addClient = async (params) => {
        const { data } = await this.instance.post('/HousingStock/client', {
            params,
        })

        return data
    }

    deleteClient = async (params) => {
        const { data } = await this.instance.delete(`/HousingStock/bind_client/${params}`)

        return data
    }
}

export default new ClientService(new HttpClient(Config.API_URL))