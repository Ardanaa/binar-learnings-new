const generator = require("../utils/generator");

let booksData = [{
        id: 987637,
        title: "Buku 1",
        author: "Penulis 1",
        price: 1000,
    },
    {
        id: 357238,
        title: "Buku 2",
        author: "Penulis 3",
        price: 9000
    },
    {
        id: 157382,
        title: "Buku 3",
        author: "Penulis 3",
        price: 4000,
    },
];

class BooksRepository {
    static async getAll({title}) {
        if(title){
            const filterBooksByQuery = booksData.filter((a) => {
                if (a.title == title) {
                    return title;
                }
            });
            
            booksData = filterBooksByQuery;
        }

        return booksData;
    }

    static async getById({
        id
    }) {
        const filterBooksById = booksData.filter((b) => {
            if (b.id == id) {
                return id;
            }
        });
        return filterBooksById;
    }

    static async deleteById({id}){
        let deletedBook = {};
        const filteredBooks = booksData.filter((b) => {
            if(b.id == id){

                deletedBook = {
                    id: b.id,
                    title: b.title,
                    author: b.author,
                    price: b.price
                };
            }else{
                return b;
            }
        });

        booksData = filteredBooks;
        return deletedBook;
    }

    static async updateById({ id, title, author, price }) {
        let updatedBooks = {};
        const updateBooks = booksData.filter((c) => {
            if (c.id == id) {
                c.title = title;
                c.author = author;
                c.price = price;

                updatedBooks = {
                    id: c.id,
                    title: c.title,
                    author: c.author,
                    price: c.price
                }
            }
            return c;
        });
        booksData = updateBooks
        return updatedBooks
    }

    static async create({
        title,
        author,
        price
    }) {
        const generatedID = await generator.generateID();

        booksData.push({
            id: generatedID,
            title,
            author,
            price
        });

        return {
            id: generatedID,
            title,
            author,
            price
        };
    }
}

module.exports = BooksRepository;