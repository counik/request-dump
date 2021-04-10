import React from "react";

const HeaderInfo = ({ headers }) => {
  return (
    <div>
      {Object.keys(headers).map((header) => (
        <p key={header}>
          <b>{header}: </b>
          {headers[header]}
        </p>
      ))}
    </div>
  );
};

export default HeaderInfo;
