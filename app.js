//require express, dotenv
const express = require('express')
require('dotenv').config()
const bookRouter = require("./routes/bookRoute")

const PORT = process.env.PORT
const app = express()
const db = require('./db')
const { urlencoded } = require('express')


//set up middlewares
app.use(express.json())
app.use(urlencoded({extended :true }))

app.use("/Books", bookRouter)
db.connectToMongoDB()

//set up HOME route
app.get("/", (req, res)=>{
    res.send("Welcome Home!")
})

app.listen(PORT, ()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})
