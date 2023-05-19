// import controllers review, products
const controller = require('../controllers/controller.js')


// router
const router = require('express').Router()


// use routers
router.post('/addBook' , controller.addBook)

router.get('/allBooks', controller.getAllBooks)





// Products router
router.get('/:id', controller.getOneBook)

router.put('/:id', controller.updateBook)

router.delete('/:id', controller.deleteBook)

router.get('/:id', controller.getByAuthor)

module.exports = router