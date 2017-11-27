var Song = require('../models/song')
var router = require('express').Router()

router.post('/api/songs', (req, res, next) => {
    Songs.create(req.body)
        .then(song => {
            let response = {
                data: song,
                message: 'Song is added to SpaceJam'
            }
            res.send(response)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.delete('api/songs/:id', (req, res) => {
    Songs.findOneAndRemove({_id: req.params.id })
        .then(() => res.send({ message: 'Song gone' }))
        .catch(err => res.status(401).send(err))
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
    Songs.findByIdAndUpdate(req.params.id, req.body)
        .then(data => {
            res.send(handleResponse(action, data))
        })
        .catch(err => {
            res.status(400).send(handleResponse(action, null, err))
        })
})



function handleResponse(action, data, error){
    var response =  {
        message: action,
        data: data
    }
    if(error){
        response.error = error
    }
    return response
}


module.exports = router