const {
    cars
} = require("../models");
const {
    Op
} = require("sequelize");

class carsRepository {
    static async create({
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
    }) {
        const created_Cars = await cars.create({
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
        })

        return created_Cars;
    }

    static async getCars() {
        const getCars = await cars.findAll();

        return getCars;
    }

    static async getAllCars({
        availableAt,
        isWithDriver
    }) {
        if (isWithDriver && availableAt) {
            const filteredCars = await cars.findAll({
                where: {
                    isWithDriver,
                    availableAt
                }
            });

            return filteredCars;
        }

        return cars;
    }


    static async update({
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
    }) {
        const updated_cars = await cars.update({
            plate,
            updatedBy,
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
        }, {
            where: {
                id
            }
        });

        return updated_cars;
    }

    static async deleted({
        id
    }) {
        const deletedCars = await cars.destroy({
            where: {
                id
            }
        });

        return deletedCars;
    }
}

module.exports = carsRepository;