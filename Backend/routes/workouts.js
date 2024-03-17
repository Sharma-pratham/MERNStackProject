const express = require('express')

const Workout = require('../models/workoutModel')

const router = express.Router()

router.get('/' , (req,res)=>{
    res.json({message: 'Get all workouts'})
})

router.get('/:id' , (req,res)=>{
    res.json({message: 'Get single workout'})
})

router.post('/' , async(req,res)=>{
    const {title,reps,load} = req.body

    try{
        const workout = await Workout.create({title,reps,load})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
})

router.delete('/:id' , (req,res)=>{
    res.json({message: 'DELETE a workout'})
})

//UPDATE
router.patch('/:id' , (req,res)=>{
    res.json({message: 'UPDATE a workout'})
})

module.exports = router