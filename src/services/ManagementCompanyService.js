import { HttpClient } from "../modules";
import { Config } from "../modules/Constants";
import BaseService from "./BaseService";

class ManagementCompanyService extends BaseService {
    getManagementCompanies = async (params) => {
        const { data } = await this.instance.get('/Request/companies', {
            params,
        })

        return data
    }
}

export default new ManagementCompanyService(new HttpClient(Config.API_URL))