import express from 'express';
import { controllers } from '../controllers/controller.js';

const router = express.Router();

router.get('/', controllers.home);

router.post('/post/', controllers.addPost);

router.get("/posts/", controllers.getPosts);

router.put('/posts/like/:id', controllers.likePost);

router.delete('/post/:id', controllers.deletePost);

router.get('*', controllers.notFound);

export default router;