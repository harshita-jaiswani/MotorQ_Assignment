const router = require('express').Router();
let student = require('../models/student.model');

router.route('/').get((req, res) => {
  student.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const studentname = req.body.name;
  const studentr= req.body.roll;
  const studentp=req.body.pas;
  const newstudent = new student({name:studentname,rollNo:studentr,password:studentp});
  newstudent.save()
    .then(() => res.json('student added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:rn').get((req, res) => {
  student.findOne({rollNo:req.params.rn})
    .then(s => res.json(s))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;