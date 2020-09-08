const router = require("express").Router();
const Workouts = require("../models/workouts.js");

router.post("/api/workouts", ({ body }, res) => {
    console.log(body)
    Workouts.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;