function errorHandler(err, req, res, next) {
  let statusCode = 500;
  let message = "Internal Server Error";

  console.log(err, "ini error dari error handler");

  if (err.statusCode) {
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).json({
    message,
  });
}

module.exports = errorHandler;
