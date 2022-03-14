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
