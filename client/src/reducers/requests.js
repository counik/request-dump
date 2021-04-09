const requests = (state = [], action) => {
  switch (action.type) {
    case "FETCH_REQUESTS_SUCCESS":
      let requests = action.requests;
      requests.sort((request1, request2) => {
        const date1 = new Date(request1.updatedAt);
        const date2 = new Date(request2.updatedAt);

        return date2 - date1;
      });

      return requests;
    default:
      return state;
  }
};

export default requests;
