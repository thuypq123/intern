const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const item = new Schema({
  id: ObjectId,
  content: String,
  checked: Number,
});
module.exports = mongoose.model("item", item);