import { HttpClient } from "../modules";
import { Config } from "../modules/Constants";
import BaseService from "./BaseService";

class ApartmentsService extends BaseService {
    
}

export default new ApartmentsService(new HttpClient(Config.API_URL))