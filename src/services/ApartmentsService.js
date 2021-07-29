import { HttpClient } from "../modules";
import { Config } from "../modules/Constants";
import BaseService from "./BaseService";

class ApartmentsService extends BaseService {
    getApartments = async (params) => {
        const { data } = await this.instance.get('/HousingStock', {
            params,
        })
        console.log(data, params, 'from API')
        return data
    }
}

export default new ApartmentsService(new HttpClient(Config.API_URL))