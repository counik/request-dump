import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequests } from '../actions/RequestActions';
import Request from './Request';

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
    <div class="mt-10 p-5 border-1 border-gray rounded-lg text-left bg-gray-200 inline-block">
      <h2 class="text-xl mb-5 font-semibold">Request History</h2>
      {requests.map((request) => (
        <Request key={request.id} request={request} />
      ))}
    </div>
  );
};

export default Requests;
