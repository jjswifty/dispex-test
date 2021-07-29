import { HttpClient } from "../modules";
import { Config } from "../modules/Constants";
import BaseService from "./BaseService";

class ApartmentsService extends BaseService {
    getApartments = async (params) => {
        const { data } = await this.instance.get('/HousingStock', {
            params,
        })
        
        return data
    }
}

export default new ApartmentsService(new HttpClient(Config.API_URL))