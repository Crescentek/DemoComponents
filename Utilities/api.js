import API from '../Utilities/RestApiConfig';
import ConfigApp from "../Utilities/ConfigApp";

const Api = new API({
  baseUrl: ConfigApp.BASE_URL,
});

export default Api;