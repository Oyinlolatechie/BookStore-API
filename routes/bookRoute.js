const express = require('express')
const BookSchema = require('../model/book')
const bookValidator = require('../validators/bookValidator')


const bookRouter = express.Router()


//setup bookRouter to CRUD
bookRouter.get("/", (req, res)=>{           //READ all books in db
    
    BookSchema.find()
        .then((books)=>{
            res.status(200).send(books)
        }).catch((err)=>{
            console.log(err)
            res.status(500).send({
                message: "An error occurred while fecthing data",
                data: err
            })
        })
    
})

bookRouter.get("/:id", (req, res)=>{        //READ book by Id 
        const id = req.params.id

        BookSchema.findById(id)
            .then((book)=>{
             
                res.status(200).send({
                    message: "Book found!",
                    data: book
                })
            }).catch((err)=>{
                console.log(err)
                res.status(500).send({
                    message: "An error occurred while fecthing for book"
                })
            })
})



//Upload Book into db
bookRouter.post("/", bookValidator, (req, res)=>{        //CREATE/ upload new book to db
  const book = req.body
    BookSchema.create(book) 
        .then((book)=>{
            console.log(book)
                res.status(200).send({
                    message: "Book successfully uploaded!",
                    data: book
                })
        }).catch((err)=>{
            console.log(err)
                res.status(500).send({
                    message: "Uploading failed!",
                    data: err
                })
        })
})

bookRouter.put("/:id", (req, res)=>{        //UPDATE/ update book in db by id
    const id = req.params.id
    const book = req.body

    BookSchema.findByIdAndUpdate(id, book, {new: true})
        .then((book)=>{
            console.log(book)
                res.status(200).send(book)
        }).catch((err)=>{
            console.log(err)
                res.status(500).send("Unable to update book")
        })
    
})

bookRouter.delete("/:id", (req, res)=>{        //DELETE/ delete book from db by id

    const id = req.params.id
    BookSchema.findByIdAndDelete(id)
        .then(()=>{
           res.status(200).send('Book Deleted!')
        }) .catch((err)=>{
            console.log(err)
            res.status(500).send(err)
        })
})



//exports module 
module.exports = bookRouter