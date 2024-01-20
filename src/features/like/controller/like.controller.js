// controllers/likeController.js
import Like from  '../model/like.model.js';

// Get likes for a specific post
export const getLikesByPostId = (req, res) => {
  const { postId } = req.params;
  const likes = Like.getLikesByPostId(parseInt(postId));
  return res.json(likes);
};

// Add or remove a like on a specific post
export const toggleLike = (req, res) => {
    const { postId } = req.params;
  const { userId } = req.body;
  const existingLike = Like.getLikesByPostId(parseInt(postId)).find(like => like.userId == userId);

  if (existingLike) {
    // Remove the like
    const removed = Like.removeLike(parseInt(postId), userId);
    console.log(removed, userId, postId);
    if(removed) {
      return res.json({ message: 'Like removed successfully', like: removed });
    } else {
      return res.status(404).json({ error: 'Like not found' });
    }
  } else {
    // Add a new like
    const newLike = Like.addLike(parseInt(postId), userId);
    return res.json(newLike);
  }
};
