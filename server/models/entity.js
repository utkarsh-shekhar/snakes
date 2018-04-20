let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let entitySchema = new Schema({
  type: String
});

let Entity = mongoose.model('Entity', entitySchema);

module.exports = Entity;
