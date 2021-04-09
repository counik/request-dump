import apiClient from "../lib/ApiClient";

const fetchRequestsSuccess = (requests) => {
  return { type: "FETCH_REQUESTS_SUCCESS", requests };
};

export const fetchRequests = () => {
  return function (dispatch) {
    apiClient.fetchRequests((data) => {
      dispatch(fetchRequestsSuccess(data));
    });
  };
};
