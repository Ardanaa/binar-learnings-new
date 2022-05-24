const carsService = require("../services/carsService");

const getCars = async(req, res) => {
    const getCars = await carsService.getCars();

    // respon API Microservices
    // res.send(getCars);

    // respon data monolithic (EJS)
    return getCars;
};

const createCars = async(req, res) => {
    const {
        name,
        price,
        size,
        photo
    } = req.body;

    const createCars = await carsService.createCars({
        name,
        price,
        size,
        photo
    });

    res.redirect("/");
};

const updateCarsById = async(req, res) => {
    const {
        name,
        price,
        size,
        photo
    } = req.body;
    const {
        id
    } = req.params;
    const updateCarsById = await carsService.updateCarsById({
        id,
        name,
        price,
        size,
        photo
    });

    res.redirect("/");
}

const renderHome = async(req, res) => {
    const getCars = await carsService.getCars();
    res.render('index', {
        cars: getCars,
    })
}

const renderCarById = async(req, res) => {
    const { id } = req.params;
    const car = await carsService.getById({ id });
    res.render('updateCars', {
        cars: car,
    })
}

const deleteCarsById = async(req, res) => {
    const { id } = req.params;
    const deleteCarsById = await carsService.deleteCarsById({ id });

    res.redirect("/")
}

module.exports = {
    getCars,
    createCars,
    updateCarsById,
    renderCarById,
    renderHome,
    deleteCarsById
};