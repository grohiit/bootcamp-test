const express = require('express')
const dotenv = require('dotenv')
const bootcamps = require('./routes/bootcamps')
const logger = require('./middleware/logger')
const morgan = require('morgan')
//Load env vars
dotenv.config({ path: './config/config.env' })

const app = express()

const PORT = process.env.PORT || 5000

app.use(morgan('dev'))

//Mount Routes
app.use('/api/v1/bootcamps', bootcamps)

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} and listening on ${PORT}`
  )
)
