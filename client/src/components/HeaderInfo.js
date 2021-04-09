import React from "react";

const HeaderInfo = ({ headers }) => {
  let headersCombined = [];
  let combinedHeader = [];

  for (let i = 0; i < headers.length - 1; i += 1) {
    if (i % 2 === 0) {
      combinedHeader[0] = headers[i];
    } else {
      combinedHeader[1] = headers[i];
      headersCombined.push(combinedHeader);
      combinedHeader = [];
    }
  }

  return (
    <div>
      {headersCombined.map((header, index) => (
        <p key={index}>
          <b>{header[0]}: </b>
          {header[1]}
        </p>
      ))}
    </div>
  );
};

export default HeaderInfo;
