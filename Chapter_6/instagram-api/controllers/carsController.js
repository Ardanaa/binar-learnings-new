const carsService = require("../services/carsService");

const create = async(req, res) => {
    const {
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        transmission,
        type,
        year,
        options,
        specs,
        availableAt,
        isWithDriver
    } = req.body;

    const createdBy = req.user.name
    const updatedBy = req.user.name

    const {
        status,
        code_status,
        message,
        data
    } = await carsService.create({
        createdBy,
        updatedBy,
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        transmission,
        type,
        year,
        options,
        specs,
        availableAt,
        isWithDriver
    });

    res.status(code_status).send({
        status: status,
        message: message,
        data: data,
    });
};

const getCars = async(req, res) => {
    const {
        status,
        code_status,
        message,
        data
    } = await carsService.getCars();

    res.status(code_status).send({
        status: status,
        message: message,
        data: data,
    });
}


const update = async(req, res) => {
    const {
        id
    } = req.params;

    const {
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        transmission,
        type,
        year,
        options,
        specs,
        availableAt,
        isWithDriver
    } = req.body;

    const updatedBy = req.user.name

    const {
        status,
        code_status,
        message,
        data
    } = await carsService.update({
        id,
        updatedBy,
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        transmission,
        type,
        year,
        options,
        specs,
        availableAt,
        isWithDriver
    });

    res.status(code_status).send({
        status: status,
        message: message,
        data: data,
    });
};

const deleted = async(req, res) => {
    const {
        id
    } = req.params;

    const deletedBy = req.user.name

    const {
        status,
        code_status,
        message,
        data
    } = await carsService.deleted({
        id,
        deletedBy
    });

    res.status(code_status).send({
        status: status,
        message: message,
        data: data,
    });
};

const filtered = async(req, res) => {
    const { availableAt, isWithDriver } = req.query;

    const {
        status,
        code_status,
        message,
        data
    } = await carsService.filtered({ availableAt, isWithDriver });

    res.status(code_status).send({
        status: status,
        message: message,
        data: data,
    });
}

module.exports = {
    create,
    getCars,
    update,
    deleted,
    filtered
}