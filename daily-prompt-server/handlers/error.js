// make a generic error handler whether it's 404 or customized error message
// 500 means something has gone wrong on the server
function errorHandler(error, request, response, next) {
  return response.status(error.status || 500).json({
    error: {
      message: error.message || "Oops! Something went wrong."
    }
  });
}

module.exports = errorHandler;
