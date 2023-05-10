const workoutServices = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutServices.getAllWorkouts();

  res.send({ status: "OK", data: allWorkouts });
};

const getOneWorkouts = (req, res) => {
  const oneWorkout = workoutServices.getOneWorkouts(req.params.workoutId);

  res.send(`Get workout ${req.params.workout}`);
};

const createNewWorkout = (req, res) => {
  const { body } = req;

  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  const createdWorkout = workoutServices.createNewWorkout(newWorkout);

  res.status(201).send({ status: "OK", data: createdWorkout });
};

const updateOneWorkout = (req, res) => {
  const updateWorkout = workoutServices.updateOneWorkout(req.params.workoutId);

  res.send(`Update workout ${req.params.workout}`);
};

const deleteOneWorkout = (req, res) => {
  workoutServices.deleteOneWorkout(req.params.workoutId);

  res.send(`Delete workout ${req.params.workout}`);
};

module.exports = {
  getAllWorkouts,
  getOneWorkouts,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
