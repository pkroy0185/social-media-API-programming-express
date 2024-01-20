// models/like.js
let likes = [];
let likeIdCounter = 1;

class Like {
  constructor(postId, userId) {
    this.id = likeIdCounter++;
    this.postId = postId;
    this.userId = userId;
  }

  static getLikesByPostId(postId) {
    return likes.filter(like => like.postId == postId);
  }

  static addLike(postId, userId) {
    const existingLike = likes.filter(like => like.postId == postId && like.userId == userId);
    if (!existingLike) {
      const newLike = new Like(postId, userId);
      likes.push(newLike);
      return newLike;
    }
    return null;
  }

  static removeLike(postId, userId) {
    const req_like = likes.findIndex(like => like.postId == postId && like.userId == userId);
    if(req_like){
        const deleted = likes[req_like];
        likes.splice(req_like, 1);
        return deleted;
    }
    return null;
  }
}

export default Like;
