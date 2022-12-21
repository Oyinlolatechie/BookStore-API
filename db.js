const mongoose = require('mongoose') //MongoDB ODM
require('dotenv').config() // required to access .env file

const MONGO_DB_CONNECTION_URL = process.env.MONGO_DB_CONNECTION_URL


// start mongoose
function connectToMongoDB() {
    mongoose.connect(MONGO_DB_CONNECTION_URL)

    mongoose.connection.on('connected', ()=>{
        console.log('MongoDB successfully connected')
    })

    mongoose.connection.on('error', (err)=>{
        console.log(err)
    })
}

module.exports = {connectToMongoDB}