const instagramService = require("../services/instagramService");

const getAll = async(req, res) => {
    // Manggil Service Get Instagram
    const getUsers = await instagramService.getAll();

    res.send(getUsers);
};

const getAllPosts = async(req, res) => {
    // Manggil Service Get Instagram
    const getPosts = await instagramService.getAllPosts();

    res.send(getPosts);
};

const register = async(req, res) => {
    const {
        name,
        email,
        password
    } = req.body;

    const registerUsers = await instagramService.register({
        name,
        email,
        password
    });

    res.status(201).send({
        data: registerUsers
    });
};

const login = async(req, res) => {
    const {
        email,
        password
    } = req.body;

    const { token } = await instagramService.login({
        email,
        password
    });

    res.status(200).send({ message: 'login succes', token });
};

const posts = async(req, res) => {
    const {
        user_id,
        title,
        description
    } = req.body;

    const posts = await instagramService.posts({
        user_id,
        title,
        description
    });

    res.status(201).send({
        message: `user_id ${user_id} post success`,
        posts
    });
};

const updateById = async(req, res) => {
    const { title, description } = req.body;
    const { id } = req.params;
    const updatePostsById = await instagramService.updateById({
        id,
        title,
        description
    });



    res.status(200).send(updatePostsById);
};

const deletePostsById = async(req, res) => {
    const {
        id
    } = req.params;
    const deletePostsById = await instagramService.deletePostsById({
        id
    });

    res.status(200).send(deletePostsById);
};

module.exports = {
    register,
    login,
    posts,
    getAll,
    getAllPosts,
    updateById,
    deletePostsById
};