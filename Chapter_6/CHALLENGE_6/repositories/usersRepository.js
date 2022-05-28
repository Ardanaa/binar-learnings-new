const {
    users,
    cars
} = require("../models");

class usersRepository {
    static async create({
        name,
        email,
        password,
        role
    }) {
        const createdUser = users.create({
            name: name,
            email: email,
            password: password,
            role: role,
        });
        return createdUser;
    }

    static async getByEmail({
        email
    }) {
        const getUser = await users.findOne({
            where: {
                email: email
            }
        });
        return getUser;
    }
}

module.exports = usersRepository;