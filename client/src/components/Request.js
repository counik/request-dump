import React, { useState } from 'react';
import HeaderInfo from './HeaderInfo';

const Request = ({ request }) => {
  const [showDetails, setShowDetails] = useState(false);

  const bodyAsHtml = (bodyObject) => {
    return (
      <pre>
        <code>{JSON.stringify(bodyObject, null, 2)}</code>
      </pre>
    );
  };

  const toggleDetails = (e) => {
    setShowDetails(!showDetails);
  };

  const formatted = (dateString) => {
    const tempDate = new Date(dateString);
    dateString = tempDate.toLocaleDateString();
    const timeString = tempDate.toTimeString().split(' ')[0];

    return `${timeString} ${dateString}`;
  };

  const fullPath = ({ protocol, host, path }) => {
    return `${protocol}://${host}${path}`;
  };

  return (
    <div
      className="requestDetails"
      class="mt-1 mb-1 p-2 border-2 border-gray-500 rounded-lg bg-gray-100 w-full overflow-hidden"
    >
      <header>
        <span class="w-20 inline-block mr-5">
          <b>{request.data.method}</b>
        </span>
        <span class="mr-10">{fullPath(request.data)}</span>
        <span class="mr-10">{formatted(request.createdAt)}</span>
        <button type="button" onClick={toggleDetails} class="mr-5  pr-1 pl-1 border-2 border-gray-300 rounded-lg bg-gray-200 float-right">
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </header>
      {showDetails ? <HeaderInfo headers={request.data.headers} /> : null}
      {showDetails && request.data.body ? (
        <div className="requestBody">{bodyAsHtml(request.data.body)}</div>
      ) : null}
    </div>
  );
};

export default Request;
