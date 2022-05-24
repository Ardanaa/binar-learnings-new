const instagramRepository = require("../repositories/instagramRepository");

class InstagramService {
    static async getAll() {
        // Manggil repo get all books
        const getUsers = await instagramRepository.getAll();

        return getUsers;
    }

    static async getAllPosts() {
        // Manggil repo get all books
        const getPosts = await instagramRepository.getAllPosts();

        return getPosts;
    }

    static async register({
        name,
        email,
        password
    }) {
        const registerUsers = await instagramRepository.register({
            name,
            email,
            password
        });

        return registerUsers;
    }

    static async login({
        email,
        password
    }) {
        const { token } = await instagramRepository.login({
            email,
            password,
        });

        return { token };
    }

    static async posts({
        user_id,
        title,
        description
    }) {
        const posts = await instagramRepository.posts({
            user_id,
            title,
            description
        });

        return posts;
    }

    static async updateById({ id, title, description }) {
        // Manggil repo get by id books
        const updatePostsByID = await instagramRepository.updateById({ id, title, description });

        return updatePostsByID;
    }

    static async deletePostsById({
        id
    }) {
        // Manggil repo get by id books 
        const deletePostsById = await instagramRepository.deletePostsById({
            id
        });

        return deletePostsById;
    }

}

module.exports = InstagramService;