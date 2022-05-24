const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8087;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// import controllers
const authController = require("./controllers/authController");
const carsController = require("./controllers/carsController");

// improt middlewares
const middlewares = require("./middlewares/auth");

// define routes auth
// register member
app.post("/auth/register", authController.register);

// register admin
app.post("/auth/register/admin", middlewares.authenticate, middlewares.isSuperAdmin, authController.register);

app.post("/auth/login", authController.login);
app.get("/auth/me", middlewares.authenticate, authController.currentUser);

// define routes CRUD
app.get("/cars", middlewares.authenticate, middlewares.roles, carsController.getCars);
app.post("/cars/create", middlewares.authenticate, middlewares.roles, carsController.create);
app.put("/cars/update/:id", middlewares.authenticate, middlewares.roles, carsController.update);
app.delete("/cars/delete/:id", middlewares.authenticate, middlewares.roles, carsController.deleted);
app.get("/cars/filtered?", carsController.filtered)

// API Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});