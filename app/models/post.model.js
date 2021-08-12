const mongoose = require('mongoose')
const { model, Schema } = mongoose

const postSchema = Schema({
  title: String,
  description: String
}, { timestamps: true })

module.exports = model('Post', postSchema)
