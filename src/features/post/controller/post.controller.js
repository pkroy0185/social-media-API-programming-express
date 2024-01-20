// controllers/postController.js
import Post from "../model/post.model.js"

// Get all posts
export const getAllPosts = (req, res) => {
    const posts = Post.getAllPosts();
    return res.json(posts);
  };

// Create a new post
export const createPost = (req, res) => {
    const { userId, caption } = req.body;
    const imageUrl = req.file.filename;
    const newPost = Post.createPost(userId, caption, imageUrl);
    return res.json(newPost);
  };

// Get posts by a specific user
export const getUserPosts = (req, res) => {
    const  userId = req.userId;
    const userPosts = Post.getUserPosts(userId);
    return res.json(userPosts);
  };

// Get a post by its id
export const getPostById = (req, res) => {
    const { id } = req.params;
    const post = Post.getPostById(parseInt(id));
    if(post){
      return res.json(post);
    } else {
      return res.status(404).json({ error: 'Post not found' });
    }
  };

// Delete a post by its id
export const deletePost = (req, res) => {
    const { id } = req.params;
    const deleted = Post.deletePost(parseInt(id));
    if (deleted) {
      return res.json({ message: 'Post deleted successfully', post: deleted });
    } else {
      return res.status(404).json({ error: 'Post not found' });
    }
  };

// Update a post by its id
export const updatePost = (req, res) => {
    const { id } = req.params;
    const { userId, caption, imageUrl } = req.body;
    const updatedPost = Post.updatePost(parseInt(id), userId, caption, imageUrl);
    if (updatedPost) {
      return res.json(updatedPost);
    } else {
      return res.status(404).json({ error: 'Post not found' });
    }
  };
















