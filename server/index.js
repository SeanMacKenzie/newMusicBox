var express = require('express')
var cors = require('cors')
var server = express()
var bp = require('body-parser')
var DBConnect = require('./config/mlab/mlab-config')
var port = 3000

//route variables
var playlistRoutes = require('./routes/playlist-route')
var songRoutes = require('./routes/song-route')

//Middleware
server.use(cors({}))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/../public'))

server.use(playlistRoutes)
server.use(songRoutes)




server.listen(port, function() {
    console.log('Trying to get it done on port: ', port)
})


//getMyTunes (GET)

//addSongtoList (POST)

//updateRank (PUT)

//deleteTrack (DELETE)