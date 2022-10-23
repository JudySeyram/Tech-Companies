const express = require("express");
const { default: mongoose } = require("mongoose");
const Model = require("../models/model");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("Welcome!");
});

//Post Method
router.post("/post", async (req, res) => {
  const data = new Model({
    companyName: req.body.companyName,
    phone: req.body.phone,
    headOffice: req.body.headOffice,
    email: req.body.email,
    numberOfEmployees: req.body.numberOfEmployees,
  });

  try {
    const dataToSave = await data.save();
    res.status(201).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(400).json("company with id not found");
    });
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json("Successfully deleted company!");
    })
    .catch(() => {
      res.status(400).json("Error deleting company");
    });
});

module.exports = router;
