import axios from "axios";
import config from "../lib/config/app-config";

const baseURL = config.env.API_BASE_URL;

const instance = axios.create({ baseURL });

/**
 * Sets the Authorization header with a Bearer token for the axios instance.
 *
 * @param jwt - The JSON Web Token to be used for authentication.
 */

function injectAuthToken(jwt: string) {
  instance.defaults.headers.common.Authorization = `Bearer ${jwt}`;
}

/**
 * Removes the Authorization header from the axios instance.
 * This is useful when logging out.
 */
function removeAuthToken() {
  delete instance.defaults.headers.common.Authorization;
}

export default {
  get: instance.get,
  post: instance.post,
  delete: instance.delete,
  put: instance.put,
  injectAuthToken,
  removeAuthToken,
};
