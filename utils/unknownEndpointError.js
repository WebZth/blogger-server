const unknownEndpointError = (req, res) => {
  return res
    .status(400)
    .send({ error: "unknown endpoint, there's nothing here" });
};

module.exports = unknownEndpointError;
