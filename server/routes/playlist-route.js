var Playlists = require('../models/playlist')
var router = require('express').Router()

router.post('/api/playlists', (req, res, next) => {
    Playlists.create(req.body)
        .then(playlist => {
            let response = {
                data: playlist,
                message: 'Playlist is ready'
            }
            res.send(response)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.get('/api/playlists', (req, res, next) => {
    Playlists.find({})
        .then(playlist => {
            res.send(playlist)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

function handleResponse(action, data, error) {
    var response = {
        message: action,
        data: data
    }
    if (error) {
        response.error = error
    }
    return response
}

module.exports = router