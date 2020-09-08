const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name of workout"
  },
  type: {
    type: String,
    required: "Enter type of workout"
  },
  weight: {
    type: Number,
    required: "Enter weight"
  },
  sets: {
    type: Number,
    required: "Enter number of sets"
  },
  reps: {
    type: Number,
    required: "Enter number of reps"
  },
  duration: {
    type: Number,
    required: "Enter duration of excercise"
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;