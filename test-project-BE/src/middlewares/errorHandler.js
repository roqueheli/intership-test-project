// define an error handling middleware function that handles validation errors
const errorHandler = (error, rq, rs, next) => {
  // if the error is a validation error, respond with a 400 status and the error message
  if (error.name === "ValidationError") {
    return rs.status(400).json({ error: error.message });
  }

  // if the error is not a validation error, pass it to the next middleware
  return next(error);
};

// define a middleware function for handling unknown endpoints.
const unknownEndpoint = (rq, rs) => {
  rs.status(404).send({ error: "unknown endpoint" });
};

// export the error handling middleware functions
module.exports = {
  errorHandler,
  unknownEndpoint,
};
