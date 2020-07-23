const Workout = require("../models/workout");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            console.log(err)
          });
    });

    app.post("/api/workouts", ({ body }, res) => {
        Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
        .then(range => {
            res.json(range);
          })
          .catch(err => {
            console.log(err)
          });
    });
}