var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    albumArt: { type: String, required: true},
    collection: { type: String },
    playlistId: { type: ObjectId, required: true, ref: 'Playlist' }
})

module.exports = mongoose.model('Song', schema)