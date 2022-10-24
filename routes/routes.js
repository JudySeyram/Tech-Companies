const express = require("express");

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
router.patch('/update/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Model.findByIdAndUpdate(
          id, updatedData, options
      )

      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})
;

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const data = await Model.findByIdAndDelete(id)
      res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

module.exports = router;
