var Songs = require('../models/song')
var Playlists = require('../models/playlist')
var router = require('express').Router()

router.post('/api/songs', (req, res, next) => {
    
    //debugger
    Playlists.findById(req.body.playlistId)
        .then(playlist => {
            req.body.playlistId = playlist._id

            Songs.create(req.body)

        })
        .then(song => {
            var response = {
                data: song,
                message: 'Song is added to SpaceJam'
            }
            res.send(response)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.delete('/api/songs/:id', (req, res, next) => {
    
    console.log(req)

    Songs.findByIdAndRemove(req.params.id)
        .then(song => {
            res.send({ message: 'Song gone' })
        })
        .catch(err => {
            res.status(400).send(err)
        })

})

router.get('/api/songs', (req, res, next) => {
    Songs.find({})
        .then(songs => {
            res.send(songs)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.put('/api/songs/:id', (req, res, next) => {
    var action = 'Update Songs'
    Songs.findByIdAndUpdate(req.params.id)
        .then(data => {
            res.send(handleResponse(action, data))
        })
        .catch(err => {
            res.status(400).send(handleResponse(action, null, err))
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