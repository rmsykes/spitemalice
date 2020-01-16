// IMPORT EXPRESS
const express = require('express')

// IMPORT PLAYER API
const PlayerApi = require('../models/player.js')

// CREATE ROUTER
const PlayerRouter = express.Router()


// REQUEST HANDLERS

// getAllPlayers()
PlayerRouter.get('/', (req, res) => {
  PlayerApi.getAllPlayers()
  .then((allPlayers) => {
    res.json(allPlayers)
  })
})

// getOnePlayer()
PlayerRouter.get('/:playerId', (req, res) => {
  PlayerApi.getOnePlayer(req.params.playerId)
  .then((singlePlayer) => {
    res.json(singlePlayer)
  })
})

// createPlayer()
PlayerRouter.post('/', (req, res) => {
  PlayerApi.createPlayer(req.body)
  .then((newPlayer) => {
    res.json(newPlayer)
  })
})

// updatePlayer()
PlayerRouter.put('/:playerId', (req, res) => {
  PlayerApi.updatePlayer(req.params.playerId, req.body)
  .then((updatedPlayer) => {
    res.json(updatedPlayer)
  })
})

// deletePlayer()
PlayerRouter.delete('/:playerId', (req, res) => {
  PlayerApi.deletePlayer(req.params.playerId)
  .then((deletedPlayer) => {
    res.json(deletedPlayer)
  })
})

// EXPORT PLAYER ROUTER
module.exports = {
  PlayerRouter
}
