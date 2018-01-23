var express = require('express')
var cors = require('cors')
var app= express()
var bp = require('body-parser')
var DBConnect = require('./config/mlab/mlab-config')
var port = 3000
var server = require('http').createServer(app)

//route variables
var playlistRoutes = require('./routes/playlist-route')
var songRoutes = require('./routes/song-route')

//Middleware
app.use(cors({}))
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.use(playlistRoutes)
app.use(songRoutes)




server.listen(process.env.PORT || port, () => {
    console.log("Server listening on port: ", port)
})

module.exports = server
