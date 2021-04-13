const Request = require("../models/request");

const saveRequest = (req, res, next) => {
  // Todo: Transform headers into array of objects
  // with {headerTitle: <Title>, headerValue: <Value>}
  // Currently, headers property is transformed by front-end before
  // being displayed
  const headers = req.rawHeaders;
  const queryString = req.query;

  const newReq = {
    headers,
    queryString,
    method: req.method,
    protocol: req.protocol,
    host: req.hostname,
    path: req.path,
    body: req.body,
    ip: req.ip,
    ips: req.ips,
  };

  Request.create({ data: newReq }).then((newReqFromDb) => {
    console.log(newReqFromDb);
    res.json(newReqFromDb);
  });
};

// Add sort functionality by chaining method here
const getRequests = (req, res, next) => {
  Request.find({})
    .sort("-createdAt")
    .then((requests) => {
      res.json(requests);
    });
};

exports.saveRequest = saveRequest;
exports.getRequests = getRequests;
