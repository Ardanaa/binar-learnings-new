const generator = require("../utils/generator");

let usersData = [{
    id: 123,
    name: "ardana",
    email: "ardana@gmail.com",
    password: "ardana321",
    token: "",
}];

let posts = [{
    id: 1,
    user_id: 123,
    title: "first post",
    description: "ini post pertama",
}]

class InstagramRepository {
    static async getAll() {
        return usersData;
    }

    static async getAllPosts() {
        return posts;
    }

    static async register({
        name,
        email,
        password
    }) {
        const generatedID = await generator.generateID();

        if (usersData.find((user) => user.email === email)) {

            return { message: `${email} allready registered` };
        }

        usersData.push({
            id: generatedID,
            name,
            email,
            password
        });

        return {
            message: "sucess registered",
            registered_user: {
                id: generatedID,
                name,
                email,
                password
            }
        };
    }

    static async login({
        email,
        password
    }) {
        let token = ""
        const updatedToken = usersData.filter((a) => {
            if (a.email == email) {
                if (a.password == password) {
                    a.token = `${a.id}-${a.email}`
                    token = a.token
                }
            } else {
                return { Message: "email not registerred" }
            }
            return a;
        });
        usersData = updatedToken
        return { token };
    }

    static async posts({
        user_id,
        title,
        description
    }) {
        const generatedID = await generator.generateID();

        posts.push({
            id: generatedID,
            user_id,
            title,
            description
        });

        return {
            id: generatedID,
            user_id,
            title,
            description
        };
    }

    static async updateById({
        id,
        title,
        description,
    }) {
        let updatedPosts = {};
        const updatePosts = Posts.filter((c) => {
            if (c.id == id) {
                c.title = title;
                c.description = description;

                updatedPosts = {
                    id: c.id,
                    title: c.title,
                    description: c.description
                }
            }
            return c;
        });
        Posts = updatePosts
        return updatedPosts;
    }

    static async deletePostsById({
        id
    }) {
        let deletedPosts = {};
        const filteredPosts = Posts.filter((b) => {
            if (b.id == id) {

                deletedPosts = {
                    id: b.id,
                    user_id: b.user_id,
                    title: b.title,
                    description: b.description
                };
            } else {
                return b;
            }
        });

        Posts = filteredPosts;
        return deletedPosts;
    }
}

module.exports = InstagramRepository;