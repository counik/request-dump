const Request = require("../models/request");

const createReqObject = (req) => {
  const headers = req.rawHeaders;
  const queryString = req.query;

  return {
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
}

const delay = (seconds) => {
  return (req, res, next) => {
    setTimeout(() => {
      next();
    }, seconds * 1000)
  }
}

const saveRequest = (req, res, next) => {
  // Todo: Transform headers into array of objects
  // with {headerTitle: <Title>, headerValue: <Value>}
  // Currently, headers property is transformed by front-end before
  // being displayed
  // Use req.params.endpoint to retrieve URL path
  const newReq = createReqObject(req);

  Request.create({ data: newReq }).then((newReqFromDb) => {
    res.status(200).send("OK");
  }).catch(err => console.error(err));
};

// Add sort functionality by chaining method here
const getRequests = (req, res, next) => {
  Request.find({})
    .limit(15)
    .sort("-createdAt")
    .then((requests) => {
      res.json(requests);
    });
};

exports.saveRequest = saveRequest;
exports.getRequests = getRequests;
exports.delay = delay;