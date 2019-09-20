
var mongoose = require('mongoose')
var Schema = mongoose.Schema
export const UsersModel = new Schema({
  username: String,
  name: String,
  hash: String
}, { timestamps: true })
