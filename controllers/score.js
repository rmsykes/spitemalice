// IMPORT EXPRESS
const express = require('express')

// IMPORT API
const ScoreApi = require('../models/score.js')

// CREATE ROUTER
const ScoreRouter = express.Router()


// HANDLERS REQUEST 

// getAllScores()
ScoreRouter.get('/', (req, res) => {
  ScoreApi.getAllScores()
  .then((allScores) => {
    res.json(allScores)
  })
})

// getOneScore()
ScoreRouter.get('/:scoreId', (req, res) => {
  ScoreApi.getOneScore(req.params.scoreId)
  .then((singleScore) => {
    res.json(singleScore)
  })
})

// createScore()
ScoreRouter.post('/', (req, res) => {
  ScoreApi.createScore(req.body)
  .then((newScore) => {
    res.json(newScore)
  })
})

// updateScore()
ScoreRouter.put('/:scoreId', (req, res) => {
  ScoreApi.updateScore(req.params.scoreId, req.body)
  .then((updatedScore) => {
    res.json(updatedScore)
  })
})

// deleteScore()
ScoreRouter.delete('/:scoreId', (req, res) => {
  ScoreApi.deleteScore(req.params.scoreId)
  .then((deletedScore) => {
    res.json(deletedScore)
  })
})


// EXPORT ROUTER
module.exports = {
  ScoreRouter
}
