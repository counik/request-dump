const requests = (state = [], action) => {
  switch (action.type) {
    case "FETCH_REQUESTS_SUCCESS":
      console.log(action.requests[0]);
      return action.requests;
    default:
      return state;
  }
};

export default requests;
