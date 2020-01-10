// IMPORT MONGOOSE
const mongoose = require('./connection.js')


// CREATE PLAYER SCHEMA
const PlayerSchema = new mongoose.Schema({
  name: String,
  photo: String,
})


// CREATE PLAYER API
const PlayerCollection = mongoose.model('Player', PlayerSchema)


// CRUD FUNCTIONS

// getAllPlayers()
const getAllPlayers = () => {
  return PlayerCollection.find()
}

// getOnePlayer()
const getOnePlayer = (playerId) => {
  return PlayerCollection.findById(playerId)
}

// createPlayer()
const createPlayer = (playerData) => {
  return PlayerCollection.create(playerData)
}

// updatePlayer()
const updatePlayer = (playerId, playerData) => {
  return PlayerCollection.updateOne({ _id: playerId }, playerData)
}

// deletePlayer()
const deletePlayer = (playerId) => {
  return PlayerCollection.deleteOne({ _id: playerId })
}


// EXPORT FUNCTIONS
module.exports = {
  getAllPlayers,
  getOnePlayer,
  createPlayer,
  updatePlayer,
  deletePlayer
}
