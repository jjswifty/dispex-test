import { HttpClient } from "../modules";
import { Config } from "../modules/Constants";
import BaseService from "./BaseService";

class ClientService extends BaseService {
    
}

export default new ClientService(new HttpClient(Config.API_URL))