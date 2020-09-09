const router = require("express").Router();
const Workouts = require("../models/workouts.js");

router.get("/api/workouts", ({ body }, res) => {
    
    // I think this works
    Workouts.find({})
      .then(dbTransaction => {
        res.json(dbTransaction);
        // console.log(dbTransaction);
        console.log("hi get")
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  //I think the put route works
  router.put("/api/workouts/:id", ({ body, params }, res) => {
      
      console.log(body, params)
      const id = params.id;
      Workouts.findByIdAndUpdate({_id: id}, {$set: body})
        .then(dbTransaction => {
          res.json(dbTransaction);
          console.log(dbTransaction)
          console.log("hi put")
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
  router.get("/api/workouts/range", ({ body }, res) => {
    
    // console.log(body)
    Workouts.findOne({})
      .then(dbTransaction => {
        dbTransaction;
        console.log(dbTransaction)
        console.log("hi get range")
      })
      .catch(err => {
        res.status(400).json(err);
      });
    });
// I think this works. post an id like { _id: 5f57ee1d3c826b741d1460f3, __v: 0 } once you click new workout. 
router.post("/api/workouts", ({ body }, res) => {
    
    
    Workouts.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
        console.log(dbTransaction);
        console.log("hi post");
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;