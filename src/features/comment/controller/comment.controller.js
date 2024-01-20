// controllers/commentController.js
import  Comment  from '../model/comment.model.js';


// Get comments for a specific post
export const getCommentsByPostId = (req, res) => {
  const { postId } = req.params;
  const comments = Comment.getCommentsByPostId(parseInt(postId));
  return res.json(comments);
};

// Create a new comment
export const addComment = (req, res) => {
  const { postId } = req.params;
  const { userId, content } = req.body;
  const newComment = Comment.addComment(parseInt(postId), userId, content);
  return res.json(newComment);
};

// Update a comment by its id
export const updateComment = (req, res) => {
  const { id } = req.params;
  const { userId, content } = req.body;
  const updatedComment = Comment.updateComment(parseInt(id), userId, content);
  if (updatedComment) {
    return res.json(updatedComment);
  } else {
    return res.status(404).json({ error: 'Comment not found' });
  }
};

// Delete a comment by its id
export const deleteComment = (req, res) => {
  const { id } = req.params;
  const deleted = Comment.deleteComment(parseInt(id));
  if (deleted) {
    return res.json({ message: 'Comment deleted successfully', comment: deleted });
  } else {
    return res.status(404).json({ error: 'Comment not found' });
  }
};
