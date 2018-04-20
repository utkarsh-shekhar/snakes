let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let gameSchema = new Schema({
  name: String,
  map: Array
});

let Game = mongoose.model('Game', gameSchema);

module.exports = Game;
