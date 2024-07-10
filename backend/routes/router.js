import express from 'express';
import { controllers } from '../controllers/controller.js';

const router = express.Router();

router.get('/', controllers.home);

router.post('/posts/', controllers.addPost);

router.get("/posts/", controllers.getPosts);

router.put('/posts/:id', controllers.editPosts);

router.put('/posts/like/:id', controllers.numberLikes);

router.delete('/posts/:id', controllers.deletePost);

router.get('*', controllers.notFound);

export default router;