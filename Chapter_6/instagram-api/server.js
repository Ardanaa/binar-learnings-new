const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const cors = require("cors");
const path = require("path");
const upload = require("./utils/fileUpload");

const app = express();
const PORT = 2000;

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

// Import Controllers
const authController = require("./controllers/authController");
const postsController = require("./controllers/postsController");
const usersController = require("./controllers/usersController");

// Import Midleware
const middleware = require("./middlewares/auth");

// Define Routes
// Auth
app.post("/auth/register", authController.register);
app.post("/auth/login", authController.login);
app.get("/auth/me", middleware.authenticate, authController.currentUser);
app.post("/auth/login-google", authController.loginGoogle);

// Posts
app.post("/posts", middleware.authenticate, upload.single("picture"), postsController.create);
app.delete("/posts/:id", middleware.authenticate, postsController.deleteByID);
app.put("/posts/:id", middleware.authenticate, upload.single("picture"), postsController.updateByID);

app.get("/api/posts", postsController.getAll);
app.get('/api/posts/:id', postsController.getById);

app.get("/users/:id/posts", usersController.getPostsByID);
app.delete(
    "/users/:id",
    middleware.authenticate,
    middleware.isAdmin,
    usersController.deleteByID
);

// Public Storage
app.use("/public/files", express.static(path.join(__dirname, "/storages")));

// API Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});