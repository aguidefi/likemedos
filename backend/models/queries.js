import {pool} from '../config/db.js';

const addPost = async (titulo, img, descripcion, likes)=>{
  const query = "INSERT INTO posts(titulo, img, descripcion, likes) VALUES($1, $2, $3, $4) RETURNING *";
  const values = [titulo, img, descripcion, likes];
  try {
    const response = await pool.query(query,values);
    if(response.rowCount > 0) {
      return response.rows;
    }
  } catch (error) {
    console.log('Error', error.code, 'Error message', error.message);
  }
}

const getPosts = async ()=>{
  const query = "SELECT * FROM posts";
  try {
    const response = await pool.query(query);
    if(response.rowCount > 0){
      return response.rows;
    }
  } catch (error) {
    console.log('Error', error.code, 'Error message', error.message);
  }
}

const likePost = async (titulo, img, descripcion, likes, id) => {
  const query = "UPDATE posts SET titulo=$1, img=$2, descripcion=$3, likes=$4 WHERE id=$5 RETURNING *";
  const values = [titulo, img, descripcion, likes, id];
  try {
    const response = await pool.query(query, values);
    if(response.rowCount > 0){
      return response.rows;
    }
  } catch (error){
    console.log('Error', error.code, 'Error message', error.message);
  }
}

const deletePost = async (id) => {
  const query = "DELETE FROM posts WHERE id=$1";
  const values = [id];
  try {
    const response = await pool.query(query, values);
    if(response.rowCount > 0){
      return response.rows;
    }
  } catch (error) {
    console.log('Error', error.code, 'Error message', error.message);
  }
}

export const models = {
  getPosts,
  addPost,
  likePost,
  deletePost
}