require('dotenv').config()

const express = require('express')


// this creates an express app for us
const app = express()

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the app'})
})


//listen for requests by allocating a port number
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})