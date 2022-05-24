const booksRepository = require("../repositories/booksRepository");

class BooksService {
    static async getAll({title}) {
        // Manggil repo get all books
        const getBooks = await booksRepository.getAll({title});

        return getBooks;
    }

    static async getById({
        id
    }) {
        // Manggil repo get by id books
        const filterBooksById = await booksRepository.getById({
            id
        });

        return filterBooksById;
    }

    static async updateById({ id, title, author, price }) {
        // Manggil repo get by id books
        const updateBooksById = await booksRepository.updateById({ id, title, author, price });
    
        return updateBooksById;
    }

    static async deleteById({
        id
    }) {
        // Manggil repo get by id books 
        const deleteBooksById = await booksRepository.deleteById({
            id
        });

        return deleteBooksById;
    }

    static async create({
        title,
        author,
        price
    }) {
        const createdBook = await booksRepository.create({
            title,
            author,
            price,
        });

        return createdBook;
    }
}

module.exports = BooksService;