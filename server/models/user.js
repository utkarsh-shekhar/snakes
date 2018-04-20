let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  score: Number,
  snake: {
    color: String,
    speed: Number,
    direction: String,
    body: [{
      xPosition: Number,
      yPosition: Number
    }]
  }
});

let User = mongoose.model('User', userSchema);

module.exports = User;
