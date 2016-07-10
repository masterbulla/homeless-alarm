var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activitySchema = new Schema({
  id: String,
  order: Number,
  description: String
});

var standUpSchema = new Schema({
  id: Number,
  username: String,
  yesterday: [activitySchema],
  today: [activitySchema],
  impediments: [activitySchema]
});

module.exports = { standUpSchema: standUpSchema, activitySchema: activitySchema };
