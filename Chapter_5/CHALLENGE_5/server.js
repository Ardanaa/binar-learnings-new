const express = require("express");
const app = express();
const PORT = 2000;
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// import controller
const carsController = require("./controllers/carsController");
const carsService = require("./services/carsService");

// Set View Engine
app.set("view engine", "ejs");
app.use(express.static("public"));

// enpoint CRUD
app.post("/cars", carsController.createCars);
app.post("/cars/:id", carsController.updateCarsById);
app.post("/deleteCars/:id", carsController.deleteCarsById);

// endpoint EJS
app.get("/", carsController.renderHome)
app.get("/cars", (req, res) => {
    res.render('addCars')
})
app.get("/update/:id", carsController.renderCarById);

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});