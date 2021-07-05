import Constants from "./Constants";
import axios from "axios";

class InstaUtils {
	getDpUrl(username) {
		return axios.get(Constants.INSTA_TOOLS_BACKEND_SERVER + "/instascrape/?username=" + username + "&part=profile_pic_url_hd&base64=true");
	}
}

export default new InstaUtils();
