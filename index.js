const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')
const { routes } = require('./src/routes')

mongoose.connect(
    'mongodb://127.0.0.1:27017/mevnshop'
)

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

routes.forEach((item) => {
    app.use(`/api/v1/${item}`, require(`./src/routes/${item}`))
})


const PORT = 3000

http.createServer({}, app).listen(PORT)
console.log(`Server running at port ${PORT}`)
