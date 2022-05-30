const asyncHandler = require('../middleware/async')
const ErrorResonse = require('../utils/errorResponse')
const Bootcamp = require('../models/Bootcamp')
// @desc      Get all bootcamps
// @route     /api/v1/bootcamps
// @user      Public
exports.getBootCamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find()
  res
    .status(200)
    .json({ success: true, count: bootcamps.length, data: bootcamps })
})

// @desc      Create bootcamps
// @route     /api/v1/bootcamps
// @user      Private
exports.createBootCamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body)
  res.status(201).json({ success: true, data: bootcamp })
})

// @desc      Get 1 bootcamp
// @route     /api/v1/bootcamps/:id
// @user      Public
exports.getBootCamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id)
  if (!bootcamp)
    return next(new ErrorResonse(`No id matching ${req.params.id}`, 404))
  res.status(200).json({ success: true, data: bootcamp })
})

// @desc      Update 1 bootcamp
// @route     /api/v1/bootcamps/:id
// @user      Private
exports.updateBootCamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  if (!bootcamp)
    return next(new ErrorResonse(`No id matching ${req.params.id}`, 404))

  res.status(200).json({ success: true, data: bootcamp })
})

// @desc      Delete 1 bootcamp
// @route     /api/v1/bootcamps/:id
// @user      Private
exports.deleteBootCamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
  if (!bootcamp)
    return res
      .status(400)
      .json({ success: false, msg: 'No bootcamp with matching id' })
  res
    .status(200)
    .json({ success: true, msg: `Deleted bootcamp ${req.params.id}` })
})
