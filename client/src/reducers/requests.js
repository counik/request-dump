const requests = (state = [], action) => {
  switch (action.type) {
    case "FETCH_REQUESTS_SUCCESS":
      return action.requests;
    default:
      return state;
  }
};

export default requests;
