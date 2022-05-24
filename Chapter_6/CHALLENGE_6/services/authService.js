const usersRepository = require("../repositories/usersRepository");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
    JWT
} = require("../lib/const");
const SALT_ROUND = 10;

class authService {
    static async register({
        name,
        email,
        password,
        role,
    }) {
        try {
            if (!email) {
                return {
                    status: false,
                    code_status: 400,
                    message: "email wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!name) {
                return {
                    status: false,
                    code_status: 400,
                    message: "name wajib diisi",
                    data: {
                        registered_Users: null,
                    },
                };
            }

            if (!role) {
                return {
                    status: false,
                    code_status: 400,
                    message: "role wajib diisi",
                    data: {
                        registered_Users: null,
                    },
                };
            }

            if (!password) {
                return {
                    status: false,
                    code_status: 400,
                    message: "password wajib diisi",
                    data: {
                        registered_Users: null,
                    },
                };
            } else if (password.length < 8) {
                return {
                    status: false,
                    code_status: 400,
                    message: "password minimal 8 karakter",
                    data: {
                        registered_Users: null,
                    },
                };
            }

            const getByEmail = await usersRepository.getByEmail({
                email
            });

            if (getByEmail) {
                return {
                    status: false,
                    code_status: 400,
                    message: "email sudah terdaftar",
                    data: {
                        registered_Users: null,
                    },
                };
            } else {
                const hashingPassword = await bycrypt.hash(password, SALT_ROUND);
                const regsiteredUsers = await usersRepository.register({
                    name,
                    email,
                    password: hashingPassword,
                    role,
                });

                return {
                    status: true,
                    code_status: 201,
                    message: "Users berhasil registrasi",
                    data: {
                        registered_Users: regsiteredUsers,
                    },
                };
            }
        } catch (err) {
            return {
                status: false,
                code_status: 500,
                message: err.message,
                data: {
                    registered_Users: null,
                },
            };
        }
    }

    static async login({
        email,
        password
    }) {
        try {
            if (!email) {
                return {
                    status: false,
                    code_status: 400,
                    message: "email wajib diisi",
                    data: {
                        registered_user: null,
                    }
                }
            };

            if (!password) {
                return {
                    status: false,
                    code_status: 400,
                    message: "password wajib diisi",
                    data: {
                        registered_user: null,
                    },
                };
            } else if (password.length < 8) {
                return {
                    status: false,
                    code_status: 400,
                    message: "password minimal 8 karakter",
                    data: {
                        registered_user: null,
                    },
                };
            }

            const getUsers = await usersRepository.getByEmail({
                email
            });

            if (!getUsers) {
                return {
                    status: false,
                    code_status: 400,
                    message: "email belum terdaftar!",
                    data: {
                        registered_Users: null,
                    },
                };
            } else {
                const passwordMatching = await bycrypt.compare(password, getUsers.password);

                if (passwordMatching) {
                    const token = jwt.sign({
                        id: getUsers.id,
                        email: getUsers.email,
                    }, JWT.SECRET, {
                        expiresIn: JWT.EXPIRED,
                    });

                    return {
                        status: true,
                        code_status: 200,
                        message: "anda berhasil login",
                        data: {
                            token,
                        },
                    };
                } else {
                    return {
                        status: false,
                        code_status: 400,
                        message: "password anda salah, mohon isi ulang",
                        data: {
                            registered_user: null,
                        },
                    };
                }
            }
        } catch (err) {
            return {
                status: false,
                code_status: 500,
                message: err.message,
                data: {
                    registered_Users: null,
                },
            };
        }
    }
}

module.exports = authService;