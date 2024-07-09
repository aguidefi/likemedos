import {models} from '../models/queries.js';

const home = (req, res) => {
  res.send('Hello world desde el controller');
};

const notFound = (req, res) => {
  res.send('404 - Page not found');
};

const addPost = async (req, res) => {
  const {titulo, img, descripcion, likes} = req.body;
  try {
    const response = await models.addPost(titulo, img, descripcion, likes)
    res.status(201).send('Post added successfully')
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getPosts = async (req, res) =>{
  try {
    const posts = await models.getPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const likePost = async (req, res) => {
  const {id} = req.params;
  const {titulo, img, descripcion, likes} = req.body;
  try {
    const response = await models.likePost(titulo, img, descripcion, likes, id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deletePost = async (req, res) => {
  const {id} = req.params;
  try {
    const response = await models.deletePost(id);
    res.status(200).send('Post deleted successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const controllers = {
  addPost,
  getPosts,
  home,
  notFound,
  likePost,
  deletePost
}