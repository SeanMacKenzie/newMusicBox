var express = require('express')
var cors = require('cors')
var server= express()
var bp = require('body-parser')
var dbConnect = require('./config/mlab/mlab-config')
var port = 3000
// var server = require('http').createServer(app)

//route variables
var playlistRoutes = require('./routes/playlist-route')
var songRoutes = require('./routes/song-route')

//Middleware
server.use(cors({}))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public'))

server.use(playlistRoutes)
server.use(songRoutes)




server.listen(process.env.PORT || port, () => {
    console.log("Server listening on port: ", port)
})

module.exports = server
