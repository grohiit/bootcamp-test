// @desc      Get all bootcamps
// @route     /api/v1/bootcamps
// @user      Public
exports.getBootCamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Show ALL bootcamps` })
}

// @desc      Create bootcamps
// @route     /api/v1/bootcamps
// @user      Private
exports.createBootCamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Create new bootcamp(s)` })
}

// @desc      Get 1 bootcamp
// @route     /api/v1/bootcamps/:id
// @user      Public
exports.getBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show  bootcamp ${req.params.id}` })
}

// @desc      Update 1 bootcamp
// @route     /api/v1/bootcamps/:id
// @user      Private
exports.updateBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` })
}

// @desc      Delete 1 bootcamp
// @route     /api/v1/bootcamps/:id
// @user      Private
exports.deleteBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` })
}
