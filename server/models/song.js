var mongoose = require('mongoose')
var ObjectId = mongoose.SchemaTypes.ObjectId

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    albumArt: { type: String, required: true},
    album: { type: String },
    preview: { type: String },
    playlistId: { type: ObjectId, required: true, ref: 'Playlist' },
    playOrder: { type: Number }
})

module.exports = mongoose.model('Song', schema)