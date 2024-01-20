// models/post.js
let posts = [];
let postIdCounter = 1;

class Post {
  constructor(userId, caption, imageUrl) {
    this.id = postIdCounter++;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }

  static getAllPosts() {
    return posts;
  }

  static getUserPosts(userId) {
    return posts.filter(post => post.userId == userId);
  }

  static getPostById(id) {
    const postIndex = posts.findIndex(post => post.id == id);
    if (postIndex != -1) {
      return posts[postIndex];
    }
    return null;
  }

  static createPost(userId, caption, imageUrl) {
    const newPost = new Post(userId, caption, imageUrl);
    posts.push(newPost);
    return newPost;
  }

  static updatePost(id, userId, caption, imageUrl) {
    const postIndex = posts.findIndex(post => post.id == id);
    if (postIndex != -1) {
      posts[postIndex] = { id, userId, caption, imageUrl };
      return posts[postIndex];
    }
    return null;
  }

  static deletePost(id) {
    const postIndex = posts.findIndex(post => post.id == id);
    if (postIndex != -1) {
      const deleted = posts[postIndex];
      posts.splice(postIndex, 1);
      return deleted;
    }
    return null;
  }
}

export default Post;
