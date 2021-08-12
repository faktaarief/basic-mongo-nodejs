const { json } = require('express')
const Post = require('../models/post.model')

exports.store = async (req, res) => {
  try {
    const payload = req.body
    const post = new Post(payload)
    
    await post.save()
    
    return res.json(post)
  } catch (err) {
    return res.json({ message: "Fail to store post", error: err })
  }
}

exports.findAll = async (req, res) => {
  try {
   const posts = await Post.find()
   return res.json({ datas: posts }) 
  } catch (err) {
    return res.json({ message: "Fail to find posts", error: err })
  }
}

exports.findById = async (req, res) => {
  try {
    const postId = req.params.id
    const post = await Post.findById(postId)
    return res.json({ data: post })
  } catch (err) {
    return res.json({ message: "Fail to find post", error: err })
  }
}

exports.update = async (req, res) => {
  try {
    const postId = req.params.id
    const payload = req.body
    const post = await Post.findOneAndUpdate(
      { _id: postId },
      payload,
      { new: true }
    )
    
    return res.json(post)
  } catch (err) {
    return res.json({ message: "Fail to update post", error: err })
  }
}

exports.destroy = async (req, res) => {
  try {
    const postId = req.params.id
    const post = await Post.findByIdAndDelete(postId)
    return res.json(post)
  } catch (err) {
    return res.json({ message: "Fail to delete post", error: err })
  }
}
