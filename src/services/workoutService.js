const { v5: uuid } = require("uuid");
const workout = require("../database/workout");

const getAllWorkouts = () => {
  const allWorkouts = workout.getAllWorkouts();
  return allWorkouts;
};
const getOneWorkouts = (req, res) => {
  return;
};
const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdWorkout = workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};
const updateOneWorkout = (req, res) => {
  return;
};
const deleteOneWorkout = (req, res) => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkouts,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
