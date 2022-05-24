const {
    users
} = require("../models");

class usersRepository {
    static async getByEmail({
        email
    }) {
        const getUsersByEmail = await users.findOne({
            where: {
                email
            }
        })
        return getUsersByEmail;
    }

    static async register({
        name,
        email,
        password,
        role,
    }) {
        const registered_Users = users.create({
            name,
            email,
            password,
            role,
        })

        return registered_Users;
    }
}

module.exports = usersRepository;