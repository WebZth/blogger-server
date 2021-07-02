const customErrorHandler = (err, req, res, next) => {
  // MongoError
  if (err.name === "MongoError") {
    for (let errName in err.errors) {
      if (err.errors[errName].message) {
        let error = err.errors[errName].message;
        return res.status(400).send({ error });
      } else {
        return res.status(400).send({ error: "⚠️an error occoured" });
      }
    }
    // ValidationError
  } else if (err.name === "ValidationError") {
    for (let errName in err.errors) {
      if (err.errors[errName].message) {
        let error = err.errors[errName].message;
        return res.status(400).send({ error });
      } else {
        return res.status(400), send({ error: "⚠️an error occoured" });
      }
    }
    // CastError
  } else if (err.name === "CastError") {
    return res
      .status(400)
      .send({ error: "⚠️resource does not exist, malformatted ID" });
  } else if (err.name === "UnauthorizedError") {
    return res.status(400).send({ error: err.message });
  }
  next(err);
};

module.exports = customErrorHandler;
