import React, { useState } from "react";
import HeaderInfo from "./HeaderInfo";

const Request = ({ request }) => {
  const [showBody, setShowBody] = useState(false);
  const [showHeaders, setShowHeaders] = useState(false);

  const bodyAsHtml = (bodyObject) => {
    if (!bodyObject) {
      return null;
    }

    return (
      <pre>
        <code>{JSON.stringify(bodyObject, null, 2)}</code>
      </pre>
    );
  };

  const toggleHeaders = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowHeaders(!showHeaders);
  };

  return (
    <div className="requestDetails">
      <header onClick={() => setShowBody(!showBody)}>
        <b>{request.data.method}</b> {request.data.host} {request.createdAt}
        <button type="button" onClick={toggleHeaders}>
          {showHeaders ? "Hide Headers" : "Show Headers"}
        </button>
      </header>
      {showHeaders ? <HeaderInfo headers={request.data.headers} /> : null}
      {showBody && request.data.body ? (
        <div className="requestBody">{bodyAsHtml(request.data.body)}</div>
      ) : null}
    </div>
  );
};

export default Request;
