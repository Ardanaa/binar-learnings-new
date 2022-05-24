const express = require("express");
const app = express();
const PORT = 8087;

app.use(express.json());

// Import Controllers
const booksController = require("./controllers/booksController");

// Import Middleware
const { authenticate } = require("./middlewares/authentication");

// Define Routes
app.get("/books", booksController.getAll);
app.get("/books/:id", booksController.getById);
app.post("/books", booksController.create);
app.delete("/books/:id", booksController.deleteById);
app.put("/books/:id", booksController.updateById);



app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});