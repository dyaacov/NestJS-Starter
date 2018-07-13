
var mongoose = require('mongoose')
var Schema = mongoose.Schema
export const UsersModel = new Schema({
  email: String,
  name: String,
  hash: String
}, { timestamps: true })
