// IMPORT MONGOOSE
const mongoose = require('./connection.js')


// CREATE SCORE SCHEMA
const ScoreSchema = new mongoose.Schema({
  winTotal: Number,
  lossTotal: Number,
  playerId: mongoose.Types.ObjectId // passing playerId down to child, score
})


// CREATE SCORE API
const ScoreCollection = mongoose.model('Score', ScoreSchema)


// CRUD FUNCTIONS FOR SCORE

// getAllScores()
const getAllScores = () => {
  return ScoreCollection.find()
}

// getOneScore
const getOneScore = (scoreId) => {
  return ScoreCollection.findById(scoreId)
}

// createScore()
const createScore = (scoreData) => {
  return ScoreCollection.create(scoreData)
}

// updateScore()
const updateScore = (scoreId, scoreData) => {
  return ScoreCollection.updateOne({ _id: scoreId }, scoreData)
}

// deleteScore()
const deleteScore = (scoreId) => {
  return ScoreCollection.deleteOne({ _id: scoreId })
}

// EXPORT FUNCTIONS 
module.exports = {
  getAllScores,
  getOneScore,
  createScore,
  updateScore,
  deleteScore
}
