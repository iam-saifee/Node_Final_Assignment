const db = require('../models')




// create main Model
const Book = db.books

// main work

// 1. create product

const addBook = async (req, res) => {

    let info = {
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
    }

    const book = await Book.create(info)
    console.log(book)

    res.status(200).send(book)

}



// 2. get all products

const getAllBooks = async (req, res) => {

    let books = await Book.findAll({})
    res.status(200).send(books)

}

// 3. get product by id

const getOneBook = async (req, res) => {

    let id = req.params.id
    let book = await Book.findOne({ where: { id: id } })
    res.status(200).send(book)

}

// 4. update Product

const updateBook = async (req, res) => {

    let id = req.params.id

    const book = await Book.update(req.body, { where: { id: id } })

    res.status(200).send(book)


}

// 5. delete product by id

const deleteBook = async (req, res) => {

    let id = req.params.id

    await Book.destroy({ where: { id: id } })

    res.status(200).send('Book is deleted !')

}



// 6. get by author

const getByAuthor = async (req, res) => {

    let author = req.params.author // query approach
    let book = await Book.findOne({ where: { author: author } })
    res.status(200).send(book)

}













module.exports = {
    addBook,
    getAllBooks,
    getOneBook,
    updateBook,
    deleteBook,
    getByAuthor

}