import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequests } from "../actions/RequestActions";
import Request from "./Request";

const Requests = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequests());
  }, [dispatch]);

  const requests = useSelector((state) => state.requests);

  if (!requests) {
    return null;
  }

  return (
    <div>
      <h2>Request History</h2>
      {requests.map((request) => (
        <Request key={request.id} request={request} />
      ))}
    </div>
  );
};

export default Requests;
