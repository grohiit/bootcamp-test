const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })
const bootcamps = require('./routes/bootcamps')
const logger = require('./middleware/logger')
const morgan = require('morgan')
const connectDB = require('./config/db.js')
const colors = require('colors')
const errorHandler = require('./middleware/error')

//Load env vars
connectDB()

const app = express()

//body parser

app.use(express.json())

const PORT = process.env.PORT || 5000

app.use(morgan('dev'))

//Mount Routes
app.use('/api/v1/bootcamps', bootcamps)

app.use(errorHandler)

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} and listening on ${PORT}`.black
      .bgYellow.bold
  )
)

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  server.close(() => process.exit(1))
})
