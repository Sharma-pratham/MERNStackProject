

const WorkoutDetails = ({workout}) => {
    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg) :</strong>{workout.load}</p>
            <p><strong>Reps :</strong>{workout.reps}</p>
            <p><strong>Workout Created on : </strong><i>{workout.createdAt}</i></p>
        </div>
    )

}

export default WorkoutDetails