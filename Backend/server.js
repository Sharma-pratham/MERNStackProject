require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')

// this creates an express app for us
const app = express()

//Middleware

//For POST and UPDATE requests
app.use(express.json())


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)


//connect to my Mongo DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for requests by allocating a port number
        app.listen(process.env.PORT, () => {
        console.log('Connected to DB & Lyistening on port', process.env.PORT)
})
    })
    .catch((error) => {
        console.log(error)
    })

