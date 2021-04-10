const Request = require("../models/request");
const crypto = require("crypto");

const VALID_SECRET = "a secret";
const INVALID_SECRET = "the wrong secret";

const getRequests = (req, res, next) => {
  Request.find({}).then((requests) => {
    res.json(requests);
  });
};

const randomStatus = (req, res, next) => {
  const codes = [200, 301, 404, 500];
  const index = Math.floor(codes.length * Math.random());
  code = codes[index];

  if (code === 200) {
    res.status(200).send();
  } else {
    console.log(`Responding with invalid status code - ${code}`);
    res.status(code).send();
  }
};

const saveRequest = async (req, res, next) => {
  const headers = req.headers;
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

  const signature = headers["x-team4hook-signature"];
  if (signature) {
    const isValid = validateSignature(signature, req.body, VALID_SECRET);

    if (!isValid) {
      console.log("Signature did not match - bad request.");
      res.status(401).send("Signature did not match - bad request.");
    }
  }

  await Request.create({ data: newReq });
  res.status(200).end();
};

const validateSignature = (signature, body, secret) => {
  const hmac = crypto.createHmac("sha256", secret);

  if (typeof body !== "string") {
    body = JSON.stringify(body);
  }

  hmac.update(body);
  return signature == hmac.digest("hex");
};

// Functions below this line are for testing purposes only

const returnInvalidSignature = (req, res, next) => {
  const headers = req.headers;
  const signature = headers["x-team4hook-signature"];
  const isValid = validateSignature(signature, req.body, INVALID_SECRET);

  if (!isValid) {
    console.log("Signature did not match - bad request.");
    res.status(401).send("Signature did not match - bad request.");
  } else {
    console.log("Invalid test - signature should not have matched");
    res.end();
  }
};

const delayRequest = (delay) => {
  delay *= 1000;

  return (req, res, next) => {
    setTimeout(() => {
      console.log("Consumer took too long to respond - failed request");
      res.end();
    }, delay);
  };
};

const specialStatus = (code) => {
  return (req, res, next) => {
    console.log(`Responding with invalid status code - ${code}`);
    res.status(code).send();
  };
};

exports.saveRequest = saveRequest;
exports.getRequests = getRequests;
exports.returnInvalidSignature = returnInvalidSignature;
exports.delayRequest = delayRequest;
exports.specialStatus = specialStatus;
exports.randomStatus = randomStatus;
