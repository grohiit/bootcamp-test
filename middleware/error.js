const ErrorResponse = require('../utils/errorResponse')
const errorHandler = (err, req, res, next) => {
  console.log(('Error started at ' + new Date().toTimeString()).bgMagenta)
  // console.log(err.name)
  console.log(err)
  let error = { ...err }
  error.message = err.message

  //Badly formatted userid in mongoose shows id not found
  if (err.name === 'CastError') {
    const message = `No id matching ${err.value}`
    error = new ErrorResponse(message, 404)
  }

  //Duplicate bootcamp added
  if (err.code === 11000) {
    const message = `Duplicate field value entered`
    error = new ErrorResponse(message, 400)
  }

  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((v) => v.message)
    error = new ErrorResponse(message, 400)
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || `Server Error`,
  })
}

module.exports = errorHandler
