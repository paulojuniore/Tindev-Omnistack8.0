const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')

const routes = require('./routes')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb+srv://paulo-jr:12345@cluster0-f7ti6.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)