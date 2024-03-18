const express = require('express')

const Workout = require('../models/workoutModel')

const {getAllWorkouts,getWorkoutById,createWorkout,deleteWorkout,updateWorkout} = require('../controllers/workoutController')

const router = express.Router()

router.get('/' , getAllWorkouts)

router.get('/:id' , getWorkoutById)

router.post('/' , createWorkout)

router.delete('/:id' , deleteWorkout)

//UPDATE
router.patch('/:id' , updateWorkout)

module.exports = router