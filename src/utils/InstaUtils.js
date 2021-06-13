import Constants from "./Constants";
import axios from "axios";

class InstaUtils {
	getDpUrl(username) {
		return axios.get(Constants.INSTA_TOOLS_BACKEND_SERVER + "/dp/" + username);
	}
}

export default new InstaUtils();
