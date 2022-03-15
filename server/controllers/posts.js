import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

//Get post
export const getPosts = async (req, res) => {
  try {
    //Bring all the posts.
    const postMessage = await PostMessage.find();

    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Post posts
export const createPost = async (req, res) => {
  try {
    //create a post
    //req.body  -> post
    const newPost = new PostMessage(req.body);
    //save a post
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//Update Post
export const updatePost = async (req, res) => {
  try {
    //change  id  to  _id  for same with mongoose's _id
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send('No post with that id');

    //contents of post is in the req.body
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.json(updatedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
