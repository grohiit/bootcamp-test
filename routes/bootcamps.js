const express = require('express')
const router = express.Router()
const {
  getBootCamps,
  createBootCamps,
  getBootCamp,
  updateBootCamp,
  deleteBootCamp,
} = require('../controllers/bootcamps')

router.route('/').get(getBootCamps).post(createBootCamps)

router.route('/:id').get(getBootCamp).put(updateBootCamp).delete(deleteBootCamp)

module.exports = router
