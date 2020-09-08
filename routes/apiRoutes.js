const router = require("express").Router();
const Workouts = require("../models/workouts.js");

router.get("/api/workouts", ({ body }, res) => {
    
    // console.log(res)
    Workouts.find({})
      .then(dbTransaction => {
        res.json(dbTransaction);
        console.log("hi get")
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/range", ({ body }, res) => {
    
    // console.log(body)
    Workouts.find({})
      .then(dbTransaction => {
        res.json(dbTransaction);
        console.log("hi get range")
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.put("/api/workouts/:id", ({ body }, res) => {
    
    console.log(body)
    Workouts.updateMany(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
        console.log("hi put")
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.post("/api/workouts", ({ body }, res) => {
    
    console.log(body)
    Workouts.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
        console.log("hi post")
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;