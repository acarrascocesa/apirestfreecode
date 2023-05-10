const express = require("express");
const cors = require("cors");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.get("/", (req, res) => {
//   res.send("Hola Mundo");
// });

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API Rest runnig on port: ${PORT}`);
});
