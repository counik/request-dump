import axios from "axios";
import * as routes from "../constants/ApiRoutes";

function unwrapData(response) {
  return response.data;
}

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

const apiClient = {
  fetchRequests(callback) {
    return axios
      .get(routes.FETCH_REQUESTS_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
};

export default apiClient;
