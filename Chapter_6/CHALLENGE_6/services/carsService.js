const carsRepository = require("../repositories/carsRepository");

class carsService {
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
        try {
            if (!plate) {
                return {
                    status: false,
                    code_status: 400,
                    message: "plate wajib diisi",
                    data: {
                        created_Cars: null,
                    }
                }
            };

            if (!manufacture) {
                return {
                    status: false,
                    code_status: 400,
                    message: "manufacture wajib diisi",
                    data: {
                        created_Cars: null,
                    }
                }
            };

            if (!model) {
                return {
                    status: false,
                    code_status: 400,
                    message: "model wajib diisi",
                    data: {
                        created_Cars: null,
                    }
                }
            };

            if (!image) {
                return {
                    status: false,
                    code_status: 400,
                    message: "image wajib diisi",
                    data: {
                        created_Cars: null,
                    }
                }
            };

            if (!rentPerDay) {
                return {
                    status: false,
                    code_status: 400,
                    message: "rentPerDay wajib diisi",
                    data: {
                        created_Cars: null,
                    }
                }
            };

            if (!capacity) {
                return {
                    status: false,
                    code_status: 400,
                    message: "capacity wajib diisi",
                    data: {
                        created_Cars: null,
                    }
                }
            };

            if (!description) {
                return {
                    status: false,
                    code_status: 400,
                    message: "description wajib diisi",
                    data: {
                        created_Cars: null,
                    }
                }
            };

            if (!transmission) {
                return {
                    status: false,
                    code_status: 400,
                    message: "transmission wajib diisi",
                    data: {
                        created_Cars: null,
                    }
                }
            };

            if (!type) {
                return {
                    status: false,
                    code_status: 400,
                    message: "type wajib diisi",
                    data: {
                        created_Cars: null,
                    }
                }
            };

            if (!year) {
                return {
                    status: false,
                    code_status: 400,
                    message: "year wajib diisi",
                    data: {
                        created_Cars: null,
                    }
                }
            };

            if (!options) {
                return {
                    status: false,
                    code_status: 400,
                    message: "options wajib diisi",
                    data: {
                        created_Cars: null,
                    }
                }
            };

            if (!specs) {
                return {
                    status: false,
                    code_status: 400,
                    message: "specs wajib diisi",
                    data: {
                        created_Cars: null,
                    }
                }
            };

            if (!availableAt) {
                return {
                    status: false,
                    code_status: 400,
                    message: "availableAt wajib diisi",
                    data: {
                        created_Cars: null,
                    }
                }
            };

            if (isWithDriver === null) {
                return {
                    status: false,
                    code_status: 400,
                    message: "driver wajib diisi",
                    data: {
                        created_Cars: null,
                    }
                }
            };

            const createdCars = await carsRepository.create({
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

            return {
                status: true,
                code_status: 201,
                message: "cars berhasil dibuat",
                data: {
                    createdCars: createdCars,
                },
            };
        } catch (err) {
            return {
                status: false,
                code_status: 500,
                message: err.message,
                data: {
                    created_Cars: null,
                },
            };
        }
    }

    static async getCars() {
        try {
            const getCars = await carsRepository.getCars();

            return {
                status: true,
                code_status: 200,
                message: "data cars berhasil ditampilkan",
                data: {
                    getCars: getCars,
                },
            };
        } catch (err) {
            return {
                status: false,
                code_status: 500,
                message: err.message,
                data: {
                    getCars: null,
                },
            };
        }
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
        try {
            if (!plate) {
                return {
                    status: false,
                    code_status: 400,
                    message: "plate wajib diisi",
                    data: {
                        updated_Cars: null,
                    }
                }
            };

            if (!manufacture) {
                return {
                    status: false,
                    code_status: 400,
                    message: "manufacture wajib diisi",
                    data: {
                        updated_Cars: null,
                    }
                }
            };

            if (!model) {
                return {
                    status: false,
                    code_status: 400,
                    message: "model wajib diisi",
                    data: {
                        updated_Cars: null,
                    }
                }
            };

            if (!image) {
                return {
                    status: false,
                    code_status: 400,
                    message: "image wajib diisi",
                    data: {
                        updated_Cars: null,
                    }
                }
            };

            if (!rentPerDay) {
                return {
                    status: false,
                    code_status: 400,
                    message: "rentPerDay wajib diisi",
                    data: {
                        updated_Cars: null,
                    }
                }
            };

            if (!capacity) {
                return {
                    status: false,
                    code_status: 400,
                    message: "capacity wajib diisi",
                    data: {
                        updated_Cars: null,
                    }
                }
            };

            if (!description) {
                return {
                    status: false,
                    code_status: 400,
                    message: "description wajib diisi",
                    data: {
                        updated_Cars: null,
                    }
                }
            };

            if (!transmission) {
                return {
                    status: false,
                    code_status: 400,
                    message: "transmission wajib diisi",
                    data: {
                        updated_Cars: null,
                    }
                }
            };

            if (!type) {
                return {
                    status: false,
                    code_status: 400,
                    message: "type wajib diisi",
                    data: {
                        updated_Cars: null,
                    }
                }
            };

            if (!year) {
                return {
                    status: false,
                    code_status: 400,
                    message: "year wajib diisi",
                    data: {
                        updated_Cars: null,
                    }
                }
            };

            if (!options) {
                return {
                    status: false,
                    code_status: 400,
                    message: "options wajib diisi",
                    data: {
                        updated_Cars: null,
                    }
                }
            };

            if (!specs) {
                return {
                    status: false,
                    code_status: 400,
                    message: "specs wajib diisi",
                    data: {
                        updated_Cars: null,
                    }
                }
            };

            if (!availableAt) {
                return {
                    status: false,
                    code_status: 400,
                    message: "availableAt wajib diisi",
                    data: {
                        updated_Cars: null,
                    }
                }
            };

            if (isWithDriver === null) {
                return {
                    status: false,
                    code_status: 400,
                    message: "driver wajib diisi",
                    data: {
                        updated_Cars: null,
                    }
                }
            };

            const updatedCars = await carsRepository.update({
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

            return {
                status: true,
                code_status: 201,
                message: "data cars berhasil dupdate",
                data: {
                    updatedCars: updatedCars,
                },
            };
        } catch (err) {
            return {
                status: false,
                code_status: 500,
                message: err.message,
                data: {
                    updated_Cars: null,
                },
            };
        }
    }

    static async deleted({
        id,
        deletedBy
    }) {
        try {
            const deletedCars = await carsRepository.deleted({
                id,
                deletedBy
            });

            return {
                status: true,
                code_status: 200,
                message: "data cars berhasil dihapus",
                data: {
                    deletedCars: deletedCars,
                },
            }
        } catch (err) {
            return {
                status: false,
                code_status: 500,
                message: err.message,
                data: {
                    deleted_Cars: null,
                },
            };
        }

    }

    static async filtered({
        isWithDriver,
        capacity,
        availableAt
    }) {
        try {
            const getAllCars = await carsRepository.getAllCars({
                isWithDriver,
                capacity,
                availableAt
            });

            return {
                status: true,
                code_status: 200,
                message: "data cars berhasil ditampilkan",
                data: {
                    filteredCars: getAllCars,
                },
            };
        } catch (err) {
            return {
                status: false,
                code_status: 500,
                message: err.message,
                data: {
                    filtered_Cars: null,
                },
            };
        }
    }
}

module.exports = carsService;