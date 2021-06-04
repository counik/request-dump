const Request = require('../models/request');
const crypto = require('crypto');

const VALID_SECRET = 'a secret';

const getRequests = (req, res, next) => {
  Request.find({}).then((requests) => {
    res.json(requests);
  });
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

  await Request.create({ data: newReq });
  res.status(200).end();
};

const randomStatus = (req, res, next) => {
  if (req.headers['x-team4hook-event_type'] == 'ping') {
    res.status(200).send();
  } else {
    const codes = [200, 301, 404, 500];
    const index = Math.floor(codes.length * Math.random());
    code = codes[index];

    if (code === 200) {
      saveRequest(req, res, next);
    } else {
      console.log(`Responding with invalid status code - ${code}`);
      res.status(code).send();
    }
  }
};

const delayRequest = (delay) => {
  delay *= 1000;

  return (req, res, next) => {
    if (req.headers['x-team4hook-event_type'] == 'ping') {
      res.status(200).send();
    } else {
      setTimeout(() => {
        console.log('Consumer took too long to respond - failed request');
        res.end();
      }, delay);
    }
  };
};

const specialStatus = (code) => {
  return (req, res, next) => {
    if (req.headers['x-team4hook-event_type'] == 'ping') {
      res.status(200).send();
    } else {
      console.log(`Responding with invalid status code - ${code}`);
      res.status(code).send();
    }
  };
};

exports.saveRequest = saveRequest;
exports.getRequests = getRequests;
exports.delayRequest = delayRequest;
exports.specialStatus = specialStatus;
exports.randomStatus = randomStatus;
