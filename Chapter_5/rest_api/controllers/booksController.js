const booksService = require("../services/booksService");

const getAll = async (req, res) => {
    const { title} = req.query;
    console.log(title);
    // Manggil Service Get Books
    const getBooks = await booksService.getAll({title});
    res.send(getBooks);
};



const getById = async (req, res) => {
    const {
        id
    } = req.params;
    const getBooksById = await booksService.getById({
        id
    });

    res.status(200).send(getBooksById);
}

const updateById = async (req, res) => {
    const { title, author, price } = req.body;
    const { id } = req.params;
    const updateBooksById = await booksService.updateById({
        id, title, author, price
    });
    
    

    res.status(200).send(updateBooksById);
};



const deleteById = async (req, res) => {
    const {
        id
    } = req.params;
    const deleteBooksById = await booksService.deleteById({
        id
    });

    res.status(200).send(deleteBooksById);
};

const create = async (req, res) => {
    const {
        title,
        author,
        price
    } = req.body;

    const createdBook = await booksService.create({
        title,
        author,
        price
    });

    res.status(201).send(createdBook);
};

module.exports = {
    getAll,
    create,
    getById,
    deleteById,
    updateById
};