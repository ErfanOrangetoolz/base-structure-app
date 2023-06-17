import { adminLogins } from "../../../root-service/ApiEndPoint";
import { app_base_url } from "../../../root-service/BaseUrl";
import { rootTokenLessRequest } from "../../../root-service/RootApi";

class AdminLoginService {
  handleLoginApi(params) {
    return rootTokenLessRequest.get(`${app_base_url}${adminLogins.prefix}${adminLogins.routes.login}`, params);
  }
}

export default new AdminLoginService();
