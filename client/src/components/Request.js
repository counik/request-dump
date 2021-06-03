import React, { useState } from "react";
import HeaderInfo from "./HeaderInfo";

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
    const timeString = tempDate.toTimeString().split(" ")[0];

    return `${timeString} ${dateString}`;
  };

  const fullPath = ({ protocol, host, path }) => {
    return `${protocol}://${host}${path}`;
  };

  return (
    <div className="requestDetails">
      <header>
        <span>
          <b>{request.data.method}</b>
        </span>
        <span>{fullPath(request.data)}</span>
        <span>{formatted(request.createdAt)}</span>
        <button type="button" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
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
