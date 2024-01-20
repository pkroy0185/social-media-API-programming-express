// models/comment.js
let comments = [];
let commentIdCounter = 1;

class Comment {
  constructor(postId, userId, content) {
    this.id = commentIdCounter++;
    this.postId = postId;
    this.userId = userId;
    this.content = content;
  }


  static getCommentsByPostId(postId) {
    return comments.filter(comment => comment.postId == postId);
  }

  static addComment(postId, userId, content) {
    const newComment = new Comment(postId, userId, content);
    comments.push(newComment);
    return newComment;
  }

  static updateComment(id, userId, content) {
    const commentIndex = comments.findIndex(comment => comment.id == id);
    if (commentIndex != -1) {
      comments[commentIndex].id = id;
      comments[commentIndex].userId = userId;
      comments[commentIndex].content = content;
      return comments[commentIndex];
    }
    return null;
  }

  static deleteComment(id) {
    const commentIndex = comments.findIndex(comment => comment.id == id);
    if (commentIndex != -1) {
      const deleted = comments[commentIndex];
      comments.splice(commentIndex, 1);
      return deleted;
    }
    return null;
  }
}

export default Comment;
