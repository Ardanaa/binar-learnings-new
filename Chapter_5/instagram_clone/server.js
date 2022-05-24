const express = require("express");
const app = express();
const PORT = 8087;

app.use(express.json());

// Import Controllers
const instagramController = require("./controllers/instagramController");

// Import Middleware
const { authenticate } = require("./middlewares/authentication");

// Define Routes
app.get("/users", instagramController.getAll);
app.get("/posts", instagramController.getAllPosts);
app.post("/register", instagramController.register);
app.get("/login", instagramController.login);
app.post("/posts", authenticate, instagramController.posts);
app.put("/posts/:id", authenticate, instagramController.updateById);
app.delete("/posts/:id", authenticate, instagramController.deletePostsById);





app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});