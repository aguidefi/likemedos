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

const editPosts = async (req, res) => {
  try {
    const {id } = req.params
    const { titulo, img, descripcion, likes } = req.body;
    const response = await models.editPosts(titulo, img, descripcion, likes, id);
    res.status(200).send('Post edited');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const toggleHeart = async (req, res) => {
  try {
    const {id} = req.params;
    const post = await models.getPostById(id);  
    if (!post) {
      return res.status(404).send('Post not found');
    }
    const newLikes = post.likes === 0 ? 1 : 0; 

    await models.likePost(newLikes, id);
    res.status(200).send(`Post ${newLikes === 1 ? 'liked' : 'unliked'} successfully`);
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
  editPosts,
  home,
  notFound,
  toggleHeart,
  deletePost
}