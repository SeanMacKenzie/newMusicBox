var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: { type: String, require: true }
})

module.exports = mongoose.model('Playlist', schema)