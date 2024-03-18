const Workout = require('../models/workoutModel')

const mongoose = require('mongoose')

//get all workouts
const getAllWorkouts = async(req,res) =>{
    try{
        const workouts = await Workout.find({}).sort({createdAt: -1})
        res.status(200).json(workouts)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//get a single workout based on Id
const getWorkoutById = async(req,res) =>{
    try{
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'Invalid Id'})
        }
        const workout = await Workout.findById(id)
        if(!workout){
            return res.status(404).json({message: 'No Such Workout'})
        }
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// create a new workout
const createWorkout = async(req,res) => {
    const {title,reps,load}=req.body

    try{
        const workout = await Workout.create({title,reps,load})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }        
}

// Delete a workout using id
const deleteWorkout = async(req,res) => {

    try{
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'Invalid Id'})
        }

        const deletedWorkout = await Workout.findOneAndDelete(id)
        if(!deleteWorkout){
            return res.status(404).json({error: 'No such workout'})
        }
        
        res.status(200).json(deletedWorkout)
    }
    catch(error){
        res.status(404).json({error: error.message})
    }
}

//update a workout based on id
const updateWorkout = async(req, res) => {
    try{
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'Invalid Id'})
        }
        const updatedWorkout = await Workout.findOneAndUpdate({_id: id},{...req.body})

        if(!updatedWorkout){
            return res.status(404).json({error: 'No such workout'})
        }
        res.status(200).json(updatedWorkout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {createWorkout, getAllWorkouts, getWorkoutById,deleteWorkout,updateWorkout}