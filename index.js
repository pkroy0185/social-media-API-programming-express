
import express from "express";
import bodyParser from "body-parser";
import userRouter from "./src/features/user/routes/user.routes.js";
import commentRouter from "./src/features/comment/routes/comment.routes.js";
import postRouter from "./src/features/post/routes/post.routes.js";
import likeRouter from "./src/features/like/routes/like.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

let users = [];
let posts = [];

// User registration
app.use('/api', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/comments', commentRouter)
app.use('/api/likes', likeRouter)

// User authentication
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful' });
});

// Create a post
app.post('/posts', (req, res) => {
    const { username, text, media } = req.body;
    const post = { username, text, media, likes: 0, comments: [] };
    posts.push(post);
    res.status(201).json({ message: 'Post created successfully' });
});

// Like a post
app.post('/posts/:postId/like', (req, res) => {
    const postId = parseInt(req.params.postId);
    const post = posts.find(post => post.id === postId);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    post.likes++;
    res.json({ message: 'Post liked successfully' });
});

// Comment on a post
app.post('/posts/:postId/comment', (req, res) => {
    const postId = parseInt(req.params.postId);
    const { username, text } = req.body;
    const post = posts.find(post => post.id === postId);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    const comment = { username, text };
    post.comments.push(comment);
    res.json({ message: 'Comment added successfully' });
});

export default app;
